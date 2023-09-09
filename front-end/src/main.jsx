import "./styles/theme.css";
import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage/MainPage";
import { Favourites } from "./views/Favourites/Favourites";
import { Cart } from "./views/Cart/Cart";
import { ProductsList } from "./views/ProductsList/ProductsList";
import { ProductDetails } from "./views/ProductDetails/ProductDetails";
import { Layout } from "./components/Layout/Layout";
import { mainPageLoader } from "./api/mainPageLoader";
import { productListLoader } from "./api/productListLoader";
import { productLoader } from "./api/productLoader";
import { addProductToFavouritesAction } from "./api/addProductToFavouritesAction";

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                path: "/koszyk",
                element: <Cart />,
            },
            {
                path: "/ulubione",
                element: <Favourites />,
            },
            {
                path: "/:gender?",
                element: <MainPage />,
                loader: mainPageLoader,
                shouldRevalidate: () => false,
            },
            {
                path: "/:gender/:category/:subcategory?",
                element: <ProductsList />,
                loader: productListLoader,
                shouldRevalidate: () => false,
            },
            {
                path: "/:gender/:category/:subcategory/:productId",
                element: <ProductDetails />,
                loader: productLoader,
            },
        ],
    },
    {
        path: "/add-to-favourites/:productId",
        action: addProductToFavouritesAction,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
