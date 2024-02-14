import { Container, Row, Col, List } from 'reactstrap'
import Img1 from '../../assets/images/barrio-entorno/img1.jpg'
import Img2 from '../../assets/images/barrio-entorno/img2.jpg'
import Img3 from '../../assets/images/barrio-entorno/img3.jpg'
import Img4 from '../../assets/images/barrio-entorno/img4.jpg'
import Img5 from '../../assets/images/barrio-entorno/img5.jpg'
import Img6 from '../../assets/images/barrio-entorno/img6.jpg'

import { Athletics, SquarePin, ShoppingBag } from '../Icons'
function BarrioEntorno() {
  return (
    <div id="barrio-entorno" className='section'>
      <Container>
        <Row>
          <Col lg="8" md="12" sm="12">
            <div className='pb-4'>
              <h2>BARRIO & ENTORNO</h2>
              <div className='subraya bg-white'/>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(2,minmax(120px,1fr))', gridGap:'5px', justifyItems:'center'}}>
              <img src={Img1} style={{height:'auto'}} alt="img1"/>
              <img src={Img2} style={{height:'auto'}} alt="img2"/>
              <img src={Img3} style={{height:'auto'}} alt="img3"/>
              <img src={Img4} style={{height:'auto'}} alt="img4"/>
              <img src={Img5} style={{height:'auto'}} alt="img5"/>
              <img src={Img6} style={{height:'auto'}} alt="img6"/>
            </div>
          </Col>
          <Col lg="4" md="12" sm="12" className='d-flex flex-column justify-content-center pt-4'>
            <div>
              <div className='pb-2'>
                <SquarePin width="32" height="32" color="white" /><span className='ps-2'>UBICACIÓN</span>
              </div>
              <List>
                <li>PUERTO VARAS A 9 MIN</li>
                <li>PUERTO MONTT A 15 MIN</li>
                <li>AEROPUERTO A 30 MIN</li>
                <li>ENSENADA A 45 MIN</li>
                <li>RUTA 5 A 8 MIN</li> 
              </List>
            </div>
            <div>
              <div className='pb-2'>
                <ShoppingBag/><span className='ps-2'>CENTROS COMERCIALES</span>
              </div>
              <List>
                <li>CENTRO COMERCIAL ALTO VARAS</li>
                <li>MALL PASEO ALERCE</li>
                <li>CENTRO COMERCIAL DOÑA EMA</li>
                <li>SUPERMERCADO</li>
                <li>STRIPCENTER</li>
              </List>
            </div>
            <div>
              <div className='pb-2'>
                <Athletics width="36" height="36" color="white"/><span className='ps-2'>CENTROS DEPORTIVOS</span>
              </div>
              <List>
                <li>MATCH POINT TENIS</li>
                <li>CLUB DE TENIS PUERTO VARAS</li>
                <li>COMPLEJO DEPORTIVO MIRADOR</li>
              </List>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
} 
export default BarrioEntorno