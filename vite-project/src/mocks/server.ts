/* istanbul ignore file */
import {setupServer} from "msw/node";
import {handlers} from "./handlers";
import {rest} from "msw";
// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);


// establish API mocking before all tests
beforeAll(() => server.listen());
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers());
// clean up once the tests are done
afterAll(() => server.close());


