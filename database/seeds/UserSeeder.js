'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const User = use('App/Models/User');

class UserSeeder {
  async run () {
    const u1 = new User();
    u1.username = "User 1";
    u1.email = "user1@gmail.com";
    u1.password = "pass-u1";

    await u1.save()

    const u2 = new User()
    u2.username = "User 2";
    u2.email = "user2@gmail.com";
    u2.password = "pass-u2";

    await u2.save()
  }
}

module.exports = UserSeeder
