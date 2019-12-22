import React from 'react';
import {NativeRouter, Route} from 'react-router-native';

import LoginPage from '../Pages/LoginPage';
import CropSelectionPage from '../Pages/CropSelection';
import DashboardPage from '../Pages/DashboardPage';

const Router = () => (
  <NativeRouter>
    <>
      <Route exact path="/" component={LoginPage} />
      <Route path="/crop-selection" component={CropSelectionPage} />
      <Route path="/dashboard" component={DashboardPage} />
    </>
  </NativeRouter>
);

export default Router;
