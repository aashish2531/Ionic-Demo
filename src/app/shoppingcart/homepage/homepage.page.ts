import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { ModalController } from "@ionic/angular";
import { CartModalPage } from "../cart-modal/cart-modal.page";
import { BehaviorSubject } from "rxjs";
@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.page.html",
  styleUrls: ["./homepage.page.scss"]
})
export class HomepagePage implements OnInit {
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild("cart", { static: false, read: ElementRef }) fab: ElementRef;

  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product) {
    this.cartService.addProduct(product);

    this.animateCSS("tada");
  }

  async openCart() {
    this.animateCSS("bounceOutLeft", true);
    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: "cart-modal"
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove("animate", "bounceOutLeft");
      this.animateCSS("bounceInLeft");
    });
    modal.present();
  }

  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add("animation", animationName);

    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove("animation", animationName);
      }
      node.removeEventListener("animationend", handleAnimationEnd);
    }
    node.addEventListener("animationend", handleAnimationEnd);
  }
}
