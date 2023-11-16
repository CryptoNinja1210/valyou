import Pagination from "@mui/material/Pagination";
import Card from "@mui/material/Card";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Box } from "@mui/material";
import { ListenWarnPopup } from "../admin/stockPrice";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

var arrayTable = [
  {
    id: 0,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 1,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 2,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 3,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 4,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
  {
    id: 5,
    image: "/assets/drakeDp.png",
    name: "Bobby Oparaocha",
    songName: "Started from the bottom",
    valyou: "100,000,000.00",
  },
];

export const ListenTable = ({ isEarn, isContribution }) => {
  const [showWarn, setShowWarn] = useState(false);
  const handleClose = () => {
    setShowWarn(false);
  };
  return (
    <>
      <div className="overflow-x-auto relative background-shadow">
        <table className="w-full text-sm text-left text-gray-500">
          <thead>
            <tr>
              <th scope="col" className="pt-6 px-6 whitespace-nowrap">
                <span>
                  #Rank &nbsp;
                  <UnfoldMoreIcon></UnfoldMoreIcon>
                </span>
              </th>
              <th scope="col" className="pt-6 px-6 whitespace-nowrap">
                <span>
                  Cover &nbsp;
                  <UnfoldMoreIcon></UnfoldMoreIcon>
                </span>
              </th>
              <th scope="col" className="pt-6 px-6 whitespace-nowrap">
                <span>
                  Song name &nbsp;
                  <UnfoldMoreIcon></UnfoldMoreIcon>
                </span>
              </th>
              <th scope="col" className="pt-6 px-6 whitespace-nowrap">
                <span>
                  Artist Image &nbsp;
                  <UnfoldMoreIcon></UnfoldMoreIcon>
                </span>
              </th>
              <th scope="col" className="pt-6 whitespace-nowrap">
                <span>
                  Artist Name &nbsp;
                  <UnfoldMoreIcon></UnfoldMoreIcon>
                </span>
              </th>
              <th scope="col" className="pt-6 px-6 whitespace-nowrap">
                <span>
                  Song Valyou &nbsp;
                  <UnfoldMoreIcon></UnfoldMoreIcon>
                </span>
              </th>
              <th scope="col" className="pt-6 px-6 text-[#FF0093]">
                <span>
                  {isEarn
                    ? "Listen & Earn"
                    : isContribution
                    ? "Your Contribution"
                    : "Pay Per Stream"}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <br />
            {arrayTable.map((value, index) => {
              return (
                <>
                  <tr key={index} className="border-[1px]">
                    <th
                      scope="row"
                      className=" flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                    >
                      <span>{index + 1}</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <Link href="/audiodetail">
                        <PlayCircleFilledIcon
                          sx={{ fontSize: "55px" }}
                        ></PlayCircleFilledIcon>
                      </Link>
                    </th>
                    <td className="px-6">
                      <Avatar
                        sx={{ width: 50, height: 50 }}
                        className="rounded"
                        variant="rounded"
                        alt={value.name}
                        src="/assets/drake-gods-plan.jpeg"
                      />
                    </td>
                    <td className="py-4 px-6 hidden lg:block">
                      Started from the bottom
                    </td>
                    <td className="py-4 px-6 block lg:hidden">
                      Started from t..
                    </td>
                    <td className="px-12">
                      <Avatar
                        sx={{ width: 50, height: 50 }}
                        variant="square"
                        alt={value.name}
                        src={value.image}
                      />
                    </td>
                    <td className="py-4 whitespace-nowrap">
                      <p>Bobby Oparaocha</p>
                    </td>
                    <td className="py-4 px-6">$100,000,000.00</td>
                    <td className="py-4 px-9 whitespace-nowrap">
                      <Button className="pink-gradient">
                        {isEarn
                          ? "$2.005"
                          : isContribution
                          ? "$5.0002"
                          : "$7.002402"}
                      </Button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      {showWarn && (
        <ListenWarnPopup open={showWarn} handleClose={handleClose} />
      )}
      <div className="flex justify-center p-4">
        <Pagination count={10} shape="rounded" color="primary" />
      </div>
    </>
  );
};
