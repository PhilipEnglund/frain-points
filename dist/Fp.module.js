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
    function multiply(_a) {
        var originalPoints = _a.originalPoints, _b = _a.radius, radius = _b === void 0 ? 0.5 : _b;
        if (radius > 0.5 || radius < 0.1) {
            throw new Error("Param 'options' can't be less than 0.1 or higher than 0.5");
        }
        return originalPoints.reduce(function (acc, point, i, points) { return __spreadArray(__spreadArray(__spreadArray([], acc), [
            lerp(point, i === 0 ? points[points.length - 1] : points[i - 1], radius),
            point
        ]), lerp(point, i === points.length - 1 ? points[0] : points[i + 1], radius)); }, []);
    }
    Fp.multiply = multiply;
})(Fp = exports.Fp || (exports.Fp = {}));
//# sourceMappingURL=Fp.module.js.map