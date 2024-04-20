import { ReactCusdis } from "react-cusdis";
import { useRouter } from "next/router";
import { useConfig } from "@/contexts/config";

export default function Cusdis({ config, post }) {
  const router = useRouter();
  const { link, lang, appearance } = useConfig();

  return (
    <ReactCusdis
      attrs={{
        pageId: post.id,
        pageTitle: post.title,
        pageUrl: link + router.asPath,
        theme: appearance,
        ...config,
      }}
      lang={resolveLang(lang)}
    />
  );
}

function resolveLang(lang) {
  switch (lang.toLowerCase()) {
    case "zh":
      return "zh-cn";
    case "ja":
      return "ja";
    case "en":
      return "en";
    default:
      return "en";
  }
}
