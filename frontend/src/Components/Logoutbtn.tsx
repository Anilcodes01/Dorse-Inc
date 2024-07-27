import { useNavigate } from "react-router-dom"






export function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token")

        navigate('/')
    }
    return <div>
        <button onClick={handleLogout} type="button" className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">Logout</button>

    </div>
}