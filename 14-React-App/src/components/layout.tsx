import React, { ReactNode } from "react";

import Footer from "./footer";
import Navbar from "./navbar";

interface Props  {
  children: ReactNode;
}

const Layout = (props: Readonly<Props>) => {
  const {children} = props
  return (
    <div className="w-full flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="flex flex-grow px-5 py-7">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
