import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TableviewComponent } from "./tableview/tableview.component";
import { GridviewComponent } from "./gridview/gridview.component";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { SharedModule } from "src/shared/shared.module";

const routes: Routes = [{ path: "", component: DashboardComponent }];

@NgModule({
  declarations: [DashboardComponent, TableviewComponent, GridviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    InfiniteScrollModule,
    SharedModule,
  ],
})
export class PhotoComparisonModule {}
