import { submitPengajuan } from './actions'

export default function CollectDataPage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Form Pengajuan Kredit Digital</h1>
      
      <form action={submitPengajuan} className="flex flex-col gap-6">
        
        <div className="bg-gray-50 p-4 rounded border">
          <h2 className="font-bold mb-3 border-b pb-2">Data Konsumen</h2>
          <div className="grid grid-cols-2 gap-4">
            <input name="nama" placeholder="Nama Lengkap" required className="border p-2 rounded" />
            <input name="nik" placeholder="NIK" required className="border p-2 rounded" />
            <input name="tanggalLahir" type="date" required className="border p-2 rounded" />
            <select name="statusPerkawinan" required className="border p-2 rounded bg-white">
              <option value="">Pilih Status Perkawinan...</option>
              <option value="Belum Menikah">Belum Menikah</option>
              <option value="Menikah">Menikah</option>
            </select>
            <input name="dataPasangan" placeholder="Data Pasangan (Jika Ada)" className="border p-2 rounded col-span-2" />
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded border">
          <h2 className="font-bold mb-3 border-b pb-2">Data Kendaraan</h2>
          <div className="grid grid-cols-2 gap-4">
            <input name="dealer" placeholder="Nama Dealer" required className="border p-2 rounded col-span-2" />
            <input name="merkKendaraan" placeholder="Merk Kendaraan" required className="border p-2 rounded" />
            <input name="modelKendaraan" placeholder="Model Kendaraan" required className="border p-2 rounded" />
            <input name="tipeKendaraan" placeholder="Tipe Kendaraan" required className="border p-2 rounded" />
            <input name="warnaKendaraan" placeholder="Warna Kendaraan" required className="border p-2 rounded" />
            <input name="hargaKendaraan" type="number" placeholder="Harga Kendaraan" required className="border p-2 rounded col-span-2" />
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded border">
          <h2 className="font-bold mb-3 border-b pb-2">Data Pinjaman</h2>
          <div className="grid grid-cols-2 gap-4">
            <input name="asuransi" placeholder="Jenis Asuransi" required className="border p-2 rounded" />
            <input name="downPayment" type="number" placeholder="Down Payment (DP)" required className="border p-2 rounded" />
            <input name="lamaKreditBulan" type="number" placeholder="Lama Kredit (Bulan)" required className="border p-2 rounded" />
            <input name="angsuranBulan" type="number" placeholder="Angsuran / Bulan" required className="border p-2 rounded" />
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded border border-blue-200">
          <h2 className="font-bold mb-3 border-b border-blue-200 pb-2">Upload Dokumen</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <label className="block mb-1 font-semibold">KTP</label>
              <input type="file" name="fileKtp" accept="image/*,.pdf" className="bg-white border w-full p-1" />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Kartu Keluarga</label>
              <input type="file" name="fileKk" accept="image/*,.pdf" className="bg-white border w-full p-1" />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Surat Pemesanan Kendaraan (SPK)</label>
              <input type="file" name="fileSpk" accept="image/*,.pdf" className="bg-white border w-full p-1" />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Bukti Bayar Tanda Jadi</label>
              <input type="file" name="fileBuktiBayar" accept="image/*,.pdf" className="bg-white border w-full p-1" />
            </div>
          </div>
        </div>

        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded mt-2 shadow">
          Submit Data Pengajuan
        </button>
      </form>
    </main>
  )
}