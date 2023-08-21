function generateSVG(shape, color, textColor, text) {
  return shape.render(color, textColor, text); // Pass textColor and text to render method
}

module.exports = generateSVG;
