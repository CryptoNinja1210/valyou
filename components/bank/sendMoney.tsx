import {
  Avatar,
  FormControl,
  MenuItem,
  Select,
  TextareaAutosize,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const SendMoney = () => {
  const [amount, setAmount] = useState<Number>(0.0);
  
  
  return (
    <>
      <div className="block p-2  bg-black rounded-lg border border-gray-200 shadow-md text-white">
        <b className="text-left block text-lg py-4">Send Money To</b>
        <FormControl
          fullWidth
          sx={{ borderColor: "gray", border: "1px solid", borderRadius: "5px" }}
          variant="outlined"
        >
          <Select
            defaultValue="select"
            placeholder="Select Recipient"
            IconComponent={ArrowDropDownIcon}
            sx={{
              color: "white",
              "& .MuiSelect-icon": {
                color: "white",
              },
            }}
          >
            <MenuItem value={10}>
              <div className="flex items-center">
                <Avatar
                  className="w-[30px] h-[30px]"
                  alt="Travis Howard"
                  src="/assets/drakeDp.png"
                ></Avatar>
                &nbsp; Bobby
              </div>
            </MenuItem>
            <MenuItem value={20}>
              <div className="flex items-center">
                <Avatar
                  className="w-[30px] h-[30px]"
                  alt="Travis Howard"
                  src="/assets/drakeDp.png"
                ></Avatar>
                &nbsp; Bobby
              </div>
            </MenuItem>
            <MenuItem value={30}>
              <div className="flex items-center">
                <Avatar
                  className="w-[30px] h-[30px]"
                  alt="Travis Howard"
                  src="/assets/drakeDp.png"
                ></Avatar>
                &nbsp; Bobby
              </div>
            </MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />
        <b className="text-left block text-lg py-4">Send Amount</b>
        <input
          type="number"
          placeholder="0.00"
          value={amount.toString()} // convert amount to string using toString()
          onChange={(e) =>
            setAmount(Number(e.target.value.replace(/[^\d.]/g, "")))
          }
          className="bg-white focus:border-[#ff0093] border-gray-400 border-2 focus:border-none text-gray-900 font-bold text-2xl rounded block w-full p-3 placeholder:text-[#050f2f]"
          style={{ appearance: "textfield" }}
        />
        <br />
        <b className="text-left block text-lg py-4">
          Select Reason For Payment
        </b>
        <FormControl
          fullWidth
          sx={{ borderColor: "gray", border: "1px solid", borderRadius: "5px" }}
          variant="outlined"
        >
          <Select
            defaultValue="select"
            placeholder="Select Recipient"
            IconComponent={ArrowDropDownIcon}
            sx={{
              color: "white",
              "& .MuiSelect-icon": {
                color: "white",
              },
            }}
          >
            <MenuItem value={10}>
              <div className="flex justify-start">
                Published Advanced Payment
              </div>
            </MenuItem>
            <MenuItem value={20}>
              <div className="flex justify-start">Commissions</div>
            </MenuItem>
          </Select>
        </FormControl>
        <TextareaAutosize
          className="rounded border-gray-400 py-1 my-8 border-solid border-2 w-full pl-2 text-[#050f2f]"
          minRows={2}
          placeholder="Note"
        />
        <div className="text-center py-4">
          <Button
            variant="contained"
            className="green-gradient lg:w-96 w-full hover:bg-gray-400"
            onClick={showSuccessMessage}
          >
            Send
          </Button>
        </div>
      </div>
    </>
  );
};


export const showSuccessMessage = () => {
  Swal.fire({
    title: 'Success!',
    icon: 'success',
    showConfirmButton: false,
    timer: 1500,
  });
};