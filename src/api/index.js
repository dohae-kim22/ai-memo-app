import axios from "axios";

export async function fetchOpenAI(content) {
  const res = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant who summarizes text that user provides. Shorten the text as much as possible while preserving the key information.",
        },
        {
          role: "user",
          content: `Can you summarize this text for me? ${content}`,
        },
      ],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_APIKEY}`,
      },
    }
  );
  return res.data;
}
