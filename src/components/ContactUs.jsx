import React from 'react'
import Navbar from './Navbar/index'
import Footer from './Footer'
import { useState } from 'react'
import Swal from 'sweetalert2'


const ContactUs = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const contactUs=(e)=>{
    e.preventDefault();
    console.log(fullName,email,message)
    Swal.fire({
      icon:"success",
      title:"congrates",
      text:"Your form is submit"
      
    })
    
  }

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", padding: 64, gap: "24px" }}>
        <img src="./images/contact-us1.svg" width="50%" alt="" />
        <div style={{ width: "50%" }}>
          <form 
          onSubmit={contactUs}
          style={{ display: "flex",
           flexDirection: "column",
            gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontSize: 18, fontWeight: 500 }}>FullName</label>
              <input
                name='FullName'
                required
                placeholder='Enter name here'
                type="text"
                onChange={(e) =>setFullName(e.target.value)}
                style={{ border: "1px solid #ccc", borderRadius: 4, padding: 14 }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontSize: 18, fontWeight: 500 }}>Email</label>
              <input
                name='Email'
                required
                placeholder='example@gmail.com'
                type="emailo"
                onChange={(e)=>setEmail(e.target.value)}
                style={{ border: "1px solid #ccc", borderRadius: 4, padding: 14 }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontSize: 18, fontWeight: 500 }}>Message</label>
              <textarea 
              name='FullName'
               required 
               placeholder='Write your message'
                type="text"
                onChange={(e)=>setMessage(e.target.value)}
                 rows={4} style={{ border: "1px solid #ccc", borderRadius: 4, padding: 14 }} />
            </div>
            <button style={{ width: "fit-content", border: "none", padding: "14px 30px", borderRadius: "4px", background: "#6c63ff", color: "white", fontWeight: "600px" }}>SUBMIT</button>
          </form>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactUs