var angularHomepage = require('../pages/homepage.js')
describe('angularjs homepage', function() {
    it('should greet the named user1', async function() {
        await angularHomepage.get();

        await angularHomepage.setName('Julie');

        expect(await angularHomepage.getGreetingText()).toEqual('Hello Julie!');
    });
    it('should greet the named user2', async function() {
        await angularHomepage.get();

        await angularHomepage.setName('Juli');

        expect(await angularHomepage.getGreetingText()).toEqual('Hello Julie!');
    });
    it('should greet the named user3', async function() {
        await angularHomepage.get();

        await angularHomepage.setName('Juliana');

        expect(await angularHomepage.getGreetingText()).toEqual('Hello Juliana!');
    });
    it('should greet the named user4', async function() {
        await angularHomepage.get();

        await angularHomepage.setName('Arun');

        expect(await angularHomepage.getGreetingText()).toEqual('Hello Juliana!');
    });
});
