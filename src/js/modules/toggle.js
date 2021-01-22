class Toggle {
    constructor() {
      const toggles = document.querySelectorAll(".js-toggle");
      for (let i = 0; i < toggles.length; i++) {
        this.addListener(toggles[i]);
      }
    }
  
    addListener(toggle) {
      toggle.addEventListener("click", this.clickHandler);
    }
  
    clickHandler(event) {
      const toggleSelector = event.target.getAttribute("data-toggle-selector");
      const toggleClass = event.target.getAttribute("data-toggle-class");
      const toToggle = document.querySelectorAll(toggleSelector);
      for (let i = 0; i < toToggle.length; i++) {
        console.log(toToggle[i]);
        toToggle[i].classList.toggle(toggleClass);
      }
    }
  }
  
  export default Toggle;