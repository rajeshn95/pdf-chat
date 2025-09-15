import { openai } from '@ai-sdk/openai';
import { google } from '@ai-sdk/google';
import { convertToModelMessages, streamText, type UIMessage } from 'ai';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google('gemini-2.0-flash-001'),
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}