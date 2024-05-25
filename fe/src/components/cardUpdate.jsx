import { useEffect, useState } from "react";
import axios from "axios";

const CardUpdate = (props) => {
  const { namad } = props;

  const [modal, setModal] = useState([]);
  const [update, setUpdate] = useState({});
  const [loading, setLoading] = useState(false)
  console.log(update);

  useEffect(() => {
    fetchBarang();
  }, []);

  const fetchBarang = () => {
    axios
      .get("http://localhost:4000/api/getbarang")
      .then((response) => {
        setModal(response.data.msg);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handle = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const nama_barang = form.querySelector('input[name="nama_barang"]')?.value;
    const stock = form.querySelector('input[name="stock"]')?.value;
    const harga = form.querySelector('input[name="harga"]')?.value;
    const gambar_barang = form.querySelector('input[name="gambar_barang"]')?.files[0];
    console.log(nama_barang);

    input(nama_barang, stock, harga, gambar_barang);
  };

  const input = (nama_barang, stock, harga, gambar_barang) => {
    if (!update.id) {
      console.error('update.id is not defined');
      return;
    }

    const formData = new FormData();
    formData.append('nama_barang', nama_barang);
    formData.append('stock', stock);
    formData.append('harga', harga);
    formData.append('gambar_barang', gambar_barang);

    axios.put(`http://localhost:4000/api/updatebarang/${update.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((response) => {
      fetchBarang();
      console.log('update success');
      document.getElementById('mai').close();
    }).catch((error) => {
      console.error(error.message);
    });
  }

  const handleUpdate = (id) => {
    document.getElementById("mai").showModal();

    axios.get(`http://localhost:4000/api/barangid/${id}`)
    .then((response) => {
      setUpdate(response.data.msg);
    }).catch((error) => {
      console.error(error);
    });
  }

  const handel = () =>{
    fetchBarang();
    document.getElementById("modals").showModal();

  }

  return (
    <div>
      <div
        onClick={handel}
        className="card card-compact w-96 bg-base-100 shadow-xl mb-5 hover:bg-orange-300">
        <figure>
          <img className="w-full h-52" src="/profile.svg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-center font-bold text-2xl">{namad}</h2>
        </div>
      </div>
      <dialog id="modals" className="modal">
        <div className="modal-box max-w-7xl flex flex-wrap">
          {modal.sort((a, b) => a.id - b.id).map((data) => (
            <div key={data.id} onClick={() => { handleUpdate(data.id) }} className="w-96 border-2 rounded-xl">
              <img className="w-32 h-32 mx-auto" src={data.gambar_barang} alt="" />
              <p className="text-center">{data.nama_barang}</p>
              <h4 className="text-center">Stock: {data.stock}</h4>
            </div>
          ))}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="mai" className="modal">
        <div className="modal-box w-[800px]">
          <h3 className="font-bold text-lg text-center mb-5">Update Product.</h3>
          <form onSubmit={handle}>
            <div className="mb-3">
              <label>Nama Barang</label>
              <input
                type="text"
                name="nama_barang"
                className="input input-bordered w-full max-w-xs ml-5"
                defaultValue={update.nama_barang || ""}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stock">Stock</label>
              <input
                type="number"
                name="stock"
                className="input input-bordered w-full max-w-xs ml-20"
                defaultValue={update.stock || ""}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="harga">Harga</label>
              <input
                type="number"
                name="harga"
                className="input input-bordered w-full max-w-xs ml-[75px]"
                defaultValue={update.harga || ""}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gambar_barang">Gambar Barang</label>
              <input
                type="file"
                name="gambar_barang"
                className="ml-[6px]"
              />
            </div>
            <div className="flex justify-center">
              <button className="btn w-1/2" type="submit" disabled={loading}>
               {loading ? " Loading...": "Update"}
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

export default CardUpdate;
