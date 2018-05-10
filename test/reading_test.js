const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
	"use strict"; 
	let quang;

	beforeEach((done) => {
		quang = new User({ name: 'Quang' });
		quang.save()
			.then(() => done())
	});

	it('finds all users with name of Quang', (done) => {
		User.find({ name: 'Quang' })
			.then((users) => {
				console.log(users);
				done();
			});

	});
	
});