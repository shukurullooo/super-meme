import React from 'react'

const Ditail = ({product}) => {
    const{title,price,thumbnail}=product|| {}
  return (
    <div
    className='p-4 md:p-10 container mx-auto'
    >
        <img src={thumbnail} alt="" />
        <h2 className='text-2xl font-bold mb-6'>{title}</h2>
        <p className='text-gray-500'>{price}</p>

    </div>
  )
}

export default Ditail