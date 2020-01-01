import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'displayButton';
  time=0;
  isPlay=true;
  settimer
  startTime(){
    this.isPlay=!this.isPlay
    this.settimer = setInterval(()=>{
      this.time++
    },1000)
  }
  ngOnDestroy(){

  }
  stopTime(){
    clearInterval(this.settimer)
    this.isPlay=!this.isPlay;
  }
}

