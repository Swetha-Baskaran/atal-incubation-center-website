import Chatbot from '../Components/Chatbot'
import ConnectWithUs from '../Components/ConnectWithUs'
import Footer from '../Components/Footer'
import './globals.css'
import Header from '../Components/Header'
import QuickLink from '../Components/QuickLink'

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
        <QuickLink/>
        <Header/>
        <ConnectWithUs/>  
        <Chatbot/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
