import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Camera as CapCamera, CameraResultType } from '@capacitor/camera';

const TabCamera: React.FC = () => {
   const [camImg, setCamImg] = useState<any | null>(null);

   const takePicture = async () => {
      try {
         const image = await CapCamera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri
         });

         // image.webPath will contain a path that can be set as an image src.
         // You can access the original file using image.path, which can be
         // passed to the Filesystem API to read the raw data of the image,
         // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
         var imageUrl = image.webPath;
         console.log(imageUrl);
         setCamImg(imageUrl);

      } catch (error) {
         console.log(error);
      }
   };

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonTitle>Camera</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent fullscreen>
            <IonButton expand="full" onClick={takePicture} >Take Picture</IonButton>
            <img src={camImg} alt="camera-placeholder"/>
         </IonContent>
      </IonPage>
   );
};

export default TabCamera;
