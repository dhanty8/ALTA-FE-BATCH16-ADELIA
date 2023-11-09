import React, { ReactNode } from "react";

import Footer from "./footer";
import Navbar from "./navbar";

interface Props  {
  children: ReactNode;
}

const Layout = (props: Readonly<Props>) => {
  const {children} = props
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="w-full grow flex flex-col mx-auto px-5 py-7">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
