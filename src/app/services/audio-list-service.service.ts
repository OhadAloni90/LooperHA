import { Injectable } from '@angular/core';
import { SvgLoader } from 'angular-svg-icon';

export interface LooperComp {
  name: string;
  id: String;
  isPlaying: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AudioListServiceService {

  constructor() { }

  public looperCompList: LooperComp[] =  [
    {
      name: 'SilentStar_120_Em_OrganSynth',
      id: "organ",
      isPlaying: false,
    },
    {  
      name: 'PAS3GROOVE1.03B',
      id: 'drum',
      isPlaying: false,
    },
    {
       name: 'MazePolitics_120_Perc',
       id: 'robot',
       isPlaying: false,
    },
    { 
      name: 'GrooveB_120bpm_Tanggu',
      id: 'darbuka',
      isPlaying: false,
    },
    { 
      name: 'FUD_120_StompySlosh',
      id: 'slosh',
      isPlaying: false,
    },
    { 
      name: 'electric guitar coutry slide 120bpm - B',
      id: 'guitar',
      isPlaying: false,    
    },
    {
       name: 'Bass Warwick heavy funk groove on E 120 BPM',
       id: 'bass',
       isPlaying: false,
    },
    {
      name: '120_stutter_breakbeats_16',
      id: 'clock',
      isPlaying: false,
    },
    {
      name: '120_future_funk_beats_25',
      id: 'funk',
      isPlaying: false,
    }
    ];
  }
  
