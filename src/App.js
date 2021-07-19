import { BrowserRouter, Route, Switch } from "react-router-dom";
import NabvarComponent from "./component/NabvarComponent";
import HomeContainer from "./container/HomeContainer";
import ItemDetailContainer from "./container/ItemDetailContainer";
import ItemListContainer from "./container/ItemListContainer";
import { ShopComponent } from "./context/ShopContext";

function App() {
  return (
    <>
      <ShopComponent>
        <BrowserRouter>
          <NabvarComponent />
          <Switch>
            <Route exact path="/">
              <HomeContainer />
            </Route>
            <Route exact path="/categories/:idCategory">
              <ItemListContainer />
            </Route>
            <Route exact path="/productDetail/:idProduct">
              <ItemDetailContainer />
            </Route>
          </Switch>
        </BrowserRouter>
      </ShopComponent>
    </>
  );
}

export default App;
