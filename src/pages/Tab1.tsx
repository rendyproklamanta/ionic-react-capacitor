import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Test from '../components/Test';

const Tab1: React.FC = () => {
   // const age: number = 2

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonTitle>Tab 1</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent fullscreen>
            <IonHeader collapse="condense">
               <IonToolbar>
                  <IonTitle size="large">Tab 1</IonTitle>
               </IonToolbar>
            </IonHeader>
            <Test name={"namaku"} age={40} />
         </IonContent>
      </IonPage>
   );
};

export default Tab1;