import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="font-heading text-3xl sm:text-4xl font-medium tracking-tight leading-tight text-ink">
      {children}
    </h1>
  );
};

export default PostTitle;
