import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { IconButton } from "@mui/material";

const Footer = () => {
  // funtion to open whatsapp
  const openWhataspp = () => {
    const phoneNumber = "+919643418942";
    const message = "Hello, I'm interested in your services!";
    const url = `https://wa.me/${phoneNumber.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // function to open gmail
  const openGmail = () => {
    const email = "rajputtushar7102@gmail.com";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, "_blank");
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-full overflow-hidden px-8 md:px-32 pt-10 bg-[#404040] dark:bg-gradient-to-r text-center  dark:from-[#174b47] dark:to-[#1c0d25] text-gray-300">
      <div className="text-3xl md:text-4xl font-bold">EcoEase</div>
      <div className="text-xs my-1">An initiative by</div>
      <div className="text-xs mb-4">Ministry of Environment</div>

      <div className="md:flex w-full mb-5">
        {/* left container */}
        <div className="w-full md:w-1/2 pt-8 md:py-5">
          <div className="text-xl font-bold md:mb-2">Get in touch</div>
          <div className="flex justify-center items-center gap-2 md:gap-6">
            <IconButton onClick={openGmail}>
              <EmailIcon className="text-gray-300 dark:hover:text-[#56B4AC]" />
            </IconButton>

            <IconButton>
              <LinkedInIcon className="text-gray-300 dark:hover:text-[#56B4AC]" />
            </IconButton>
            <IconButton>
              <GitHubIcon className="text-gray-300 dark:hover:text-[#56B4AC]" />
            </IconButton>
            <IconButton onClick={openWhataspp}>
              <WhatsAppIcon className="text-gray-300 dark:hover:text-[#56B4AC]" />
            </IconButton>
            <IconButton>
              <InstagramIcon className="text-gray-300 dark:hover:text-[#56B4AC]" />
            </IconButton>
          </div>
        </div>
        {/* right container */}
        <div className="w-full md:w-1/2 py-5">
          <div className="text-xl font-bold mb-1 md:mb-2">Navigations</div>
          <div className="flex justify-center items-center gap-4 md:gap-6">
            <span
              // onClick={scrollToSection("home")}
              className="dark:hover:text-[#56B4AC] cursor-pointer"
            >
              Home
            </span>
            <span
              // onClick={scrollToSection("about")}
              className="dark:hover:text-[#56B4AC] cursor-pointer"
            >
              About
            </span>
            <span
              // onClick={scrollToSection("projects")}
              className="dark:hover:text-[#56B4AC] cursor-pointer"
            >
              Contact
            </span>
            <span
              // onClick={scrollToSection("skills")}
              className="dark:hover:text-[#56B4AC] cursor-pointer"
            >
              Team
            </span>
            <span
              // onClick={scrollToSection("contact")}
              className="dark:hover:text-[#56B4AC] cursor-pointer"
            >
              Credits
            </span>
          </div>
        </div>
      </div>

      <div className="text-xs text-center font-light">
        "Created with a blend of creativity and minimalism, this WebApp is more
        than just code — it's a reflection of our love for building meaningful
        experiences."
      </div>

      <div className="text-center text-sm font-light py-5">
        © 2024 EcoEase. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
