import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { shallowEqual, useDispatch } from "react-redux";
import { UserDetail } from "../../store/Modules/Profile/action.user";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/Modules/Profile/selector.user";

export const InvestorCard = () => {
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(UserDetail());
  },[])
  const userData = useSelector(userSelector, shallowEqual);
  const name =  userData?.toJS()[0]?.first_name
  const email =  userData?.toJS()[0]?.email
  return (
    <>
      <div>
        <div className="bg-black rounded">
          <div className="flex justify-between items-center p-4">
            <div className="flex">
              <Avatar
                sx={{ width: 60, height: 60 }}
                className="relative top-1"
                alt="Travis Howard"
                src="/assets/bobby_dp.jpeg"
              />
              <div className="flex-col px-4">
                <p className="lg:text-1xl font-bold !text-white">{name}</p>
                <p className="text-sm !text-white">Music Fan</p>
                <p className="text-sm !text-white">
                  Investor
                  <span className="px-1">
                    <CheckCircleIcon
                      sx={{ fill: "#22C55E", fontSize: "16px" }}
                    />
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-end flex-col !text-white">
              <div className="border rounded p-1 px-3">Following</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
