import axios from "axios";
import { useEffect, useState } from "react";

const CardDel = () => {
  let isi;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
    
  }, []);

  const getProduct = () => {
    axios.get('http://localhost:4000/api/getbarang')
      .then((response) => {
        setProduct(response.data.msg);
      }).catch((error) => {
        console.error(error.message);
      });
  };

  const handleDel = (id) => {
    document.getElementById('del').showModal();
    isi = id;
  };

  const handleHapus = (isi) => {
    axios.delete(`http://localhost:4000/api/deletebarang/${isi}`)
      .then((response) => {
        console.log(`deleted post id ${isi}`);
        // Update the products state by filtering out the deleted product
        setProduct((prevProducts) => prevProducts.filter(product => product.id !== isi));

        document.getElementById('del').close();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCancel = () => {
    document.getElementById('del').close();
  };

  return (
    <div onClick={() => document.getElementById('my_modal_5').showModal()} className="card card-compact w-96 bg-base-100 shadow-xl mb-5 hover:bg-orange-300">
      <figure>
        <img className="w-full h-52" src="/profile.svg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-center font-bold text-2xl">Delete Product.</h2>
      </div>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box max-w-3xl grid grid-cols-3">
          {product.sort((a, b) => (a.id - b.id)).map((data) => (
            <div key={data.id} onClick={() => { handleDel(data.id) }} className="border-2 rounded-xl p-2 m-5 hover:bg-red-300">
              <img className="w-32 h-32 mx-auto" src={data.gambar_barang} alt="" />
              <h3 className="font-bold text-lg text-center mb-5">{data.nama_barang}</h3>
              <h4 className="text-center">Stock : {data.stock}</h4>
            </div>
          ))}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="del" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-5 text-center">Anda Yakin untuk menghapus?</h3>
          <div className="flex justify-center">
            <button onClick={() => { handleHapus(isi) }} className="btn mr-5 bg-orange-600 text-white">Hapus</button>
            <button onClick={() => { handleCancel()}} className="btn ml-5 bg-green-400 text-white">Tidak</button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default CardDel;
