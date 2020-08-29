import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Hls from 'hls.js';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit, AfterViewInit {
  @ViewChild('video') videoEl: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const video = this.videoEl.nativeElement as HTMLVideoElement;
    const src = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
    if (Hls.isSupported()) {
      const hls = new Hls({
        maxBufferLength: 30,
        enableWorker: true
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    }
  }

}
