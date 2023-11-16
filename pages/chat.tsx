import Image from "next/image";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";

const chat = () => {
  return <ChatComp />;
};

export default chat;

export const ChatComp = () => {
  return (
    <div className="flex flex-col h-[95vh] lg:h-[90vh] relative">
      <header className="flex items-center gap-3 py-3 shadow-lg top-0 w-full  lg:px-4">
        <div className="lg:hidden">
        <IconButton>
          <Link href="messages">
            <KeyboardBackspaceIcon className="text-[#FF0093]" />
          </Link>
        </IconButton>
        </div>
        <Image
          width={50}
          height={50}
          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
          alt=""
          className="rounded-full"
        />
        <b className="text-[#FF0093]">Anderson Vanhron</b>
      </header>
      <div
        id="messages"
        className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch pb-16"
      >
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 inline-block rounded-full bg-gray-200 text-gray-600">
                  Hello, will?
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-full inline-block  bg-[#FF0093] text-white ">
                  Hey, How you have been?
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-full inline-block bg-gray-200 text-gray-600">
                  I am doing fine man. wbu?
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-full inline-block bg-gray-200 text-gray-600">
                  How you doing?
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-full inline-block bg-gray-200 text-gray-600">
                  Really it&#39;s been long
                </span>
              </div>
              <div>
                <span className="px-4 py-2 inline-block rounded-full bg-gray-200 text-gray-600">
                  How the things have been there?
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-full inline-block  bg-[#FF0093] text-white ">
                  Every thing getting better with time.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 inline-block rounded-full bg-gray-200 text-gray-600">
                  Thanks for your message David.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-full inline-block bg-[#FF0093] text-white ">
                  Are you still doing development?
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-full inline-block  bg-[#FF0093] text-white ">
                  yes, it really is a fun working there.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-full inline-block bg-gray-200 text-gray-600">
                  That is great
                </span>
              </div>
              <div>
                <span className="px-4 py-2 inline-block rounded-full bg-gray-200 text-gray-600">
                  I have no issue with any other packages.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-full inline-block  bg-[#FF0093] text-white ">
                  yes, I have a mac. I never had issues with root permission as
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-full inline-block bg-gray-200 text-gray-600">
                  Well i have to get somewhere
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-full inline-block bg-gray-200 text-gray-600">
                  See you soon
                </span>
              </div>
              <div>
                <span className="px-4 py-2 inline-block rounded-full bg-gray-200 text-gray-600">
                  Have fun dude!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white border-t-[0.5px] p-2 bottom-0 w-[100%] absolute">
        <div className="flex justify-between items-center gap-2">
          <Image
            src="/assets/comment_image.svg"
            width={40}
            height={40}
            alt="comment image"
          />
          <input
            placeholder="Type message..."
            className="flex-1 outline-none border-none text-gray-500 px-1"
          />
          <div>
            <button className="bg-[#FF0093] text-white p-2 rounded-full flex justify-center items-center">
              <SendIcon />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
