import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World/>";
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;

    const typeInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          onComplete();
        }, 800);
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center text-[#d16f1e] text-4xl md:text-5xl font-mono font-bold">
      {text}
      <span className="animate-blink ml-1 text-white">|</span>
    </div>
  );
};
