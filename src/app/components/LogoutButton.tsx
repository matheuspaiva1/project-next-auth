"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

export default function LogoutButton() {


  return (
    <button 
    className='btn btn-secondary h- w-32'
    onClick={()=> signOut()}>
      Sair
    </button>
  )
}
