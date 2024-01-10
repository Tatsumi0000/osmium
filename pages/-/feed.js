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
  await db.rssSync(3);

  const posts = [...db.posts.values()].map((post) => post.json());
  const xmlFeed = await generateRss(posts);
  res.setHeader("Content-Type", "text/xml");
  res.write(xmlFeed);

  res.end();
  return NOTHING;
}

export default function TheFeed() {}
