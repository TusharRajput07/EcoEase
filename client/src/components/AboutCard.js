const AboutCard = ({ Icon, heading, message }) => {
  return (
    <div className="w-1/3 h-64 p-3 rounded-lg shadow-2xl bg-gradient-to-r from-[#174b47] via-[#023d38] to-[#230f2e] text-white cursor-pointer transition-colors duration-150 ease-in-out">
      <div className="flex justify-center mt-2">
        <Icon sx={{ fontSize: "50px" }} />
      </div>
      <div className="text-2xl font-bold my-2 text-center">{heading}</div>
      <div className="text-sm font-light text-center">{message}</div>
    </div>
  );
};

export default AboutCard;
