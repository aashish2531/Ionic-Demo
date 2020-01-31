import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ChipPage } from "./chip.page";

const routes: Routes = [
  {
    path: "",
    component: ChipPage,
    children: [
      {
        path: "chip1",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../chip1/chip1.module").then(m => m.Chip1PageModule)
          }
        ]
      },
      {
        path: "chip2",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../chip2/chip2.module").then(m => m.Chip2PageModule)
          }
        ]
      },
      {
        path: "chip3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../chip3/chip3.module").then(m => m.Chip3PageModule)
          }
        ]
      },
      {
        path: "chip4",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../chip4/chip4.module").then(m => m.Chip4PageModule)
          }
        ]
      },
      {
        path: "",
        redirectTo: "/chip/chip1",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChipPageRoutingModule {}
