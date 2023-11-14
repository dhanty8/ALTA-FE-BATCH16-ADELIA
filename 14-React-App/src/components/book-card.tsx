import React from 'react'

interface Action {
  goDetail: (id: number) => void;
}
interface Props {
  id: number;
  cover_image: string;
  title: string;
  author: string;
  action: Action;
}

const BookCard = (props: Props) => {
  const { cover_image, title, author, action, id } = props
  const { goDetail } = action
  return (
    <div className='flex-auto flex flex-col cursor-pointer' onClick={() => goDetail(id)}>
      <img src={cover_image} className='h-80 rounded-md' alt='Book Photos'/>
      <div className='text-center flex flex-col gap-1 my-2 w-56'>
        <div className='text-base font-bold tracking-wide break-words'>{title}</div>
        <p className='text-xs font-light text-gray-400'>{author}</p>
      </div>
    </div>
  )
}

export default BookCard