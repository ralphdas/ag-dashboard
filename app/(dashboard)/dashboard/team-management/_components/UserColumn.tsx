export function UserColumn<T extends { [key: string]: any }>({
  row,
}: Readonly<{ row: T }>) {
  return (
    <>
      <div className="flex items-center gap-2">
        <img
          src={row.avatarUrl}
          alt="avatar"
          className="w-12 h-12 rounded-full "
        />
        <span>{row.username}</span>
        <span className="text-gray-500">{`(${row.fullName})`}</span>
      </div>
    </>
  );
}
