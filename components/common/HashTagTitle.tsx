export default function HashTagTitle({
  content,
}: Readonly<{ content: string }>) {
  return (
    <span className="font-nunito font-bold text-xs uppercase tracking-wider text-adsbin-grey-1000">
      #{content}
    </span>
  );
}
