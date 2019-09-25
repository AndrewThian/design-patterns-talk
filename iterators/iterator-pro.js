const Iterator = (function () {
  function _Iterator(items) {
    this.items = items;
    this.iterator = items[Symbol.iterator]();
  }

  _Iterator.prototype.next = function () {
    return this.iterator.next();
  }

  _Iterator.prototype.each = function (callback) {
    let item = this.next();
    while(item.value) {
      callback(item);
      item = this.next();
    }
  }

  return _Iterator;
})()

const iterator = new Iterator([1,3,4,5]);

iterator.each(obj => {
  console.log(obj.value)
})