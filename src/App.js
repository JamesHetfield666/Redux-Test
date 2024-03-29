import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MainPage } from "./pages/MainPage";
import Catalog from "./pages/Catalog";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '../src/components/LayoutElements/Header.js'
import Footer from '../src/components/LayoutElements/Footer.js'
import SideBar from '../src/components/LayoutElements/SideBar.js'
import BackSideBar from '../src/components/LayoutElements/BackSideBar.js'
import Authorization from '../src/components/LayoutElements/Authorization.js'
import Register from '../src/components/LayoutElements/Register.js'
import '../src/styles/app.scss'



function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact>
            <div className="container_app">
              <div className="client">
                <BackSideBar></BackSideBar>
                <Authorization></Authorization>
                <Register></Register>
                <SideBar></SideBar>
                <div className="client_container">
                  <Helmet>
                    <title>GAMER | Главная страница</title>
                  </Helmet>
                  <Header></Header>
                  <MainPage />
                  <Footer></Footer>
                </div>
              </div>
            </div>
          </Route>
          <Route path={'/catalog/:category'} exact >
            <div className="container_app">
              <div className="client">
                <BackSideBar></BackSideBar>
                <Authorization></Authorization>
                <Register></Register>
                <SideBar></SideBar>
                <div className="client_container">
                  <Helmet>
                    <title>GAMER | Каталог</title>
                  </Helmet>
                  <Header></Header>
                  <Catalog />
                  <Footer></Footer>
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
