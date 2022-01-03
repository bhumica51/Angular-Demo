import { Component, Input, OnInit } from "@angular/core";
import { photo } from "src/shared/model/photo";

@Component({
  selector: "app-gridview",
  templateUrl: "./gridview.component.html",
  styleUrls: ["./gridview.component.css"],
})
export class GridviewComponent implements OnInit {
  @Input() originalData = [];
  photoList = [] as Array<photo>;
  selPhotoDetail = {};

  constructor() { }

  ngOnInit(): void {
    this.photoList = this.originalData.slice(0, 20);
  }

  Compare(Detail) {
    this.selPhotoDetail = Detail;
    this.photoList = this.photoList.filter(item => item !== Detail);
  }

  addPhoto(photo) {
    this.photoList.push(photo);
  }

  onScrollDown() {
    if (this.photoList.length < this.originalData.length) {
      let len = this.photoList.length;
      console.log(this.photoList.length);
      for (var i = len; i <= len + 20; i++) {
        this.photoList.push(this.originalData[i]);
      }
    }
  }
}
