import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {

  showPresentation : boolean = true;
  showDetail : boolean = false;

  rotateCard(){
    this.showPresentation = !this.showPresentation;
    this.showDetail = !this.showDetail;
  }
}
