import React, { useRef, useState } from 'react';
import { IonApp, IonContent, IonGrid, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonLabel, IonInput, IonItem, IonButton, IonCard, IonCardContent, IonIcon } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { calculator, calculatorOutline, calculatorSharp, refreshSharp } from "ionicons/icons"
const App: React.FC = () => {
	const priceInput = useRef<HTMLIonInputElement>(null);
	const rentInput = useRef<HTMLIonInputElement>(null);
	const [result, setResult] = useState<number>();
	const calculate = () => {
		const priceValue = priceInput.current!.value;
		const rentValue = rentInput.current!.value;

		if (!priceValue || !rentValue) return
		const renta = +rentValue * 12 * 100 / +priceValue
		setResult(renta);
	}
	const reset = () => {
		priceInput.current!.value = '';
		rentInput.current!.value = '';
		setResult(undefined);
	}
	return (
		<IonApp>
			<IonHeader>
				<IonToolbar color='dark'>
					<IonTitle>
						Investement
				</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<IonGrid>
					<IonRow>
						<IonCol>
							<IonItem>
								<IonLabel position="floating">
									Price
								</IonLabel>
								<IonInput type="number" ref={priceInput}></IonInput>
							</IonItem>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonItem>
								<IonLabel position="floating">
									Rent
								</IonLabel>
								<IonInput type="number" ref={rentInput}></IonInput>
							</IonItem>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol className="ion-text-left">
							<IonButton onClick={calculate}><IonIcon slot="start" icon={calculatorSharp} />Calculator</IonButton>
						</IonCol>
						<IonCol className="ion-text-right">
							<IonButton fill="outline" onClick={reset}><IonIcon slot="start" icon={refreshSharp} />Reset</IonButton>

						</IonCol >
					</IonRow>

					<IonRow>
						<IonCol>
							<IonCard>
							{result ?
								<IonCardContent className="ion-text-center">
									{result}
								</IonCardContent>
								: null
							}
							</IonCard>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonApp>
	)
};

export default App;
