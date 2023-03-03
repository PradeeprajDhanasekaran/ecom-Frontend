import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin,BsInstagram,BsYoutube,BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
   <>
   <footer className='py-3'>
    <div className='container-xxl'>
    <div className='row'>
      <div className='col-5 d-flex gap-30 align-items-center'>
        <img src='/images/newsletter.png'></img>
        <h2 className='mb-0 text-white  '>Signup for Newsletter</h2>
      </div>
      <div className='col-7'>
      <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2 " id="basic-addon2">
                  Subscribe
                </span>
              </div>
      </div>
    </div>
    </div>
   </footer>
   <footer className='py-3'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-4'>
          <h4 className='text-white mb-4'>Contact Us</h4>
          <address className='text-white'>
            S-07, Pen street, Block-5,<br />Neyveli, TamilNadu <br/>Pin code: 1010101 
          </address>
          <a href='tel: +91-970129XXX' className='text-white d-block mt-4 mb-3'>+91-97290XXXX</a>
          <a href='mailto:e-com@hotmail.com' className='text-white d-block mt-4 mb-3'>e-com@hotmail.com</a>
          <div className='social_icons align-items-center d-flex text-white fs-3  gap-30 '>
            <a href='#' className='text-white'><BsLinkedin /></a>
            <a href='#' className='text-white'><BsInstagram /></a>
            <a href='#' className='text-white'><BsYoutube /></a>
            <a href='#' className='text-white' ><BsGithub /></a>
          </div>
        </div>
        <div className='col-3'>
          <h4 className='text-white mb-4'>Information</h4>
          <div className='row '>
          <Link to='' className='text-white mb-4'>Privacy Policy</Link>
          <Link to='' className='text-white mb-4'>Refund Policy</Link>
          <Link to='' className='text-white mb-4'>Shopping Policy</Link>
          <Link to='' className='text-white mb-4'>Terms & Conditions</Link>
          <Link to='' className='text-white mb-4'>Blogs</Link>
          </div>
        </div>
        <div className='col-3'>
          <h4 className='text-white mb-4'>Account</h4>
          <div className='row '>
          <Link to='' className='text-white mb-4'>About Us</Link>
          <Link to='' className='text-white mb-4'>FAQ's</Link>
          <Link to='' className='text-white mb-4'>Contact</Link>
          </div>

        </div>
        <div className='col-2'>
          <h4 className='text-white mb-4'>Quick Links</h4>
          <div className='row '>
          <Link to='' className='text-white mb-4'>Laptop</Link>
          <Link to='' className='text-white mb-4'>Headphones</Link>
          <Link to='' className='text-white mb-4'>Tablets</Link>
          <Link to='' className='text-white mb-4'>Watches</Link>
          </div>
        </div>

      </div>
    </div>
   </footer>
   <footer className='py-3'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12 '>
          <p className='text-white mb-0 text-center'>&copy; Copyright {new Date().getFullYear()}. All Rights Reserved. </p>
        </div>
      </div>
    </div>
   </footer>

   </>
  )
}

export default Footer