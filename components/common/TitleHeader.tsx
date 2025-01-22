import React from "react";

export default function TitleHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-xl mt-6 mb-4 font-medium text-adsbin-green-400 dark:text-adsbin-grey-200 ${className ? className : ""}`}
    >
      {children}
    </h2>
  );
}
