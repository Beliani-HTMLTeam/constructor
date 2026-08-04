# Wytyczne dla Claude Code - Konstruktor Newsletterów

Ten projekt to generator kampanii mailingowych. Musisz bezwzględnie przestrzegać poniższych zasad, czytać pliki komponentów przed ich użyciem i logicznie dobierać parametry. Nie zgaduj.

## 1. Drzewa decyzyjne i logika komponentów
Zawsze sprawdzaj, jakie parametry przyjmuje dany komponent (np. `Deal.ts`, `Category.ts`), zanim wygenerujesz kod. 

* **Darmowe produkty (Freebies) - Tło:**
  * JEŚLI na designie tło pod siatką darmowych produktów różni się od tła intro/tekstu wyżej -> UŻYJ `anotherTableForFreebies: true` oraz ustaw odpowiedni `freebiesBackground`.
  * JEŚLI tło jest takie samo -> zignoruj te parametry (zostaną w jednej tabeli).
* **Darmowe produkty (Freebies) - Rzędy (Grid):**
  * Grupuj obiekty w tablicy `freebies` na podstawie ich liczby:
  * JEŚLI są 4 produkty -> renderuj 2x2 (tablica dwóch tablic po dwa obiekty).
  * JEŚLI są 3 produkty -> renderuj 1x3 (jedna tablica z trzema obiektami).
  * JEŚLI jest 1 produkt -> jedna tablica z jednym obiektem.
* **Marginesy i kontenery (Odlepienie od ścianek):**
  * JEŚLI design pokazuje, że produkty lub kafelki nie dotykają krawędzi maila -> UŻYJ wbudowanych parametrów komponentu, takich jak `insideContainer: true`. Przeczytaj najpierw interfejs w `types/thursday.ts`.
* **Separatory:** Zwracaj uwagę na cienkie linie oddzielające sekcje w designie. Jeśli takowa istnieje, użyj wbudowanego parametru w komponencie, np. `line: { show: true }`.

## 2. Zarządzanie stylami (CSS) i Design System
* Używamy fontów `Open Sans` i `Poppins`. Typografią sterujemy w plikach `.css`.
* JEŚLI style z wygenerowanego podglądu drastycznie różnią się od designu z handoffu -> edytuj plik `regular.css` (lub inny odpowiedni plik ze stylami).
* Szukaj najpierw istniejących klas CSS. Jeśli różnica to tylko 1px letter-spacing, podepnij starą klasę.
* **ZASADA ZAOKRĄGLANIA (+/- 5px):** W naszym systemie używamy "okrągłych" wartości dla paddingów i marginesów. Jeśli w designie jest 32px, 21px lub 23px, zaokrąglij to do wielokrotności liczby 5 (np. 35px, 20px, 25px) i użyj/stwórz klasę np. `.newsletterContainer35px`. Nie wprowadzaj ułamkowych lub niestandardowych wymiarów.
* JEŚLI nie ma odpowiedniej klasy, utwórz nową (zgodną z powyższą zasadą) i zaaplikuj ją w HTML. Nie hardkoduj stylów inline, chyba że nie ma innego wyjścia.
* **JEDNOSTKI CSS (KRYTYCZNE DLA OUTLOOKA):** Dozwolone są WYŁĄCZNIE piksele (`px`). 
  * NIGDY nie używaj jednostek `em`, `rem`, `vw`, `vh` ani procentów (%) w stylach określających rozmiary czcionek (`font-size`), odstępy (`padding`, `margin`, `line-height`) czy szerokości/wysokości struktur. 
  * Outlook nie wspiera poprawnie `em`/`rem` – wszystkie wielkości fontów, marginesy i paddingi muszą być twardo zdefiniowane w `px`, aby mail wyglądał identycznie na każdej platformie.
  * **SZEROKOŚCI I PROCENTY:** Procenty (%) mogą być stosowane WYŁĄCZNIE do określania szerokości kolumn i tabel strukturalnych (np. `width="50%"` na elementach `<td>` lub `<table>` w siatkach produktów), aby zapewnić responsywny podział na kolumny. Do fontów, paddingów, marginesów i wysokości stosujemy wyłącznie `px`.
  
## 3. Rygorystyczne zasady QA (Quality Assurance)
* **NIGDY nie raportuj "100% pass", jeśli nie zweryfikowałeś układu wizualnego.** Brak błędów w konsoli to za mało.
* Zwracaj uwagę na: marginesy, ucięte teksty, brakujące tła, zlepione teksty (Nazwa / Opis / Cena) i wylewające się kolory.
* Upewnij się, że wszystkie produkty się załadowały. Jeśli widzisz "Product not found", natychmiast popraw mockowanie danych lub zasil `localStorage` odpowiednią tablicą.
* Sprawdzaj linki. Jeśli href to `/`, upewnij się, że poprawnie zmapowałeś klucze z `category_links` (pamiętaj o case-sensitivity lub użyj `.toLowerCase()`).

## 4. PIXEL-PERFECT QA & STEP-BY-STEP EXECUTION (KRYTYCZNE)
AI ma tendencję do ignorowania detali wizualnych, gdy logika kodu działa. Aby temu zapobiec, podczas pracy nad stylami musisz myśleć KROK PO KROKU (Chain of Thought):
1. **Analiza Kolorów:** Nigdy nie zakładaj domyślnego `#ffffff` (białego) ani `#000000` (czarnego). Zawsze weryfikuj kody HEX ze SPEC/Handoff (np. teksty mogą być soft peach `#FFCCB7`).
2. **Typografia:** Zwracaj morderczą uwagę na `text-transform: uppercase`, `letter-spacing`, `font-weight`. Jeśli w designie tekst jest rozstrzelony i drukowanymi literami, MUSISZ dodać to do stylów.
3. **Wyrównanie (Align):** Nie używaj globalnie `text-align: center`. Analizuj każdą sekcję osobno. Często produkty, opisy i ceny są wyrównane do lewej (`left`).
4. **Paddings i Kontenery:** Jeśli design wymaga marginesu bocznego 32px, stosuj "Zasadę Zaokrąglania" (pkt 2) – stwórz i użyj `.newsletterContainer35px`. Nie używaj klas 20px ani nie twórz klas 32px.
5. **Procedura Meldu:** Zanim zameldujesz "100% pass", musisz potwierdzić: "Zweryfikowałem uppercase, letter-spacing, dokładne kody hex, wyrównanie tekstów i zaokrąglone marginesy kontenerów. Generuję screena do ostatecznej oceny przez człowieka".