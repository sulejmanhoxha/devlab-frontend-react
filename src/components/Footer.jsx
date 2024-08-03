import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
        <Link
          className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start"
          to={"/"}
        >
          <img
            src="/images/icon.png"
            alt="logo"
            className="aspect-video h-10 object-cover"
          />

          <span className="ml-3 text-xl">PawLand</span>
        </Link>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
          © 2024 PawLand — Filip and Sulejman
        </p>

        <span className="mt-4 flex justify-center gap-4 sm:ml-auto sm:mt-0 sm:justify-start">
          <Instagram />
          <Twitter />
          <Facebook />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
