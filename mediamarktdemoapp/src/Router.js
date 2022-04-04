import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import ProductForm from "./components/ProductForm";
import { Products } from "./components/Products";

class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Navigate to="/products" />} />
                    <Route exact path="/products" element={<Products />}></Route>
                    <Route exact path="/product/create" element={<ProductForm />}></Route>
                </Routes>
            </BrowserRouter>

        );
    }
}

export default Router;