"use client";
import Chatbot from '../Components/Chatbot'
import ConnectWithUs from '../Components/ConnectWithUs'
import Footer from '../Components/Footer'
import './globals.css'
import Header from '../Components/LandingPageComponents/Header'
import QuickLink from '../Components/QuickLink'
import Navigation from '@/Components/Navbar'
import Drawer from '@/Components/Navbar/drawer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navigation />
        <ConnectWithUs/>  
        <Chatbot/>
        <QuickLink/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
