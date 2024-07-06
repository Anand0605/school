import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const menus = [
    {
        lable: 'Home',
        href: '/'
    },
    {
        lable: 'Teacher',
        href: 'teacher'
    },
    {
        lable: 'Holodays',
        href: 'holidays'
    },
    {
        lable: 'Conatct Us',
        href: 'contact'
    },
]
const Navbar = () => {
    return (
        <nav style={{

            display: "flex",
            justifyContent: "space-between",
            padding: "0 25px",
            boxShadow: "0 8px 8px 0 rgba(0,0,0,0.1)"
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <img src="./images/school.webp" alt="" width={"60"} />
                <h1>School</h1>
            </div>
            <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
                {/* <li style={{display:"flex",
                alignItems:"center"
            }}>
                <Link style={{textDecoration:"none",
                    color:"#323232",
                    fontSize:"22px",
                    
                }} to="/">Home</Link>
            </li> */}
                {/* <li style={{display:"flex",
                alignItems:"center"
            }}>
                <Link style={{textDecoration:"none",
                    color:"#323232",
                    fontSize:"22px",
                    
                }} to="teacher">Teachers</Link>
            </li>
            <li style={{display:"flex",
                alignItems:"center"
            }}>
                <Link style={{textDecoration:"none",
                    color:"#323232",
                    fontSize:"22px",
                    
                }} to="holidays">Holidays</Link>
            </li>
            <li style={{display:"flex",
                alignItems:"center"
            }}>
                <Link className='contact-btn' style={{textDecoration:"none",
                    color:"#323232",
                    fontSize:"22px",
                    backgroundColor:"dodgerblue",
                    padding:"10px 28px",
                    borderRadius:"4px",
                    color:"white"
                }} to="contact">Contact us</Link>
            </li> */}
                {
                    menus.map((menu,index) => {
                        return (
                            <li key={index} style={{
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <Link style={{
                                    textDecoration: "none",
                                    color: "#323232",
                                    fontSize: "22px",

                                }} to={menu.href}>{menu.lable}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar