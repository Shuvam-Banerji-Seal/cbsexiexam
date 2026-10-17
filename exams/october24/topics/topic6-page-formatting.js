// October 24 Examination — Topic 6: Page Layout, Headers, Footers & Objects.
// 10 questions · CBSE Class IX · Information Technology (402), Unit 3: Digital Documentation; Computer Applications (165), Unit 3: Office Tools.
window.OCT24_TOPICS = window.OCT24_TOPICS || [];
window.OCT24_TOPICS.push({
  key: "page-formatting",
  name: "Page Layout, Headers, Footers & Objects",
  questions: [
    {
      q: "In LibreOffice Writer, the page <b>margins</b>, <b>paper size</b> and <b>orientation</b> are set in which dialog?",
      options: ["Format ▸ Paragraph", "Format ▸ Character", "Format ▸ Page Style", "Format ▸ Columns"],
      answer: 2,
      explain: "The <b>Page Style</b> dialog (its Page tab) holds the paper format, orientation and margins. Its other tabs set the header, footer, borders and columns of the page.",
      diff: "E"
    },
    {
      q: "A page that is <b>wider than it is tall</b> is said to be in —",
      options: ["Portrait orientation", "Mirrored layout", "Justified layout", "Landscape orientation"],
      answer: 3,
      explain: "<b>Landscape</b> pages are wider than they are tall, which suits wide tables and charts. Portrait pages are taller than they are wide.",
      diff: "E"
    },
    {
      q: "Which shortcut inserts a <b>manual page break</b> in LibreOffice Writer, so the text after the cursor starts on a new page?",
      options: ["Ctrl+Enter", "Shift+Enter", "Ctrl+Shift+Enter", "Alt+Enter"],
      answer: 0,
      explain: "<b>Ctrl+Enter</b> inserts a manual page break. Shift+Enter gives only a line break, and Ctrl+Shift+Enter gives a column break in multi-column text.",
      diff: "M"
    },
    {
      diagram: "flowchart TD\n  A[\"Region X: in the top margin, repeats on every page\"] --> B[\"Body: the main text of the page\"]\n  B --> C[\"Region Y: in the bottom margin, repeats on every page\"]",
      diagramCaption: "Figure: The three areas of a page, from top to bottom",
      q: "The figure shows the three areas of a page in a Writer document. What are regions <b>X</b> and <b>Y</b> called?",
      options: ["X is the title bar, Y is the status bar", "X is the footer, Y is the header", "X is the header, Y is the footer", "X is the ruler, Y is the scroll bar"],
      answer: 2,
      explain: "The <b>header</b> sits in the top margin and the <b>footer</b> in the bottom margin. Whatever you put there repeats on every page with that page style. They are added from Insert ▸ Header and Footer.",
      diff: "E"
    },
    {
      q: "Why should page numbers be added with <b>Insert ▸ Field ▸ Page Number</b> in the footer, instead of typing the numbers by hand?",
      options: ["Typed numbers can never be printed", "The field shows the correct number on each page and updates by itself", "A field makes the file much smaller", "Only fields can be made bold"],
      answer: 1,
      explain: "A <b>page number field</b> placed once in the footer shows the right number on every page and updates by itself when pages are added or removed.",
      diff: "M"
    },
    {
      q: "Which LibreOffice Writer toolbar has tools for drawing lines, rectangles, ellipses and arrows directly in a document?",
      options: ["Formatting toolbar", "Standard toolbar", "Table toolbar", "Drawing toolbar"],
      answer: 3,
      explain: "The <b>Drawing toolbar</b> (View ▸ Toolbars ▸ Drawing) has the line and basic shape tools. The same shapes are also in the Insert ▸ Shape menu.",
      diff: "E"
    },
    {
      q: "To put symbols such as π, ≤, √ or ∞, which are not on the keyboard, into a Writer document, you use —",
      options: ["Insert ▸ Special Character", "Format ▸ Text", "Tools ▸ Spelling", "View ▸ Formatting Marks"],
      answer: 0,
      explain: "<b>Insert ▸ Special Character</b> opens a dialog of symbols, including Greek letters and mathematical signs, which you can search and insert.",
      diff: "M"
    },
    {
      q: "Sohan inserts a photo with Insert ▸ Image and wants the paragraph text to flow around <b>all four sides</b> of the photo's frame. Which Wrap setting should he choose?",
      options: ["None", "Through", "Before", "Parallel"],
      answer: 3,
      explain: "<b>Parallel</b> wrap flows the text around all sides of the image's frame. None keeps text only above and below it, and Through puts the image in front of the text.",
      diff: "M"
    },
    {
      q: "To insert a properly laid-out mathematical formula, such as a fraction with a square root in it, into a Writer document, LibreOffice provides —",
      options: ["A chart from LibreOffice Calc", "The Navigator", "A formula object made with LibreOffice Math", "The Find &amp; Replace dialog"],
      answer: 2,
      explain: "A <b>formula object</b> opens the <b>LibreOffice Math</b> editor inside Writer, which lays out fractions, roots, powers and other mathematical expressions.",
      diff: "M"
    },
    {
      q: "Pooja's page is 21.0 cm wide, with a left margin of 2.5 cm and a right margin of 2.0 cm. She then sets the text in <b>2 equal columns</b> with 1.0 cm of spacing between them. How wide is each column?",
      options: ["8.25 cm", "7.75 cm", "10.0 cm", "8.75 cm"],
      answer: 1,
      explain: "Text area = 21.0 − 2.5 − 2.0 = 16.5 cm. Taking away the 1.0 cm gap leaves 15.5 cm, so each column is 15.5 ÷ 2 = <b>7.75 cm</b>. 8.25 cm forgets the gap between the columns.",
      diff: "H"
    },
  ],
});
