import React from 'react'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import Card from '../Card/Card';

const Assets = () => {
    return (
        <MDBRow className='row-cols-1 row-cols-md-3 g-4 ms-auto' style={{ paddingTop: "20px" }}> 
            <MDBCol>
                <Card />
            </MDBCol>
        </MDBRow>
    )
}

export default Assets
