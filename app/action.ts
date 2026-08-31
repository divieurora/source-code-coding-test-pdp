'use server'

import { revalidatePath } from 'next/cache'
import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'

const prisma = new PrismaClient()

export async function submitPengajuan(formData: FormData) {
  await prisma.pengajuan.create({
    data: {
      nama: formData.get('nama') as string,
      nik: formData.get('nik') as string,
      tanggalLahir: formData.get('tanggalLahir') as string,
      statusPerkawinan: formData.get('statusPerkawinan') as string,
      dataPasangan: formData.get('dataPasangan') as string,
      
      dealer: formData.get('dealer') as string,
      merkKendaraan: formData.get('merkKendaraan') as string,
      modelKendaraan: formData.get('modelKendaraan') as string,
      tipeKendaraan: formData.get('tipeKendaraan') as string,
      warnaKendaraan: formData.get('warnaKendaraan') as string,
      hargaKendaraan: parseFloat(formData.get('hargaKendaraan') as string),
      
      asuransi: formData.get('asuransi') as string,
      downPayment: parseFloat(formData.get('downPayment') as string),
      lamaKreditBulan: parseInt(formData.get('lamaKreditBulan') as string),
      angsuranBulan: parseFloat(formData.get('angsuranBulan') as string),
    },
  })
  redirect('/approval')
}