// October 24 Examination — Topic 2: Selecting & Editing Text.
// 10 questions · CBSE Class IX · Information Technology (402), Unit 3: Digital Documentation.
window.OCT24_TOPICS = window.OCT24_TOPICS || [];
window.OCT24_TOPICS.push({
  key: "editing",
  name: "Selecting & Editing Text",
  questions: [
    {
      q: "In LibreOffice Writer, the <b>Undo</b> and <b>Redo</b> commands are found in which menu?",
      options: ["File", "Edit", "View", "Insert"],
      answer: 1,
      explain: "<b>Edit ▸ Undo</b> reverses the last action and <b>Edit ▸ Redo</b> brings back what was undone. Both also have buttons on the Standard toolbar.",
      diff: "E"
    },
    {
      q: "Meera deleted a paragraph, then pressed Ctrl+Z to bring it back. Now she decides the paragraph should be deleted after all. Which shortcut reverses her Undo in one step?",
      options: ["Ctrl+X (Cut)", "Ctrl+Z (Undo) again", "Ctrl+V (Paste)", "Ctrl+Y (Redo)"],
      answer: 3,
      explain: "<b>Redo (Ctrl+Y)</b> re-applies the action that was just undone, so the paragraph is deleted again. Pressing Ctrl+Z again would undo an even earlier action instead.",
      diff: "M"
    },
    {
      q: "To <b>move</b> a sentence to another place in the document using the keyboard, you —",
      options: ["Cut it (Ctrl+X), click at the new place and Paste (Ctrl+V)", "Copy it (Ctrl+C), click at the new place and Paste (Ctrl+V)", "Copy it (Ctrl+C) and then press Undo (Ctrl+Z)", "Select all (Ctrl+A) and then press Delete"],
      answer: 0,
      explain: "<b>Cut and paste</b> moves text: Cut removes it from the old place and Paste puts it in the new one. Copy and paste would leave the original behind as well.",
      diff: "E"
    },
    {
      q: "Priya copies a line of text with Ctrl+C. How many times can she <b>paste</b> that line into her document with Ctrl+V?",
      options: ["Only once", "Exactly twice", "As many times as needed, until something else is cut or copied", "Not at all until she saves the document"],
      answer: 2,
      explain: "Copy puts the line on the <b>clipboard</b>, where it stays until something else is cut or copied, so it can be <b>pasted again and again</b>. The original line also stays where it was.",
      diff: "E"
    },
    {
      q: "In LibreOffice Writer, what does <b>triple-clicking</b> on a word in a paragraph select?",
      options: ["Only that word", "The whole sentence containing the word", "The whole document", "Only the characters to the right of the cursor"],
      answer: 1,
      explain: "In LibreOffice, a double-click selects a word and a <b>triple-click selects the current sentence</b>.",
      diff: "M"
    },
    {
      q: "The cursor is at the start of a line in LibreOffice Writer. Which key combination selects the text from the cursor to the <b>end of that line</b>?",
      options: ["Ctrl+End", "End", "Ctrl+A", "Shift+End"],
      answer: 3,
      explain: "Holding Shift while moving the cursor selects text, so <b>Shift+End</b> selects to the end of the line. End alone only moves the cursor, and Ctrl+End jumps to the end of the document.",
      diff: "M"
    },
    {
      q: "To select two sentences that are <b>not next to each other</b> in LibreOffice Writer, you select the first one and then drag over the second one while holding down —",
      options: ["Ctrl", "Shift", "Tab", "Esc"],
      answer: 0,
      explain: "Holding <b>Ctrl</b> adds each new selection to the existing one, giving a non-consecutive selection. Shift would extend one selection across everything in between.",
      diff: "E"
    },
    {
      q: "Rohan typed a list in which each line has a name, some spaces and then a roll number. He wants to select <b>only the column of roll numbers</b>, a rectangular area spread over several lines. In LibreOffice Writer he should —",
      options: ["Click the first roll number, then Shift+click the last one", "Switch to block selection (Edit ▸ Selection Mode) and drag over the roll numbers", "Triple-click the first roll number", "Press Ctrl+A to select all the lines"],
      answer: 1,
      explain: "<b>Block selection</b> mode, chosen from Edit ▸ Selection Mode or the status bar, selects a vertical, rectangular block of text. Shift+click would select everything between the two points, names included.",
      diff: "H"
    },
    {
      q: "While dragging selected text in LibreOffice Writer, a small <b>plus sign (+)</b> appears next to the mouse pointer because the Ctrl key is held down. When the mouse button is released, the text will be —",
      options: ["Moved to the new place", "Deleted from the document", "Copied to the new place, leaving the original", "Turned into a hyperlink"],
      answer: 2,
      explain: "Plain drag-and-drop <b>moves</b> text. Holding Ctrl while dragging <b>copies</b> it, and the plus sign on the pointer shows that a copy is being made.",
      diff: "M"
    },
    {
      q: "Sana typed a heading, then made it <b>bold</b>, and then changed its colour to <b>red</b>. Now she presses Ctrl+Z <b>two</b> times. How does the heading look?",
      options: ["Bold and red", "Bold but not red", "The heading text is removed", "Plain text, neither bold nor red"],
      answer: 3,
      explain: "Undo works backwards, one action at a time. The first Ctrl+Z removes the red colour and the second removes the bold, so the <b>typed heading stays as plain text</b>.",
      diff: "H"
    },
  ],
});
