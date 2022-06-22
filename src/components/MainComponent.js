import React from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          dishes: DISHES, //lấy data của mảng element DISHES trong dishes.js
          selectedDish: null
        };
      }

      onDishSelect(dishId) {
        this.setState({selectedDish: dishId});
      }

      render() {
        return (
          <section>
            <Navbar dark color='primary'>
              <div className='container'>
                <NavbarBrand href='/' >Ristorante Con Fusion</NavbarBrand>
              </div>
            </Navbar>
             <Header />
             <Menu dishes={this.state.dishes} onClick= {(dishId) => this.onDishSelect(dishId)} />
             <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> {/*props data vào bên Menu xử lý */}
             <Footer />
          </section>
        );
      }
}

export default Main;