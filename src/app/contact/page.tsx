import Header from "@/components/Header"
import Image from "next/image"
import mainImage from "@/images/usama.jpg"

const contact = () => {
  return (
    <div className="bg-black">
        <Header />
        <div className="lg:flex justify-around lg:flex-row-reverse">
            <div className="my-4">
                <Image src={mainImage} alt="author image" className="border-b-4 border-green-400 rounded-[30px] lg:h-[700px] lg:w-[400px] -mt-24 mx-auto" />
            </div>
            <div className="grid place-content-center py-24">
                <h1 className="text-green-400 text-4xl font-bold"> Contact me</h1>
                <div className="mt-10">
                <p className="text-white text-2xl mb-3">Contact with E-mail</p>
                <a href="mailto:ahtishamrajputchohan@gmail.com"
                    className=" text-xl text-green-200 hover:text-green-400 border-b-2 border-green-200 hover:border-green-400">ahtishamrajputchohan@gmail.com</a>
                </div>
                <div className="mt-10">
                <p className="text-white text-2xl mb-3">Contact with LinkedIn</p>
                <a href="https://www.linkedin.com/in/muhammad-usama-37732b2b8/"
                    className=" text-xl text-green-200 hover:text-green-400 border-b-2 border-green-200 hover:border-green-400">www.linkedin.com/in/muhammad-usama-37732b2b8/</a>
                </div>
             </div>   
        </div>
    </div>
  )
}

export default contact