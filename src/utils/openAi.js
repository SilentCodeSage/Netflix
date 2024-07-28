import OpenAI from 'openai'; // Ensure this import matches your setup

const openAi = new OpenAI({
  apiKey: 'sk-proj-P53W1N21WQtvV3uRTINxT3BlbkFJdXK9Q6EDbvSYM9YorfKs',
  dangerouslyAllowBrowser: true, // Use the environment variable
});

export default openAi;
