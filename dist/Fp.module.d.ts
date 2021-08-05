export declare namespace Fp {
    type Point = [number, number];
    function multiply({ originalPoints, radius, }: {
        originalPoints: Array<Point>;
        radius?: number;
    }): Array<Point>;
}
