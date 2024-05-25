const CardKe = () => {
    return(
        <div>{/* Open the modal using document.getElementById('ID').showModal() method */}
        <div onClick={()=>document.getElementById('keuangan').showModal()} className="card card-compact w-96 bg-base-100 shadow-xl mb-5 hover:bg-orange-300">
        <figure>
          <img className="w-full h-52" src="/profile.svg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-center font-bold text-2xl">test</h2>
        </div>
      </div>
        <dialog id="keuangan" className="modal">
          <div className="modal-box max-w-7xl">
          <h1 className="text-3xl text-center">LAPORAN KEUANGAN</h1>
          <table class="border-separate border border-slate-500 w-full">
  <thead>
    <tr>
      <th class="border border-slate-600 ...">No</th>
      <th class="border border-slate-600 ...">Nama Barang</th>
      <th class="border border-slate-600 ...">Jumlah Barang</th>
      <th class="border border-slate-600 ...">Harga Satuan</th>
      <th class="border border-slate-600 ...">Harga Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-700 text-center">1</td>
      <td class="border border-slate-700 text-center">Teh</td>
      <td class="border border-slate-700 text-center">5</td>
      <td class="border border-slate-700 text-center">Rp. 15.000</td>
      <td class="border border-slate-700 text-center">Rp. 60.000</td>
    </tr>
  </tbody>
</table>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog></div>
    )
}

export default CardKe;