/* istanbul ignore file */

/**
 * The mock database is an in-memory model of the database.
 * This enables us to make changes in a single session and seeing those changes stored within that session.
 * Below the mock database are diffirent templates of objects being exported.
 */
export const mockDatabase = {
  customers: [
    {
      city: "Bruges",
      country: 2,
      firstname: "Jos",
      house_number: "42",
      id: 1,
      lastname: "De Berdt",
      street: "Algoritmic",
      telephone: "12345",
      zip_code: 8000,
    },
    {
      city: "Ghent",
      country: 2,
      firstname: "Luna",
      house_number: "999",
      id: 2,
      lastname: "Sky",
      street: "Milkyway",
      telephone: null,
      zip_code: 9000,
    },
  ],
  countries: [
    {id: 1, name: "Austria"},
    {id: 2, name: "Belgium"},
    {id: 3, name: "Bulgaria"},
    {id: 4, name: "Croatia"},
    {id: 5, name: "Cyprus"},
    {id: 6, name: "Czechia"},
    {id: 7, name: "Denmark"},
    {id: 8, name: "Estonia"},
  ],
};

//TEMPLATES
