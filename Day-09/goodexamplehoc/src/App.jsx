import React from 'react'
import WithSaleTag from './components/WithSaleTag'
import ProductBox from './components/ProductBox'

const EnhancedProductBox = WithSaleTag(ProductBox)

const App = () => {
  return (
    <div>
      <EnhancedProductBox name={"Awesome Product"} price={50} salePrice={30} isOnSale={true} />
      <EnhancedProductBox name={"Regular Product"} price={80}  isOnSale={false} />
    </div>
  )
}

export default App