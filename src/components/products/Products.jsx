import React from 'react'
import ProductItem from './ProductItem'

const Skeleton = ({ count }) => {
  return (
    <>
      {Array(count).fill().map((_, inx) => (
        <div key={inx} className="animate-pulse space-y-2">
          <div className='h-[285px] bg-gray-200 rounded-md'></div>
          <div className='w-10/12 h-5 bg-gray-200 rounded'></div>
          <div className='w-6/12 h-5 bg-gray-200 rounded'></div>
          <div className='w-1/3 h-5 bg-gray-200 rounded'></div>
        </div>
      ))}
    </>
  )
}

const Products = ({ data, loading, count }) => {
  return (
    <div className='container mx-auto px-4 py-6'>
      <div className='grid gap-6
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4'>
        {
          loading ? <Skeleton count={count} /> :
            data?.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
        }
      </div>
    </div>
  )
}

export default React.memo(Products)
