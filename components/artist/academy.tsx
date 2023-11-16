import { Button, Card, CardContent } from "@mui/material";

export const Academy = () => {
  return (
    <>
      <h3>
        <b>
          Welcome to ValyouX Academy, Here you will learn how to use this app.
        </b>
      </h3>
      <br />
      <p>
        <b>Watch Video about this app.</b>
      </p>
      <video
        className="w-full"
        controls
        src="https://stocks.valyoux.io/public/assets/uploads/videos/815599658.mp4"
      />
      <div className="my-2">
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <p>Earn Money with NFT</p>
              <Button variant="contained" className="token">
                Learn how?
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
