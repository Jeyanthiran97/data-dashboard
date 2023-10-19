import Head from 'next/head'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import SideMenu from '@/components/SideMenu'
import Dashboard from "@/pages/dashboard/Dashboard"
import {useSession} from "next-auth/react"
import Login from './login/Login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <div>
          <Header />
          {
            session && (
              <div className={`${styles.main} `}>
                <SideMenu />
                <Dashboard />
              </div>
            )
          }
          <Login />
        </div>
      </main>
    </>
  )
}
