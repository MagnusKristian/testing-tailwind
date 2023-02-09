import React from 'react'

export const TailwindButton = (props) => {
  return (
    <div className='bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-800 shadow-lg border border-slate-600 absolute bottom-4 right-4'>{props.children}</div>
  )
}