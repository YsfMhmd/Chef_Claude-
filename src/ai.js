export default function fetchRecipe(ingredients) {
    const SYSTEM_PROMPT = `
    You are an assistant that receives a list of ingredients that a user has and 
    suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they
    mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too 
    many extra ingredients. Format your response in markdown direct without putting it in an object to make it easier to 
    render to a web page.Use emojis in the recipe related to the food to make it a bit friendly.
    `;
    return fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            // eslint-disable-next-line no-undef
            Authorization: `Bearer ${
                import.meta.env.VITE_OPEN_ROUTER_DEEPSEEK_API_KEY
            }`,
            "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
            "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "deepseek/deepseek-r1-zero:free",
            messages: [
                {
                    role: "system",
                    content: `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`,
                },
                {
                    role: "user",
                    content: `I have ${ingredients}. Please give me a recipe you'd recommend I make!`,
                },
            ],
        }),
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Network not ok");
            }
            return res.json();
        })
        .then((data) => data.choices[0].message.content)
        .catch((error) => console.error(error));
}
