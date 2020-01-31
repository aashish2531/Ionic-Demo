import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./tabs/tabs.module").then(m => m.TabsPageModule)
  },
  {
    path: "tab4",
    loadChildren: () => import("./tab4/tab4.module").then(m => m.Tab4PageModule)
  },
  {
    path: "tab4",
    loadChildren: () => import("./tab4/tab4.module").then(m => m.Tab4PageModule)
  },
  {
    path: "details",
    loadChildren: () =>
      import("./details/details.module").then(m => m.DetailsPageModule)
  },
  {
    path: "route-ex/:id",
    loadChildren: () =>
      import("./route-ex/route-ex.module").then(m => m.RouteExPageModule)
  },
  {
    path: "chip",
    loadChildren: () => import("./chip/chip.module").then(m => m.ChipPageModule)
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then(m => m.LoginPageModule)
  },
  {
    path: "register",
    loadChildren: () =>
      import("./register/register.module").then(m => m.RegisterPageModule)
  },
  {
    path: "todolist",
    loadChildren: () =>
      import("./todolist/todolist.module").then(m => m.TodolistPageModule)
  },
  {
    path: "addtodo",
    loadChildren: () =>
      import("./addtodo/addtodo.module").then(m => m.AddtodoPageModule)
  },
  {
    path: "register-form",
    loadChildren: () =>
      import("./register-form/register-form.module").then(
        m => m.RegisterFormPageModule
      )
  },
  {
    path: "update-task",
    loadChildren: () =>
      import("./update-task/update-task.module").then(
        m => m.UpdateTaskPageModule
      )
  },
  {
    path: "model",
    loadChildren: () =>
      import("./model/model.module").then(m => m.ModelPageModule)
  },
  {
    path: 'audio',
    loadChildren: () => import('./audio/audio.module').then( m => m.AudioPageModule)
  },
  {
    path: 'geolocate',
    loadChildren: () => import('./geolocate/geolocate.module').then( m => m.GeolocatePageModule)
  },
  {
    path: 'vupload',
    loadChildren: () => import('./vupload/vupload.module').then( m => m.VuploadPageModule)
  },
  {
    path: 'filetransfer',
    loadChildren: () => import('./filetransfer/filetransfer.module').then( m => m.FiletransferPageModule)
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./shoppingcart/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./shoppingcart/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'barcode',
    loadChildren: () => import('./barcode/barcode.module').then( m => m.BarcodePageModule)
  },
  {
    path: 'notificationpage',
    loadChildren: () => import('./notificationpage/notificationpage.module').then( m => m.NotificationpagePageModule)
  },
  {
    path: 'filemanager',
    loadChildren: () => import('./filemanager/filemanager.module').then( m => m.FilemanagerPageModule)
  },
  {
    path: 'infscrl',
    loadChildren: () => import('./infscrl/infscrl.module').then( m => m.InfscrlPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
