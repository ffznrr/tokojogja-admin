import axios from "axios"
import { useEffect, useState } from "react"
// import { useSelector, useDispatch } from "react-redux";
// import { kurang, tambah } from "../redux/action/actionTester";

const Home = () => {


const [upButton, setUpButton] = useState(true);
const [product, setProduct] = useState([]);
const [modal, setModal] = useState({})
// const dispatch = useDispatch();
// const tampilkan = useSelector((state)=> state.hitungReducer)
// console.log(tampilkan)


useEffect(() => {
    getProduct();
}, [])

const toProfile =()=>{
    window.location.href = './profil'
}
const logOut = ()=>{
    localStorage.removeItem('token')
    window.location.href = "/login"
}

const getProduct = (callback) => {
    axios.get('http://localhost:4000/api/getbarang')
    .then((response)=>{
        setProduct(response.data.msg)
    }).catch((error)=>{
        console.log(error)
    });
}

const handle = (id) => {
const sortProduct = product.find((item)=>item.id === id);
setModal(sortProduct);
document.getElementById('home').showModal()
}

const updateStock = (number,id) => {
if (!modal) return;

const updateModal = {...modal, stock: modal.stock + number}
setModal(updateModal)
// console.log(updateModal)

apiEdit((error, response)=>{
    if (error){
        console.error("Gagal memperbarui produk", error)
        return
    }
    // console.log("Produk berhasil diperbarui", response.data);
    setProduct(product.map(product => product.id === modal.id ? updateModal : product));
}, updateModal);
};

const apiEdit= (id) =>{
    axios.put(`http://localhost:4000/api/updatebarang/${id}`, {
        stock: product.stock,
    }).then((response)=>{
        // console.log(response)
    }).catch((error)=>{
        console.error(error.message)
    })
}

return(
    <div className="min-h-screen">
        {/* navbar */}
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
        <li className="p-3 border"><button onClick={toProfile}>Profile</button></li>
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
{/* navbar */}
<div className="border-4 mx-auto my-10 container border-red-400 h-full grid grid-cols-3">

{
    product.map((data)=>(
<div onClick={()=>{handle(data.id)}} key={data.id} className="card w-96 bg-base-100 shadow-xl mx-auto hover:bg-red-300 hover:text-white">
  <figure  className="px-10 pt-10">
    <img src={data.gambar_barang} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{data.nama_barang}</h2>
    <h4>Stock : {data.stock}</h4>
  </div>
</div>
))}
    </div>

    {/* Open the modal using document.getElementById('ID').showModal() method */}
{
    modal && (
<dialog id="home" className="modal">
  <div className="modal-box">
    <img src={modal.gambar_barang} alt="gambar" />
    <h3 className="font-bold text-lg text-center">{modal.nama_barang}</h3>
    <h4 className="text-center">stock : {modal.stock}</h4>
    <h4 className="text-center">harga : {modal.harga}</h4>
    <div className="flex justify-center mt-4">
    <button onClick={()=>{updateStock(-1, modal.id)}} className="btn mr-5">-</button>
    <button onClick={()=>{updateStock(+1, modal.id)}} className="btn mr-5">+</button>
    </div>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
)}
    </div>
    
)
}


export default Home