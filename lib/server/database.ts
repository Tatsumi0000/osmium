import NotionDatabase from "./notion-api/notion-database";
import { readConfigRaw } from "./config";
import Page from "./page";

export default class Database {
  data: NotionDatabase;

  all: Map<string, Page> = new Map();
  posts: Map<string, Page> = new Map();
  pages: Map<string, Page> = new Map();
  index?: Page;

  tagStats: Record<string, number> = {};

  constructor(id: string = readConfigRaw().databaseId) {
    this.data = new NotionDatabase(id);
  }

  async sync() {
    // console.log(new Date().toISOString().replace('T', ' ').substr(0, 19) + ' sync start')
    await this.data.sync();
    // console.log(new Date().toISOString().replace('T', ' ').substr(0, 19) + ' sync end')

    for (const [id, record] of this.data.records) {
      const page = new Page(record);
      if (!page.isPublished) continue;

      switch (page.type) {
        case "Post":
        case "Doc":
        case "Page":
          if (page.slug === "index") {
            if (this.index) {
              // Ignore other `/index` pages to avoid confusion
              continue;
            } else {
              this.index = page;
            }
          }
          this.all.set(id, page);
          switch (page.type) {
            case "Post":
            case "Doc":
              this.posts.set(id, page);
              break;
            case "Page":
              this.pages.set(id, page);
              break;
          }
          break;
        default:
          continue;
      }

      // Collect tags
      for (const tag of page.tags) {
        this.tagStats[tag] ??= 0;
        this.tagStats[tag]++;
      }
    }
  }

  // RSSで特定の件数だけ取得したいので、syncとは別に用意
  async rssSync(count: number = 5) {
    let count_copy = count;
    await this.data.sync();

    for (const [id, record] of this.data.records) {
      const page = new Page(record);
      if (!page.isPublished) continue;

      switch (page.type) {
        case "Post":
        case "Doc":
        case "Page":
          if (page.slug === "index") {
            if (this.index) {
              // Ignore other `/index` pages to avoid confusion
              continue;
            } else {
              this.index = page;
            }
          }
          this.all.set(id, page);
          switch (page.type) {
            case "Post":
            case "Doc":
              this.posts.set(id, page);
              count_copy--;
              break;
            case "Page":
              this.pages.set(id, page);
              break;
          }
          break;
        default:
          continue;
      }
      if (count_copy <= 0) {
        return
      }
    }
  }
}
