import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import LogoutButton from '../components/LogoutButton'

export default async function Page() {
  const session = await getServerSession()
  if (!session) {
    redirect("/")
  }
  return (
    <div>
      <h1>Olá, {session?.user?.name}</h1>
      <div><LogoutButton/></div>
      DashBoard
    </div>
  )
}
