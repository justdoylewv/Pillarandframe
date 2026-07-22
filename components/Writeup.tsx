import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Markdown in, editorial type out. Carried over from the City Spotlight
// writeup renderer and restyled to Pillar & Frame tokens.
export default function Writeup({ content }: { content: string }) {
  if (!content) return null;
  return (
    <div className="font-serif text-xl leading-relaxed text-ash-700 [&>*+*]:mt-8 md:text-2xl [&>h2]:font-serif [&>h2]:text-3xl [&>h2]:tracking-tight [&>h2]:text-black [&>h2]:md:text-4xl [&>h2]:mt-16 [&>h2]:mb-6 [&>h3]:font-mono [&>h3]:text-[11px] [&>h3]:uppercase [&>h3]:tracking-[0.3em] [&>h3]:text-ash-500 [&>h3]:mt-12 [&>h3]:mb-4 [&>ul]:list-none [&>ul]:space-y-4 [&>ul>li]:border-l [&>ul>li]:border-purple-600 [&>ul>li]:pl-6 [&>ul>li]:text-lg [&>ul>li]:text-ash-700 [&>hr]:my-16 [&>hr]:border-ash-100 [&>a]:text-purple-600 [&>a]:underline [&>a]:underline-offset-4 [&>strong]:text-black">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
