import { ArrowLeftRight, Banknote, Smartphone, Wifi, Wallet, Headphones, MapPin, Layers, Clock, HeartHandshake } from 'lucide-react'
import toko from '../assets/toko.jpg'

export const business = {
  name: 'Arya Cell',
  subtitle: 'Agen BRILink Cibungbulang',
  address: 'Kp. Jawa, RT002/RW002, Situ Ilir, Kecamatan Cibungbulang, Kabupaten Bogor, Jawa Barat 16630.',
  phone: '0896-5330-0800',
  phoneHref: 'tel:+6289653300800',
  whatsapp: '6289653300800',
  waMessage: 'Halo Arya Cell, saya ingin bertanya mengenai layanan yang tersedia.',
  mapsUrl: 'https://maps.app.goo.gl/V91D6wSfmdcuykSz7',
  mapsEmbed: 'https://www.google.com/maps?q=9MW3%2B6HM%20Situ%20Ilir%20Cibungbulang&output=embed',
  rating: '4,4/5 dari 48 ulasan Google Maps',
  photo: toko,
}
export const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.waMessage)}`

export const waLinkBrilink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent('Halo Arya Cell, saya ingin bertanya mengenai layanan transfer dan tarik tunai Agen BRILink.')}`

export const navLinks = [
  { label: 'Beranda', href: '#beranda' }, { label: 'Layanan', href: '#layanan' },
  { label: 'Tentang Kami', href: '#tentang' }, { label: 'Galeri', href: '#galeri' }, { label: 'Lokasi', href: '#lokasi' },
]
export const brilinkServices = [
  { icon: ArrowLeftRight, title: 'Transfer Antarbank', desc: 'Membantu kebutuhan pengiriman uang ke berbagai rekening bank.' },
  { icon: Banknote, title: 'Tarik Tunai', desc: 'Layanan penarikan uang tunai melalui Agen BRILink.' },
]
export const counterServices = [
  { icon: Smartphone, title: 'Pulsa Elektrik', desc: 'Memenuhi kebutuhan pulsa untuk berbagai operator seluler.' },
  { icon: Wifi, title: 'Paket Data Internet', desc: 'Pilihan paket internet untuk menunjang aktivitas digital Anda.' },
  { icon: Wallet, title: 'Top Up E-Wallet', desc: 'Membantu kebutuhan pengisian saldo dompet digital yang tersedia.' },
  { icon: Headphones, title: 'Aksesori Handphone', desc: 'Berbagai kebutuhan aksesori untuk perangkat handphone.' },
]
export const advantages = [
  { icon: MapPin, title: 'Lokasi Mudah Dijangkau', desc: 'Berada di Situ Ilir, Cibungbulang.' },
  { icon: Layers, title: 'Layanan Praktis dalam Satu Tempat', desc: 'Transfer, tarik tunai, pulsa, data, dan aksesori.' },
  { icon: Clock, title: 'Jam Operasional Setiap Hari', desc: 'Buka setiap hari pukul 08.00–21.30.' },
  { icon: HeartHandshake, title: 'Pelayanan Ramah dan Membantu', desc: 'Tanyakan kebutuhan Anda langsung kepada kami.' },
]
// Ganti `src` dengan foto asli (import dari src/assets). Isi null = tampil placeholder.
export const gallery = [
  { title: 'Tampak depan toko Arya Cell', src: toko },
  { title: 'Area pelayanan', src: null },
  { title: 'Produk aksesori handphone', src: null },
  { title: 'Area transaksi BRILink', src: null },
]
export const hours = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'].map((day) => ({ day, time: '08.00–21.30' }))
