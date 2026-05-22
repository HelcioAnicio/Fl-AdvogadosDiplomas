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
      className={`group h-full w-full max-w-70 space-y-3 rounded-lg px-4 py-10 shadow-lg transition-all duration-300 hover:bg-[#CF9A2A] hover:text-white md:max-w-80 ${colorActived && "bg-[#CF9A2A] text-white"}`}
    >
      <div
        className={`${colorActived && "text-white"} text-6xl text-[#CF9A2A] transition-all duration-300 group-hover:text-white`}
      >
        {icon}
      </div>
      <h1 className="w-full text-lg font-bold min-[420px]:text-xl">
        {heading}
      </h1>
      <hr className="w-2/3" />
      <p className="font-extralight min-[420px]:text-lg">{paragraph}</p>
    </div>
  );
};
