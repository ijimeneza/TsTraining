
interface IFolder {
    some(): void;
    setDocuments(...empDocuments: IDocument[]);
}
namespace FileSystem {
    
    
    export class Folder implements IFolder{
    
        private _employeedocuments: EmployeeDocument[];
        constructor(public name: string) {
        }
    
        get fdocuments(): EmployeeDocument[] {
            return this._employeedocuments;
        }
    
        setDocuments(...empDocuments: EmployeeDocument[]) {
           // if (this._employeedocuments == undefined) throw 'No documents';
            this._employeedocuments = empDocuments;
        }
    
        some() {
            alert('This is my folder: ' + name);
            for (var i = 0; i< this.fdocuments.length; i++) {
                alert('Doc [' + (i+1)  + ']' +this.fdocuments[i].name);
            }
        }
    }
}


