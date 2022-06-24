import React from 'react'
import data from '../data'

export default function HomeScreen() {
  return (
    <div>
          <h1>Products</h1>
          <div className="products">
            {data.products.map(
              (product) => (
                <div className="product" key={product.slug}>
                  <a href={`/product/${product.slug}`}>
                    <img src={product.image} alt={product.name} />
                  </a>
                  <div className="product_info">
                    <a href={`/product/${product.slug}`}>
                      <p>{product.name}</p>
                    </a>
                    <strong>₹ {product.price}</strong>&nbsp;
                    <button>Add to cart</button>
                  </div>
                </div>
              ),console.log(data))}
          </div>
    </div>
  )
}
