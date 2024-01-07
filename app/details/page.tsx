import { CarDetails } from "@components";
import { DetailsProps } from "@types";

export default async function Details({ searchParams }: DetailsProps) {
  console.log("searchParams", searchParams);
  return (
    <CarDetails
      car={{
        city_mpg: 1,
        class: "",
        combination_mpg: 2,
        cylinders: 1,
        displacement: 3,
        drive: "",
        fuel_type: "",
        highway_mpg: 1,
        make: searchParams.make || "",
        model: searchParams.model || "",
        transmission: "",
        year: searchParams.year ? +searchParams.year : 2015,
      }}
    />
  );
}
