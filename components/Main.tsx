"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Main = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="main">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="main__title">Rent a car — quick and easy!</h1>

        <p className="main__subtitle">
          Rental your car with our effortless booking process.
        </p>

        <CustomButton
          title="Check Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="main__image-container">
        <div className="main__image">
          <Image src="/zaz.png" alt="main" fill className="object-contain" />
        </div>

        <div className="main__image-overlay" />
      </div>
    </div>
  );
};

export default Main;
