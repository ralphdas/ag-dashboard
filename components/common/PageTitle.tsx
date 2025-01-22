export default function PageTitle({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <h1 className="font-outfit mt-6 text-3xl leading-relaxed text-adsbin-evergreens dark:text-adsbin-grey-200">
      {children}
    </h1>
  );
}
