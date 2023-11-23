import Footer from "./footer";
import Navbar from "./navbar";
import { ReactNode } from "react";

interface Props  {
  children: ReactNode;
}

const Layout = (props: Readonly<Props>) => {
  const {children} = props
  return (
    <div className="w-full flex flex-col min-h-screen bg-white/90 dark:bg-gray-900">
      <Navbar />
      <div className="flex flex-grow px-5 py-7">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
