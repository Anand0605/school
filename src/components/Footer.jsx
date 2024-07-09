import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
            <footer style={{
                padding: 60,
                backgroundColor: '#03011c',
                display: "flex",
                gap: "20px"
            }}>
                <div style={{ display: "flex",flexDirection:"column" }}>
                   <div style={{display:"flex",gap:"50px",marginLeft:"20px"}}>
                   <div>
                        <h1 style={{
                            color: "#f5f5f5",
                            fontWeight: "normal"
                        }}>School</h1>
                        <p style={{ color: '#f5f5f5' }}> "Education is the most powerful weapon which you can use to change the world."!</p>
                    </div>
                    <div>
                        <h1 style={{
                            color: "#f5f5f5",
                            fontWeight: "normal"
                        }}>Quick Links</h1>
                        <ul style={{
                            padding: '0',
                            margin: '0px',
                            display: "flex",
                            flexDirection: "column",
                            gap: '10px',
                            listStyle: "none"

                        }}>
                            <li><Link to="/" style={{ textDecoration: 'none', color: "#f5f5f5" }}>home</Link></li>
                            <li><Link to="teacher" style={{ textDecoration: 'none', color: "#f5f5f5" }}>Teachers</Link></li>
                            <li><Link to="holidays" style={{ textDecoration: 'none', color: "#f5f5f5" }}>Holiday</Link></li>
                            <li><Link to="contact" style={{ textDecoration: 'none', color: "#f5f5f5" }}>Contact us</Link></li>
                            {/* <li><a style={{textDecoration:'none'}} href="#">Talk us</a></li> */}
                        </ul>
                    </div>
                    <div>
                        <h1 style={{
                            color: "#f5f5f5",
                            fontWeight: "normal"
                        }}>Social Link</h1>
                        <ul style={{
                            padding: '0',
                            margin: '0px',
                            display: "flex",
                            flexDirection: "column",
                            gap: '10px',
                            listStyle: "none"

                        }}>
                            <li><Link to="#" style={{ textDecoration: 'none', color: "#f5f5f5" }}>
                                <i className="ri-youtube-line" style={{ marginRight: "5px", color: "#f5f5f5" }}></i>
                                youTube
                            </Link></li>
                            <li><Link to="#" style={{ textDecoration: 'none', color: "#f5f5f5" }}>
                                <i className="ri-instagram-line" style={{ marginRight: "5px", color: "#f5f5f5" }}></i>
                                Instagram
                            </Link></li>
                            <li><Link to="#" style={{ textDecoration: 'none', color: "#f5f5f5" }}>
                                <i className="ri-linkedin-box-line" style={{ marginRight: "5px", color: "#f5f5f5" }} ></i>
                                Linkdin
                            </Link></li>
                            <li><Link to="#" style={{ textDecoration: 'none', color: "#f5f5f5" }} >
                                <i className="ri-twitter-x-line" style={{ marginRight: "5px", color: "#f5f5f5" }}></i>
                                Twitter
                            </Link></li>
                            {/* <li><a style={{textDecoration:'none'}} href="#">Contact us</a></li> */}
                        </ul>
                    </div>

                    <div>
                        <h1 style={{
                            color: "#f5f5f5",
                            fontWeight: "normal",
                        }}>Contact us</h1>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: "15px" }}><input required type="text" style={{ border: 'none', padding: '8px', borderRadius: "5px", outline: "none" }} placeholder='Fullname' />
                            <input required type="text" style={{ border: 'none', padding: '8px', borderRadius: "5px", outline: "none" }} placeholder='example@gmail.com' />
                            <textarea style={{ padding: '10px', borderRadius: "5px", outline: "none" }} placeholder='Message...'></textarea>
                            <button style={{ width: 'fit-content', border: 'none', padding: '10px', borderRadius: "5px", background: "#ffa500", color: "#f5f5f5" }}>Submit</button>
                        </form>
                    </div>
                   </div>
                    <div style={{ textAlign:"center" }}><p style={{ color: "white" }}>Copyright © 2024. All Rights Reserved.</p></div>
                </div>

            </footer>
        </>

    )
}

export default Footer