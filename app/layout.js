// 'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/component/Navbar'
import { AuthContextProvider } from '@/context/AuthContext'
import 'bootstrap/dist/css/bootstrap.css';

import dynamic from 'next/dynamic';

const DynamicBootstrap = dynamic(
  () => require('bootstrap/dist/js/bootstrap.min.js'),
  { ssr: false }
);


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthContextProvider>
        <nav>
          <Navbar/>
        </nav>
        
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
