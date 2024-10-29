import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonModal, 
  IonButtons, 
  IonList, 
  IonItem, 
  IonAvatar, 
  IonImg, 
  IonLabel,
  IonSearchbar, 
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton, 
    IonModal, 
    IonButtons, 
    IonList, 
    IonItem, 
    IonAvatar, 
    IonImg, 
    IonLabel, 
    ExploreContainerComponent,
    IonSearchbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle
  ],
})
export class Tab3Page {
  constructor() {}
}
