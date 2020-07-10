import {  
  IonApp,
} from '@ionic/react';
import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';

const App: React.FC = () => {
  return (
    <IonApp>
      <BrowserRouter>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/settings" exact>
          <SettingsPage />
        </Route>
        <Redirect exact path="/" to="/home"></Redirect>
      </BrowserRouter>
    </IonApp>
  );
};

export default App;
