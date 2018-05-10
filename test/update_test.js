const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {
	"use strict"; 
	let quang;

	beforeEach((done) => {
		quang = new User({ name: 'Quang' });
		quang.save()
			.then(() => done());
	});
	
	it('instance set n save', (done) => {
		quang.set('name', 'Minh Quang');
		quang.save()
			.then(() => User.find({}))
			.then((users) => {
				assert(users.length === 1);
				assert(users[0].name === 'Minh Quang');
				done();
			});
	});
});