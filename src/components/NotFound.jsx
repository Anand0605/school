import React from 'react'

const NotFound = () => {
  return (
    <div
    style={{backgroundColor:"#f5f5f5",
      height:"100vh",
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center'

    }}
    >
      <img src="./images/not-found.svg" width={505} alt="" />
      <p style={{fontSize:'20px'}}>404 | page not found</p>
    </div>
  )
}

export default NotFound