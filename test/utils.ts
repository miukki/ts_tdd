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
                /* tslint:disable */
                trueValues: [null, undefined],
                falseValues: [0, '', []],
                testCallback: utils.isEmpty
                /* tslint:enable */
            },
            {
                testName: 'isString',
                /* tslint:disable */
                trueValues: ['', 'some'],
                falseValues: [null, undefined, []],
                testCallback: utils.isString
                /* tslint:enable */
            },
            {
                testName: 'isNumber',
                /* tslint:disable */
                trueValues: [0, 5],
                falseValues: ['', undefined, []],
                testCallback: utils.isNumber
                /* tslint:enable */
            },
            {
                testName: 'isNaN',
                /* tslint:disable */
                trueValues: [NaN],
                falseValues: ['', undefined, [], null],
                testCallback: utils.isNaN
                /* tslint:enable */
            },
            {
                testName: 'isArray',
                /* tslint:disable */
                trueValues: [[], new Array(), ['',]],
                falseValues: ['', undefined, null],
                testCallback: utils.isArray
                /* tslint:enable */
            },
            {
                testName: 'isNull',
                /* tslint:disable */
                trueValues: [null],
                falseValues: ['', undefined],
                testCallback: utils.isNull
                /* tslint:enable */
            },
            {
                testName: 'isUndefined',
                /* tslint:disable */
                trueValues: [undefined],
                falseValues: [null, ''],
                testCallback: utils.isUndefined
                /* tslint:enable */
            }


        ]
    }
]);
