import React from "react";

function VideoEmbed() {
  return (
    <div className="relative w-full h-[480px]  ">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/_INa500IgVo?si=x-LhBHTyNbghC3CN"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoEmbed;
