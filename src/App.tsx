import {  
  IonApp, IonLoading } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import  { IonReactRouter} from '@ionic/react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AppTabs from './AppTabs';
import { AuthContext } from './auth';
import NotFoundPage from './pages/NotFoundPage';
import { auth } from './firebase';

const App: React.FC = () => {
  const [authState, setAuthState] = useState({loading: true, loggedIn: false});
  //console.log(`rendering app with loggedin=${loggedIn}`)
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setAuthState({loading: false, loggedIn: Boolean(user)})
    })
  }, []);

  if(authState.loading){
    return <IonLoading isOpen />
  }
  return (
    <IonApp>
      <IonReactRouter>
        <AuthContext.Provider value={{ loggedIn: authState.loggedIn }}>
                <Switch> 
                  <Route path="/login" exact>
                    <LoginPage
                    onLogin={() => setAuthState({loading: false, loggedIn: true})} />
                    
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
