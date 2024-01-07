"use client";
import Image from "next/image";
import React from "react";
import { SearchBarProps } from "@types";

const SearchBar = ({
  setMake,
  setModel,
  setFuel,
  setYear,
  make,
  model,
  fuel,
  year,
}: SearchBarProps) => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <Image
          src="/car.svg"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car make"
        />
        <input
          type="text"
          name="make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          placeholder="Make"
          className="searchbar__input"
        />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model.svg"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Model"
          className="searchbar__input"
        />
      </div>
      <div className="searchbar__item">
        <Image
          src="/fuel.svg"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car fuel"
        />
        <input
          type="text"
          name="fuel"
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
          placeholder="Fuel"
          className="searchbar__input"
        />
      </div>
      <div className="searchbar__item">
        <Image
          src="/year.svg"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car year"
        />
        <input
          type="text"
          name="fuel"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year"
          className="searchbar__input"
        />
      </div>
    </form>
  );
};

export default SearchBar;
