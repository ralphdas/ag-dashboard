import NavBarTop from "@common/NavBarTop";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBarTop />
      <div className="container mx-auto">{children}</div>
    </>
  );
};

export default Layout;
