import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonButton,
  IonItem,
  IonList,
  IonLabel,
  IonInput,
  IonText,
  IonLoading,
} from '@ionic/react';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useAuth } from '../auth';
import { auth } from '../firebase';



const LoginPage = ({ onLogin }) => {
  const {loggedIn} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState({loading: false, error: false});

  const handleLogin = async () => {
    try {
      setStatus({loading: true, error: false});
      await auth.signInWithEmailAndPassword(email, password);
      onLogin(); 
    //console.log('Credential:', credential);
    //SetLoggedIn to true desde App.tsx
      } catch (error) {
        setStatus({loading: false, error: true});
        console.log('error', error);
      }
    };
  //Retorna una promise así que hay que usar async



  if (loggedIn){
    return <Redirect to="/my/entries" />
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Email </IonLabel>
            <IonInput type="email" value={email} onIonChange={(event) => setEmail(event.detail.value)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password </IonLabel>
            <IonInput type="password" value={password} onIonChange={(event) => setPassword(event.detail.value)}></IonInput>
          </IonItem>
        </IonList>
      <IonButton expand="block" 
      onClick={handleLogin}> 
      Login</IonButton>
      {status.error &&  <IonText color="danger">
    Invalid Credentials
      </IonText>}
     <IonLoading isOpen={status.loading} />
     <IonButton expand="block" fill="clear" href="/register">Create new user</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
