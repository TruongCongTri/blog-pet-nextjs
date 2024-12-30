import React from "react";
type LayoutProps = {
  children: ReactNode;
};

export default function BlogLayout({ children }: LayoutProps) {
  return (
    <div>
      Blog Layout
      {children}
    </div>
  );
}
