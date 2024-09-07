import { ChildrenProps } from "@/types/types";

const AuthBtn = ({
  children,
  bgColor,
  textColor,
  bgHoverColor,
  textHoverColor,
  uppercase,
  width
}: ChildrenProps) => {
  return (
    <button
      className={`${width} h-8 text-sm  md:h-11 rounded-md ${bgColor} md:text-base ${uppercase} font-medium ${textColor} border-primary hover:${bgHoverColor} hover:${textHoverColor} transition-all ease-in-out duration-700 shadow-md`}
    >
      {children}
    </button>
  );
};

export default AuthBtn;
