import React from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from "./MenuComponent";
import { DISHES } from "../../shared/dishes";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Route, Switch } from "react-router-dom";
import Home from "./HomeComponent";

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          dishes: DISHES, //lấy data của mảng element DISHES trong dishes.js
          // selectedDish: null
        };
      }

      // onDishSelect(dishId) {
      //   this.setState({selectedDish: dishId});
      // }

      render() {
        const HomePage = () => {
          return (
            <Home />
          )
        };
        return (
          <div>
             <Header />

             {/* <Menu dishes={this.state.dishes} onClick= {(dishId) => this.onDishSelect(dishId)} />
             <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> props data vào bên Menu xử lý */}

             <Switch>
              <Route path='/home' component={HomePage} />
              <Route expact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
             </Switch>

             <Footer />
          </div>
        );
      }
}

export default Main;