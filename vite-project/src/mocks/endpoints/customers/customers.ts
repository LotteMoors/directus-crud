/* eslint-disable @typescript-eslint/ban-ts-comment */
/* istanbul ignore file */
import {rest} from "msw";
import {mockDatabase} from "../../mockDatabase";

/*
DELETE: 
url = import.meta.env.VITE_MOCK_API_URL + "/items/customers/:id"
mockDatabase.customers.forEach(el => {if(el.id === id){
    DELETE DEZE INDEX OF ELEMENT IN ARRAY MOCKDATABASE.CUSTOMERS
}})


------


*/
//@ts-ignore
export function getBiggestIndex(validateArray: any, key: string) {
  let biggestInt = 0;
  validateArray.forEach((el: any) => {
    if (parseInt(el[key]) >= biggestInt) {
      biggestInt = parseInt(el[key]) + 1;
    }
  });
  return biggestInt;
}

export const customers = [
  // Handles a POST request
  rest.post(import.meta.env.VITE_MOCK_API_URL + "/items/customers", (req, res, ctx) => {
    mockDatabase.customers.push({id: getBiggestIndex(mockDatabase.customers, "id"), data: "MSW is cool"});
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(mockDatabase.customers)
    );
  }),

  // Handles a GET request
  rest.get(import.meta.env.VITE_MOCK_API_URL + "/items/customers", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockDatabase.customers));
  }),
];
