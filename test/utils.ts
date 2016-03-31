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
            }
        ]
    }
]);
