import { ReactNode } from "react";

type TContainar = {
  children: ReactNode;
};

const Containar = ({ children }: TContainar) => {
  return (
    <div className="h-screen w-full max-w-6xl mx-auto">
      {children}
    </div>
  );
};

export default Containar;
