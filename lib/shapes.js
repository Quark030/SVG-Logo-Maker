class Shape {
  constructor(type, color) {
    this.type = type;
    this.color = color;
    this.textColor = color; // Initialize textColor property
  }

  render(textColor, text) {
    throw new Error(); // You can also remove this line if you don't need this error.
  }
}

class Circle extends Shape {
  constructor(color) {
    super('circle', color);
  }

  render(shapeColor, textColor, text) {
    return `<svg>
      <circle cx="50" cy="50" r="40" fill="${this.color}" />
      <text x="50" y="50" fill="${textColor}" font-size="20" text-anchor="middle">${text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  constructor(color) {
    super('square', color);
  }

  render(shapeColor, textColor, text) {
    return `<svg>
      <polygon points="50,10 90,90 10,90" fill="${this.color}" />
      <text x="50" y="50" fill="${textColor}" font-size="20" text-anchor="middle">${text}</text>
    </svg>`;
  }
}

class Triangle extends Shape {
  constructor(color) {
    super('triangle', color);
  }

  render(shapeColor, textColor, text) {
    return `<svg>
      <polygon points="50,10 90,90 10,90" fill="${this.color}" />
      <text x="50" y="60" fill="${textColor}" font-size="20" text-anchor="middle">${text}</text>
    </svg>`;
  }
}

module.exports = { Circle, Triangle, Square };
