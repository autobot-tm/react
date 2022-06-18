import React from "react";
// import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    onDishSelect(dishes) {
        this.setState({ selectedDish: dishes });
    }
    
    //hàm onClick xuất ra description
    renderDish(dishes) {
        if (dishes != null)
            return (
                <Card>
                    <CardImg top src={dishes.image} alt={dishes.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dishes.name}</CardTitle>
                        <CardText>{dishes.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        const menu = this.props.dishes.map((dishes) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dishes.id}
                            onClick={() => this.onDishSelect(dishes)}>
                        <CardImg width="100%" src={dishes.image} alt={dishes.name} />
                        <CardImgOverlay>
                            <CardTitle>{dishes.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        )
    }
    // const menu = this.state.dishes.map((dish) => {
    //     return (
    //         <div key={dish.id} className="col-12 mt-5">
    //             <Media tag="li">
    //                 <Media object src={dish.image} alt={dish.name}></Media>
    //             </Media>
    //             <Media body className="ml-5">
    //                 <Media heading>{dish.name}</Media>
    //                 <p>{dish.description}</p>
    //             </Media>
    //         </div>
    //     );
    // });
    // return (
    //     <div className="container">
    //         <div className="row">
    //             <Media list>
    //                 {menu}
    //             </Media>
    //         </div>
    //     </div>
    // );
}
export default Menu;