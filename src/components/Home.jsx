import React from 'react';
import Navbar from './Navbar/index'
import Footer from './Footer'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Beach from '../../public/images/nature.jpg';
import oldMan from '../../public/images/old-man.jpg'
import girl from '../../public/images/girls.png'
import banner1 from '../../public/images/banner1.png'
import banner2 from '../../public/images/banner2.png'
import banner3 from '../../public/images/banner3.jpg'
import Aanandam from '../../public/images/aanandam.png'
import Jigyasa from '../../public/images/jigyasa.png'
import Chetna from '../../public/images/chetna.png'
import Samparan1 from '../../public/images/samparan1.png'
import Samparan2 from '../../public/images/samparan2.png'
import Logo1 from '../../public/images/logo1.png'
import Logo2 from '../../public/images/logo2.png'
import Logo3 from '../../public/images/logo3.png'
import Logo4 from '../../public/images/logo4.png'
import Logo5 from '../../public/images/logo5.png'
import Founder from '../../public/images/founder.webp'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';



const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ position: "relative", }}>
        <div style={{
          position: "absolute",
          bottom: "30%",
          left: "45%",
          border: "none",
          zIndex: 30,
        }}>
          <button style={{
            padding: "15px 35px",
            border: "none", color: "white",
            backgroundColor: "green",
            borderRadius: "10px"
          }}>Addmision Open
          </button></div>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          style={{ height: "80vh" }}
        >

          <SwiperSlide>
            <img src={banner1} style={{ height: "100vh", width: "100vw" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner3} style={{ height: "100vh", width: "100vw" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Beach} style={{ height: "100vh", width: "100vw" }} />
          </SwiperSlide>
          <SwiperSlide style={{ height: "80vh" }}>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" style={{ height: "100vh", width: "100vw" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner1} style={{ height: "100vh", width: "100vw" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} style={{ height: "100vh", width: "100vw" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} style={{ height: "100vh", width: "100vw" }} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div style={{ height: "100vh", display: "flex", justifyContent: "space-between", padding: "20px" }}>
        <div style={{ width: "50%", display: "flex", flexDirection: "column", gap: "15px", padding: "30px" }}>
          <h2 style={{ color: "#ccc" }}>Who We Are</h2>
          <h3 style={{ color: 'red', fontWeight: 600, fontSize: "35px" }}>Innovation and Tradition:</h3>
          <h3 style={{ fontWeight: 600, fontSize: "35px" }}>The Unique Blend of DPS Varanasi</h3>
          <p style={{ fontSize: "17px", fontWeight: 400 }}>Delhi Public School Varanasi, under the esteemed
            aegis of the Delhi Public School Society in New Delhi,
            has established itself as a beacon of progressive education
            and an unwavering commitment to excellence. For over twenty years,
            DPS Varanasi has been at the forefront of educational excellence,
            a testament to our dedication to delivering high-quality education.
            We provide holistic education that nurtures the complete development
            of our students—socially, emotionally, spiritually, cognitively, and
            physically. Our thoughtfully designed curriculum, innovative teaching
            methods and data-driven insight create an enriching and lifelong learning
            environment. We celebrate the uniqueness of each student, inspiring them to
            explore their passions and purpose. Our students develop a profound appreciation
            and a strong sense of pride for the diverse facets of Indian culture, heritage,
            and the environment. We imbue our students with a profound sense of responsibility
            towards the planet. By developing 21st-century skills and instilling a success mindset,
            we empower our students to overcome challenges and strive for excellence. We nurture our
            students to become global citizens who are not only academically accomplished but also
            prepared to make a positive impact on the world.</p>
          <button style={{ width: "fit-content", padding: "12px 28px", border: "none", background: "green", color: "white", fontSize: "15px", borderRadius: "18px" }}>Learn More</button>
        </div>
        <div style={{ width: "50%" }}>
          <img style={{ height: "100vh", width: "100%", padding: "30px" }} src={girl} alt="" />
        </div>
      </div>
      <div style={{ height: "60vh", backgroundcolor: "red", display: "flex", }}>
        <div style={{ width: "50%", textAlign: "center" }}>
          <img src={oldMan} alt="" style={{ height: "100%" }} />
        </div>
        <div style={{ background: "pink", display: 'flex', flexDirection: "column", alignItems: "center", gap: "10px", padding: "30px" }}>
          <h1 style={{ fontWeight: "600px" }}>our Approches</h1>
          <h2>Empowering Minds:</h2>
          <h2>The DPS Varanasi Approach</h2>
          <p style={{ fontSize: "20px" }}>At DPS Varanasi, our approach is centred
            around nurturing the individual potential of each student.
            We believe in a holistic education that goes beyond academics,
            fostering creativity, critical thinking, and social responsibility.
            Our dedicated faculty, state-of-the-art facilities,
            and diverse co-curricular activities provide a rich learning
            environment where students are encouraged to explore, innovate,
            and excel. With a strong emphasis on character development and instilling
            a success mindset, we empower our students to thrive in all aspects of life.
            Experience the DPS Varanasi difference, where education is a journey of discovery and growth.</p>
          <button style={{ padding: "15px 32px", border: "none", background: "green", color: "white", fontSize: "15px", fontWeight: "800px", borderRadius: "18px" }}>Leran More</button>
        </div>
      </div>
      <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "70%", margin: "0 auto", padding: "30px", textAlign: "center", gap: "10px" }}>
          <h2 style={{ color: "red", fontSize: "35px", fontWeight: "bold" }}>Educational Excellence at Every Stage</h2>
          <h2 style={{ fontSize: "30px" }}>Discover Our Programs</h2>
          <p style={{ fontWeight: 500, fontSize: "18px" }}>
            From the joyous exploration of the Foundational Years
            to the specialized pursuit of the Higher Secondary Years,
            DPS Varanasi offers a seamless educational journey.
            Each phase is meticulously crafted to foster academic
            and personal growth, ensuring a well-rounded development
            tailored to the unique needs of every student.</p>
        </div>
        <div style={{ width: "100%", height: "60vh", flexWrap: "wrap", padding: "15px", display: "flex", justifyContent: "center", gap: "10px" }}>
          <img src={Aanandam} alt="" style={{ width: "calc(20% - 10px)", objectFit: "contain" }} />
          <img src={Jigyasa} alt="" style={{ width: "calc(20% - 10px)", objectFit: "contain" }} />
          <img src={Chetna} alt="" style={{ width: "calc(20% - 10px)", objectFit: "contain" }} />
          <img src={Samparan1} alt="" style={{ width: "calc(20% - 10px)", objectFit: "contain" }} />
          <img src={Samparan2} alt="" style={{ width: "calc(20% - 10px)", objectFit: "contain" }} />
        </div>
      </div>
      <div style={{ display:"flex",flexDirection:"column",gap:"50px", height: "55vh", padding: "15px" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "40px" }}>
            <span style={{ color: "red" }}>
              DPS Varanasi
            </span>
            Alumni at</h1>
        </div>
        <div style={{display:"flex",justifyContent:"center",gap:"50px",aspectRatio:"8/2"}}>
          <img style={{width:"150px",height:"150px"}} src={Logo1} alt="" />
          <img style={{width:"150px",height:"150px"}} src={Logo2} alt="" />
          <img style={{width:"150px",height:"150px"}} src={Logo3} alt="" />
          <img style={{width:"150px",height:"150px"}} src={Logo4} alt="" />
          <img style={{width:"150px",height:"150px"}} src={Logo5} alt="" />
        </div>
      </div>
      <div style={{height:"65vh", display:"flex",flexDirection:"column",gap:"20px"}}>
        <h1 style={{textAlign:"center",color:"red",fontSize:"40px"}}>What parents have to say</h1>
        <div style={{ display:"flex", width:"85%", margin:"0 auto", backgroundColor:"#f5f5f5",borderRadius:"50px"}}>
          <div style={{width:"25%",padding:"20px",marginLeft:"30px"}}>
            <img style={{ display:"flex",gap:"15px",width:"200px",height:"200px",padding:"10px", borderRadius:"50%"}} src={Founder} alt="" />
            <h2>Dr. Prashant Punj</h2>
            <p>F/O: Vanya Punj & Avika Punj</p>
          </div>
          <div style={{ display:"flex",justifyContent:"center",alignItems:"center", width:"60%"}}>
            <p style={{textAlign:"center",fontSize:"20px",marginLeft:"15px"}}>I am particularly grateful for the personalized attention teachers 
              give to each student. They provide extra help, answer questions patiently,
               and celebrate even the smallest achievements, which has boosted my children's
                confidence and love for learning. I've witnessed a great progress in their
                 academic skills, as well as their social and emotional growth</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>


  )
}

export default Home