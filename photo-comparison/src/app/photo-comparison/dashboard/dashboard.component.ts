import { Component, Input, OnInit } from "@angular/core";
import { photo } from "src/shared/model/photo";
import { ApiService } from "src/shared/service/api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  data = [] as Array<photo>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPhotos().subscribe((res: any[]) => {
      if(res.length>0) {
      this.data = res;
      }
    });
  }
}
