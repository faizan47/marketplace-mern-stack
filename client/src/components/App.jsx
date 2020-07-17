import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import distributorRoutes from "../routes/distributorRoutes";
import retailerRoutes from "../routes/retailerRoutes";
import commonRoutes from "../routes/commonRoutes";
import Header from "./common/Header";
import Footer from "./common/Footer";
import ScrollToTop from "./common/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <ToastContainer
                        hideProgressBar
                        position="bottom-right"
                        autoClose={1800}
                    />
                    <div className="container">
                        <Route path="/">
                            <Header />
                        </Route>
                        <section className="section">
                            {commonRoutes()}
                            {distributorRoutes()}
                            {retailerRoutes()}
                        </section>
                    </div>

                    <Route path="/">
                        <Footer />
                    </Route>
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}
