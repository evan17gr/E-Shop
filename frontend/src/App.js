import React from "react";
import {BrowserRouter as Browser,Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/ProductScreen";

const App = () => {
  return (
   <Browser>
      <Header/>
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact/>
          <Route path="/product/:id" component={ProductScreen}/>
        </Container>
      </main>
      <Footer/>
   </Browser>
  );
}

export default App;
