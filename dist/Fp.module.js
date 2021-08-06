"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.Fp = void 0;
var Fp;
(function (Fp) {
    function lerp(_a, _b, t) {
        var p1x = _a[0], p1y = _a[1];
        var p2x = _b[0], p2y = _b[1];
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
    function smoothen(originalPoints, radius) {
        if (radius > 0.5 || radius < 0.1) {
            throw new Error("Param 'options' can't be less than 0.1 or higher than 0.5");
        }
        return __spreadArray([], originalPoints).reduce(function (acc, point, i, points) { return __spreadArray(__spreadArray(__spreadArray([], acc), [
            lerp(point, i === 0 ? points[points.length - 1] : points[i - 1], radius),
            point
        ]), lerp(point, i === points.length - 1 ? points[0] : points[i + 1], radius)); }, []);
    }
    Fp.smoothen = smoothen;
})(Fp = exports.Fp || (exports.Fp = {}));
//# sourceMappingURL=Fp.module.js.map