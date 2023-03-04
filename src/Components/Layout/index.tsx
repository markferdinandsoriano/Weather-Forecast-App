import React, { ReactNode } from "react";
import HeaderBar from "../HeaderBar";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-sky-50 w-screen h-screen flex flex-col">
      <HeaderBar />
      <div className="border-t-4 border-sky-500 h-[85%] sm:h-[80%] w-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;
