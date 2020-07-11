import {  
  IonApp, IonRouterOutlet } from '@ionic/react';
import React, { useState } from 'react';
import  { IonReactRouter} from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AppTabs from './AppTabs';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(`rendering app with loggedin=${loggedIn}`)
  return (
    <IonApp>
      <IonReactRouter>
        
                <IonRouterOutlet> 
                  <Route path="/login" exact>
                    <LoginPage loggedIn={loggedIn} 
                    onLogin={() => setLoggedIn(true)} />
                    
                  </Route>
                  <Route path="/my">
                    {//Mostramos las páginas protegidas
                    }
                    <AppTabs loggedIn={loggedIn} />
                  </Route>
                  <Redirect exact path="/" to="/my/entries"></Redirect>
                  </IonRouterOutlet>
                  
              
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
