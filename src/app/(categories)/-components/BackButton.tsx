"use client"
import { cn } from '@/utils/lib'
import { useRouter } from 'next/navigation'
import React from 'react'

const BackButton = ({className} : {className? : string}) => {
  const router = useRouter()
  return (
    <button
      className={cn("text-black-500 opacity-50 text-[15px] leading-[25px]", className)}
      onClick={router.back}
    >
      Go Back
    </button>
  )
}

export default BackButton
