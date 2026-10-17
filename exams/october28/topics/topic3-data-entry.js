// October 28 Examination — Topic 3: Entering Data: Labels, Values & Formulas.
// 10 questions · CBSE Class IX · Information Technology (402), Unit 4: Electronic Spreadsheet.
window.OCT28_TOPICS = window.OCT28_TOPICS || [];
window.OCT28_TOPICS.push({
  key: "data-entry",
  name: "Entering Data: Labels, Values & Formulas",
  questions: [
    {
      q: "Text such as <b>Name</b> or <b>Roll No.</b> typed into a spreadsheet cell is called a —",
      options: ["Label", "Value", "Formula", "Function"],
      answer: 0,
      explain: "Text entries are <b>labels</b>. They describe the data, for example as column headings, and are not used in calculations. Numbers are values, and entries beginning with = are formulas.",
      diff: "E"
    },
    {
      q: "By default, how does LibreOffice Calc align text and numbers inside a cell?",
      options: ["Both text and numbers to the left", "Text to the right, numbers to the left", "Text to the left, numbers to the right", "Both text and numbers in the centre"],
      answer: 2,
      explain: "With the Default horizontal alignment, Calc aligns <b>text to the left</b> and <b>numbers to the right</b>. This shows at a glance whether an entry was taken as a number.",
      diff: "E"
    },
    {
      q: "To enter a formula in a cell in LibreOffice Calc, you begin by typing —",
      options: ["A dollar sign ($)", "An equals sign (=)", "A hash sign (#)", "An apostrophe (')"],
      answer: 1,
      explain: "A formula starts with an <b>equals sign</b>, for example =B2+C2. A leading apostrophe does the opposite: it makes Calc treat the entry as text.",
      diff: "E"
    },
    {
      q: "Neha types <code>B2+C2</code> in cell D2, <b>without</b> any sign in front of it, and presses Enter. What will D2 show?",
      options: ["The sum of the numbers in B2 and C2", "The error message #NAME?", "The number 0", "The text B2+C2, because it is taken as a label"],
      answer: 3,
      explain: "Without the leading <b>=</b>, Calc does not recognise the entry as a formula. It stores it as <b>text (a label)</b> and displays it exactly as typed.",
      diff: "M"
    },
    {
      q: "In LibreOffice Calc, which key opens the contents of the selected cell for editing, so you can change part of the entry without retyping all of it?",
      options: ["F2", "F5", "F7", "F9"],
      answer: 0,
      explain: "<b>F2</b> puts the cell into edit mode; double-clicking the cell does the same. In Calc, F5 shows the Navigator, F7 checks spelling and F9 recalculates.",
      diff: "M"
    },
    {
      q: "Cell D4 displays <b>250</b>. When D4 is selected, the Input line shows <code>=B4*C4</code>. What does this tell you?",
      options: ["The number 250 was typed directly into D4", "D4 holds a formula, and 250 is the result it displays", "The formula in D4 contains an error", "Cells B4 and C4 must each contain 250"],
      answer: 1,
      explain: "A cell displays the <b>result</b> of its formula, while the <b>Input line</b> shows the formula itself. If B4 or C4 changes, D4 updates automatically.",
      diff: "M"
    },
    {
      q: "Rahul wants a cell to show the STD code <b>011</b> exactly, with the leading zero kept and the entry stored as text. What should he type in the cell?",
      options: ["=011", "011%", "'011", "#011"],
      answer: 2,
      explain: "Typing an <b>apostrophe</b> first ('011) tells Calc to store the entry as text, so the zero is kept; the apostrophe itself is not shown in the cell. Typed as a plain number, 011 would become 11.",
      diff: "M"
    },
    {
      q: "When LibreOffice Calc recognises an entry as a date, it aligns it to the <b>right</b> of the cell by default. Why?",
      options: ["Calc stores dates and times internally as numbers", "Calc treats every date as a label", "A date is a kind of formula", "Calc aligns all entries to the right"],
      answer: 0,
      explain: "LibreOffice <b>stores a date or time as a number</b> (a count of days from a starting date), and numbers are right-aligned by default. This is also why one date can be subtracted from another.",
      diff: "M"
    },
    {
      q: "Which of the following entries, typed into a cell, is a <b>value</b> (a number) rather than a label or a formula?",
      options: ["Total", "Class IX-A", "=B2*2", "450"],
      answer: 3,
      explain: "<b>450</b> is a numeric value. 'Total' and 'Class IX-A' are labels, and =B2*2 is a formula.",
      diff: "E"
    },
    {
      q: "Cell A1 contains <b>2.567</b> but is formatted to show one decimal place, so it <i>displays</i> 2.6. Cell B1 contains <code>=A1*10</code> and has the default number format. What does B1 show?",
      options: ["26", "25.67", "25.7", "2.567"],
      answer: 1,
      explain: "Formatting changes only how a number <b>looks</b>. Calc calculates with the <b>stored</b> value 2.567, so B1 shows 2.567 × 10 = <b>25.67</b>, not 2.6 × 10 = 26. The Input line of A1 still shows 2.567.",
      diff: "H"
    },
  ],
});
