import React from 'react';
import {NativeRouter, Route} from 'react-router-native';

import LoginPage from '../Pages/LoginPage';
import CropSelectionPage from '../Pages/CropSelection';
import DashboardPage from '../Pages/DashboardPage';
import ProductsPage from '../Pages/ProductsPage';
import ProductDetailsPage from '../Pages/ProductDetailsPage';
import ShoppingCartPage from '../Pages/ShoppingCartPage';
import VideosPresentationPage from '../Pages/VideosPresentationPage';
import QuestionAnswerPage from '../Pages/QuestionAnswerPage';

const Router = () => (
  <NativeRouter initialEntries={['/']}>
    <React.Fragment>
      <Route exact path="/" component={LoginPage} />
      <Route path="/crop-selection" component={CropSelectionPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/product-details/:pid" component={ProductDetailsPage} />
      <Route path="/shopping-cart" component={ShoppingCartPage} />
      <Route path="/videos-presentation" component={VideosPresentationPage} />
      <Route path="/questions" component={QuestionAnswerPage} />
    </React.Fragment>
  </NativeRouter>
);

export default Router;
