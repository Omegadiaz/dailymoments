import {  
  IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon,
} from '@ionic/react';
import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EntryPage from './pages/EntryPage';
import SettingsPage from './pages/SettingsPage';
import { useAuth } from './auth';
import { home as homeIcon, settings as settingsIcon} from 'ionicons/icons';

const AppTabs: React.FC = () => {
  const { loggedIn }  = useAuth();
  if (!loggedIn) {
    return <Redirect to="/login" />
  }
  return (
    
        <IonTabs>
                <IonRouterOutlet> 
                  
                  <Route path="/my/entries" exact>
                    <HomePage /> 
                    
                  </Route>
                  <Route path="/my/entries/:id" exact>
                    <EntryPage />
                  </Route>
                  <Route path="/my/settings" exact>
                    <SettingsPage />
                  </Route>
                  
                  </IonRouterOutlet>
                  <IonTabBar slot="bottom">
                    <IonTabButton tab="home" href="/my/entries" >
                    <IonIcon icon={homeIcon} />
                      <IonLabel>Home</IonLabel>
                    </IonTabButton>                    
                    <IonTabButton tab="settings" href="/my/settings" >
                    <IonIcon icon={settingsIcon} />
                      <IonLabel>Settings</IonLabel>
                    </IonTabButton>
                  </IonTabBar>
              </IonTabs>
     
  );
};

export default AppTabs;
