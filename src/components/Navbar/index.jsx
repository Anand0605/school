import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const menus = [
    {
        lable: 'Home',
        href: '/'
    },
    {
        lable: 'Admission',
        href: [
            {
                lable:"home"
            }
        ]
    },
    {
        lable: 'Result',
        href: '/result'
    },
    {
        lable: 'Teacher',
        href: '/teacher'
    },
    {
        lable: 'Holodays',
        href: '/holidays'
    },
    {
        lable: 'Ficilities',
        href: '/facilities'
    },
    {
        lable: 'Conatct Us',
        href: '/contact'
    }
    
]
const Navbar = () => {
    return (
        <nav style={{

            display: "flex",
            justifyContent: "space-between",
            padding: "0 25px",
            boxShadow: "0 8px 8px 0 rgba(0,0,0,0.1)",
            backgroundColor:"white",
            position:"sticky",
            top:"0",
            zIndex:51
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <img src="./images/school.webp" alt="" width={"60"} />
                <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Unity Grove School</h1>
            </div>
            <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
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