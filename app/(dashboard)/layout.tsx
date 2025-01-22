import NavBarTop from "@common/NavBarTop";
import NavBarSide from "@common/NavBarSide";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full">
      <NavBarTop />
      <NavBarSide />
      <div className="md:p-10 py-8 md:ml-80 mt-28">{children}</div>
    </div>
  );
}
