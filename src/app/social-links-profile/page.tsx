import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define metadata for the page
export const metadata: Metadata = {
  title: "Frontend Mentor | Social links profile",
  description: "Social links profile challenge from Frontend Mentor",
};

// Define the interface for a social link
interface SocialLink {
  name: string;
  url: string;
}

// Define the SocialLinksProfile component
const SocialLinksProfile = () => {
  // Define an array of social links
  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com",
    },
    {
      name: "Frontend Mentor",
      url: "https://www.frontendmentor.io",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
    },
  ];

  return (
    <React.Fragment>
      <div className="w-full min-h-screen h-auto bg-[hsl(0_0%_8%)] flex items-center justify-center">
        <div className="w-auto m-2 p-8  min-h-96 h-auto bg-[hsl(0_0%_12%)] rounded-lg flex flex-col items-center sm:min-w-[350px]">
          {/* Display the user avatar */}
          <div className="rounded-full overflow-hidden">
            <Image
              src="/social-links-profile/avatar-jessica.jpeg"
              width={70}
              height={70}
              alt="user"
              className="rounded-full"
            />
          </div>
          <div className="flex gap-1 flex-col mt-2 items-center">
            {/* Display the user name */}
            <h1 className="text-white text-[22px] font-bold mt-3 mb-1">
              Jessica Randall
            </h1>
            {/* Display the user location */}
            <p className="text-[hsl(75_94%_57%)] text-sm font-medium">
              London. United Kingdom
            </p>
            {/* Display the user bio */}
            <p className="text-[hsl(0,2%,74%)] mt-4 text-sm font-medium">
              &ldquo;Front-end developer and avid reader.&ldquo;
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-3 mt-5">
            {/* Display social links */}
            {socialLinks.map((items) => (
              <Link
                key={items.name}
                className="w-full text-center text-white font-bold p-3 rounded-lg hover:bg-[hsl(75_94%_57%)] hover:text-black transition-all duration-75 bg-[hsl(0_0%_20%)]"
                href={items.url}
              >
                {items.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SocialLinksProfile;
