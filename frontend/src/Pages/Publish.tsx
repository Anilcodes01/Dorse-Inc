import { useState } from "react";
import { Appbar } from "../Components/Appbar"
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";




export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleEditorChange = (content: string) => {
        setContent(content)
    }

const handlePublish = async () => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
            title, content
        }, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        navigate(`/blog/${response.data.id}`)
    } catch (error) {
        console.log("Failed to publish blog:", error)
    }
}

    return <div>
        <div>
            <Appbar />
        </div >
        <div className="w-full  flex justify-center h-screen">
         <div className="pt-8 max-w-screen-lg w-full">
            <input onChange={(e) => {
                setTitle(e.target.value)
            }} className="h-20 p-2 bg-slate-100 font-extrabold rounded outline-none w-full text-4xl" type="text"  placeholder="Title..."/>


            <div className="pt-8">
            <Editor
                apiKey="5i2hotlss6fkqwz88af3yqq578kzp22a9u3pwamqrgm94cwy"
                value={content}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount',
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help',
                }}
                onEditorChange={handleEditorChange}
            />
            
        </div>
        <div className="pt-4 flex justify-center">
        <button onClick={handlePublish} type="button" className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">Publish</button>

    </div>
         </div>
        
        </div>
       
    </div>
}