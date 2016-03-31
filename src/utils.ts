module utils {
    'use strict';

    let toString = Object.prototype.toString;
    let types = {
        string: '[object String]',
        number: '[object Number]',
        object: '[object Object]',
        array: '[object Array]',
        'null': '[object Null]',
        undefined: '[object Undefined]'
    };

    export function isObject(some: any): boolean {
        return toString.call(some) === types.object;
    }
    
    export function isEmpty(some: any): boolean {
        return some == null;
    }
    
}
