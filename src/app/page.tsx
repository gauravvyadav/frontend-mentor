import CardList from "@/components/Card/CardList";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center w-full h-screen flex-col">
        <CardList link={"/qr-code-component"} name={"QR Code Component"} />
        <CardList link={"/blog-preview-card"} name={"Blog Preview Card"} />
        <CardList
          link={"/advice-generator-app"}
          name={"Advice Generator App"}
        />
      </div>
    </React.Fragment>
  );
}
