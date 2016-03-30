module utils {
    'use strict';

    export function isObject(some: any): boolean {
        return typeof some === 'object' && !Array.isArray(some);
    }
    
    export function isEmpty(some: any): boolean {
        return some == null;
    }
    
}
