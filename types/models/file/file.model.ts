
// https://en.wikipedia.org/wiki/Glossary_of_chess#File
// Default: a-h

// Note that algebraic notation is lower case.
// https://en.wikipedia.org/wiki/Algebraic_notation_(chess)

export enum FileEnum {
    a, b, c, d, e, f, g, h
}

export class File {
    
    private _fileEnum: FileEnum;
    
    constructor(fileEnum: FileEnum) {
        this._fileEnum = fileEnum;
    }
}