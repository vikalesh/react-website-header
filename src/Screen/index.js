import React,{useState} from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Home = () => {

     const [isActive, setIsActive] = useState(false)

     const toggle = ()=>{
         setIsActive(!isActive)
     } 

    return (
        <>
            <Sidebar isActive={isActive}  toggle={toggle} />
            <Navbar toggle={toggle} />
        </>
    )
}

export default Home
