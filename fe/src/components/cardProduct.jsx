import axios from "axios";
import { useEffect, useState } from "react";

const CardProduct = (props) => {
  const { nama, namaModal } = props;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(products);

  useEffect(() => {
    getProduct();
  }, []);

  const handle = (event) => {
    event.preventDefault();

    const form = event.target;
    const nama_barang = form.querySelector('input[name="nama_barang"]')?.value;
    const stock = form.querySelector('input[name="stock"]')?.value;
    const harga = form.querySelector('input[name="harga"]')?.value;
    const gambar_barang = form.querySelector('input[name="gambar_barang"]')?.files[0];

    const formData = new FormData();
    formData.append('nama_barang', nama_barang);
    formData.append('stock', stock);
    formData.append('harga', harga);
    formData.append('gambar_barang', gambar_barang);

    setLoading(true); 
    consume(formData);
  };
  
  const getProduct = () => {
    axios.get('http://localhost:4000/api/getbarang')
      .then((response) => {
        setProducts(response.data.msg);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const consume = (formData) => {
    axios.post('http://localhost:4000/api/barangbaru', formData)
      .then((response) => {
        setProducts((prevProducts) => [...prevProducts, response.data.msg]);
        setLoading(false);  // Set loading to false after the upload is complete
        document.getElementById('my_modal_2').close();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);  // Set loading to false if an error occurs
      });
  };

  return (
    <div onClick={() => document.getElementById('my_modal_2').showModal()} className="card card-compact w-96 bg-base-100 shadow-xl mb-5 hover:bg-orange-300">
      <figure>
        <img className="w-full h-52" src="/profile.svg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-center font-bold text-2xl">{nama}</h2>
      </div>  
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-[800px]">
          <img src="" alt="" />
          <h3 className="font-bold text-lg text-center mb-5">{namaModal}</h3>
          <form onSubmit={handle}>
            <div className="mb-3">
              <label>Nama Barang</label>
              <input type="text" name="nama_barang" className="input input-bordered w-full max-w-xs ml-5" />
            </div>
            <div className="mb-3">
              <label htmlFor="stock">Stock</label>
              <input type="number" name="stock" className="input input-bordered w-full max-w-xs ml-20" />
            </div>
            <div className="mb-3">
              <label htmlFor="harga">Harga</label>
              <input type="number" name="harga" className="input input-bordered w-full max-w-xs ml-[75px]" />
            </div>
            <div className="mb-3">
              <label htmlFor="gambar_barang">Gambar Barang</label>
              <input type="file" name="gambar_barang" className="ml-[6px]" />
            </div>
            <div className="flex justify-center">
              <button className="btn w-1/2" type="submit" disabled={loading}>
                {loading ? "Loading..." : "Add"}
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default CardProduct;
