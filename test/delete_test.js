const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
	"use strict"; 
	let quang;

	beforeEach((done) => {
		quang = new User({ name: 'Quang' });
		quang.save()
			.then(() => done());
	});
	
	it('model instance remove', (done) => {
		quang.remove()
			.then(() => User.findOne({ name: 'Quang' }))
				.then((user) => {
					assert(user === null);
					done();
				});
	});

	it('class method remove', (done) => {
		User.remove({ name: 'Quang'})
			.then(() => User.findOne({ name: 'Quang' }))
				.then((user) => {
					assert(user === null);
					done();
				});
	});

	it('class method findOneAndRemove', (done) => {
		User.findOneAndRemove({ name: 'Quang' })
			.then(() => User.findOne({ name: 'Quang' }))
				.then((user) => {
					assert(user === null);
					done();
				});
	});

	it('class method findByIdAndRemove', (done) => {
		User.findByIdAndRemove(quang._id)
			.then(() => User.findOne({ name: 'Quang' }))
				.then((user) => {
					assert(user === null);
					done();
				});
	});

});