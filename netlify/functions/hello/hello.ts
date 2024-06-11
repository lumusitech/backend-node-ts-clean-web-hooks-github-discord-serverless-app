import type { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {

  console.log('hello world from hello handler');

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
    headers: { 'Content-Type': 'application/json' },
  };
};

export { handler };
