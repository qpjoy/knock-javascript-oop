let person = { name: 'Mosh' };
// let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
// console.log(descriptor, ' - - - ', objectBase);

Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: true,
  configurable: false
});

