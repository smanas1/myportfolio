"use client";
import React, { useEffect, useState } from "react";
import resumeData from "@/../public/mypdf.pdf";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export default function MyResumeDownload() {
  const [mydownloadlink, setMydownloadlink] = useState();
  useEffect(() => {
    const storage = getStorage();
    const starRef = ref(
      storage,
      "gs://myportfolio-6f040.appspot.com/mypdf.pdf"
    );
    getDownloadURL(starRef).then((url) => {
      console.log("downloadlink", url);
      setMydownloadlink(url);
    });
  }, []);

  console.log(mydownloadlink);
  const handleDownload = () => {
    const blob = new Blob([mydownloadlink], { type: "application/pdf" });
    const url = mydownloadlink;
    const a = document.createElement("a");
    a.href = url;
    a.download = "mypdf.pdf";
    a.target = "blank";
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
