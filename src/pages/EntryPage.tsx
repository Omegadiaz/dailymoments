import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonButtons,
  IonBackButton,
} from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import { entries } from '../data';

interface RouteParams {
  id: string;
}

const EntryPage: React.FC = () => {
  const { id } = useParams<RouteParams>();
  //coge el parámetro id de la url
  const entry = entries.find((entry) => entry.id === id)
  if(!entry) {
    throw new Error(`No such entry: ${id}`);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton />
          </IonButtons>
            <IonTitle>{entry.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          {entry.description}
      </IonContent>
    </IonPage>
  );
};

export default EntryPage;
