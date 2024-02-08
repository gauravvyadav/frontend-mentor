import React from "react";

interface MessageType {
  message: string;
  align: "left" | "right";
}

const Message = ({ message, align }: MessageType) => {
  const left = () => {
    return (
      <div className="my-[7px] w-full">
        <div className="max-w-[64%] rounded-xl rounded-bl-md bg-[#ede5f4] p-2 text-[10px] text-[hsl(276_55%_52%)]">
          {message}
        </div>
      </div>
    );
  };

  const right = () => {
    return (
      <div className="my-[7px] flex w-full justify-end">
        <div className="max-w-[64%] rounded-xl rounded-br-md bg-white p-2 text-[10px] text-[hsl(271_15%_43%)] drop-shadow-sm">
          {message}
        </div>
      </div>
    );
  };

  return align === "left" ? left() : right();
};

export default Message;
