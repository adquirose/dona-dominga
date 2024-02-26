import { Container, Row } from 'reactstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import HeaderImg1 from '../../assets/images/header/home.jpg';
import HeaderImg2 from '../../assets/images/header/home2.jpg';
import HeaderImg3 from '../../assets/images/header/home3.jpg';

function Header() {
  return (
    <div id="header">
      <Container>
        <Row className='d-flex justify-content-center'>
          <div style={{position:'relative'}} className='header-container'>
            <Swiper
              pagination={{
                clickable: true
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
            >
              <SwiperSlide><img src={HeaderImg1} alt="ext1"/></SwiperSlide>
              <SwiperSlide><img src={HeaderImg2} alt="ext2"/></SwiperSlide>
              <SwiperSlide><img src={HeaderImg3} alt="ext3"/></SwiperSlide>
            </Swiper>
            <div style={{ position:'absolute', bottom:'30px', width:'100%', height:'120px', zIndex:15}}>
              <Container>
                <Row>
                  <p style={{fontWeight:500, textAlign:'center'}}>
                    VIVE INMERSO EN LA NATURALEZA <br/>
                    A SÓLO MINUTOS DE LA CIUDAD.<br/>
                  </p>
                </Row>  
              </Container>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}
export default Header
