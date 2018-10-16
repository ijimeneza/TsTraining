window.onload = function () {
    alert('lets go');
    var folder = new FileSystem.Folder('the Folder');
    folder.setDocuments(new FileSystem.EmployeeDocument('a doc'), new FileSystem.EmployeeDocument('another doc'));
    folder.some();
};
toastr.info("whatever");
//# sourceMappingURL=main.js.map