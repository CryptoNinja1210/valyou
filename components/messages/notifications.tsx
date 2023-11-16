import { CardContent } from "@mui/material";
import Avatar from "@mui/material/Avatar";

export const Notifications = () => {
  return (
    <div className="background-shadow">
      {/* <CardContent> */}
        <div className="flex items-center p-3">
          <Avatar
            className="w-[40px] h-[40px] relative top-[-5px]"
            alt="Travis Howard"
            src="/assets/drakeDp.png"
          />
          <div className="flex-col items-center px-3 text-xs">
            <p>
              <b>Congratulations!</b> watched your music video (video name) for
              $0.03 VXD
            </p>
            <p className="text-gray-400 text-xs">21 mins ago</p>
          </div>
        </div>
      {/* </CardContent> */}
    </div>
  );
};
