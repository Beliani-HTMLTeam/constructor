# Constructor Newsletter Agent Rules

These rules apply when building newsletter campaigns based on designs (e.g., from Claude Design, Figma, or graphic designers).

## 1. Ignorowanie Headera i Footera
- **NIGDY** nie implementuj ani nie dodawaj do pliku kampanii własnego headera ani footera z designu.
- Konstruktor używa gotowych komponentów Header i Footer wbudowanych w template'y (np. `templates.Monday`, `templates.Thursday`).
- Skup się wyłącznie na głównej zawartości newslettera (sekcje z produktami, kafelki, banery, intro, TopImageTitle).

## 2. Globalne Zmienne (Vite AutoImport)
W plikach kampanii (`campaigns/[user]/[nazwa].js`) **NIE IMPORTUJ** następujących zmiennych, są one dostępne globalnie:
- `entities` (np. `new entities.Campaign`)
- `templates` (np. `templates.Monday`)
- `types` (np. `types.NEWSLETTER`, `types.CSS.NS`, `types.WRAPPER`)
- `getImageUrl`
- `translateImage`
- `translateLink`

## 3. Komponenty Call to Action (CTA)
Zwracaj uwagę na to, jak wygląda CTA w otrzymanym designie:
- Jeśli design zakłada "wypełniony przycisk" (tło + tekst), użyj komponentu **`ButtonCTA`** (ustawiając `cta: { component: 'ButtonCTA', ... }` lub w przypadku niestandardowego renderu używając tego komponentu).
- Jeśli design zakłada standardowy podkreślony tekst, użyj tradycyjnego zachowania (wystarczy `cta: true` w konfiguracji kategorii).

## 4. Wykorzystanie serwera MCP
Jeśli otrzymasz polecenie utworzenia kampanii, użyj narzędzia `create_campaign` dostępnego przez MCP serwer. 
- Najpierw zapoznaj się z przykładami używając `get_example_campaign`.
- Buduj sekcje `categories` używając gotowych typów takich jak `grid`, `deal`, `categorytiles`, `small-tiles`.
- Jeśli brakuje pewnych informacji (np. ID produktów), wygeneruj plik ze znacznikami (np. '123456') lub zapytaj użytkownika o uzupełnienie danych.
