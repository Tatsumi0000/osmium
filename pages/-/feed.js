import { config } from "@/lib/server/config";
import Database from "@/lib/server/database";
import { generateRss } from "@/lib/rss";

const NOTHING = { props: {} };

export async function getServerSideProps({ res }) {
  const { rss } = config;

  if (!rss) {
    res.statusCode = 204;
    res.end();
    return NOTHING;
  }

  const db = new Database();
  await db.rssSync();

  console.log("start generating rss..");
  console.log(new Date().toISOString().replace("T", " ").substr(0, 19));

  const posts = [...db.posts.values()].slice(0, 3).map((post) => post.json());
  const xmlFeed = await generateRss(posts);
  res.setHeader("Content-Type", "text/xml");
  res.write(xmlFeed);
  console.log(new Date().toISOString().replace("T", " ").substr(0, 19));
  console.log("finish generating rss..")

  res.end();
  return NOTHING;
}

export default function TheFeed() {}
