import { Component,Input,OnChanges, Output,EventEmitter } from "@angular/core";
import { photo } from "src/shared/model/photo";

@Component({
  selector: "app-tableview",
  templateUrl: "./tableview.component.html",
  styleUrls: ["./tableview.component.css"],
})
export class TableviewComponent implements OnChanges {
  @Input() selPhoto:any;
  selPhotoDetails = [] as Array<photo>;
  @Output() valueChange = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {}

  ngOnChanges(changes: any){
     if( Object.keys(changes.selPhoto.currentValue).length > 0) {
       this.selPhotoDetails.push(this.selPhoto)
     }
  }

  remove(photo) {
    this.selPhotoDetails = this.selPhotoDetails.filter(item => item !== photo);
    this.valueChange.emit(photo);
  }
}
