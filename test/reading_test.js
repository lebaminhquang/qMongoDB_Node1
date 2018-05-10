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
				assert(users[0]._id.toString() === quang._id.toString());
				done();
			});

	});

	it('finds a user with a particular id', (done) => {
		User.findOne({ _id: quang._id })
			.then((user) => {
				assert(user.name === 'Quang');
				done();
			});
	});
	
});