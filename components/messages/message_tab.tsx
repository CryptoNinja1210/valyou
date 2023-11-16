import React from "react";
import { MessagesList, MessagesListMobile } from "./messagesList";
import { MessageDetails } from "./message_details";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { ChatComp } from "../../pages/chat";

export const MessageTab = () => {
  const [messageTap, setMessageTab] = React.useState(false);

  function tapMessage() {
    setMessageTab((messageTap) => !messageTap);
  }

  return (
    <div className="p-2">
      <div className="p-1 pt-2">
        <TextField
          size="small"
          className="lg:w-[30%] w-full inputRounded m-0 p-0"
          placeholder="Search for artists, investors, business messages"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            style: { fontSize: "12px" },
          }}
        />
      </div>
      <br />
      <div className="hidden lg:flex w-[100%] p-1 gap-4">
        <div className="w-[30%] background-shadow p-1 flex flex-col">
          <MessagesList />
          <MessagesList />
          <MessagesList />
          <MessagesList />
          <MessagesList />
          <MessagesList />
          <MessagesList />
          <MessagesList />
        </div>
        <div className="w-[70%] background-shadow">
          <ChatComp />
        </div>
      </div>
      <div className="lg:hidden">
        {messageTap ? (
          <MessageDetails tapMessage={tapMessage} />
        ) : (
          <>
            <MessagesListMobile />
            <MessagesListMobile />
            <MessagesListMobile />
            <MessagesListMobile />
            <MessagesListMobile />
            <MessagesListMobile />
            <MessagesListMobile />
            <MessagesListMobile />
            <MessagesListMobile />
          </>
        )}
      </div>
    </div>
  );
};
