const apiKey = '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';

async function generateCode() {
    const textInput = document.getElementById('textInput').value;

    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: textInput,
            max_tokens: 100
        })
    });

    const result = await response.json();
    const generatedCode = result.choices[0].text.trim();

    document.getElementById('output').innerText = generatedCode;
}
