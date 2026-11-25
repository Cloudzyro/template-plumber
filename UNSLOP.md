# Unslop pass

Done with the unslop skill (unslop by Damir Sokolovsky, @heydamir, CC BY 4.0) on November 25, 2026.

## Audit

Light slop: built with its own palette, type and drawn pipe run, so this was polish mode. Signs found:

- Display headings at weight 600 everywhere (`.display` in `global.css`, the areas aside heading)
- Zero-padded index numbers ("01" to "05") in copper beside every service, decoration with no meaning (`services.astro`)
- A "Trip charge" column that said "None" on every row, repeating what the page intro already says (`areas.astro`)
- A long emergency option ("It's an emergency (water is running now)") that was cut off in the select (`site.ts`)

No gradients on chrome, glows, gradient text, emoji, pill badges above headlines, uppercase tracked labels, italic emphasis, trailing periods on labels, hype words, looping motion or `transition-all` were found.

## Direction

- Product: a family plumbing company in Marlow County, for people with water where it shouldn't be and people planning a job
- Character: dependable, direct, plainspoken
- World: copper pipe, brass valves, a van parked at night; ink-navy surfaces with warm off-white pages, copper as the one accent
- Moments: the drawn copper pipe run with its shutoff valve and pressure gauge in the hero, and the published price table
- Signature: the copper elbow fitting at the end of a pipe rule, used only as section dividers

## Changes

- Spacing: services rows now two columns (content and the price card), no empty 64px number column
- Color: copper stays on the call buttons, the emergency number and the elbow fittings only
- Copy: the emergency option reads "Emergency, water is running now"; the always-"None" trip charge column removed (the intro already says no trip charge in Marlow County)
- Type: Barlow Condensed headings down from 600 to 500, hierarchy from size; tabular figures on prices kept
- Layout: no change needed (asymmetric hero, price card beside each service, wider first review)
- Details: decorative service numbers removed
- Motion: no change needed (color transitions and a small press scale only)

screenshot-2: Pricing guide with the rates and the common jobs table
screenshot-3: Quote form beside the "Water running now?" steps
