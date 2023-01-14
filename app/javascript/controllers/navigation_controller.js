import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
// navbar burger show/hide

  static targets = [ "navbar", "burger" ]

  connect() {
    console.log("Hello, Stimulus!", this.element)
  }

  toggleNavbar() {
    this.navbarTarget.classList.toggle("is-active")
    
  }

  closeNavbar() {

    this.navbarTarget.classList.remove("is-active")
  }
}


