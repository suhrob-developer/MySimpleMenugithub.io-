import React ,{ Component }from "react";
import CaruselBox from "../Components/CaruselBox";
import {Container} from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return(
        <div>
            <CaruselBox />

            <Container>
               <h3 className="text-center m-4">Our Team</h3>
            </Container>
        </div>
        )
    }
}