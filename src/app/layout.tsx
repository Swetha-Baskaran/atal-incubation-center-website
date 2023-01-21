import Chatbot from './Chatbot'
import ConnectWithUs from './ConnectWithUs'
import Footer from './Footer'
import './globals.css'
import Header from './Header'
import QuickLink from './QuickLink'

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
