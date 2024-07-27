import { useNavigate } from "react-router-dom"
import { Logout } from "./Logoutbtn"
import { NewBlogButton } from "./newBlogbutton"


export const Appbar =()  => {
    const navigate = useNavigate();
    return <div className="h-20 justify-between border-b  flex items-center">
    <div className=" font-bold ml-20 font-poppins text-3xl">
        <button onClick={() => {
            navigate('/blogs')
        }}>Dorse</button>
    </div>
    <div className="flex pt-2 gap-4 items-center mr-10">
      <NewBlogButton />
      <Logout />
    </div>
</div>
}