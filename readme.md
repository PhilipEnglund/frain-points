# frain-points

Created for making it easier to display smooth polygons on the web.

## Usage
```js
import Fp from 'frain-points';

const canvas = document.querySelector('#glCanvas');
const context = canvas.getContext('2d');
context.fillStyle = "rgb(40,0,0)";

const originalPoints = [
  [25, 25],
  [100, 0],
  [150, 50],
  [125, 125],
  [50, 150],
  [0, 100],
];

const [[p1x, p1y], ...rest] = Fp.smoothen(originalPoints);

context.moveTo(p1x, p1y);

rest.forEach(([x, y], i, points) => {
  const [nextX, nextY] = points[(i + 1) % points.length];

  context.quadraticCurveTo(
    x, 
    y, 
    (x + nextX) / 2, 
    (y + nextY) / 2,
  );
});

context.fill();
```

Working example on [Codesandbox](https://codesandbox.io/s/eloquent-drake-zyymz)