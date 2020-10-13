interface ObjectLiteral {
    [key: string]: any;
}

declare module notepack {
    function encode(value: ObjectLiteral): ArrayBuffer;
    function decode(value: ArrayBuffer): ObjectLiteral;
}