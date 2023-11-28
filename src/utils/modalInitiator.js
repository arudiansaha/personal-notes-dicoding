class ModalInitiator {
  element;
  className;

  constructor(element, className) {
    this.element = element;
    this.className = className;
  }

  open() {
    if (!this.element.classList.contains(this.className)) {
      this.element.showModal();
      this.element.classList.add(this.className);
    }
  }

  close() {
    if (this.element.classList.contains(this.className)) {
      this.element.close();
      this.element.classList.remove(this.className);
    }
  }
}

export default ModalInitiator;
