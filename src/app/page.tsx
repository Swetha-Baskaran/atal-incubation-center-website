import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from '@/Components/LandingPageComponents/Header'
import About from '@/Components/LandingPageComponents/About'
import FootPrints from '@/Components/LandingPageComponents/FootPrints'
import Partners from '@/Components/LandingPageComponents/Partners'
import FocusArea from '@/Components/LandingPageComponents/FocusArea'

const inter = Inter({ subsets: ['latin'] })

// landing page
export default function Home() {
  return (
    <div>
      <Header />
      <FootPrints />
      <About />
      <FocusArea />
      <Partners />
    </div>
  )
}
