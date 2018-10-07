var Shapes;
(function (Shapes) {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        getDist() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
    Point.origin = new Point(0, 0);
    Shapes.Point = Point;
})(Shapes || (Shapes = {}));
var p = new Shapes.Point(3, 4);
var dist = p.getDist();
console.log('Point: ' + dist);
//# sourceMappingURL=main.js.map