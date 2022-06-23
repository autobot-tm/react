import logo from './logo.svg';
import './App.css';
// import Welcome from './components/Welcome';
// import Stock from './components/Stock';
// import Warning from './components/Warning';
// import Form from './components/Form';
// import Tester from './components/Demo';

// import Profile from './components/Profile';
// import ContainerComponent from './components/ContainerComponent';
// import Layout from './components/Layout';
// import Home from './components/Home';
// import Blogs from './components/Blogs';
// import Contact from './components/Contact';
// import NoPage from './components/NoPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from './components/main/MenuComponent';

import { DISHES } from './shared/dishes';
import { Component } from 'react';
import Main from './components/main/MainComponent';
// import { Router } from 'express';

// const name = 'bo'; //khai báo bth
// const user = {id: "1", name: "chi pheo"}; //khai báo dạng object

// const element = (<h1>Hello, {name}</h1>); //gán vào component
// const element2 = (<h1>Hello, {user.id}, {user.name}</h1>);

// const cities = ['Jaipur', 'Jodhpur', 'Udaipur', 'Pune', 'Chandigarh'];
// const nameC = cities.map( (c, index) => {return <li key={index}> {c} </li>});

export default class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
      <div className='App'>
          <Main />
      </div> 
      </BrowserRouter>
    );
  }
}








// function App() {
//   return (
//     <div className='App'>
//       <Navbar dark color='primary'>
//         <div className='container'>
//           <NavbarBrand href='/' >Ristorante Con Fusion</NavbarBrand>
//         </div>
//       </Navbar>
//       {/* <Menu dishes = {this.state.dishes} /> */}
//       <BrowserRouter>
//         <div>
//           <Switch>
//             <Route exact path="/" component={Layout} />
//             <Route path="/Home" component={Home} />
//             <Route path="/Blogs" component={Blogs} />
//             <Route path="/Contact" component={Contact} />
//             <Route path="/Profile/:isLogin" component={Profile} />
//             <Route path="/*" component={NoPage} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;

  // <div className="App">
  //   <h1>Hello World!</h1>
  // </div>


  // eslint-disable-next-line no-lone-blocks
  {/* <h1>Hello</h1>
     <Stock /> 
     <Warning />
     <Form /> 
     <ul>
       {nameC}
     </ul>
     <Tester />
     <ContainerComponent /> */}
//}

