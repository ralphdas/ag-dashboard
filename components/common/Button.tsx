export default function Button({
  children,
  onClick,
  className,
  type,
  disabled,
}: Readonly<{
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}>) {
  return (
    <button
      onClick={() => {
        console.log("Hello, World!");
      }}
      className={`font-nunito text-sm px-4 py-2 bg-adsbin-green-500 text-white flex gap-2 font-bold justify-center leading-relaxed${
        className || ""
      }`}
      type={type || "button"}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
