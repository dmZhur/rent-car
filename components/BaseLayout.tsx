"use client";
import React, { useState } from "react";
import SearchBar from "./Searchbar";
import CarCard from "./CarCard";
import { CarProps } from "@types";
import { cars } from "@constants";

const BaseLayout = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState("");
  let carList: CarProps[] = [];

  if (make) {
    carList = cars.filter((car) => car.make.includes(make));
  }
  if (model) {
    const list = !make ? cars : carList;
    carList = list.filter((car) => car.model.includes(model));
  }
  if (fuel) {
    const list = !make && !model ? cars : carList;
    carList = list.filter((car) => car.fuel_type.includes(fuel));
  }
  if (year) {
    const list = !make && !model && !fuel ? cars : carList;
    carList = list.filter((car) => car.year.toString().includes(year));
  }
  if (!make && !model && !fuel && !year) {
    carList = [...cars];
  }
  const isDataEmpty = carList.length < 1;

  return (
    <>
      <div className="home__filters">
        <SearchBar
          setMake={setMake}
          setModel={setModel}
          setFuel={setFuel}
          setYear={setYear}
          make={make}
          model={model}
          year={year}
          fuel={fuel}
        />
      </div>

      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {carList.length
              ? carList.map((car, index) => <CarCard key={index} car={car} />)
              : cars.map((car, index) => <CarCard key={index} car={car} />)}
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">No results</h2>
        </div>
      )}
    </>
  );
};

export default BaseLayout;
