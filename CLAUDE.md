# Wytyczne dla Claude Code - Konstruktor Newsletterów

Ten projekt to generator kampanii mailingowych. Musisz bezwzględnie przestrzegać poniższych zasad, czytać pliki komponentów przed ich użyciem i logicznie dobierać parametry. Nie zgaduj.

## 0. ŹRÓDŁEM PRAWDY JEST PREVIEW Z HANDOFFU

`design/preview/*.png` decyduje o tym, JAK ma wyglądać kampania — nie ten dokument, nie poprzednia kampania, nie „tak zwykle robimy". Każdy design bywa inny: raz wypełnione przyciski, raz podkreślone linki tekstowe; raz freebies jako pełne karty produktowe, raz wąskie kafelki; raz obrazek lifestyle w kategorii, raz sam grid.

* Poniższe reguły opisują **JAK** osiągnąć dany efekt w tym frameworku, a nie **KTÓRY** efekt wybrać. Wybór dyktuje preview.
* Prawie wszystkie opisane niżej opcje są **opt-in** — brak pola = stare/domyślne zachowanie. **Nie przenoś opcji opt-in z poprzedniej kampanii.** Jeśli wracamy do standardowego newslettera, nie ustawiaj `codeButtonStyle`, `freebiesLikeProducts`, `anotherTableForFreebies`, `ctaHtml` itd. tylko dlatego, że były w poprzednim pliku.
* Jeśli preview i ten dokument są sprzeczne — wygrywa preview, a rozbieżność zgłoś userowi.

## 1. ZASADY ŚRODOWISKA I BUILDERA (KRYTYCZNE)
* **Ignorowanie Headera i Footera:** NIGDY nie implementuj własnego headera ani footera z designu. Konstruktor używa gotowych komponentów wbudowanych w template'y (np. `templates.Thursday`). Skup się wyłącznie na głównej zawartości (intro, produkty, bannery). Dotyczy to też górnego paska USP, paska zaufania („Free delivery / 365 days...") i footerowego gridu kafelków („See thousands more") — to wszystko renderuje `Header.ts`/`Footer.ts`.
* **Globalne Zmienne (Vite AutoImport):** W plikach kampanii (`campaigns/[user]/[nazwa].js`) **NIE IMPORTUJ** następujących zmiennych (są dostępne globalnie): `entities`, `templates`, `types`, `getImageUrl`, `translateImage`, `translateLink`.
* **ZANIM NAPISZESZ NOWY KOMPONENT — POSZUKAJ ISTNIEJĄCEGO (KRYTYCZNE).** Ten monorepo ma kilka równoległych rodzin template'ów (`src/templates/Thursday`, `JakubSrc/monday_newsletter`, `DimaSrc/friday_newsletter`, ...) i komponent, którego potrzebujesz, często już istnieje — przetestowany na produkcji — tylko w innej rodzinie. Zanim cokolwiek napiszesz od zera lub ściągniesz z innego brancha: `grep` po `src/templates/**` ORAZ po `campaigns/*/` (inni autorzy — np. `KrBiranowski`, `Jakub`, `Dmytro` — używają flag, których jeszcze nie znasz, np. `copyCodeWeb`). Port z działającej wersji na bieżącym branchu bije rekonstrukcję i bije starszą kopię z brancha `experimental`.
* **Wykorzystanie serwera MCP:** Jeśli tworzysz kampanię, użyj narzędzia `create_campaign`. Zapoznaj się z przykładami przez `get_example_campaign`. Buduj sekcje używając typów: `grid`, `deal`, `categorytiles`, `small-tiles`. Jeśli brakuje ID, użyj placeholderów lub zapytaj usera.
* **`create_campaign` gubi pola po cichu — ZAWSZE zweryfikuj wygenerowany plik.** Codegen tego narzędzia zna tylko własną, ustaloną listę pól per typ kategorii i **nie nadąża za `src/types/thursday.ts`** — każde pole dodane do typów później (np. `codeButtonStyle`, `copyCodeWeb`, `freebiesTextColor`, `freeText`) zostanie wycięte bez ostrzeżenia. Znane braki dla `type: 'deal'`: `align`, `offerHeadlineIndex`, `offerLabelColor`, `offerDateColor`, `anotherTableForFreebies`, `freebiesBackground`, `freebiesLikeProducts`, `spaceBefore`, `line`. Dla `intro` gubi `cta`/`ctaColor`. Pole `links.*` musi być obiektem `{type, value}` — `type: 'raw'` ma bug w codegenie (wstawia `[object Object]`). **Traktuj listę powyżej jako niepełną**: po każdym wywołaniu przeczytaj plik (`get_campaign`) i porównaj pole po polu z zamierzoną konfiguracją; brakujące dopisz ręcznie. Przy nietypowej kampanii szybciej jest napisać plik ręcznie (`Write`) niż naprawiać po codegenie.
* **Numer wiersza w `tableQueries` ≠ indeks w tablicy danych.** `tableRange` odwołuje się do numeru wiersza Google Sheets (wiersz 1 = nagłówek). Realny indeks danych = `numer_wiersza - 2` (`src/api/fetchTranslations.js` → `extractRangeFromSheet`). Błąd o 1 NIE rzuca wyjątku — po cichu zwraca inny wiersz albo tekst zastępczy komponentu (np. „Offer Part 1", „Translation not found") — łatwo przegapić na screenshot QA.
* **NIE UFAJ numerom wierszy z `data/copy.md` w handoffie.** Realnie widziane: cały mapping w handoffie był przesunięty o 2 względem żywego arkusza. Zawsze pobierz surowy dump i policz sam:
  ```bash
  curl -s "http://localhost:5111/api/local/dynamic/{rok}/{tab-URL-encoded}" -o dump.json
  ```
  Wiersz do wpisania w `tableRange` = `indeks_w_tablicy + 2`. Zweryfikuj po TREŚCI (czy pod tym indeksem faktycznie jest „Get the code"), nie po opisie z handoffu.

## 2. DRZEWA DECYZYJNE I LOGIKA KAMPANII
* **Wersja Kampanii:** Zawsze używaj `version: 'new'` podczas inicjalizacji `entities.Campaign({})`.
* **Bannery:** ZANIM wygenerujesz kod, ZAWSZE upewnij się, że zapytałeś usera o linki i obrazki dla `Banner_1` i `Banner_2` (oczekuj `translateLink` / `translateImage`).
* **Marginesy:** JEŚLI kafelki nie dotykają krawędzi maila -> UŻYJ `insideContainer: true`.
* **Separatory:** Używaj `line: { show: true }` jeśli widzisz linię na designie.
* **Brak komponentu na tekstowy grid kafelków-linków** (np. sekcja „See thousands more" z samym tekstem, bez grafiki na kafelku): `small-tiles`/`categorytiles` renderują WYŁĄCZNIE obrazek na kafelku (auto-budowany URL z `background`/`text`/`name`) — nie ma trybu czysto-tekstowego. Jeśli design ma taką sekcję bez gotowych grafik kafelków, zapytaj usera czy pominąć sekcję, czy dostarczyć grafiki. (Uwaga: footer template'u i tak renderuje własny grid „thousands more" — patrz pkt 1.)

### 2a. CTA — tylko HTML, nigdy obrazki
* ABSOLUTNIE NIE UŻYWAJ obrazków graficznych (.png/.jpg) dla przycisków (np. „Shop sofas", „Get the code") — nawet jeśli handoff zawiera gotowe per-locale PNG-i. Komponent `ButtonCTA` (`src/components/ButtonCTA.js`) istnieje w repo, ale NIE jest wpięty w żadną templatkę pod `src/templates/` — nie licz na niego.
* **Podkreślony link tekstowy (domyślny):** `cta: true` albo `cta: { phrase: '...' }`. Etykieta per-locale: `cta: { ctaTextIndex: N }` + tableQuery `catButtons` — to jedyny sposób na tłumaczone etykiety przycisków kategorii.
* **`cta.className` NIE DZIAŁA.** `Categories.ts` hardkoduje `className: 'newsletterCtaCaps'` przy budowie tekstowego CTA i ignoruje wszystko, co podasz. Klasa `.newsletterCtaCaps` to **wyłącznie typografia** (uppercase + letter-spacing) — nie ma `background-color`, `padding` ani `border-radius`. Sam `cta.phrase` NIGDY nie da wypełnionego przycisku.
* **Wypełniony przycisk w kategorii (tło + zaokrąglone rogi):** jedyne wyjście to `category.ctaHtml` — surowy HTML tabelkowy, który całkowicie zastępuje sekcję CTA. **Kompromis do zgłoszenia userowi:** `ctaHtml` jest statyczny, więc tracisz tłumaczenie z `catButtons` (etykieta zostaje w jednym języku). Jeśli design wymaga wypełnionych przycisków I tłumaczeń jednocześnie — powiedz to userowi wprost zamiast po cichu wybierać jedno.
* Kody HEX / fonty / paddingi bierz ze `SPEC.md` w handoffie. **Akceptujemy, że Outlook zignoruje `border-radius`** (graceful degradation) — to nie jest błąd.
* **JEDNOSTKI:** patrz pkt 3.

### 2b. Sekcja `type: 'deal'` (voucher / freebies)
Renderuje ją `category/deal.ts` + `category/deal/offer.ts` + `category/deal/grid.ts`. **Nie przechodzi przez ścieżkę CTA z `Categories.ts`** — `cta`/`ctaHtml` NIE działają na przycisk kodu.

* **Przycisk „Get the code":** domyślnie podkreślony link tekstowy. Wypełniony przycisk = `codeButtonStyle: 'filled'` + `codeButtonBackground` / `codeButtonColor` / `codeButtonWidth` (domyślnie 230) / `codeButtonHeight` (domyślnie 48). Link bierze z `links.TopImageTitle_href`.
* **Landing page — przycisk „skopiuj kod":** dodaj tableQuery `offer_code` (surowy wiersz „Code: xxxxx" z arkusza — to NIE to samo co `offer_cta`, czyli etykieta przycisku). Wtedy LP renderuje klikalny przycisk kopiujący kod do schowka zamiast statycznego tekstu. Warianty alertu: `copyCodeWeb: true` → wysuwana notyfikacja w rogu; bez flagi → inline tooltip nad ikoną. Komponent: `Thursday/components/CopyCodeCTA.ts` (port z `JakubSrc/monday_newsletter`, gdzie działa w kampaniach `KrBiranowski`). `codeButtonStyle: 'filled'` stylizuje też ten przycisk na LP, żeby miał tę samą wagę wizualną co NS.
  * Email nie wykonuje JS — przycisk kopiujący jest **wyłącznie dla LP**. Newsletter zawsze dostaje zwykły link/przycisk.
* **Layout offera:** `offerHeadlineIndex` wskazuje, który wiersz `offer` renderuje się jako duży nagłówek (wiersz bezpośrednio nad nim staje się małym trackowanym labelem, kolorowanym przez `offerLabelColor`). `offerDateColor` koloruje wiersz ważności.
* **Tło freebies:** JEŚLI tło pod freebies różni się od tła offera -> `anotherTableForFreebies: true` + `freebiesBackground`. Przy ciemnym tle ustaw też `freebiesTextColor` (domyślny `#242222` będzie niewidoczny).
* **Grid freebies:** 4 produkty -> 2x2. 3 -> 1x3. 1 -> 1x1.
* **`freebiesLikeProducts: true`** renderuje freebies przez zwykły renderer produktów (pełne karty, lewy align, ten sam padding co grid) zamiast wąskiej karty bespoke. Wybieraj wg preview.
* **Cena przy freebie:** karta freebie pokazuje etykietę „Free"/„GRATIS" **oraz przekreśloną normalną cenę produktu** (`lowPrice`, fallback `highPrice`) — tak robi zarówno bespoke `deal/grid.ts`, jak i `Prices.ts` przez `isFree`. Przekreślona cena pojawia się tylko gdy dane ją mają. **Nie dodawaj logiki per-kraj dla cen** — rynki bez starej ceny (np. PL) po prostu nie mają jej w danych i dostają samą etykietę. `parsePrice.js` sam zaokrągla `highPrice` w górę dla PL.

## 3. ZARZĄDZANIE STYLAMI (CSS) I LAYOUTEM
* **ZASADA ZAOKRĄGLANIA (+/- 5px):** Używamy wartości z końcówką 0 lub 5 (np. design 32px -> kod 35px: `.newsletterContainer35px`). Nie wprowadzaj ułamkowych wymiarów. Klasa musi istnieć w `src/utils/css/newsletter/regular.css` — sprawdź przed użyciem, wymyślona klasa (`newsletterBottom28px`) po cichu da 0px.
* **JEDNOSTKI CSS (OUTLOOK):** WYŁĄCZNIE piksele (`px`). Żadnych `em`, `rem`, `%` w paddingach i fontach. Procenty (%) DOZWOLONE TYLKO do szerokości strukturalnych kolumn (np. `width="50%"` na `<td>`).
* **OBRAZKI CTA (SZEROKOŚĆ):** Jeśli mimo pkt 2a musisz wstawić grafikę jako przycisk, MUSISZ ograniczyć jej szerokość (`width="230"`). Nigdy `100%`.

### 3a. Odstępy — pułapki, które nie rzucają błędu
* **`category.paragraph` ZAWSZE generuje spacer, nawet gdy nie chcesz opisu.** W `Categories.ts` gałąź `else` dla `paragraph.show` wstawia `Space({ className: category.paragraph?.spaceAfter ?? 'newsletterBottom35px' })`. Efekt: **podwójny padding**, jeśli renderer kategorii ma już własny górny spacer (`deal/offer.ts` otwiera swój 35px). Gdy kategoria nie ma opisu, ustaw jawnie:
  ```js
  paragraph: { show: false, spaceAfter: 'newsletterBottom0px' }
  ```
  Dotyczy KAŻDEGO typu kategorii, nie tylko `grid`.
* **`title.spaceAfter` ustawiaj jawnie** przy każdej kategorii z tytułem. Brak pola = brak odstępu tytuł→treść. To najczęstszy błąd copy-paste: blok kategorii skopiowany z sąsiedniej sekcji gubi odstęp i tytuł skleja się z gridem.
* **Odstępy pionowe w karcie produktu** pochodzą z `gapBetweenVertical` (`product.gapBetweenVertical`, domyślnie `true` → 20px pod obrazkiem + 35px pod kartą). `false` kasuje OBA naraz — rzędy produktów sklejają się pionowo, przy zachowanym paddingu bocznym (mylące: „obok jest, pod spodem nie ma").

## 4. PIXEL-PERFECT QA & STEP-BY-STEP EXECUTION
Podczas pracy nad układem myśl KROK PO KROKU:
1. **Analiza Danych:** Upewnij się, że ładujesz poprawne ID produktów (SA# z arkusza), a nie zmienne typu `picid`.
2. **Wyrównanie (Alignment):** Tytuły kategorii MUSZĄ idealnie licować się do lewej z siatką produktów i z obrazkiem lifestyle nad nią. Ustaw TEN SAM `container`/`tdClass` (np. `newsletterContainer35px`) na tytule (`title`), obrazku lifestyle (`category.tdClass` — domyślnie BEZ klasy, 0px padding!) i gridzie produktów (`category.container`) w ramach jednej kategorii, inaczej rozjedzie się o różnicę paddingów. Wyrównanie obrazka produktu względem jego tekstu (`grid.ts`) jest już domyślnie zgodne z `align` tekstu — nie trzeba tego pilnować, chyba że ustawiasz `alignToSide: true`.
3. **Weryfikacja Wizualna:** Zanim zaraportujesz „100% pass", musisz uruchomić `capture_campaign_preview` — dla OBU template'ów (`Newsletter` i `Landing`), bo renderują różne gałęzie kodu (`renderType`). Brak błędów w konsoli to za mało.
4. **Procedura Meldu:** Przed wysłaniem screena usystematyzuj: *„Zweryfikowałem uppercase, kody hex, licowanie tekstów ze zdjęciami, poprawne ID produktów, odstępy pionowe i poziome, naturalne rozmiary CTA i zaokrąglone marginesy."* Jeśli widzisz „PRODUCT NOT FOUND" lub rozjechane przyciski – wróć do kodu i popraw.
5. **Raportuj uczciwie.** Nie pisz „pixel-perfect", jeśli czegoś nie sprawdziłeś albo obszedłeś kompromisem. Znane ograniczenia i świadome trade-offy wypisz osobno.

### 4a. Uruchomienie środowiska
* `bun run dev` startuje RAZEM api-server (port 5111) i vite (port 5500). Jeśli api już działa, dostaniesz `Failed to start server. Is port 5111 in use?` — vite i tak wstanie, ale nie startuj drugiego api obok.
* Który folder kampanii się ładuje, decyduje `VITE_SCOPE` w `.env` (np. `VITE_SCOPE = KamilK`). Kampania spoza scope'u nie pojawi się na liście i `capture_campaign_preview` jej nie znajdzie.
* Zmiany w `src/**/*.ts` łapie HMR, ale przy edycji wielu plików naraz potrafi podać stary moduł — wtedy zrestartuj preview server.

### 4b. Pułapki `capture_campaign_preview` (to NIE są błędy kampanii)
* `shop` to kod z `list_shops` (np. `UK`, `CHDE`), nie nazwa wyświetlana. `lang` to **etykieta z rozwijanej listy** (np. `German`, `English`) — NIE kod języka; `lang: "CHDE"` da `No language matching`.
* Każdy wpis mocka `products` wymaga `shopUrl`.
* **Mock z `price` daje `ShopPrice === ShopHPrice`** — obie ceny wychodzą identyczne, więc NIE DA SIĘ na takim zrzucie stwierdzić, czy przekreślona cena w ogóle się renderuje. Do weryfikacji cen podaj świadomie różne wartości.
* **Render bywa po cichu anulowany.** Jeśli finalny HTML zawiera gdziekolwiek string `undefined`, `templateRenderer.js` pokazuje `confirm()`; w trybie headless odpowiedź jest negatywna i leci toast „Rendering cancelled. Check campaign file...", a strona zostaje pusta/stara. Diagnostyka: w konsoli strony `getState('html')` i wyszukaj `undefined`. Częsta niewinna przyczyna: pusty `src` kafelka w footerze — nie musi to być błąd Twojej kampanii.
* Zwrócony screenshot bywa PRZYCIĘTY (brak header/footer) mimo poprawnego DOM — przed zgłoszeniem „header/footer nie działa" zweryfikuj przez pełny DOM (`get_page_text` / `getState('html')`), nie przez zrzut.
* **Nie ufaj ręcznie otwartej karcie przeglądarki jako źródłu prawdy.** Ma własny `localStorage` i potrafi trzymać stary render. `capture_campaign_preview` seeduje swój `localStorage` i renderuje od zera — autorytatywny jest jego artefakt z `previews/`.
* **Zrzut całego maila (650 × kilka tys. px) jest nieczytelny po przeskalowaniu.** Żeby realnie odczytać etykiety/ceny/odstępy, przytnij i powiększ interesujący fragment przed oceną — inaczej przeoczysz nieprzetłumaczoną etykietę albo brakującą cenę:
  ```powershell
  Add-Type -AssemblyName System.Drawing
  $bmp = New-Object System.Drawing.Bitmap([System.Drawing.Image]::FromFile("previews/SHOP_campaign.png"))
  $crop = $bmp.Clone((New-Object System.Drawing.Rectangle(0, $y, 650, $h)), $bmp.PixelFormat)
  $out = New-Object System.Drawing.Bitmap(1300, ($h*2)); $g = [System.Drawing.Graphics]::FromImage($out)
  $g.DrawImage($crop, 0, 0, 1300, ($h*2)); $g.Dispose(); $out.Save("zoom.png")
  ```

### 4c. Checklista przed „gotowe"
- [ ] Odstęp tytuł → grid w KAŻDEJ kategorii (`title.spaceAfter` jawnie).
- [ ] Brak podwójnego spacera na starcie sekcji (`paragraph: { show: false, spaceAfter: 'newsletterBottom0px' }`).
- [ ] Odstępy pionowe MIĘDZY RZĘDAMI produktów i freebies (nie tylko boczne).
- [ ] Etykiety generowane przez kod są przetłumaczone (sprawdź na rynku innym niż UK — np. CHDE: ma być „GRATIS", nie „Free").
- [ ] Ceny: przekreślona stara cena tam, gdzie dane ją mają (mock z RÓŻNYMI wartościami!).
- [ ] Przyciski: wypełnione vs linki — zgodnie z preview, na NS i na LP.
- [ ] Oba template'y (`Newsletter` + `Landing`) wyrenderowane i obejrzane.
- [ ] Brak „PRODUCT NOT FOUND" i „Translation not found".
