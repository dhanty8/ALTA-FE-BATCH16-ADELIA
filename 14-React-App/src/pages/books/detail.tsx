import React, { useEffect, useState } from 'react'

import { Book } from '../../utils/apis/books'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Detail = () => {
  const location = useLocation()
  const {state} = location
  
  const [book, setBook] = useState<Book>()

  useEffect(() => {
    fetchDetailBook()
  }, [])

  const fetchDetailBook = async () => {
    try {
        const result = await axios(`https://hells-kitchen.onrender.com/api/v1/books/${state?.id}`)

        setBook(result.data.payload)
    } catch (error) {
        
    }
  }
  

  return (
    <div className='w-full h-screen flex flex-col'>
        
    </div>
  )
}

export default Detail