import React from 'react';
// import { connect } from 'react-redux';
// import { addFoodItem } from './reducer';
import LoginForm from "./components/Login";
import RegisterForm from './components/Register';
import { Route } from 'react-router-dom';
function App() {


  return(
    <div>
      <Route exact path="/" component={LoginForm} />
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
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

// export default connect(mapStateToProps, { addFoodItem })(App)

export default App
