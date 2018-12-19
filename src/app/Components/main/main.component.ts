import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [NgbCarouselConfig]
})
export class MainComponent  {


  images = ["../assets/0.png","../assets/1.png","../assets/2.png","../assets/3.png"];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
  }
  OnInit(){
    this.exitFullScreen();
  }
  exitFullScreen() {
    let methodToBeInvoked = document.exitFullscreen ||
      document['webkitExitFullScreen'] || document['mozExitFullscreen']
      ||
      document['msExitFullscreen'];
    if (methodToBeInvoked) methodToBeInvoked.call(document);
  }
}