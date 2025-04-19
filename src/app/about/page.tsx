import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function AboutPage() {
  return (
    <Markdown remarkPlugins={[remarkGfm]}>
      Learn India app strives to help its users explore and expand their
      knowledge about those who have helped shape this great country. It is also
      our tribute to those who have mattered
    </Markdown>
  );
}
