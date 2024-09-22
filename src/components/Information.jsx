import React, { useState } from "react";
import Transcription from "./Transcription";

export default function Information(props) {
  const { output, finished } = props;
  const [tab, setTab] = useState("transcription");

  const textElement =
    tab === "transcription" ? output.map((val) => val.text).join("\n") : "";

  function handleCopy() {
    navigator.clipboard.writeText(textElement);
  }

  function handleDownload() {
    const element = document.createElement("a");
    const file = new Blob([textElement], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `Freescribe_${new Date().toString()}.txt`;
    document.body.appendChild(element);
    element.click();
  }

  return (
    <main className="flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20 max-w-prose w-full mx-auto">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap">
        Your <span className="text-[#ff6f00] bold">Transcription</span>
      </h1>

      {finished && <Transcription textElement={textElement} />}

      <div className="flex items-center gap-4 mx-auto">
        <button
          onClick={handleCopy}
          title="Copy"
          className="bg-[#fdf1f5] hover:text-[#ee8e46] duration-200 text-[#ff6f00] px-2 aspect-square grid place-items-center rounded"
        >
          <i className="fa-solid fa-copy"></i>
        </button>

        <button
          onClick={handleDownload}
          title="Download"
          className="bg-[#fdf1f5] hover:text-[#ec6600] duration-200 text-[#ff6f00] px-2 aspect-square grid place-items-center rounded"
        >
          <i className="fa-solid fa-download"></i>
        </button>
      </div>
    </main>
  );
}
