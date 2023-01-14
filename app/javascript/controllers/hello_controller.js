import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = [ "navbar", "burger" ]

  connect() {
    console.log("Hello, Stimulus!", this.element)
  }

  toggleNavbar() {
    this.navbarTarget.classList.toggle("is-active")
    console.log("clicked")
    
  }

  closeNavbar() {

    this.navbarTarget.classList.remove("is-active")
  }
}


