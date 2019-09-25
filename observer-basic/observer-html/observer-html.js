class Model {
  constructor() {
    this.observers = [];
    this.number = 0;
    this.color = 'red';
  }

  changeColor() {
    const colors = ['orange', 'green', 'blue', 'salmon']
    this.number++
    this.color = colors[Math.floor(Math.random() * colors.length)];

    this.notifyObservers();
  }

  addObserver(observer) {
    this.observers = this.observers.concat(observer);
  }

  notifyObservers() {
    const iterator = new Iterator(this.observers);
    iterator.each(observer => {
      observer.value.notify(this);
    })
  }
}