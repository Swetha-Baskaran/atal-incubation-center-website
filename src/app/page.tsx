import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from '@/Components/LandingPageComponents/Header'
import About from '@/Components/LandingPageComponents/About'
import FootPrints from '@/Components/LandingPageComponents/IncubationNumber'
import Partners from '@/Components/LandingPageComponents/Partners'
import Facilities from '@/Components/LandingPageComponents/Facilities'

const inter = Inter({ subsets: ['latin'] })

// landing page
export default function Home() {
  return (
    <div>
      <Header />
      <FootPrints />
      <About />
      <Partners />
    </div>
  )
}
