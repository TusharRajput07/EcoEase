import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EDialog from "./EDialog";

const Ecard = ({ Icon, title, name }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = (e) => {
    e.stopPropagation();
    setOpenDialog(false);
  };

  return (
    <div
      onClick={handleOpenDialog}
      className="border text-center border-gray-500 h-20 sm:h-32 p-3 pt-5 flex flex-col justify-center items-center rounded-lg cursor-pointer shadow-2xl hover:bg-[#0a111e]"
    >
      <span>
        <Icon sx={{ fontSize: "35px" }} />
      </span>
      <span className="text-lg font-bold mb-auto">{title}</span>
      <span className="text-sm text-gray-400">
        see more
        <KeyboardArrowUpIcon />
      </span>
      <EDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        title={title}
        name={name}
      />
    </div>
  );
};

export default Ecard;
