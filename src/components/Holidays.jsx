import React from 'react'
import Navbar from './Navbar/index'
import Footer from './Footer'

const Holidays = () => {
  const holidays = [
    {
      title: "New Year's Day",
      duration: "1 day",
      date: "2024-01-01"
    },
    {
      title: "Independence Day",
      duration: "1 day",
      date: "2024-07-04"
    },
    {
      title: "Labor Day",
      duration: "1 day",
      date: "2024-09-02"
    },
    {
      title: "Thanksgiving",
      duration: "2 days",
      date: "2024-11-28"
    },
    {
      title: "Christmas",
      duration: "1 day",
      date: "2024-12-25"
    }
  ];
  return (
    <div>
      <Navbar />
      <div style={{ width: "60%", padding: "65px 0", margin: " 0 auto" }}>
        <h1 style={{ textAlign: "center" }}>Your Holiday's</h1>
        <table style={{width:"100%"}}>
          <thead>
            <tr style={{background:"#ddd"}}>
              <th style={{padding:10}}>S/No</th>
              <th>Title</th>
              <th>Duration</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {
              holidays.map((event, index)=>(
                 <tr style={{textAlign:"center"}}>
                  <td style={{padding:"10px", borderBottom:"1px solid #ddd"}}>{index+1}</td>
                  <td style={{padding:"10px", borderBottom:"1px solid #ddd"}}>{event.title}</td>
                  <td style={{padding:"10px", borderBottom:"1px solid #ddd"}}>{event.duration}</td>
                  <td style={{padding:"10px", borderBottom:"1px solid #ddd"}}>{event.date}</td>
                 </tr>
              ))
            }
          </tbody>
        </table>

      </div>
      <Footer />
    </div>
  )
}

export default Holidays