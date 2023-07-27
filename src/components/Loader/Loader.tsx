import { CircularProgress } from '@mui/material'
import React from 'react'
import './Loader.css'

export default function Loader() {
  return (
    <div className='flex fixed w-full h-[70%] items-center justify-center'>
        <CircularProgress size={150} color='primary' />
    </div>
  )
}
