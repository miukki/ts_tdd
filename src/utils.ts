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
    export function isString(some: any): boolean {
        return typeof some === 'string' || some instanceof String;
    }
    export function isNumber(some: any): boolean {
        return typeof some === 'number' && some === some;
    }
    export function isNaN(some: any): boolean {
        return typeof some === 'number' && some !== some;
    }
    export function isArray(some: any): boolean {
        return typeof some === 'object' && Array.isArray(some);
    }
    export function isNull(some: any): boolean {
        return some === null;
    }
    export function isUndefined(some: any): boolean {
        return some === undefined;
    }


}
