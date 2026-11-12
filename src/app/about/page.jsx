import Image from "next/image";
import React from "react";
import image from "../../assets/images/vision.png";

export const metadata = {
  title: "about",
  description: "...",
};

const AboutPage = () => {
  return (
    <div>
      <h3>this is about page</h3>
      <Image src="/story.png" alt="story img" width={300} height={200}></Image>
      <Image src={image} alt="image" width={400} height={200}></Image>
      <Image
        src="https://i.ibb.co.com/rggSDkx/Solevo-web.png"
        alt="image"
        width={500}
        height={250}
      ></Image>
      <Image
        src="https://unsplash.com/photos/pasqueflower-seed-head-against-orange-sun-mCf5-2XBjgU"
        alt="image"
        width={600}
        height={350}
      ></Image>
    </div>
  );
};

export default AboutPage;
