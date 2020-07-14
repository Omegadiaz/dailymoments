import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonButton,
} from '@ionic/react';
import React from 'react';
import { auth } from '../firebase';

const SettingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      This is the settings page.
      <IonButton color="medium" expand="block" onClick={() => auth.signOut()}>Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
