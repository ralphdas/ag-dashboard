export default function Paragraph({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <p
      className={`font-nunito text-body leading-relaxed mb-2 text-adsbin-grey-1000 ${className ? className : ""}`}
    >
      {children}
    </p>
  );
}
