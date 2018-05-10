const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
	it('saves a user', (done) => {
		const quang =  new User({ 
								name: 'Le Ba Minh Quang'
								});
		quang.save()
			.then(() => {
				// has quang been saved successfully?
				assert(!quang.isNew);
				done();
			});
	});
	
});