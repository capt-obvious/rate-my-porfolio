
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'user1', password: 'password', name: 'John Smith', date: 01/23/2019, address: '123 way st', city: 'Tulsa', zip: '74137', country: 'USA', gender: 'male', dob: 06/04/1970, bio: 'Bio here'},
        {id: 2, username: 'user2', password: 'password', name: 'Meg Ryan', date: 10/03/2019, address: '123 a st', city: 'Tulsa', zip: '74137', country: 'USA', gender: 'female', dob: 07/14/1975, bio: 'Bio here'},
        {id: 3, username: 'user3', password: 'password', name: 'John Smith', date: 04/10/2019, address: '123 b st', city: 'Tulsa', zip: '74137', country: 'USA', gender: 'male', dob: 03/08/1978, bio: 'Bio here'}
      ]);
    });
};
