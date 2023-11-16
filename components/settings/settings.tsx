import { Box, Button, TextField } from "@mui/material";

const InputBox = () => {
  return (
    <div>
      <Box
        className="py-2"
        component="form"
        sx={{
          "& > :not(style)": { width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField type="number" id="outlined-basic" variant="outlined" />
      </Box>
    </div>
  );
};

export const SettingComponent = () => {
  return (
    <div className="p-2 flex flex-col gap-2 my-4">
      <p className="font-bold">1. Admin Fee when Buy/Sell Stocks(%)</p>
      <InputBox />
      <p className="font-bold">
        2. Admin Fee When Promoting Audio or Video (%)
      </p>
      <InputBox />
      <p className="font-bold">3. Audio Streaming Fee (VXD) $</p>
      <InputBox />
      <p className="font-bold">4. Video Streaming Fee (VXD) $</p>
      <InputBox />
      <p className="font-bold">
        5. Admin Fee When Audio Streaming Valyou X (%)
      </p>
      <InputBox />
      <p className="font-bold">
        6. Admin Fee When Video Streaming Valyou X (%)
      </p>
      <InputBox />
      <p className="font-bold">7. Advertisement Fee to Valyou X (%)</p>
      <InputBox />
      <p className="font-bold">
        8. Supply &amp; Demand Stock Price Increments (VXD)
      </p>
      <InputBox />
      <p className="font-bold">9. Market Maker Price (%)</p>
      <InputBox />
      <p className="font-bold">10. Sell Limit (%)</p>
      <InputBox />
      <p className="font-bold">11. Conversion Fee USDC to VXD (%)</p>
      <InputBox />
      <p className="font-bold">
        12. Credit/Debit Card (Valyou X Fee on top of Stripe Charges %)
      </p>
      <InputBox />
      <br />
      <Button variant="contained" className="w-full bg-black text-white">
        Submit
      </Button>
    </div>
  );
};
