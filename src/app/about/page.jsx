import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <h3>this is about page</h3>
      <Image src="/story.png" alt="story img" width={300} height={200}></Image>
    </div>
  );
};

export default AboutPage;
