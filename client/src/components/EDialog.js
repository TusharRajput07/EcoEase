import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { forwardRef, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import eData from "../Mock_Data.json";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const componentDiv = (name, data) => {
  return (
    <div>
      <div className="text-sm font-bold">{name}</div>
      <div className="text-sm font-medium text-gray-400">{data}</div>
    </div>
  );
};

const recoverableDiv = (name, data) => {
  return (
    <div className="flex">
      <span className="text-sm font-bold">{name} : </span>
      <div className="text-sm font-light">{data}</div>
    </div>
  );
};

const DialogMedia = ({ open, handleClose, title, name }) => {
  return (
    <Dialog
      open={open}
      maxWidth="lg"
      TransitionComponent={Transition}
      scroll="body"
    >
      <div className="w-full md:w-[65vw] min-h-96 bg-[#101826] overflow-hidden md:p-3 relative text-gray-300">
        <CancelIcon
          className="absolute top-3 right-3 text-[#535252] cursor-pointer z-20"
          onClick={handleClose}
          fontSize="large"
        />
        <div className="text-center text-3xl font-bold mb-2 leading-normal text-transparent bg-gradient-to-r from-[#56B4AC] to-[#a34b74] dark:bg-clip-text dark:animate-gradient">
          {title}
        </div>

        <div className="p-4">
          <div className="text-lg font-bold mb-2">Consists of :</div>
          {eData?.[name]?.components?.map((item) =>
            componentDiv(item?.name, item?.data)
          )}
          <div className="text-lg font-bold mt-10 mb-2">
            Following items can be recovered :
          </div>
          {eData?.[name]?.recovered_items?.map((item) =>
            recoverableDiv(item?.name, item?.data)
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default DialogMedia;
