import Image from "next/image";
import { CarProps } from "@types";
import { generateCarImageUrl } from "@utils";

interface CarDetailsProps {
  car: CarProps;
}

const CarDetails = ({ car }: CarDetailsProps) => (
  <div className="main">
    <div className="flex-1 pt-36 padding-x">
      <div className="flex-1 flex flex-col gap-3">
        <div className="relative w-full h-80 bg-pattern bg-cover bg-center rounded-lg">
          <Image
            src={generateCarImageUrl(car)}
            alt="car model"
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="flex gap-3">
          <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
            <Image
              src={generateCarImageUrl(car, "29")}
              alt="car model"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
            <Image
              src={generateCarImageUrl(car, "33")}
              alt="car model"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
            <Image
              src={generateCarImageUrl(car, "13")}
              alt="car model"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CarDetails;
