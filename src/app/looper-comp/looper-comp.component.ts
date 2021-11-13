import { Component, OnInit } from '@angular/core';
import { AudioListServiceService, LooperComp } from '../services/audio-list-service.service';

@Component({
  selector: 'app-looper-comp',
  templateUrl: './looper-comp.component.html',
  styleUrls: ['./looper-comp.component.scss']
})

export class LooperCompComponent implements OnInit {
  compoList: LooperComp[] = [];
  audioPlaying: LooperComp[] = [];
  audioList: any[] = [];
  currentAudio: any[] = [];
  playTime: number = 0; //initial time state


  public tracks =  [new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio()]
  constructor(public audioService: AudioListServiceService) { }
  ngOnInit() {
      this.compoList = this.audioService.looperCompList;
      let i = 0;
      for(i;i<=this.tracks.length;i++){
          this.tracks[i].src = "../assets/audio/" + this.compoList[i].name + '.mp3';
          
          this.tracks[i].loop=true;
      }
  } 

  getRecording (){
  }
  
  playTrack(e: LooperComp, i: number) {
    e.isPlaying=!e.isPlaying;
    //change its boolean state - if already clicked -> isPlaying = true
    if(e.isPlaying) {
      if (!this.playTime) {
        this.playTime = Date.now();
        //play at first click
        this.tracks[i].load();
        this.tracks[i].play();
      } else {
        const timeout = 8000 - ((Date.now() - this.playTime) % 8000);
        // 8000ms is a complete loop, once someone clicks on another button, we wait untill a loop ends. We know that from getting the integer reminder of the time stamps
        setTimeout(() => {
          if (e.isPlaying) {
            this.tracks[i].load();
            this.tracks[i].play();
          }
        }, timeout);
      }
    } else {
      // already playing 
      this.tracks[i].pause();
      if (this.tracks.every( e =>  e.paused)) {
        this.playTime = 0;
        //reset timestamp
      }
    }

    }
  }