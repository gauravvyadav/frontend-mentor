import React from "react";
import { BsChevronCompactLeft } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import Message from "./components/message";
import Photo from "./components/photo";
import WalkPoint from "./components/walk-point";

const ChatAppCss = () => {
  return (
    <React.Fragment>
      <div className="absolute  left-0 top-0 h-screen w-full bg-white">
        <span className="fixed -left-[300px] top-0 z-10 h-[90%] w-[440px] rounded-b-full bg-gradient-to-b from-[hsl(293_100%_63%)] to-[hsl(264_100%_61%)] md:-left-[80px]" />
        <span className="fixed -right-[300px] bottom-0 z-10 h-[90%] w-[440px] rounded-t-full bg-[hsl(270_20%_96%)] md:-right-[80px]" />
        <div className="z-50 mt-24 flex h-auto w-full flex-col md:fixed md:mt-0 md:flex-row ">
          <div className="z-50 m-auto flex w-full flex-col justify-between md:w-[60%] md:min-w-[800px] md:flex-row ">
            {/* Smartphone */}
            <div className="relative  m-auto my-auto flex h-[600px] w-[290px] flex-col overflow-hidden rounded-[44px] border-[13px] border-white bg-[hsl(270_20%_96%)] drop-shadow-2xl after:absolute after:-top-1 after:left-1/2 after:h-[26px] after:w-[60%] after:-translate-x-1/2 after:rounded-b-2xl after:bg-white md:mx-0 md:mr-auto">
              <div className="flex h-20 w-full flex-row justify-between rounded-b bg-gradient-to-l from-[hsl(293_100%_63%)] to-[hsl(264_100%_61%)] px-3 pt-7">
                <div className="flex h-full flex-row items-center gap-1">
                  <BsChevronCompactLeft
                    size={12}
                    className="cursor-pointer text-white"
                    strokeWidth={1.4}
                  />
                  <div className="h-7 w-7 rounded-full border-2 border-white bg-[url('/chat-app-css/avatar.jpg')] bg-cover" />
                  <div className="ml-1">
                    <h2 className="text-xs text-white"> Samuel Green</h2>
                    <p className="text-[10px] text-[hsl(276_100%_81%)]"> Available to Walk</p>
                  </div>
                </div>
                <div className="flex h-full cursor-pointer items-center">
                  <HiDotsVertical color="hsl(276, 100%, 86%)" />
                </div>
              </div>
              <div className="pb-2">
                {/* Messages */}
                <div
                  className="no-scrollbar h-[430px] w-full overflow-y-scroll px-2 outline-none"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  <Message message="That sounds great. I’d be happy with that." align="left" />
                  <Message
                    message="Could you send over some pictures of your dog, please?"
                    align="left"
                  />
                  <Photo
                    img={[
                      "/chat-app-css/dog-image-1.jpg",
                      "/chat-app-css/dog-image-2.jpg",
                      "/chat-app-css/dog-image-3.jpg",
                    ]}
                    align="right"
                  />
                  <Message message="  Here are a few pictures. She’s a happy girl!" align="right" />
                  <Message message="Can you make it?" align="right" />
                  <Message
                    message="She looks so happy! The time we discussed works. How long shall I take her out for?"
                    align="left"
                  />
                  <WalkPoint message="30 minute walk" price="$29" align="left" />
                  <WalkPoint message="1 hour walk" price="$49" align="left" />
                </div>
                <div className="absolute bottom-0 flex h-14 w-full items-center justify-center pb-1 ">
                  <div className="flex h-[38px] w-[92%] cursor-pointer flex-row items-center justify-between overflow-hidden rounded-full bg-white px-2">
                    <input
                      type="text"
                      className="h-[38px] w-[90%] px-2 text-xs text-gray-600 outline-none placeholder:text-[hsl(206_6%_79%)]"
                      placeholder="Type a message…"
                    />
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[hsl(271_36%_24%)]">
                      <FaAngleRight className="text-white" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-auto flex h-[300px] flex-col items-center justify-center px-8 text-center md:h-screen md:w-[440px] md:px-0 md:text-left">
              <div className="flex w-full flex-col gap-6">
                <h1 className="text-4xl font-medium text-[hsl(271_36%_24%)]">Simple booking</h1>
                <p className="text-[hsl(270_7%_64%)]">
                  Stay in touch with our dog walkers through the chat interface. This makes it easy
                  to discuss arrangements and make bookings. Once the walk has been completed you
                  can rate your walker and book again all through the chat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatAppCss;
