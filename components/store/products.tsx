import { Button } from "@mui/material";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import { StoreProduct } from "./store_products";

const MainStore = () => {
  return (
    <div className="p-2">
      <div className="lg:flex flex-col block justify-between">
        <div className="background-shadow flex   justify-center items-center w-full h-[370px]">
          <Image
            className="rounded-t-lg cover"
            width={300}
            height={300}
            src="/assets/valyouXshirt.png"
            alt=""
          />
        </div>
        <Button variant="contained" className="pinkGreen w-full">
          <div className=" flex justify-center items-center gap-4 w-full">
            <p>PURCHASE</p>
            <div className="flex">
              <p className="font-bold text-white px-1">$ 96</p>
              <p className=" text-gray-600 line-through">$ 100</p>
            </div>
          </div>
        </Button>
        <br />
      </div>
      <div className="flex flex-col overflow-y-hidden py-1">
        <ScrollContainer
          vertical={false}
          className="cursor-grab !overflow-y-hidden"
        >
          <div className="flex items-center relative whitespace-nowrap text-[#FF0093] font-bold text-[16px]">
            <StoreProduct />
          </div>
        </ScrollContainer>
      </div>
    </div>
  );
};

export default MainStore;
