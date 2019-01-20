exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { id: 1, name: 'Jeff', cohorts_id: 1 },
        { id: 2, name: 'Mary', cohorts_id: 2 },
        { id: 3, name: 'Janelle', cohorts_id: 3 },
        { id: 4, name: 'Mike', cohorts_id: 3 }
      ])
    })
}
