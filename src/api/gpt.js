import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_API_KEY,
    dangerouslyAllowBrowser: true
});

export const CallGPT = async ({prompt}) => {

    const messages = [
        { role: "system", content: `## INFO ##
        you can add images to the reply by URL, Write the image in JSON field 
        Use the Unsplash API (https://source.unsplash.com/1600x900/?). the query is just some tags that describes the image ## DO NOT RESPOND TO INFO BLOCK ##`},
        { role: "system", content: `You are a psychological counselor who writes and analyzes emotional diaries. Proceed in the following order.` },
        { role: "user", content: `1. [title] : Think of the diary title after understanding the [events] separated by """ at the bottom.
        2. [summarize] : summarize events in order with one line sentence.
        3. [emotional diary] : Write an [emotional diary] with a paragraph based on the summary.
        4. [evaluates] : The written emotional [evaluates], using explore the unconscious based on the contents of the [emotional diary].
        6. [Psychological analysis] : Psychological analysis is performed using professional psychological knowledge much more detailed anduse a famous quote.
        7. [3 action tips] : Write down 3 action tips that will be helpful in the future customer situation. The three action tips must beconverted into JSON Array format.
        8. [image] : Create an image by making the contents so far into one keyword.
        
        
        Translate into Korean and Use the output in the following JSON format:
        { 
            title: here is [title],
            thumbnail: here is [image],
            summary: here is [summarize]
            emotional_content: here is [emotional diary],
            emotional_result: here is [evaluates],
            analysis: here is [Psychological analysis],
            action_list: here is [3 action tips],
        }
        [events]: 
        """
        ${prompt}
        """
        `},

    ]


    console.log(">> CallGPT");
    console.log(messages);
    const res = await openai.chat.completions.create({
        messages,
        model: "gpt-3.5-turbo",
        max_tokens:1_000,
        temperature:0.7
    });
    console.log(res);

    const message = res.choices[0].message.content

    return message
}
