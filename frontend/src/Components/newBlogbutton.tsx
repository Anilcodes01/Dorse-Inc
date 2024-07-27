import { useNavigate } from "react-router-dom"


export function NewBlogButton() {
    const navigate = useNavigate();
    return <div>
        <button onClick={() => {
            navigate('/publish')
        }} type="button" className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">New Blog</button>

    </div>
}