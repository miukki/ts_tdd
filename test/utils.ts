///<reference path="../typings/tsd.d.ts"/>
///<reference path="../dist/ts_project.d.ts"/>


describe('utils', () => {
    
    it('isObject', () => {
        
        expect(utils.isObject({})).to.be(true);
        /* tslint:disable */
        expect(utils.isObject(new Number(1))).to.be(false);
        /* tslint:enable */
        expect(utils.isObject([])).to.be(false);
        expect(utils.isObject(1)).to.be(false);
        
    });
    
    it('isEmpty', () => {
        
        expect(utils.isEmpty(null)).to.be(true);
        expect(utils.isEmpty(null)).to.be(true);
        expect(utils.isEmpty(undefined)).to.be(true);
        expect(utils.isEmpty(0)).to.be(false);
        expect(utils.isEmpty('')).to.be(false);
        
    });
    
});
