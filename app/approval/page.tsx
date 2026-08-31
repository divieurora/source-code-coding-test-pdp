import { PrismaClient } from '@prisma/client'
import { updateStatus } from '../actions'

const prisma = new PrismaClient()

export default async function ApprovalDashboard() {
  const dataPengajuan = await prisma.pengajuan.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard Approval (Atasan Marketing)</h1>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">Konsumen</th>
              <th className="p-3 border">Kendaraan</th>
              <th className="p-3 border">Keuangan</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataPengajuan.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <p className="font-semibold">{item.namaKonsumen}</p>
                  <p className="text-sm text-gray-500">NIK: {item.nik}</p>
                </td>
                <td className="p-3">{item.merkKendaraan}</td>
                <td className="p-3">
                  <p>Harga: Rp{item.hargaKendaraan}</p>
                  <p className="text-sm text-gray-500">DP: Rp{item.downPayment}</p>
                </td>
                <td className="p-3 font-bold">{item.status}</td>
                <td className="p-3 flex justify-center gap-2">
                  {item.status === 'PENDING' ? (
                    <>
                      <form action={updateStatus.bind(null, item.id, 'APPROVED')}>
                        <button className="bg-green-500 text-white px-4 py-2 rounded text-sm hover:bg-green-600">Approve</button>
                      </form>
                      <form action={updateStatus.bind(null, item.id, 'REJECTED')}>
                        <button className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600">Reject</button>
                      </form>
                    </>
                  ) : (
                    <span className="text-gray-400 italic">Selesai</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}