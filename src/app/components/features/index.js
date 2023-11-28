"use client";
import React, { useEffect, useState } from "react";

export default function TypeWriter({ textArray }) {
  const [currentWord, setCurrentWord] = useState(0);
  useEffect(() => {
    const intervel = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % textArray.length);
    }, 1000);
    return () => clearInterval(intervel);
  }, [textArray]);
  return <div>{textArray[currentWord]}</div>;
}
