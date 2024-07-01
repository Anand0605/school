import React from 'react'

const Footer = () => {
  return (
    // <footer style={{
    //     background:"#280044",
    //     height:"180px 50%"
    // }}>
    //     <div>
    //         <h2 style={{color:"white",fontWeight:"200"}}>CodeSchool</h2>
    //         <p style={{color:'white'}}>
    //             Online learning community school for coder kids
    //         </p>
    //     </div>

    // </footer>
    <footer style={{padding:100,
        backgroundColor:'#03011c',
        display:"flex",
        gap:"20px"
    }}>
        <div>
            <h1 style={{color:"#f5f5f5",
                fontWeight:"normal"
            }}>School</h1>
            <p style={{color:'white'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum facere dolor tenetur cupiditate dicta nam!</p>
        </div>
        <div>
            <h1 style={{color:"#f5f5f5",
                fontWeight:"normal"
            }}>usefull Link</h1>
            <ul style={{padding:'0',
                margin:'0px',
                display:"flex",
                flexDirection:"column",
                gap:'10px'
                
            }}>
                <li><a style={{textDecoration:'none'}} href="#">home</a></li>
                <li><a style={{textDecoration:'none'}} href="#">Teachers</a></li>
                <li><a style={{textDecoration:'none'}} href="#">Holiday</a></li>
                <li><a style={{textDecoration:'none'}} href="#">Contact us</a></li>
                <li><a style={{textDecoration:'none'}} href="#">Talk us</a></li>
            </ul>
        </div>
        <div>
            <h1 style={{color:"#f5f5f5",
                fontWeight:"normal"
            }}>Social Link</h1>
            <ul style={{padding:'0',
                margin:'0px',
                display:"flex",
                flexDirection:"column",
                gap:'10px'
                
            }}>
                <li><a style={{textDecoration:'none'}} href="#">youtueb</a></li>
                <li><a style={{textDecoration:'none'}} href="#">instagram</a></li>
                <li><a style={{textDecoration:'none'}} href="#">Linkdin</a></li>
                <li><a style={{textDecoration:'none'}} href="#">Twiter</a></li>
                <li><a style={{textDecoration:'none'}} href="#">Contact us</a></li>
            </ul>
        </div>
       
        <div>
            <h1 style={{color:"#f5f5f5",
                fontWeight:"normal"
            }}>Enquiry</h1>
            <form style={{display:'flex',flexDirection:'column',gap:'10px'}}><input required type="text" style={{border:'none',padding:'8px'}} placeholder='Fullname' />
            <input required type="text" style={{border:'none',padding:'8px'}} placeholder='Email' />
            <textarea style={{padding:'10px'}} placeholder='Message'></textarea>
            <button style={{width:'fit-content',border:'none',padding:'10px'}}>Submit</button>
            </form>
            
        </div>

    </footer>
  )
}

export default Footer