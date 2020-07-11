import {  
  IonApp, IonRouterOutlet } from '@ionic/react';
import React, { useState } from 'react';
import  { IonReactRouter} from '@ionic/react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AppTabs from './AppTabs';
import { AuthContext } from './auth';
import NotFoundPage from './pages/NotFoundPage';
const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(`rendering app with loggedin=${loggedIn}`)
  return (
    <IonApp>
      <IonReactRouter>
        <AuthContext.Provider value={{ loggedIn }}>
                <Switch> 
                  <Route path="/login" exact>
                    <LoginPage
                    onLogin={() => setLoggedIn(true)} />
                    
                  </Route>
                  <Route path="/my">
                    {//Mostramos las páginas protegidas
                    }
                    <AppTabs />
                  </Route>
                  <Redirect exact path="/" to="/my/entries"></Redirect>
                  <Route>
                    <NotFoundPage />
                  </Route>
                  </Switch>
                </AuthContext.Provider>  
              
          </IonReactRouter>
      
    </IonApp>
  );
};

export default App;
