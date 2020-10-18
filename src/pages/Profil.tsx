import { IonInput, IonAlert, IonAvatar, IonCol, IonContent, IonHeader, IonImg, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar, IonItemDivider } from '@ionic/react';
import React, { useState } from 'react';

const Profil: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  
    let profil: {
      name: string,
      emp: number,
      ass: number,
      demp: number,
      fn: number,
      app: number,
    } = {
      name: 'Florian',
      emp: 2,
      ass: 3,
      demp: 15,
      fn: 5,
      app : 50000,
    }
  
    return (
      <>

        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Profil</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonRow>
              <IonCol size='12'>
                <IonList>
                <IonItemDivider>Nom</IonItemDivider>
                  <IonItem>
                    <IonInput value={profil.name} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                  </IonItem>
                </IonList>
              </IonCol>

            </IonRow>
            <IonRow>
              <IonCol size='6'>
                <IonList>
                  <IonItemDivider>Taux emprunt</IonItemDivider>
                  <IonItem>
                    <IonInput type="number" value={profil.emp} placeholder="Enter Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}>%</IonInput>
                  </IonItem>
                </IonList>
              </IonCol>
              <IonCol size='6'>
                <IonList>
                  <IonItemDivider>Taux assurance</IonItemDivider>
                  <IonItem>
                    <IonInput type="number" value={profil.ass} placeholder="Enter Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}>%</IonInput>
                  </IonItem>
                </IonList>
              </IonCol>

            </IonRow>
            <IonRow>
              <IonCol size='6'>
                <IonList>
                  <IonItemDivider>Frais de notaire</IonItemDivider>
                  <IonItem>
                    <IonInput type="number" value={profil.fn} placeholder="Enter Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}>%</IonInput>
                  </IonItem>
                </IonList>
              </IonCol>
              <IonCol size='6'>
                <IonList>
                  <IonItemDivider>Durée de l'emprunt</IonItemDivider>
                  <IonItem>
                    <IonInput type="number" value={profil.demp} placeholder="Enter Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
                  </IonItem>
                </IonList>
              </IonCol>

            </IonRow>
            <IonRow>
              <IonCol size='12'>
                <IonList>
                  <IonItemDivider>Apport</IonItemDivider>
                  <IonItem>
                    <IonInput type="number" value={profil.fn} placeholder="Enter Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}>€</IonInput>
                  </IonItem>
                </IonList>
              </IonCol>

            </IonRow>
          </IonContent>
        </IonPage>
      </>
    );
  };

export default Profil;