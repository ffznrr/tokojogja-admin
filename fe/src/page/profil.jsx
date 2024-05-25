import { useState } from "react"
import CardProduct from "../components/cardProduct"
import CardUpdate from "../components/cardUpdate"
import CardDel from "../components/cardDel"
import CardKe from "../components/cardKeuangan"


const Profil = () => {
    const [upButton, setUpButton] = useState(true)
    const toHome = () => {
        window.location.replace("/home")
    }
    const logOut = () => { 
        localStorage.removeItem('token')
        window.location.href = "/login"
    }
return(
    <div className="min-h-screen bg-red-100">
    <div className="w-full h-36 border bg-sky-400  flex justify-between items-center px-12">
    <h1 className="text-3xl font-sedan uppercase text-white sm:text-4xl" >Toko Jogja</h1>
    <div className="flex">
    {upButton? <div className="border mt-20 hidden">
    <ul>
        <li className="p-3 border"><button>Profile</button></li>
        <li className="p-3 border"><button>LogOut</button></li>
    </ul>
    </div> : <div className="border mt-20 bg-black text-white">
    <ul>
        <li className="p-3 border"><button onClick={toHome}>Home</button></li>
        <li className="p-3 border"><button onClick={logOut}>LogOut</button></li>
    </ul>
    </div>}       
    <button onClick={()=>{
        setUpButton(!upButton)
    }}>
    {upButton? <img className="w-10 h-10 rounded-lg" src="/profile.svg" alt="" /> : <img className="w-10 h-10 rounded-lg" src="/close.svg" alt="" />}
    </button>
    </div>
    </div>
    <div className="m-auto h-full">
<div className="grid grid-cols-3 p-20">
<CardProduct nama="Add Product." namaModal="Add Product" />
<CardUpdate namad="Update Product." />
<CardDel />
<CardKe />
</div>
    </div>
    </div>
)
}

export default Profil