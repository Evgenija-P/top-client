import { ReactNode } from "react";

interface HtagProps {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
  styles?: string;
}

export const Htag = ({ tag, children, styles }: HtagProps): JSX.Element => {
  const currentStyle = `${styles} leading-[1.3] text-main`;
  return (
    <>
      {tag === "h1" ? (
        <h1 className={`${currentStyle} text-[26px] font-medium`}>{children} </h1>
      ) : tag === "h2" ? (
        <h2 className={`${currentStyle} text-[22px] font-medium`}>{children} </h2>
      ) : (
        <h3 className={`${currentStyle} text-xl font-semibold`}>{children} </h3>
      )}
    </>
  );
};
