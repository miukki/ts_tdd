///<reference path="../typings/tsd.d.ts"/>
///<reference path="../dist/ts_project.d.ts"/>

new TestManager([
    {
        testName: 'utils',
        children: [
            {
                testName: 'isObject',
                /* tslint:disable */
                trueValues: [{}, new Object()],
                falseValues: [new Number(0), new String(''), [], 1, ''],
                testCallback: utils.isObject
                /* tslint:enable */
            },
            {
                testName: 'isEmpty',
                trueValues: [null, undefined],
                falseValues: [0, '', []],
                testCallback: utils.isEmpty
            },
            {
                testName: 'isString',
                trueValues: ['', 'some'],
                falseValues: [null, undefined, []],
                testCallback: utils.isString
            },
            {
                testName: 'isNumber',
                trueValues: [0, 5],
                falseValues: ['', undefined, []],
                testCallback: utils.isNumber
            },
            {
                testName: 'isNaN',
                trueValues: [NaN],
                falseValues: ['', undefined, [], null],
                testCallback: utils.isNaN
            },
            {
                testName: 'isArray',
                trueValues: [[],new Array(), ['',]],
                falseValues: ['', undefined, null],
                testCallback: utils.isArray
            },
            {
                testName: 'isNull',
                trueValues: [null],
                falseValues: ['', undefined],
                testCallback: utils.isNull
            },
            {
                testName: 'isUndefined',
                trueValues: [undefined],
                falseValues: [null, ''],
                testCallback: utils.isUndefined
            }


        ]
    }
]);
