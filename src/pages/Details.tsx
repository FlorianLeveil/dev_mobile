import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Details: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='end'>
                        <IonBackButton defaultHref="">

                        </IonBackButton>
                    </IonButtons>
                    <IonTitle>Page 2</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonButton></IonButton>
            </IonContent>
        </IonPage>
    )
};

export default Details;