// October 24 Examination — Topic 4: Formatting Text.
// 10 questions · CBSE Class IX · Information Technology (402), Unit 3: Digital Documentation.
window.OCT24_TOPICS = window.OCT24_TOPICS || [];
window.OCT24_TOPICS.push({
  key: "text-formatting",
  name: "Formatting Text",
  questions: [
    {
      q: "Which shortcut makes the selected text <b>bold</b> in LibreOffice Writer?",
      options: ["Ctrl+B", "Ctrl+D", "Ctrl+T", "Ctrl+L"],
      answer: 0,
      explain: "<b>Ctrl+B</b> applies bold, Ctrl+I italic and Ctrl+U underline. Ctrl+L left-aligns a paragraph.",
      diff: "E"
    },
    {
      q: "In the chemical formula H<sub>2</sub>O, the small 2 written below the line is formatted as —",
      options: ["Superscript", "Strikethrough", "Subscript", "Small capitals"],
      answer: 2,
      explain: "Text lowered below the normal line is <b>subscript</b>, as in H<sub>2</sub>O. Text raised above it is superscript, as in x<sup>2</sup>.",
      diff: "E"
    },
    {
      q: "In LibreOffice Writer, which shortcut makes the selected text <b>superscript</b>?",
      options: ["Ctrl+Shift+B", "Ctrl+Shift+P", "Ctrl+Shift+S", "Ctrl+Shift+U"],
      answer: 1,
      explain: "<b>Ctrl+Shift+P</b> applies superscript. Ctrl+Shift+B is the shortcut for subscript.",
      diff: "M"
    },
    {
      q: "Which LibreOffice Writer menu command changes the selected words <i>class nine report</i> into <i>CLASS NINE REPORT</i>?",
      options: ["Format ▸ Paragraph ▸ Alignment", "Tools ▸ AutoCorrect ▸ AutoCorrect Options", "Insert ▸ Special Character", "Format ▸ Text ▸ UPPERCASE"],
      answer: 3,
      explain: "The <b>Format ▸ Text</b> submenu changes case: UPPERCASE, lowercase, Sentence case, Capitalize Every Word and more. No retyping is needed.",
      diff: "M"
    },
    {
      q: "In LibreOffice Writer, the <b>Capitalize Every Word</b> case command is applied to the selected text <i>the story of my life</i>. The text becomes —",
      options: ["The story of my life", "THE STORY OF MY LIFE", "The Story Of My Life", "tHE STORY OF MY LIFE"],
      answer: 2,
      explain: "<b>Capitalize Every Word</b> makes the first letter of each selected word a capital, short words included. <i>The story of my life</i> would be Sentence case.",
      diff: "M"
    },
    {
      q: "In LibreOffice Writer, to make a sentence look as if it had been marked with a yellow marker pen, which Formatting toolbar button do you use?",
      options: ["Font Color", "Character Highlighting Color", "Underline", "Bold"],
      answer: 1,
      explain: "<b>Character Highlighting Color</b> puts a coloured background behind the text, like a marker pen. Font Color changes the colour of the letters themselves.",
      diff: "E"
    },
    {
      q: "Some text has been made bold, italic, red and 16 pt by hand. Which LibreOffice shortcut removes all this <b>direct (manual) formatting</b> at once, so the text takes the look of its paragraph style again?",
      options: ["Ctrl+M", "Ctrl+Z", "Ctrl+N", "Ctrl+E"],
      answer: 0,
      explain: "<b>Ctrl+M</b> (Format ▸ Clear Direct Formatting) removes manual formatting in one step. Ctrl+Z would undo only the last single action.",
      diff: "M"
    },
    {
      q: "In a word processor, the size of text characters (font size) is measured in —",
      options: ["Pixels per inch", "Centimetres", "Lines", "Points (pt)"],
      answer: 3,
      explain: "Font size is given in <b>points</b>, such as 12 pt for body text and larger sizes for headings. It is chosen from the Font Size box on the Formatting toolbar.",
      diff: "E"
    },
    {
      q: "Kabir typed <i>x2 + y2 = r2</i> in LibreOffice Writer and wants it to read x<sup>2</sup> + y<sup>2</sup> = r<sup>2</sup>. Which method gives the correct result?",
      options: ["Select each 2 and press Ctrl+Shift+B", "Select the whole line and press Ctrl+Shift+P", "Select only the three 2s and press Ctrl+Shift+P", "Select each 2 and press Ctrl+B"],
      answer: 2,
      explain: "Only the exponents should be raised, so select <b>just the 2s</b> (holding Ctrl adds each one to the selection) and apply <b>superscript, Ctrl+Shift+P</b>. Selecting the whole line would raise x, y and r too, and Ctrl+Shift+B gives subscript.",
      diff: "H"
    },
    {
      q: "The word <i>Exam</i> is already <b>bold</b>. Arun selects it and presses Ctrl+B, then Ctrl+I, then Ctrl+U, and then Ctrl+I again. How does the word look now?",
      options: ["Bold and underlined", "Underlined only", "Bold, italic and underlined", "Italic and underlined"],
      answer: 1,
      explain: "These shortcuts switch a style on and off. Ctrl+B turns bold <i>off</i>, Ctrl+I turns italic on, Ctrl+U turns underline on, and the second Ctrl+I turns italic off again, leaving it <b>underlined only</b>.",
      diff: "H"
    },
  ],
});
