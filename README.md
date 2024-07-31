# A Thousand and One

Title: A Thousand and One
Description: Someone is out to kill Seraphiel. Solve text puzzles to keep her alive one day at a time.

Genre: Romantic-Mystery
Game Genre: Puzzle/Text adventure

A woman named Seraphiel counts off her days to 1001. Every day, she goes through her morning routine with a story in her head that holds the secret to saving her life for that day. The secret takes the form of a word puzzle to be deciphered or solved based on the corresponding story. If the secret cannot be deciphered or found, Seraphiel dies that day, and yet, she will continue to live to the next and the next.

## Description

"A Thousand and One" is a client-side app that saves to local storage. The data is not stored on a server. The option of downloading and sending one's self a game file is a possibility. Players use word commands to navigate the story and Seraphiel's world. While they can jump to and skip days on her calendar, the player will not have the title of days they have not solved yet. To unlock the final day, the puzzle to solve is the amalgation of titles. While a player cannot control Seraphiel's schedule, they can glean information from memories stored in people and objects. They can pause and resume conversations.

### User Interface

Consists of 3 areas: narrator, input, panels

Narrator: View of story and dialogue that player reads
Input: Empty bar that players type and enter commands into
Panels
- Calendar: Displays current day in Seraphiel's count and date
  Includes view of present month, days solved, and progress bar
- Information: Display for user-related information
  Eg. map, object descriptions, player notes, solutions, commands

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
