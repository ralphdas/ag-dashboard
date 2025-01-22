export default function SplitGridContainer({
  leftContent,
  rightContent,
}: {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}) {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-4">
        <div>{leftContent}</div>
        <div className="md:flex md:items-end md:justify-end">
          {rightContent}
        </div>
      </div>
    </div>
  );
}
