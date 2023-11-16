import { Avatar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export var arr = [
  {
    name: "Drake - Sticky (Official Video)",
    image: "/assets/drake-sticky.jpeg",
    type: "Singer",
    value: "0.332",
    time: "6 views 1 months ago",
    promotion: false,
  },
  {
    name: "Drake - God's Plan",
    image: "/assets/drake-gods-plan.jpeg",
    type: "Singer",
    value: "0.332",
    time: "6 views 3 months ago",
    promotion: true,
  },
  {
    name: "Drake - Started From the Bottom",
    image: "/assets/drake-started-from-bottom.jpeg",
    type: "Singer",
    value: "0.332",
    time: "6 views 3 months ago",
    promotion: false,
  },
  {
    name: "Future -  Life is Good",
    image: "/assets/drake-life-is-good.jpeg",
    type: "Singer",
    value: "0.332",
    time: "6 views 3 months ago",
    promotion: true,
  },
  {
    name: "Drake -  Hotline Bling",
    image: "/assets/drake-hotline.jpeg",
    type: "Singer",
    value: "0.332",
    time: "6 views 3 months ago",
    promotion: true,
  },
];

export const SideBar = () => {
  return (
    <div className="lg:h-[45.5vw] mt-1 lg:!overflow-y-auto rounded-lg background-shadow m-2 lg:w-[30vw]">
      <div className="p-2">
        <p className="text-2xl font-[800]">All Videos</p>
        {arr.map((value, key) => {
          return (
            <div
              onClick={() => localStorage.removeItem("open")}
              key={key}
              className="background-shadow px-2 my-2"
            >
              <Link href="/videodetail">
                <div key={key} className="flex py-3 gap-4 hover:cursor-pointer">
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
                    <p className="flex items-center gap-1 font-bold text-[10px] text-[#FF0093]">
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
          );
        })}
      </div>
    </div>
  );
};
