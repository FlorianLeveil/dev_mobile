import { IonButton, IonCol, IonIcon, IonInput, IonItem, IonLabel, IonRow } from '@ionic/react';
import { calculator, calculatorOutline, calculatorSharp, refreshSharp } from "ionicons/icons"

import React from 'react';

const Controls: React.FC<{onCalculate: () => void; onReset: () => void}> = props => 
 (
    <IonRow>
        <IonCol className="ion-text-left">
            <IonButton onClick={props.onCalculate}><IonIcon slot="start" icon={calculatorSharp} />Calculator</IonButton>
        </IonCol>
        <IonCol className="ion-text-right">
            <IonButton fill="outline" onClick={props.onReset}><IonIcon slot="start" icon={refreshSharp} />Reset</IonButton>

        </IonCol>
    </IonRow>
)

export default Controls