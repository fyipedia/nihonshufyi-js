# nihonshufyi (npm) — Sake API Client Demo
Output demo.gif

Set FontSize 20
Set Width 1000
Set Height 580
Set Shell "zsh"
Set Theme "Catppuccin Mocha"
Set TypingSpeed 30ms
Set Padding 24

Type "node"
Enter
Sleep 1s

Type "const { NihonshuFYI } = await import('nihonshufyi')"
Enter
Sleep 1s

Type "const client = new NihonshuFYI()"
Enter
Sleep 1s

Type "// Search sake by grade"
Enter
Sleep 0.5s

Type "await client.search('junmai')"
Enter
Sleep 2.5s

Type "await client.sake('dassai-23')"
Enter
Sleep 2.5s

Type ".exit"
Enter
Sleep 1s
