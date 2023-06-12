/* istanbul ignore file */
import {rest} from "msw";
import {mockDatabase} from "../../mockDatabase";
import {customerData} from "../../../types/types";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
    const body = req.body as customerData;
    mockDatabase.customers.push({
      id: getBiggestIndex(mockDatabase.customers, "id"),
      city: body.city,
      country: body.country,
      firstname: body.firstname,
      house_number: body.house_number,
      lastname: body.lastname,
      street: body.street,
      telephone: body.telephone,
      zip_code: body.zip_code,
    });
    return res(ctx.status(200), ctx.json(mockDatabase.customers));
  }),

  // Handles a GET request
  rest.get(import.meta.env.VITE_MOCK_API_URL + "/items/customers", (req, res, ctx) => {
    return res(ctx.json(mockDatabase.customers));
  }),

  // Handles a DELETE request
  rest.delete(import.meta.env.VITE_MOCK_API_URL + "/items/customers/:id", (req, res, ctx) => {
    mockDatabase.customers.forEach(el => {
      if (el.id === Number(req.params.id)) {
        const index = mockDatabase.customers.indexOf(el);
        if (index > -1) {
          mockDatabase.customers.splice(index, 1);
        }
      }
    });
    return res(ctx.status(200), ctx.json(mockDatabase.customers));
  }),
];


// test('handles server error', async () => {
//   server.use(
//     // override the initial "GET /greeting" request handler
//     // to return a 500 Server Error
//     rest.get(import.meta.env.VITE_MOCK_API_URL + "/items/customers", (req, res, ctx) => {
//       return res(ctx.status(500))
//     }),
//   )

//   // ...
// })