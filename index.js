const { OpenAI } = require("openai");
const fs = require("fs");

const openai = new OpenAI({
  apiKey: "PODAJ SWOJ KLUCZ API", // Podaj swój klucz API
});

function readArticle(filePath) {
  return fs.readFileSync(filePath, "utf-8");
}

async function generateHtmlFromArticle(article) {
  const prompt = `
    Przekształć poniższy artykuł w kod HTML. Użyj tagów <h1>, <h2>, <p>, <img> i <figcaption>.
    Wstaw placeholdery dla obrazków z tagiem <img src="image_placeholder.jpg" alt="opis obrazka">
    oraz podpisy pod obrazkami z użyciem <figcaption>. Artykuł:

    ${article}
  `;

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content.trim();
}

function saveHtmlToFile(htmlContent, filePath) {
  fs.writeFileSync(filePath, htmlContent, "utf-8");
}

(async () => {
  try {
    const article = readArticle("text.txt");
    console.log("Generowanie HTML z artykułu...");
    const htmlContent = await generateHtmlFromArticle(article);
    saveHtmlToFile(htmlContent, "artykul.html");
    console.log("HTML zapisany do pliku 'artykul.html'.");
  } catch (error) {
    console.error("Wystąpił błąd:", error);
  }
})();
