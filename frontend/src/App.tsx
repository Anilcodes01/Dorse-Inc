import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from "./Pages/Signup"
import { Signin } from "./Pages/Signin"
import { Dashboard } from "./Pages/Dashboard"
import { AllBlogs } from "./Pages/Allblogs"
import { FullBlog } from "./Pages/Fullblog"
import { Publish } from "./Pages/Publish"



function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/blogs" element={<AllBlogs />}/>
      <Route path="/blog/:id" element={<FullBlog />}/>
      <Route path="/publish" element={<Publish />}/>
     
    </Routes>
    
    
    </BrowserRouter>

  )
}

export default App
