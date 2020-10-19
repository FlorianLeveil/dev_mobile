import React from 'react';

import { listOutline, personCircle } from 'ionicons/icons';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import Liste from '../pages/Liste';
import Profil from '../pages/Profil';
import Details from '../pages/Details';

interface ContainerProps { }


const Router: React.FC<ContainerProps> = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/Liste" component={Liste} exact/>
          <Route path="/Profil" component={Profil} exact/>
          <Route path="/Details/*" component={Details} exact/>
          <Redirect exact from="/" to="/Liste" />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
  
          <IonTabButton tab="Liste" href="/Liste">
            <IonIcon icon={listOutline} />
            <IonLabel>About</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Profil" href="/Profil">
            <IonIcon icon={personCircle} />
            <IonLabel>Profil</IonLabel>
          </IonTabButton>
          
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Router;