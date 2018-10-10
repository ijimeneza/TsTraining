// interface IPoint {
//     getDist(): number;
// }
// module Shapes {
//     export class Point implements IPoint {
//         constructor (public x: number, public y: number) {}
//         getDist(): number {
//             return Math.sqrt(this.x * this.x + this.y*this.y);
//         }
//         static origin = new Point (0,0);
//     }
// }
// var p: IPoint = new Shapes.Point(3, 4);
// var dist = p.getDist();
// console.log('Point: ' + dist);
// window.onload = function () {
//     alert('The point:' + 'kk');//dist);
// }
window.onload = function () {
    alert('lets go');
    var folder = new Folder('the Folder');
    folder.setDocuments(new EmployeeDocument('a doc'), new EmployeeDocument('another doc'));
    folder.some();
};
//# sourceMappingURL=main.js.map