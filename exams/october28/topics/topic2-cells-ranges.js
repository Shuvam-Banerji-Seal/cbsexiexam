// October 28 Examination — Topic 2: Cells, Addresses & Ranges.
// 10 questions · CBSE Class IX · Information Technology (402), Unit 4: Electronic Spreadsheet.
window.OCT28_TOPICS = window.OCT28_TOPICS || [];
window.OCT28_TOPICS.push({
  key: "cells-ranges",
  name: "Cells, Addresses & Ranges",
  questions: [
    {
      q: "In a LibreOffice Calc worksheet, how are rows and columns identified?",
      options: ["Rows by letters and columns by numbers", "Rows by numbers and columns by letters", "Both rows and columns by numbers", "Both rows and columns by letters"],
      answer: 1,
      explain: "Rows are <b>numbered</b> 1, 2, 3 … down the left side, and columns are <b>lettered</b> A, B, C … across the top. After Z come AA, AB and so on.",
      diff: "E"
    },
    {
      q: "The cell where column <b>F</b> meets row <b>12</b> has the cell address —",
      options: ["12F", "F:12", "12:F", "F12"],
      answer: 3,
      explain: "A <b>cell address</b> is the column letter followed by the row number, so the cell is <b>F12</b>.",
      diff: "E"
    },
    {
      q: "Which symbol is placed between the first and the last cell to write a <b>range</b> of cells, for example from B2 to D5?",
      options: ["Colon (:)", "Semicolon (;)", "Hyphen (-)", "Full stop (.)"],
      answer: 0,
      explain: "A range is written as first cell, <b>colon</b>, last cell: B2:D5. A hyphen would be read as the minus sign.",
      diff: "E"
    },
    {
      q: "How many cells are there in the range <b>B2:D5</b>?",
      options: ["8", "9", "12", "15"],
      answer: 2,
      explain: "B2:D5 covers columns B, C and D (3 columns) and rows 2 to 5 (4 rows), so it has <b>3 × 4 = 12</b> cells.",
      diff: "M"
    },
    {
      q: "The range <b>C5:H5</b> is best described as —",
      options: ["A column range of 6 cells", "A row range of 6 cells", "A row range of 5 cells", "A row and column range of 8 cells"],
      answer: 1,
      explain: "All the cells lie in row 5, so it is a <b>row range</b>. Columns C, D, E, F, G and H give <b>6</b> cells.",
      diff: "M"
    },
    {
      q: "The range <b>A3:A9</b> is an example of a —",
      options: ["Row range", "Row and column range", "Single cell", "Column range"],
      answer: 3,
      explain: "A3:A9 runs down column A only, from row 3 to row 9, so it is a <b>column range</b> of 7 cells.",
      diff: "E"
    },
    {
      q: "Which of the following is a <b>row and column range</b>?",
      options: ["B2:B6", "B2:E2", "B2:E6", "B2"],
      answer: 2,
      explain: "<b>B2:E6</b> spans several rows (2 to 6) and several columns (B to E), forming a rectangular block. B2:B6 is a column range and B2:E2 is a row range.",
      diff: "M"
    },
    {
      q: "In LibreOffice Calc, Priya clicks cell <b>B2</b>, then holds down <b>Shift</b> and clicks cell <b>D4</b>. Which cells are now selected?",
      options: ["The rectangular range B2:D4", "Only the two cells B2 and D4", "Only the row range B2:D2", "Only the column range B2:B4"],
      answer: 0,
      explain: "<b>Shift</b>-click marks the <b>rectangular range</b> from the current cell to the cell you click, so all 9 cells of B2:D4 are selected. To select only B2 and D4, Priya would hold <b>Ctrl</b> while clicking.",
      diff: "M"
    },
    {
      q: "How many cells are there in the range <b>X5:AB8</b>?",
      options: ["15", "16", "18", "20"],
      answer: 3,
      explain: "After Z come AA and AB, so the columns are X, Y, Z, AA and AB: <b>5 columns</b>. Rows 5 to 8 give <b>4 rows</b>, so there are 5 × 4 = <b>20</b> cells.",
      diff: "H"
    },
    {
      q: "A block of cells begins at <b>C4</b> and is 4 columns wide and 3 rows tall. Which range reference describes it?",
      options: ["C4:G7", "C4:F6", "C4:F7", "C4:E6"],
      answer: 1,
      explain: "Four columns starting from C are C, D, E and F; three rows starting from 4 are 4, 5 and 6. The bottom-right cell is F6, so the range is <b>C4:F6</b>.",
      diff: "H"
    },
  ],
});
