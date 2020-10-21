import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";
import home from "./routes/home";
import Restaurantdetail from "./routes/Restaurantdetail";
import updaterestaurant from "./routes/updaterestaurant";

function App() {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/restaurants/:id" component={Restaurantdetail} />
            <Route
              exact
              path="/restaurant/:id/update"
              component={updaterestaurant}
            />
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
}

export default App;
