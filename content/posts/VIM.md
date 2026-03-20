---
title: VIM
description: Notes from Desec Novo Pentest Profissional's course
date: 2026-03-16
type: Note
tags: [Linux, OffSec]
---

- VIM was created when keyboards didn't had many functional keys we now are used to. The project absorbed many features from VI, a similar text editor created even earlier than VIM. 
- VIM has four modes: Normal (`ESC` key), edit (`i` key), command (`:` key), and visual (`v` key)
- VIM has a bunch of commands that help you in a series of tasks. To use a command, first enter the normal mode. Here's the most common ones:
	- `:w`: Write and save a file
	- `:wq`: Save and quit a file
	- `shift` + `zz`: Save and quit a file
	- `:q`: Quit a file without saving
	- `:q!`: Force quit a file without saving
	- `ctrl` + `q`: Refresh VIM to counter breaks
	- `G`: Go to the last line of the file
	- `gg`, `1G`: Go to the first line of the file
	- `0`: Place the cursor at the beginning of the line
	- `$`: Place the cursor at the end of the line
	- `u`: Undone the last action made
	- `.`: Repeats the last action made
	- `dd`: Delete a line
	- `D`: Delete the line until the cursor is found
	- `r` + `key`: Replace the character with the key pressed and immediately
	- `yy`: Copy the entire line
	- `p`: Paste the copied content below the cursor
	- `P`: Paste the copied content above the cursor
	- `v`: Enters the character visual mode
	- `Y`: Copies the line selected at the visual mode
	- `x`: Deletes the character that the cursor is pointing
	- `X`: Deletes the character before the cursor
	- `*`: Search the word below cursor from top down
	- `#`: Search the word below cursor from down top
	- `h`, `j`, `k`, `l`: Navigate the file instead of using the directional keys
	- `:set nu`: Highlight numbered lines
	- `:set nonu`: Removes the numbered lines
	- :`term`: Opens a terminal session within the VIM editor
	- `ctrl` + `ww`: Switch between the terminal session and VIM editor
	- `:%s/foo/bar/gc`: Replace `foo` with `bar`, requiring confirmation each time it find a match
	- `:%s/foo/bar/gn`: Counts the number of matches found
	- `:1,10s/foo/bar/g`: Replace `foo` with `bar` only matching within the lines 1 and 10 without asking for confirmation
	- `:1,10d`: Deletes everything within the lines 1 and 10
	- `:%d`: Deletes everything from the file
	- `/foo`: Searches `foo` within the file, going from match to match
	- `fx`: Searches `x` character within the line from after the cursor
	- `tx`: Searches `x` character within the line from before the cursor
	- `PgUp` or `ctrl` + `b` and `PgDn` or `ctrl` + `f`: Navigate the file from up down
- You can tweak VIM editing the file `~/.vimrc`.