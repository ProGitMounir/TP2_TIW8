import type { Gesture } from "../models";

export class SimpleRecognizer {
  private templates: Gesture[] = [];

  addGesture(name: string, points: [number, number][]) {
    this.templates.push({ name, points: this.normalize(points) });
  }

  recognize(points: [number, number][]): string | null {
    const candidate = this.normalize(points);
    let minDistance = Infinity;
    let matchedGesture: string | null = null;

    for (const template of this.templates) {
      const distance = this.pathDistance(candidate, template.points);
      if (distance < minDistance) {
        minDistance = distance;
        matchedGesture = template.name;
      }
    }

    return minDistance < 0.3 ? matchedGesture : null;
  }

  private normalize(points: [number, number][]): [number, number][] {
    const resampled = this.resample(points, 64);
    const scaled = this.scaleToSquare(resampled, 1);
    const translated = this.translateToOrigin(scaled);
    return translated;
  }

  private resample(points: [number, number][], n: number): [number, number][] {
    const I = this.pathLength(points) / (n - 1);
    const newPoints: [number, number][] = [points[0]];
    let D = 0.0;

    for (let i = 1; i < points.length; i++) {
      const d = this.distance(points[i - 1], points[i]);
      if (D + d >= I) {
        const t = (I - D) / d;
        const nx = points[i - 1][0] + t * (points[i][0] - points[i - 1][0]);
        const ny = points[i - 1][1] + t * (points[i][1] - points[i - 1][1]);
        newPoints.push([nx, ny]);
        points.splice(i, 0, [nx, ny]);
        D = 0.0;
      } else {
        D += d;
      }
    }

    if (newPoints.length === n - 1) {
      newPoints.push(points[points.length - 1]);
    }

    return newPoints;
  }

  private pathLength(points: [number, number][]): number {
    let d = 0.0;
    for (let i = 1; i < points.length; i++) {
      d += this.distance(points[i - 1], points[i]);
    }
    return d;
  }

  private distance(a: [number, number], b: [number, number]): number {
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    return Math.hypot(dx, dy);
  }

  private scaleToSquare(
    points: [number, number][],
    size: number
  ): [number, number][] {
    let minX = Infinity,
      maxX = -Infinity,
      minY = Infinity,
      maxY = -Infinity;
    for (const [x, y] of points) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
    size = size || 1; // Default size pour que le yarn build ne plante pas
    const scale = Math.max(maxX - minX, maxY - minY);
    return points.map(([x, y]) => [(x - minX) / scale, (y - minY) / scale]);
  }

  private translateToOrigin(points: [number, number][]): [number, number][] {
    const centroid = points
      .reduce((acc, [x, y]) => [acc[0] + x, acc[1] + y], [0, 0])
      .map((coord) => coord / points.length) as [number, number];

    return points.map(([x, y]) => [x - centroid[0], y - centroid[1]]);
  }

  private pathDistance(a: [number, number][], b: [number, number][]): number {
    let d = 0.0;
    for (let i = 0; i < a.length; i++) {
      d += this.distance(a[i], b[i]);
    }
    return d / a.length;
  }
}
