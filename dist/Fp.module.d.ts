export declare namespace Fp {
    /**
     * @type Point
     * @description Array Tuple representing x and y coordinates
     */
    type Point = [number, number];
    /**
     * @function smoothen
     * @description Takes original points and returns a new array of points, applying
     * an implementation of Chaikins algorithm to smoothen out curves.
     *
     * @param {Fp.Point[]} originalPoints - an array of points
     * @param {number} radius - non required param of radius, must be between 0.1-0.5
     */
    function smoothen(originalPoints: Array<Point>, radius?: number): Array<Point>;
}
