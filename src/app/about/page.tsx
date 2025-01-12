import Header from "@/components/Header"
import Image from "next/image"
import mainImage from "@/images/usama.jpg"

const about = () => {
  return (
    <div className="bg-black">
        <Header />
        <div className="lg:flex lg:justify-around content-center lg:flex-row-reverse mx-3">
            <div className="my-3">
                <Image src={mainImage} alt="author image" className="border-b-4 border-green-400 rounded-[30px] lg:h-[700px] lg:w-[400px] -mt-24 mx-auto" />
            </div>
            <div className="grid place-content-center py-24 lg:mb-3">
            <h1 className="text-green-400 text-4xl font-bold"> About me</h1>
            <h2 className="text-green-200 text-3xl mt-3">My coding journey</h2>
            <p className="text-white text-xl">I start my coding journey with 
                <span className="text-green-300 font-bold text-2xl cursor-pointer"><i><a href="https://www.governorsindh.com/"> GIAIC</a></i></span></p>
            
            <ul className="text-white text-xl list-disc ml-4">
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
                <p className="text-white text-2xl mb-3"> </p>
                <a href="https://www.governorsindh.com/"
                    className=" text-xl text-green-200 hover:text-green-400 border-b-2 border-green-200 hover:border-green-400">GIAIC</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about