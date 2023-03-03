import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'
function ProductCard() {
  return (
    <Link to='' className="product-card position-relative">
      <div className='wishlist-icon position-absolute' >
      <Link to=''>
      <img src='images/wish.svg'  alt="wishlist"></img>
      </Link>
      </div>
      <div className="product-image">
        <img className="img-fluid" src="/images/watch.jpg" alt="product image" />
        <img className="img-fluid" src="/images/watch1.jpeg" alt="product image" />

      </div>
      <div className="product-details" >
        <h6 className="brand">Havels</h6>
        <h5 className="product-title">Kids headphones bulk 10 pack multi colored for students</h5>
        <p className="price">$100</p>
            <ReactStars count={5} size={24} activeColor="#ffd700" value={3} edit={false} />
      <div className='position-absolute action-bar'>
        <div className='d-flex flex-column gap-15'>
          <Link to='' >
            <img src='images/prodcompare.svg' className='actionbar-button' alt="product compare"></img>
          </Link>
          <Link to=''>
            <img src='images/view.svg' className='actionbar-button' alt="view product"></img>
          </Link>
          <Link to=''>
            <img src='images/add-cart.svg' className='actionbar-button' alt="addcart"></img>
          </Link>
          </div>        
        </div>    
      </div>
    </Link>
  )
}

export default ProductCard