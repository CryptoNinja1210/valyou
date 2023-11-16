import classNames from "classnames";
import Link from "next/link";
import * as React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { handleChangeSelectedTab, toggleSideMenu } from "../../store/flags";

export const DirectLink = ({ icon, link, text, image }) => {
  const dispatch = useDispatch();
  const setTab = (selectedTab) => {
    dispatch(toggleSideMenu(false));
  };
  return (
    <div className="flex py-2 hover:cursor-pointer" key={text}>
      {image != "" ? <Image src={image} width={20} height={20} /> : null}
      <Link href={link}>
        <span
          onClick={() => setTab(true)}
          className="hover:cursor-pointer px-4 relative top-[-2px]  py-3 font-[500] leading-[19px] mt-1"
        >
          {text}
        </span>
      </Link>
    </div>
  );
};

export const DropDownComponent = ({
  image = "",
  icon = "",
  detail = "",
  summary = [],
  isSideMenu = false,
  musicClass = "",
  musicSummary = "",
}) => {
  const dispatch = useDispatch();
  const setTab = (selectedTab) => {
    if (selectedTab) {
      dispatch(handleChangeSelectedTab(selectedTab));
    }
    dispatch(toggleSideMenu(false));
  };
  return (
    <>
      <details className={classNames("text-left", musicClass)}>
        <summary className={classNames(musicSummary)}>
          <div className="flex">
            {image != "" ? <Image src={image} width={20} height={20} /> : null}
            {icon != "" ? icon : null}
            {isSideMenu ? (
              <p className="text-left relative top-[-2px] py-3 mt-1 px-4 text-1xl font-[500] leading-[19px]">
                {detail}
              </p>
            ) : (
              <p className="text-left text-3xl font-bold"> {detail}</p>
            )}
          </div>
        </summary>
        <ul>
          {summary.map((value, index) => {
            return (
              <React.Fragment key={index}>
                <li key={index} className="py-2 cursor-pointer">
                  <Link href={value.link}>
                    <span onClick={() => setTab(value.tab)}>{value.text}</span>
                  </Link>
                </li>

                {(index + 1) % 2 === 0 && isSideMenu == false ? <br /> : null}
              </React.Fragment>
            );
          })}
        </ul>
      </details>
    </>
  );
};
