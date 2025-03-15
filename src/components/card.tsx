import { ReactNode, useState } from "react";

export const Card = ({
  icon,
  heading,
  paragraph,
}: {
  icon: ReactNode;
  heading: string;
  paragraph: string;
}) => {
  const [colorActived, setColorActived] = useState(false);
  return (
    <div
      onClick={() => setColorActived(!colorActived)}
      className={`group h-max w-full max-w-54 space-y-3 rounded-lg p-7 shadow-lg transition-all duration-300 hover:bg-[#CF9A2A] hover:text-white ${colorActived && "bg-[#CF9A2A] text-white"}`}
    >
      <div
        className={`${colorActived && "text-white"} text-6xl text-[#CF9A2A] transition-all duration-300 group-hover:text-white`}
      >
        {icon}
      </div>
      <h1 className="font-bold">{heading}</h1>
      <hr className="w-16" />
      <p className="font-extralight">{paragraph}</p>
    </div>
  );
};
