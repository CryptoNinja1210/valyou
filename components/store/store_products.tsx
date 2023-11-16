import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import FavoriteIcon from "@mui/icons-material/Favorite";

export const StoreProduct = () => {
  var arry = [true, false, 3, 43, 3, 3, 3, 3, 3];
  return (
    <>
      <div className="flex items-center gap-5">
        {arry.map((value, key) => {
          return (
            <div className="lg:w-1/4 w-1/2" key={key}>
              <div className="my-4 bg-white p-2 background-shadow">
                <div className="flex justify-center p-4 relative">
                  <div className="absolute top-2 z-10 right-2">
                    {value !== true ? (
                      <FavoriteBorderIcon
                        style={{ fontSize: "39px" }}
                      ></FavoriteBorderIcon>
                    ) : (
                      <FavoriteIcon
                        color="error"
                        style={{ fontSize: "39px" }}
                      ></FavoriteIcon>
                    )}
                  </div>
                  <Image
                    className="rounded-t-lg"
                    width={120}
                    height={120}
                    src="/assets/valyouXshirt.png"
                    alt=""
                  />
                </div>
                <div className="p-0">
                  <h5 className="mb-2 lg:text-2xl font-bold tracking-tight text-gray-900 ">
                    Valyou X Tees
                  </h5>
                  <p className="mb-3 lg:font-normal text-gray-700 ">
                    Founding Member Black T shirt.
                  </p>
                  <div className="flex md:text-lg items-center justify-between">
                    <div className="flex">
                      <p className="font-bold px-1">$ 120</p>
                      <p className=" text-gray-600 line-through">$ 220</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
