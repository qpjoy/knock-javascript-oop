function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}

// const Circle1 = new Function('radius', `
// this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   }
// `);
// const circle = new Circle1(1);

const another = new Circle(1);

Circle.call({}, 1, 2, 3, 4);
Circle.apply({}, [1, 2, 3, 4]);
const another = new Circle(1);
