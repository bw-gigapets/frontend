import React from 'react';
// import { connect } from 'react-redux';
// import { addFoodItem } from './reducer';
// import foods from './reducer/action';
// import users from './reducer/users
import WelcomePage from "./components/WelcomePage";
import LoginForm from "./components/Login";
import RegisterForm from './components/Register';
import Profile from './components/Profile';
import ManageAccount from './components/ManageAccount';
import { Route } from 'react-router-dom';
function App() {


  return(
    <div>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
      <Route path="/profile" component={Profile} />
      <Route path="/manage-account" component={ManageAccount}/>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     childName: state.childName,
//     foodType: state.foodType,
//     foodCategory: state.foodCategory,
//     Date: state.Date,
//   }
// }

// add mapDispatchToProps = {
//   foods,
//   users
// }

// export default connect(mapStateToProps, { addFoodItem })(App)

export default App
