import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {images} from '../../images/images';

const Start = () =>{
    return <>
        <div className="bg-start">
            <Container>
                <h2 className="title-start">Comienza ahora</h2>
                <div className="start-content">
                    <div className="map-container">
                        <img src={images.beanMap} alt="mapa" className="image-map"/>
                    </div>
                    <Row className="margin-btn">
                        <Col lg={12} className="btn-position">
                            <Button className="btn-emprendedor" href="#">Quiero participar<br/> como emprendedxr</Button>
                        </Col>
                        <Col lg={12} className="btn-position">
                            <Button className="btn-ciudadano" href="#">Quiero participar<br/> como ciudadanx</Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    </>
}

export default Start;