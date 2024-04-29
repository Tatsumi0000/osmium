<div align="center">
  <h1>
    <img src="./.github/logo.svg" alt="Osmium logo" width="100" height="100">
    <div>Osmium</div>
  </h1>
  <p>A static blog site builder. Powered by <a href="https://notion.so/">Notion</a> and <a href="https://nextjs.org/">Next.js</a></p>
  <p><em>Osmium is a heavily-modded version of the awesome <a href="https://github.com/craigary/nobelium">Nobelium</a></em></p>
  <p>
    <a href="https://vercel.com/?utm_source=Osmium&utm_campaign=oss" title="Powered by Vercel" aria-label="Powered by Vercel">
      <img src="https://images.ctfassets.net/e5382hct74si/78Olo8EZRdUlcDUFQvnzG7/fa4cdb6dc04c40fceac194134788a0e2/1618983297-powered-by-vercel.svg" alt="Powered by Vercel">
    </a>
  </p>
</div>

---

# Diff
- [osmium-blog/osmium](https://github.com/osmium-blog/osmium) to customization.
  - Limit the number of RSS fetches to 5.
  - Japanese font support. Ddelete Chinese font.
  - Migrate pnpm to npm.
  - Added no-index and exclude from sitemap.
    - Added path to next-sitemap.config.js -> exclude.

<details>
    <summary>日本語</summary>
- RSSの取得件数を5件に絞る
  - Vercelのタイムアウト十秒に引っかかるのでRSSの件数を絞ってます
- 日本語フォントへの対応
  - 代わりに中華フォントの設定を削除
- pnpmをnpmで動かすようにした
  - 依存ライブラリのバージョンの影響でどうしてもpnpmで動かしきれなかったです
- no-indexとsitemapから除外する設定を追加
  - next-sitemap.config.jsのexcludeにパスを追加します。これによってsitemapの除外設定とそのURLのページにno-indexを追加します。
</details>

# Highlights

### 🚀 It’s fast

- Fully leverage SSR/SSG to pre-render pages as much as possible
- Use Notion’s private API to ensure data-fetching efficiency

### 😌 It’s easy

- Use only Notion and you got a fully functional blog
- Manage your blog and posts in familiar Notion way

### 🤖 It’s smart

- Auto-build-and-deploy your blog without any manual commands (if you are using Vercel or Netlify)
- Once deployed, just write your blog and posts will automatically update thanks to ISR

# Quick Start

- In GitHub
  - [Fork this project](https://github.com/osmium-blog/osmium/fork)
- In Notion
  - Duplicate this [Notion Database](https://silentdepth.notion.site/ffa2e3ae717d4cb982281814bb6c0801), and share to web **(optional but recommended)**
  - In the newly created database, find **Config** and open it
  - Open the [Osmium configurator](https://osmium-blog.vercel.app/-/configurator), fill the form with your preferences and click the top-right button to copy your config
  - Back to the page **Config** in Notion, remove the content of the code block and paste your config into it
  - _(Optional)_ Change the icon of the **Config** page. You can choose whichever type you like, no matter emoji or icon or image. That will be the logo and favicon of you blog
- In [Vercel](https://vercel.com/?utm_source=Osmium&utm_campaign=oss) **(recommended)** or other platform you choose to deploy to
  - If you use Vercel, create a new project and link to your Osmium fork, then set the following environment variables:
    - `NOTION_DATABASE_ID`: The ID of the Notion Database you just created, usually a 32-digit or 36-digit hex code. You can find it from the page link in the share menu of the page. If you find two IDs, use the first one
    - `NOTION_ACCESS_TOKEN` _(optional, not recommended)_: If you decide not to share your database, you can make Osmium grabbing data privately with the token. You can find it after the name `token_v2` in your browser cookies
      - **Notes:** Notion token is only valid for 180 days. Don’t forget to update it in Vercel project settings before expiry. We’ll probably switch to the Notion Public API to resolve this issue in the future. Also, images may not be properly displayed in this case
  - If you are not a Vercel user, just build and deploy your fork as a normal Next.js app with the environment variables described above
- You are all set! Would you star this project? 🌟

## Migrate from Nobelium

See https://osmium-blog.vercel.app/migrate-from-nobelium

# FAQs

See https://osmium-blog.vercel.app/faqs

# License

[MIT](https://opensource.org/licenses/MIT)
