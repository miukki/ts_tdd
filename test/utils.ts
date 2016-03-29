///<reference path="../typings/tsd.d.ts"/>
///<reference path="../dist/ts_project.d.ts"/>


describe('utils', () => {
    
    it('isObject', () => {
        
        expect(utils.isObject({})).to.be(true);
        expect(utils.isObject([])).to.be(false);
        expect(utils.isObject(1)).to.be(false);
        
    });
    
});
