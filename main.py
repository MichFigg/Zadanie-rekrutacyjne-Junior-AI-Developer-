import os
import openai
from config import OPENAI_API_KEY


openai.api_key = OPENAI_API_KEY

with open("artykul.txt", "r", encoding="utf-8") as file:
    article_content = file.read()
    
    
# Tworzymy prompt, aby poprosić AI o przetworzenie artykułu na HTML
prompt = f"""
Please format the following article into HTML with the appropriate structure:
- Use appropriate HTML tags for headings, paragraphs, and lists.
- Add placeholder images (<img src="image_placeholder.jpg" alt="description">) where visuals would enhance understanding.
- Provide image descriptions for alt attributes and captions below images.
Do not include any CSS, JavaScript, or <html>, <head>, or <body> tags.

Article:
{article_content}
"""

# Wywołanie API OpenAI
response = openai.Completion.create(
    engine="text-davinci-003",
    prompt=prompt,
    max_tokens=1500,
    temperature=0.7
)


generated_html = response.choices[0].text.strip()

with open("artykol.txt", "w", encoding="utf-8") as file:
    file.write(generated_html)
    
    print("Wygenerowany HTML został zapisany w pliku artykul.html")