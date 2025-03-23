import  React, {Component}  from "react";
import  Carousel  from "react-bootstrap/Carousel";
import foto from '../assets/foto.jpeg';
import dfoto from '../assets/dfoto.jpeg';
export default class CaruselBox extends Component{
    render(){
        return(
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 h-70"
                src={foto}
                alt="building"
                />
                <Carousel.Caption>
                    <h3>Building Image</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-70"
                src={dfoto}
                alt="Nature"
                />
                <Carousel.Caption>
                    <h3>Picture of Nature </h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        )
    }
}
