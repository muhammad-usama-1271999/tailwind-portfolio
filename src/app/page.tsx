import Image from "next/image";
import Header from "@/components/Header";
import mainImage from "@/images/usama.jpg"

export default function Home() {
    return (
        <div className="bg-black ">
            <Header />
            <div className="lg:flex justify-around lg:flex-row-reverse ">
              <div className="my-4">
                  <Image src={mainImage} alt="author image" className="border-b-4 border-green-400 rounded-[30px] lg:h-[700px] lg:w-[400px] -mt-24 mx-auto" />
              </div>
              <div className="grid place-content-center py-24">
                <p className="text-white text-2xl">Hi,</p>
                <p className="text-white text-3xl font-bold mt-3">I Am <span className="text-green-400 text-4xl font-extrabold"><i>USAMA</i></span></p>
                <p className="text-white text-3xl font-bold mt-4">A <span className="text-green-400 text-4xl font-bold">Frontend Developer</span></p>
                <button className=" hover:bg-green-400 text-green-400 text-xl hover:text-white py-3 rounded-[30px] border-2 border-green-400 mt-20"> 
                    <a href="https://app.netlify.com/teams/muhammad-usama-1271999" className="">My Projects</a></button>
              </div>
            </div>
            <div className="grid place-content-center mb-3 mt-24 mx-4">
              <h1 className="text-green-400 text-4xl font-bold"> About me</h1>
              <h2 className="text-green-200 text-2xl mt-3">My coding journey</h2>
              <p className="text-white text-xl">I start my coding journey with 
                <span className="text-green-300 font-bold text-xl cursor-pointer"><i><a href="https://www.governorsindh.com/"> GIAIC</a></i></span></p>
            
              <ul className="text-white text-lg list-disc ml-4">
                <li className="">I was shocked then i face coding.</li>
                <li className="">I dont know what is coding and how its work in apps and websites</li>
                <li className="">I learn HTML, CSS, Javascript, Typescript in Quarter1</li>
                <li className="">Then I code many Node.js project in Quarter1 like: todoList, currencyConverter, simpleATM and etc </li>
                <li className="">And again I passed in Quarter1 Final Exam with A grade (90 percentile)</li>
                <li className="">Now i was gone Quarter2 Finally </li>
                <li className="">Quarter2 course very excited like:React.js, Next.js, TailwindCSS, ShadeCN, Sanity and many others libraries and Framework</li>
                <li className="">First of all I learn these libraries and framework and then I code some exciting project</li>
                <li className="">Now I become a Frontend Developer</li>
                <li className="">My coding journey is going to fullstack developer</li>
                <li className="">Now I decide I spent whole life with code and follow the path of Sir ZIA KHAN he is hero of young generation </li>
              </ul>
              <div className="mt-10">
                <p className="text-white text-xl mb-3">My Academy
                <a href="https://www.governorsindh.com/"
                    className=" text-xl text-green-200 hover:text-green-400 border-b-2 border-green-200 hover:border-green-400"> GIAIC </a>
                  </p>
              </div>
            </div>
            <div className="grid place-content-center py-24">
                <h1 className="text-green-400 text-4xl font-bold"> Contact me</h1>
                <div className="mt-10">
                <p className="text-white text-xl mb-3">Contact with E-mail</p>
                <a href="mailto:ahtishamrajputchohan@gmail.com"
                    className=" text-lg text-green-200 hover:text-green-400 border-b-2 border-green-200 hover:border-green-400">ahtishamrajputchohan@gmail.com</a>
                </div>
                <div className="mt-10">
                <p className="text-white text-xl mb-3">Contact with LinkedIn</p>
                <a href="https://www.linkedin.com/in/muhammad-usama-37732b2b8/"
                    className=" text-lg text-green-200 hover:text-green-400 border-b-2 border-green-200 hover:border-green-400">www.linkedin.com/in/muhammad-usama-37732b2b8/</a>
                </div>
            </div>
        </div>
    );
}
