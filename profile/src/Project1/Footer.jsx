import React from 'react'
import './Footer'
import './Main.css'

const Footer = () => {
  return (
    <div>
        <footer>
        <div className='box-1'>
           <div className='info'>
            <h4>Contact Info</h4><br />
            <p>If you have any queries or need assistance, feel free to reachout us</p><br />
            <p>Phone:📞864645735</p><br />
            <p>Email:✉️vicky200@gmail.com</p><br />
            <p>Address:🏠#2,1st main 3rd cross lakshman layout Electronic city</p>
          </div>

          <div className='info-1'>
            <h4>Follow Us</h4><br />
            <p>Linkdin </p>
          </div>

          <div className='info-2'>
            <h4>Bussiness Hours</h4><br />
            <p>Mon-Fri: 9AM - 5PM</p>
          </div> 
        </div>  
      </footer>
      
    </div>
  )
}

export default Footer
