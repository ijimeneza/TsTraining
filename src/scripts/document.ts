interface IDocument {
}

namespace FileSystem {
    export class EmployeeDocument implements IDocument {
        constructor(public name: string) {
        }
    }
}