import React from 'react';
import { IonImg, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonThumbnail, IonRow, IonCol, IonDatetime, IonFab } from '@ionic/react';
import { pin, wifi, wine, warning, walk, push } from 'ionicons/icons';
import { useHistory } from 'react-router';


const Liste: React.FC = () => {
  let history = useHistory();

  let liste = [
   {
    id : '1',
    prix: 5000000,
    rent: 10,
    date: '2020-10-10',
    addr: '11 rue du stade Arsac 33460',
    note : 'T8, chapente neuve, piscine 1000m Terrain.'},
    {
    id : '2',
    prix: 250000,
    rent: 6,
    date: '2020-11-10',
    addr: '37 rue des Fleurs 75000',
    note : '10m, confortable, une douche, un lit'},
    {
    id : '3',
    prix: 600000,
    rent: 2,
    date: '2019-16-09',
    addr: '99 rue du la porte 35000 Rennes',
    note : 'T6, Piscine interieure, 120m'},
    ];

  let deleteHandler = () => {
    console.log('delete')
  }

  let viewHandler = (id: string) => {
    history.push('/details/' + id)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Listing</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color='black'>
        <IonRow>
          {
          liste.map((element, index) => (
            <IonCol size='2'>
            <IonCard button onClick={() => viewHandler(element.id)} key={index}>
              <img src="data:image/jpeg;base64,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" />
              <IonCardHeader>
                <IonCardSubtitle>Prix: {element.prix}</IonCardSubtitle>
                <IonCardSubtitle>Date: {element.date}</IonCardSubtitle>
                <IonCardSubtitle>Rentabilité: {element.rent} %</IonCardSubtitle>
                <IonCardTitle>Adresse: {element.addr}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {element.note}
              </IonCardContent>
              <IonButton expand="block" >Ajouter à ma liste</IonButton>
            </IonCard>
            </IonCol>
          ))}
              
            </IonRow>
      </IonContent>
    </IonPage>
  );
};
export default Liste;