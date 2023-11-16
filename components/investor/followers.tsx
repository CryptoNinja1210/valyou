import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const FollowersHead = () => {
  return (
    <div className="border border-slate-300	rounded">
      <div className="flex justify-between items-center p-2">
        <div className="flex flex-col items-center">
          <p>
            <b>Artist</b>
          </p>
          <p>1</p>
        </div>
        <div className="flex flex-col items-center">
          <p>
            <b>Investors</b>
          </p>
          <p>1</p>
        </div>
        <div className="flex flex-col items-center">
          <p>
            <b>Business</b>
          </p>
          <p>1</p>
        </div>
      </div>
    </div>
  );
};

const FollowersList = () => {
  return (
    <div>
      <Card className="border ">
        <CardContent className="!pb-[16px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center px-2">
              <Avatar
                className="w-[50px] h-[50px]"
                alt="Travis Howard"
                src="/assets/drakeDp.png"
              />
              <div className="flex-col items-center px-2">
                <p className="text-[#FF0093]">
                  <b>Drake</b>
                </p>
                <p className="text-xs">Investor</p>
              </div>
            </div>
            <div className="flex px-2">
              <div className="w-[70px] justify-center h-10 flex items-center bg-black border rounded ">
                <span className="!text-yellow-500">VIP</span>
              </div>
              &nbsp; &nbsp;
              <div className="w-[100px] justify-center h-10 flex items-center border rounded">
                <span>Following</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const Followers = () => {
  return (
    <>
      <FollowersHead />
      <br />
      <FollowersList />
    </>
  );
};
