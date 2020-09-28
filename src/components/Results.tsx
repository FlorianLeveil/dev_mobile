import {IonCard, IonCardContent, IonCol, IonRow } from '@ionic/react';

import React from 'react';

const Results: React.FC<{result:number}> = props => 
 (
<IonRow>
    <IonCol>
        <IonCard>
            <IonCardContent className="ion-text-center">
                {props.result}
            </IonCardContent>
        </IonCard>
    </IonCol>
</IonRow>
)

export default Results