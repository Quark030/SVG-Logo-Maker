const { Circle, Triangle, Square } = require('./shapes');
const generateSVG = require('./utils/');

test('Circle renders SVG correctly', () => {
  const circle = new Circle('red');
  const svg = circle.render('blue', 'Hello');

  expect(svg).toContain('<circle cx="50" cy="50" r="40" fill="red" />');
  expect(svg).toContain('<text x="50" y="50" fill="blue" font-size="20" text-anchor="middle">Hello</text>');
});

test('Triangle renders SVG correctly', () => {
  const triangle = new Triangle('green');
  const svg = triangle.render('yellow', 'Hi');

  expect(svg).toContain('<polygon points="50,10 90,90 10,90" fill="green" />');
  expect(svg).toContain('<text x="50" y="60" fill="yellow" font-size="20" text-anchor="middle">Hi</text>');
});

test('Square renders SVG correctly', () => {
  const square = new Square('blue');
  const svg = square.render('red', 'Hey');

  expect(svg).toContain('<polygon points="50,10 90,90 10,90" fill="blue" />');
  expect(svg).toContain('<text x="50" y="50" fill="red" font-size="20" text-anchor="middle">Hey</text>');
});

test('generateSVG generates SVG correctly', () => {
  const circle = new Circle('red');
  const svg = generateSVG(circle, 'red', 'blue', 'Hello');

  expect(svg).toContain('<circle cx="50" cy="50" r="40" fill="red" />');
  expect(svg).toContain('<text x="50" y="50" fill="blue" font-size="20" text-anchor="middle">Hello</text>');
});
