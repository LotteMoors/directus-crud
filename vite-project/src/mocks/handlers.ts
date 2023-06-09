import { rest } from "msw";

export const handlers = [
  // Handles a POST request
  rest.post("https://fancy-app.com/postToThisEndpoint", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  // Handles a GET request
  rest.get("https://fancy-app.com/getSomeData", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: "fancy data string",
      })
    );
  }),
];