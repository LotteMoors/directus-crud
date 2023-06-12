/* istanbul ignore file */
import {rest} from "msw";
import {mockDatabase} from "../../mockDatabase";

export const countries = [
  rest.get(import.meta.env.VITE_MOCK_API_URL + "/items/countries", (req, res, ctx) => {
    return res(ctx.json(mockDatabase.countries));
  }),
];
