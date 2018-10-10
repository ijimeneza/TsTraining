import { gunzip } from "zlib";

module ambient {
    //declare var ko: KnockoutStatic;

    var name = ko.observable('somthing');
    var id = ko.observable(1);
    var someone = {
        id: id,
        fullName: name
    };

    var value: string = someone.fullName();
    console.log(value);
}