import {
  IonContent,
  IonPage,
} from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <IonPage>
      
      <IonContent className="ion-padding">
      Not found <Link to="/login">Volver</Link>
      </IonContent>
    </IonPage>
  );
};

export default NotFoundPage;
