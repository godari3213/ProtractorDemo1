describe('demo calculator', function(){

    it('addition testing', function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('20');
        element(by.model('second')).sendKeys('30');
        element(by.css('[ng-click="doAddition()"]')).click();
        let result = element(by.cssContainingText('.ng-binding','50')).click();
        console.log("result displayed");
        expect(result.getText()).toEqual('50');
        browser.sleep(5000);
    });
    it('addition testing', function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('20');
        element(by.model('second')).sendKeys('30');
        element(by.css('[ng-click="doAddition()"]')).click();
        let result = element(by.cssContainingText('.ng-binding','50')).click();
        console.log("result displayed");
        expect(result.getText()).toEqual('5054');
        browser.sleep(5000);
    });

    
    });