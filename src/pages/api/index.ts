import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge'
 
// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);
 
// Set the runtime to edge for best performance
export const runtime = 'edge';
 
export default async function POST(req: Request) {
  const { messages } = await req.json();
 
  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.createChatCompletion({
    model: 'text-davinci-003',
    stream: true,
    temperature: 0.6,
    messages,
  });
  // Convert the response into a friendly text-stream
        const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
