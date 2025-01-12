import Image from "next/image"
import Link from "next/link"
import logo from "@/images/logo.jpg"
const Header = () => {
  return (
    <div className="sticky top-0 ">
        
        <div className="bg-green-400 flex justify-around  items-center h-20 px-4 ">
            <div className="  ">
                <Image src={logo} alt="logo" className="w-20 h-20 rounded-md"/>
            </div>
            <div className="">
                <ul className="flex gap-10 text-white text-xl">
                <li className="">
                <Link href ="./">Home</Link>
                    </li>
                    <li className="">
                    <Link href ="./about">About</Link>
                    </li>
                    <li className="">
                        <Link href ="./contact">contact</Link>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Header