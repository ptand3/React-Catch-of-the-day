import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
// import ThumbnailGallery from "./ThumbnailGallery";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeID" component={App}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>
)

export default Router;