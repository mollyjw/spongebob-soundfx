import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  numClicks: number = 0;
  files = [
    '../../assets/soundclips/2000-years-later.mp3',
    '../../assets/soundclips/a-few-moments-later-hd.mp3',
    '../../assets/soundclips/air-is-not-good.mp3',
    '../../assets/soundclips/anthem.mp3',
    '../../assets/soundclips/are-you-feeling-it-now-mr-krabs.mp3',
    '../../assets/soundclips/BooBoos.mp3',
    '../../assets/soundclips/bring-it-around.mp3',
    '../../assets/soundclips/chocolate.mp3',
    '../../assets/soundclips/dolphin-censor.mp3',
    '../../assets/soundclips/doodle-bob.mp3',
    '../../assets/soundclips/dramatic-impact.mp3',
    '../../assets/soundclips/electric-zoo.mp3',
    '../../assets/soundclips/fail.mp3',
    '../../assets/soundclips/funnier-than-24.mp3',
    '../../assets/soundclips/future.mp3',
    '../../assets/soundclips/glass-bones.mp3',
    '../../assets/soundclips/gold-team.mp3',
    '../../assets/soundclips/good-noodle.mp3',
    '../../assets/soundclips/grass-skirt-chase.mp3',
    '../../assets/soundclips/high-tide.mp3',
    '../../assets/soundclips/hoopla.mp3',
    '../../assets/soundclips/how-many-times.mp3',
    '../../assets/soundclips/i-need-it.mp3',
    '../../assets/soundclips/if-i-had-a-dollar.mp3',
    '../../assets/soundclips/if-i-were-to-die.mp3',
    '../../assets/soundclips/im-ready.mp3',
    '../../assets/soundclips/imagination.mp3',
    '../../assets/soundclips/leedle-leedle-lee.mp3',
    '../../assets/soundclips/mermaid-man-evil.mp3',
    '../../assets/soundclips/my-leg.mp3',
    '../../assets/soundclips/next-bus.mp3',
    '../../assets/soundclips/oh-no-hes-hot.mp3',
    '../../assets/soundclips/one-eternity-later.mp3',
    '../../assets/soundclips/one-hour-later.mp3',
    '../../assets/soundclips/patrick_scream.mp3',
    '../../assets/soundclips/patrick-stars-epic-laugh.mp3',
    '../../assets/soundclips/patrick-trombone.mp3',
    '../../assets/soundclips/plankton.mp3',
    '../../assets/soundclips/ripped-my-pants.mp3',
    '../../assets/soundclips/spongebob-laughing.mp3',
    '../../assets/soundclips/spongebob-squarepants2.mp3',
    '../../assets/soundclips/squids_day_off.mp3',
    '../../assets/soundclips/thank-you-for-your-patronage.mp3',
    '../../assets/soundclips/the-ugly-barnacle.mp3',
    '../../assets/soundclips/thehooks.mp3',
    '../../assets/soundclips/this-is-a-load-of-barnacles.mp3',
    '../../assets/soundclips/two-hours-later.mp3',
    '../../assets/soundclips/victoryscreech.mp3',
    '../../assets/soundclips/wa-wa-wa.mp3',
    '../../assets/soundclips/well-ive-done-all-i-can-do.mp3',
    '../../assets/soundclips/you-left-your-lights-on.mp3',
    '../../assets/soundclips/you-what.mp3'

  ]

  constructor() { }

  ngOnInit(): void {
  }

  playClip() {
    let audio = new Audio();
    audio.src = this.files[Math.floor(Math.random() * this.files.length)]
    // audio.src = this.clips;
    audio.load();
    audio.play();
  }

  onClick() {
    this.numClicks += 1
    this.playClip()
  }

}
