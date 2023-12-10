import React from "react";
import resumeData from "@/../public/mypdf.pdf";

export default function MyResumeDownload() {
  const handleDownload = () => {
    const blob = new Blob([resumeData], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mypdf.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        className="inline-block px-5 py-3 rounded-md bg-orange-500 transition-all hover:bg-[#FFAD84] text-white font-bold mt-4"
      >
        Download My CV
      </button>
    </div>
  );
}
