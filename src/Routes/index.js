import React from 'react';
import {NativeRouter, Route} from 'react-router-native';

import LoginPage from '../Pages/LoginPage';
import CropSelectionPage from '../Pages/CropSelection';
import DashboardPage from '../Pages/DashboardPage';
import ProductsPage from '../Pages/ProductsPage';
import ProductDetailsPage from '../Pages/ProductDetailsPage';

const Router = () => (
  <NativeRouter initialEntries={['/product-details/edfwfd']}>
    <React.Fragment>
      <Route exact path="/" component={LoginPage} />
      <Route path="/crop-selection" component={CropSelectionPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/product-details/:pid" component={ProductDetailsPage} />
    </React.Fragment>
  </NativeRouter>
);

export default Router;
