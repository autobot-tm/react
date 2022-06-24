import React from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Route, Switch } from "react-router-dom";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import {COMMENTS} from "../../shared/comments"
import {PROMOTIONS} from "../../shared/promotions";
import { LEADERS } from "../../shared/leaders";

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          dishes: DISHES, //lấy data của mảng element DISHES trong dishes.js
          // selectedDish: null
          comments: COMMENTS,
          promotions: PROMOTIONS,
          leaders: LEADERS
        };
      }

      // onDishSelect(dishId) {
      //   this.setState({selectedDish: dishId});
      // }

      render() {
        const HomePage = () => {
          return (
            <Home
            dish={this.state.dishes.filter(dish => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
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
              <Route exact path='/contactus' component={Contact} /> 
             </Switch>

             <Footer />
          </div>
        );
      }
}

export default Main;