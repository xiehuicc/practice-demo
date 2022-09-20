function Point1(x, y) {
  this.x = x;
  this.y = y;
}

// 通过原型实现
Point1.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point1(1, 2);
console.log(p)
console.log(p.toString())

// 通过class实现
class Point2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')'
  }
}

const point = new Point2(3,4);
console.log(point.toString())