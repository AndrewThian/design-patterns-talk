class ElementObs {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
  }

  notify(model) {
    this.element.innerHTML = model.number;
    this.element.style.backgroundColor = model.color;
  }
}