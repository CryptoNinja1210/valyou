import { Avatar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { arr } from "../watch_earn/sideNav";

export const AllAudiosCard = () => {
  return (
    <div className="lg:h-[45.5vw] mt-1 lg:!overflow-y-auto rounded-lg background-shadow lg:w-[30vw] m-2">
      <div className="p-2">
        <p className="text-2xl font-[800]">All Audios</p>
        {arr.map((value, key) => {
          return (
            <div
              className="background-shadow px-2 my-2"
              onClick={() => localStorage.removeItem("open")}
              key={key}
            >
              <div>
                <Link href="/videodetail">
                  <div
                    key={key}
                    className="flex py-3 gap-4 hover:cursor-pointer"
                  >
                    <Image
                      src={value.image}
                      width={150}
                      height={100}
                      alt="placeholder"
                    ></Image>
                    <div className="flex-col flex gap-1">
                      <p className="text-[13px] md:text-base font-bold md:font-normal">
                        {value.name}
                      </p>
                      <p className="text-[12px]">{value.type}</p>
                      <p className="text-[8px] lg:text-sm">
                        Song Valyou:
                        <span className="font-bold">$ {value.value}</span>
                      </p>
                      <p className="flex items-center gap-3 font-bold text-[10px] text-[#FF0093]">
                        <div>Stock Price</div>
                        <Avatar
                          src="/assets/down-arrow-circle.svg"
                          className="!h-4 !w-4"
                        ></Avatar>
                        <div>
                          $ 78.44 VXD -{" "}
                          <span className="font-normal">10.77%</span>
                        </div>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
