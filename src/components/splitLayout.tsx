import React from "react";

type SplitLayoutProps = {
  reactContent: React.ReactNode;
  vueContent: React.ReactNode;
};

export default function SplitLayout({
  reactContent,
  vueContent,
}: SplitLayoutProps) {
  return (
    <div className="flex min-h-screen pt-14">
      <div className="w-1/2 flex justify-center bg-[#23272f] pt-14 ">
        <div className="text-white">{reactContent}</div>
      </div>
      <div className="w-1/2 flex justify-center  bg-[#1a1a1a] pt-14 ">
        <div className="text-white">{vueContent}</div>
      </div>
    </div>
  );
}
