export namespace Fp {
  /**
   * @type Point
   * @description Array Tuple representing x and y coordinates
   */
  export type Point = [number, number];
  function lerp([p1x, p1y]: Point, [p2x, p2y]: Point, t: number): Point {
    return [(1 - t) * p1x + t * p2x, (1 - t) * p1y + t * p2y];
  }
  /**
   * @function smoothen
   * @description Takes original points and returns a new array of points, applying
   * an implementation of Chaikins algorithm to smoothen out curves.
   *
   * @param {Fp.Point[]} originalPoints - an array of points
   * @param {number} radius - non required param of radius, must be between 0.1-0.5
   */
  export function smoothen(
    originalPoints: Array<Point>,
    radius?: number
  ): Array<Point> {
    if (radius > 0.5 || radius < 0.1) {
      throw new Error(
        "Param 'options' can't be less than 0.1 or higher than 0.5"
      );
    }
    return [...originalPoints].reduce(
      (acc, point, i, points) => [
        ...acc,
        lerp(
          point,
          i === 0 ? points[points.length - 1] : points[i - 1],
          radius
        ),
        point,
        ...lerp(
          point,
          i === points.length - 1 ? points[0] : points[i + 1],
          radius
        ),
      ],
      []
    );
  }
}
