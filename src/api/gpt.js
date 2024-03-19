import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_API_KEY,
    dangerouslyAllowBrowser: true
});

export const CallGPT = async () => {
    console.log(">> CallGPT");
    const res = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
        max_tokens:1_000,
        temperature:0.7
    });
    console.log(res);

    const message = res.choices[0].message.content

    return message
}
