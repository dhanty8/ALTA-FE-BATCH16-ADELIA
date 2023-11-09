import React from 'react'

interface Props {
  cover_image: string;
  title: string;
  author: string;
}
const BookCard = (props: Props) => {
  const { cover_image, title, author } = props
  return (
    <div className='flex flex-col'>
      <img src={cover_image} className='w-56 h-80' alt='Book Photos'/>
      <div className='text-center flex flex-col gap-1 my-2'>
        <div className='text-base font-bold'>{title}</div>
        <p className='text-xs font-light'>{author}</p>
      </div>
    </div>
  )
}

export default BookCard