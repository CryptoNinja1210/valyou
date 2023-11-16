import { Avatar, CardContent } from "@mui/material";
import Link from "next/link";

export const MessagesList = () => {
  return (
    <div className="w-full overflow-y-auto p-1">
      <div className="background-shadow my-1">
        <CardContent>
          <div className="capitalize flex items-start w-full justify-between">
            <div className="flex  items-start">
              <Avatar
                className="w-[40px] h-[40px]"
                alt="Travis Howard"
                src="/assets/drakeDp.png"
              />
              <div className="px-3">
                <h3 className="text-[#050F2F]">
                  <b>Drake</b>
                </h3>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-gray-400"> 04 min</p>
            </div>
          </div>
          <div className="absolute top-[40px] pl-[52px] text-left">
            <p className="normal-case font-normal text-[10px] text-gray-400">
              Hey, your music is fire. I would like us to coll
            </p>
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export const MessagesListMobile = () => {
  return (
    <div className="w-full overflow-y-auto p-1">
      <div className="background-shadow my-1">
        <Link href="chat">
          <CardContent>
            <div className="capitalize flex items-start w-full justify-between">
              <div className="flex  items-start">
                <Avatar
                  className="w-[40px] h-[40px]"
                  alt="Travis Howard"
                  src="/assets/drakeDp.png"
                />
                <div className="px-3">
                  <h3 className="text-[#050F2F]">
                    <b>Drake</b>
                  </h3>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-gray-400"> 04 min</p>
              </div>
            </div>
            <div className="absolute top-[40px] pl-[52px] text-left">
              <p className="normal-case font-normal text-[10px] text-gray-400">
                Hey, your music is fire. I would like us to coll
              </p>
            </div>
          </CardContent>
        </Link>
      </div>
    </div>
  );
};
