exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        { id: 1, name: 'First Cohort' },
        { id: 2, name: 'Best Cohort' },
        { id: 3, name: 'Nice Cohort' }
      ])
    })
}
