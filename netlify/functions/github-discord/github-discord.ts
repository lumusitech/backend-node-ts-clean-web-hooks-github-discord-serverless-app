import type { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";

const notify = async (message: string) => {
  const body = {
    content: message,
    embeds: [
      {
        image: { url: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXBidnF5d2Fsandiend2NW1nYjl4eDZpcDJqYXhscHFocmR6YjhmcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif' }
      }
    ]
  }

  const response = await fetch(process.env.DISCORD_WEBHOOK_URL ?? '', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })

  if (!response.ok) {
    console.log('Error sending message to discord');
    return false
  }

  return true
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {

  await notify('Hello, World from netlify dev!');

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "done" }),
    headers: { 'Content-Type': 'application/json' },
  };
};

export { handler };
