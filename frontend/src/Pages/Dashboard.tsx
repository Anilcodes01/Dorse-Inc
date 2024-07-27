import { useNavigate } from "react-router-dom";
import {  DashboardAppbar } from "../Components/DashboardAppbar";




export function Dashboard() {
    const navigate = useNavigate();
    return <div >
        <DashboardAppbar />
        <div className=" h-screen">
            <div className="font-extrabold font-poppins text-8xl p-12">
                Read, write and Learn,
                <p>Human stories and Ideas!</p>
            </div>
            <div className="text-8xl text-sky-400 pl-12 pt-16 font-poppins font-extrabold">
                Dorse.com
            </div>
            <div className="pl-12 pt-8">
        <button onClick={() => {
            navigate('/signup')
        }} type="button" className="text-white h-14 w-48 bg-gray-800 text-xl hover:bg-gray-900 font-poppins rounded-full text-sm px-8 py-2.5 me-2 mb-2 ">Get Started</button>

    </div>

        </div>
    </div>
}