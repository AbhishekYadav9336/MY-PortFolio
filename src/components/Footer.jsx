import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12 bg-gray-200">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank"><FaFacebook className="text-2xl cursor-pointer" size={24} /></a>
              <a href="https://x.com/Abhishe0010?t=L5cPp5-q2h4hwNVTaJVQRA&s=08" target="_blank"><FaTwitter className="text-2xl cursor-pointer" size={24} /></a>
              <a href="https://www.threads.net/@yadav_https://www.threads.net/@yadav_" target="_blank"><FaInstagram className="text-2xl cursor-pointer" size={24} /></a>
              <a href="https://www.linkedin.com/in/abhishek-yadav-9a9a7b257/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024. All rights reserved.
              </p>
              <p className="text-sm">Created By- ❤️ Abhishek Yadav.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
