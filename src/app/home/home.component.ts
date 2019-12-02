// import { Component, OnInit, ElementRef, ViewChild, ChangeDetectionStrategy };
import {HttpClient} from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  @ViewChild('video',{static: false})
  public video: ElementRef;

  @ViewChild('canvas', {static: false})
  public canvas: ElementRef;

  public constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
        // this.video.nativeElement.src = window.URL.createObjectURL(stream);
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
      });
    }
  }

  public capture() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    var base64image = this.canvas.nativeElement.toDataURL();
    // console.log(base64image);
    var data = {
      image: base64image,
    };
    // var image = "{"image": "+ base64image + "}";
    this.httpClient.post('http://localhost:3001/videos/333/users/123/emotions?time=369', data).toPromise().then(dat => {
      console.log(dat);
      // console.log();
    });
  }
}
