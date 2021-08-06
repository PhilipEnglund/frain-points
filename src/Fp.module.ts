export namespace Fp {
  export type Point = [number, number];
  function lerp([p1x, p1y]: Point, [p2x, p2y]: Point, t: number): Point {
    return [(1 - t) * p1x + t * p2x, (1 - t) * p1y + t * p2y];
  }
  export function smoothen({
    originalPoints,
    radius = 0.5,
  }: {
    originalPoints: Array<Point>;
    radius?: number;
  }): Array<Point> {
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
