import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

// Meta information.

export const metadata: Metadata = {
  title: "Frontend Mentor | Blog preview card",
  description: "Frontend Mentor | Blog preview card Challenge",
};

const BlogPreviewCard = () => {
  return (
    <React.Fragment>
      <div
        className={
          (figtree.className,
          "w-full h-screen flex items-center justify-center bg-[#f4d04e]")
        }
      >
        <div className="w-[375px] h-auto bg-white rounded-xl p-5 shadow-[6px_6px_#121212] border-black border flex flex-col justify-between gap-5">
          <div className="w-auto h-auto rounded-xl overflow-hidden">
            <Image
              src="/blog-preview-card/illustration-article.svg"
              alt="Blog preview image"
              width={340}
              height={200}
            />
          </div>
          <div className="flex flex-row items-start">
            <span className="px-3 py-1 bg-[#f4d04e] cursor-pointer rounded font-extrabold text-sm">
              Learning
            </span>
          </div>
          <div className="font-medium text-[15px]">
            <span>Published </span>
            {new Date().toLocaleDateString("en-in", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </div>
          <div className="gap-3 flex flex-col cursor-pointer">
            <h1 className="text-xl font-extrabold">HTML & CSS foundations</h1>
            <p className="text-[15px] text-[#808080]">
              These languages are the backbone of every website, defining
              structure. content, and presentation.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/blog-preview-card/image-avatar.webp"
              alt="Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-[15px]">Greg Hooper</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogPreviewCard;
