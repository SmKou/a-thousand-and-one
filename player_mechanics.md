# Player Mechanics

Commands:
`map <location> <date>`: View aerial map of location on given date in Information panel. Shortcode: `mp <location> <date>`
`look <object> <location> <date>`: Read memories and notes on an object at the given location on the given date in the Information panel. Objects that have more than one of its kind in the given location are numbered. They may or may not have a name. Shortcode: `lk <location> <date>`
`nums <object> <location> <date>`: View the assigned numbers of an object in the given location. Objects that have names will be listed with a number and their names. Shortcode: `ns <object> <location> <date>`
`pause`: Pauses the writing mode of the story or day. Shortcode: `p`
`resume`: Resumes the writing mode of the story or day. Shortcode: `r`
`load [file]|[<location> <date>]`: Displays complete story or day narration. If the word "file" is added, it'll load a game file. Specifying location and/or date displays the complete story or narration at the given location on the given date. Shortcode: `ld [file]|[<location> <date>]`
`enter <date>`: Read the story on the given date. Shortcode: `ent <date>`
`exit <date>`: Return to last narrative point, or go to the narrative of the given date. Shortcode: `ext <date>`
`fs`: Toggle text navigation mode. This mode enables players to analyze text.

Flags:
`-ls`: Provides a list of information blocks requested based on other provided input. If there is more than one instance of this flag in a command, an error will appear in the Information panel, `Error: Information overload`.
- `commands -ls`: List of available commands
- `people -ls`: List of people
- `objects -ls`: List of objects
- `location -ls`: List of locations
- `date -ls`: List of dates

Defaults:
`<object>`: An object that Seraphiel is holding in her right hand
`<location>`: Seraphiel's current location
`<date>`: Current day

**fs: Search mode**
- `ls`: list
- `fst`: first (of)
- `lst`: last (of)
- `wrd`: word(s)
- `stn`: sentence(s)
- `pgh`: paragraph(s)
- _`[n]`: character at nth place in word (character), sentence (word), or paragraph (sentence)
- _`[n+]` or _`[n-]`: increment or decrement on each next character, word or sentence
- `e`, `e[n]`: every nth (default: 1)
- `r`, `r[n]`: replace every nth (default: 1) with <

Example: `ls fst wrd e pgh` = List first word of every paragraph
Example: `
