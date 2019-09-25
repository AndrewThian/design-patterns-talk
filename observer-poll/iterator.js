const Iterator = (function () {
  function _Iterator(items) {
    this.items = items;
    this.iterator = this.items[Symbol.iterator]();
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

module.exports = Iterator;