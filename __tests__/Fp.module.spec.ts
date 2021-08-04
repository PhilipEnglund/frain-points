import Fp from '../src';

const mockPoints = [
  [25, 25],
  [100, 0],
  [150, 50],
  [125, 125],
  [50, 150],
  [0, 100],
] as Array<Fp.Point>;

describe('Fp', () => {
  describe('multiply', () => {
    it('should return an array of points based on original set of points', () => {
      const [[p1x, p1y], p2, ...newPoints] = Fp.multiply({
        originalPoints: mockPoints,
      });
      expect(p1x).toEqual(12.5);
      expect(p1y).toEqual(62.5);
      expect(p2).toEqual(mockPoints[0]);
      expect(newPoints.length > mockPoints.length).toBeTruthy();
    });
  });
  it('should throw an error if radius in not between range of 0.1-0.5', () => {
    try {
      Fp.multiply({ originalPoints: mockPoints, radius: 0.6 });
    } catch (e) {
      expect(e.message.includes("can't be less than 0.1 or higher than 0.5"));
    }
  });
});
