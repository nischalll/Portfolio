import React from 'react'

export default function Rubber({text}) {
  return (
      <span>{text.split("").map(letter=><span className='rubber'>{letter}</span>)}
      </span>
  )
}
