import React from 'react'
import Navbar from './Navbar/index'
import Footer from './Footer'

const teacher = [
  {
    image: './teacher/a.jpg',
    name: 'Ashutosh Singh',
    qualification: 'B.Tech(Computer science)'
  },
  {
    image: './teacher/b.jpg',
    name: 'Niket kumar singh ',
    qualification: 'B.Tech(Computer science)'
  },
  {
    image: './teacher/c.jpg',
    name: 'Shivam Govind Rao',
    qualification: 'B.Tech(Computer science)'
  },
  {
    image: './teacher/d.jpg',
    name: 'Anand Kumar Gautam',
    qualification: 'B.Tech(Computer science)'
  },
  {
    image: './teacher/e.jpg',
    name: 'Yash Pandey',
    qualification: 'B.Tech(Computer science)'
  },
  {
    image: './teacher/f.jpg',
    name: 'Ankit Yadav',
    qualification: 'B.Tech(Computer science)'
  },
  {
    image: './teacher/g.jpg',
    name: 'Rohit Kumar',
    qualification: 'B.Tech(Computer science)'
  },
  {
    image: './teacher/h.jpg',
    name: 'Shreya Singh',
    qualification: 'B.Tech(Computer science)'
  }
]

const Teacher = () => {
  return (
    <>
    <Navbar/>
    <div> 
      <header style={{height:300,
      
      background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(51,50,103,1) 75%, rgba(161,69,252,1) 100%)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        
      }}>
        <h1 style={{fontWeight:"50px"}}>
        <i className="ri-user-voice-line" style={{marginRight:"5px"}}></i>
          Teachers
          </h1>
      </header>
      <section style={{
        width:"80%",
        margin:"0 auto",
        padding:"60px 0",
        display:"flex",
        // gap:"6.5%",
        // gap:"10px",
        flexWrap:"wrap"
      }}>
{
  teacher.map((teach,index)=>{
    return (
      <div key={index} style={{width:"20%"}}>
      <img src={teach.image} style={{width:"93%"}} alt="" />
      <h2 style={{padding:"3px",marginBottom:"4px"}}>{teach.name}</h2>
      <p style={{padding:"0px", margin:"0px", color:"gray"}}>{teach.qualification}</p>
    </div>
    )
  })
}
      </section>
    </div>
    <Footer/>

    </>
    
  )
}

export default Teacher