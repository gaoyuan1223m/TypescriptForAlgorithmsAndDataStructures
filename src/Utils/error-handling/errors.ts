import { IError } from "@Interface/common";

class InvalidIndex implements IError {

    readonly name: string;
    readonly message: string;
    readonly stack?: string;

    constructor(message: string, name?: string) {
        this.message = message;
        this.name = name;
    }
}

class InvalidArgument implements IError {

    readonly name: string;
    readonly message: string;
    readonly stack?: string;

    constructor(message: string, name?: string) {
        this.message = message;
        this.name = name;
    }
}

class InvalidDataType implements IError {

    readonly name: string;
    readonly message: string;
    readonly stack?: string;

    constructor(message: string, name?: string) {
        this.message = message;
        this.name = name;
    }
}

class OutOfBoundary implements IError {

    readonly name: string;
    readonly message: string;
    readonly stack?: string;

    constructor(message: string, name?: string ) {
        this.message = message;
        this.name = name;
    }
}

class ELementNotExisted implements IError {

    readonly name: string;
    readonly message: string;
    readonly stack?: string;

    constructor(message: string, name?: string) {
        this.message = message;
        this.name = name;
    }
}

enum Msg {
    NoMoreSpace = 'Current Collection is Full!',
    InvalidArg = 'Arg cannot be Null, Undefined, NAN, INFINITY or Empty String!',
    InvalidIdx = 'Index should be safe INTEGER, both POSITIVE or NEGATIVE are acceptable!',
    InvalidPath = 'Invalid path number, only 0 or 1 is acceptable',
    InvalidDataType = 'Invalid input of Data Type',
    InvalidDictKey = 'Visited Key does NOT exist',
    UnacceptablePrintOrder = "Print order is NOT acceptable",
    BeyondBoundary = 'Index is out of boundary',
    NotExisted = 'ELement to query does NOT exist',
    NoElements ='No elements in current collection',
    NotSafeInteger = 'is NOT an INTEGER, or it is BUT UNSAFE'
}

export const Errors = {
    InvalidIndex,
    InvalidArgument,
    InvalidDataType,
    OutOfBoundary,
    ELementNotExisted,
    Msg
}