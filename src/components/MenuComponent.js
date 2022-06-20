import React from "react";
// import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    render(){
        const menu = this.props.dishes.map( (dishes) => {
            return(
                <div key={dishes.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={() => this.props.onClick(dishes.id)}>
                        <CardImg width='100%' src={dishes.image} alt={dishes.name} />                    
                        <CardImgOverlay>
                            <CardTitle><strong>{dishes.name}</strong></CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            ); 
        });

        return (
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;