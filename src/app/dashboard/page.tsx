import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Page() {
  const session = await getServerSession()
  if (!session) {
    redirect("/")
  }
  return (
    <div>
      <h1>Olá, {session?.user?.name}</h1>
      DashBoard
    </div>
  )
}
