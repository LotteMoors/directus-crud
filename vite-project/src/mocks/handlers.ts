/* istanbul ignore file */
import { countries } from "./endpoints/countries/countries";
import { customers } from "./endpoints/customers/customers";

export const handlers = [
  ...customers,
  ...countries
];