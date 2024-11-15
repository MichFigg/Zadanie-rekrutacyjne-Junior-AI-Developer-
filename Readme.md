Artykuł Generator
Aplikacja do generowania i podglądu artykułów w formacie HTML. 
Program korzysta z OpenAI API do przetwarzania artykułów, a następnie umożliwia wyświetlanie wygenerowanego artykułu w przeglądarce. 
Program zapisuje artykuł w pliku HTML, a także umożliwia podgląd z wykorzystaniem szablonu HTML.

Wymagania
Node.js (w wersji 18.x lub wyższej)
npm (zainstalowany automatycznie z Node.js)
OpenAI API Key (do uzyskania na platformie OpenAI)
Pliki w projekcie
main.js – główny plik aplikacji, w którym realizowane jest połączenie z API OpenAI, generowanie treści artykułu i zapisywanie go do pliku artykul.html.
szablon.html – plik HTML zawierający szablon, który pozwala na wyświetlenie artykułu w przeglądarce.
podglad.html – plik HTML, który umożliwia podgląd artykułu w przeglądarce, korzystając z zawartości pliku artykul.html.
artykul.html – plik generowany przez aplikację, zawierający treść artykułu w formacie HTML.
text.txt – plik tekstowy, który zawiera oryginalny artykuł, który będzie przetwarzany przez OpenAI.


Instalacja
Sklonuj repozytorium:
Skopiuj kod
git clone https://github.com/MichFigg/Zadanie-rekrutacyjne-Junior-AI-Developer-.git
Zainstaluj zależności:
Skopiuj kod  
npm install


Skonfiguruj OpenAI API Key:
Zarejestruj się na platformie OpenAI.
Skopiuj swój klucz API.
W pliku main.js wprowadź swój klucz API w sekcji konfiguracji.

const configuration = new Configuration({
  apiKey: 'PODAJ SWOJ KLUCZ API', // Twój klucz API
  });


Użycie
Uruchom aplikację:
Skopiuj kod node main.js
Program połączy się z OpenAI API, przetworzy artykuł zawarty w pliku text.txt i wygeneruje kod HTML, który zapisze do pliku artykul.html.
Otwórz plik szablon.html w przeglądarce (Go Live). Aplikacja wczyta zawartość artykułu z pliku artykul.html i wyświetli go w sekcji <body>.


Struktura HTML
Wygenerowany artykuł będzie zawierał nagłówki, akapity oraz tagi <img> w miejscach, gdzie sugerowane są obrazy. Wszystkie obrazy będą oznaczone jako image_placeholder.jpg i będą miały atrybut alt zawierający prompt do generowania obrazu.


Wykonanie zadania
Aplikacja łączy się z API OpenAI, przekazując artykuł z pliku text.txt jako prompt.
Otrzymany wynik w formie HTML jest zapisywany w pliku artykul.html.
Dwa pliki HTML (szablon.html i podglad.html) pozwalają na podgląd wygenerowanego artykułu w przeglądarce.


Licencja
Projekt jest dostępny na licencji MIT.
