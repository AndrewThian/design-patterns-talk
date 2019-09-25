const Iterator = (function () {
  function _Iterator (items) {
    this.index = 0;
    this.items = items;
  }

  _Iterator.prototype.first = function() {
    this.reset();
    return this.next();
  }

  _Iterator.prototype.next = function () {
    return this.items[this.index++]
  }

  _Iterator.prototype.hasNext = function () {
    return this.index <= this.items.length 
  }

  _Iterator.prototype.current = function () {
    return this.items[this.index];
  }

  _Iterator.prototype.reset = function () {
    this.index = 0;
  }

  _Iterator.prototype.each = function (callback) {
    let item = this.first();
    while(this.hasNext()) {
      callback(item);
      item = this.next()
    }
  }

  return _Iterator;
})()

const iterator = new Iterator([1,3,4,5]);
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

iterator.each(value => {
  console.log(value)
})