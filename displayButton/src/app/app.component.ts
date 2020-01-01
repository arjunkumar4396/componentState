import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time = 0;
  isPlay = true;
  settimer: any;

  /**
   * start time
   */
  startTime() {
    this.isPlay = !this.isPlay
    this.settimer = setInterval(() => {
      this.time++
    }, 1000)
  }
  /**
   * stop timer
   */
  stopTime() {
    clearInterval(this.settimer)
    this.isPlay = !this.isPlay;
  }
}

