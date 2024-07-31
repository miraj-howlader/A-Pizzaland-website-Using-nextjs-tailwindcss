import Image from "next/image";
import Link from "next/link";

import { FaFacebook,FaInstagram,FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return <footer className=" bg-primary bg-pattern py-16">
    <div className="container mx-auto">
      <div className=" flex  flex-col items-center gap-y-6
       justify-center">
        {/* link   */}
        <Link href='/'>
        <Image src={'logo.svg'} width={180} height={180} alt=""/>
        </Link>
        {/* social icons  */}
        <div className=" flex gap-x-6 text-xl text-white">
        <Link href='/'>
          <FaFacebook />
        </Link>
        <Link href='/'>
          <FaInstagram />
        </Link>
        <Link href='/'>
          <FaTwitter />
        </Link>
        <Link href='/'>
          <FaYoutube />
        </Link>
        </div>

        {/* copyright  */}
        <div className=" text-white font-medium">
          <div>Copyright &copy; Pizzaland 2024. All rights reserved.</div>
        </div>
      </div>
    </div>
  </footer>;
};

export default Footer;
