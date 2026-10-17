// October 28 Examination — Topic 6: Formatting Cells & the Fill Handle.
// 10 questions · CBSE Class IX · Information Technology (402), Unit 4: Electronic Spreadsheet; Computer Applications (165), Unit 3: Office Tools.
window.OCT28_TOPICS = window.OCT28_TOPICS || [];
window.OCT28_TOPICS.push({
  key: "formatting",
  name: "Formatting Cells & the Fill Handle",
  questions: [
    {
      q: "In LibreOffice Calc, which dialog box, opened with <b>Ctrl+1</b>, lets you set decimal places, percent, currency and date formats for the selected cells?",
      options: ["Print Preview", "Chart Wizard", "Page Style", "Format Cells"],
      answer: 3,
      explain: "The <b>Format Cells</b> dialog (also opened from Format ▸ Cells or the right-click menu) has tabs such as Numbers, Font and Alignment. Decimal places, percent, currency, date and time are set on its Numbers tab.",
      diff: "E"
    },
    {
      q: "Cell B2 contains <b>0.456</b>. In the Format Cells dialog you choose the <b>Percent</b> category with <b>1</b> decimal place. What will B2 display?",
      options: ["45.6%", "0.5%", "4.6%", "456.0%"],
      answer: 0,
      explain: "Percent format shows the stored value multiplied by 100, so 0.456 appears as <b>45.6%</b> with one decimal place. The stored value is still 0.456.",
      diff: "M"
    },
    {
      q: "In LibreOffice Calc, a cell that contains a number shows <b>###</b> instead of the number. What does this mean?",
      options: ["The formula has divided by zero", "The number has been deleted", "The column is too narrow to display the number", "The cell has been locked"],
      answer: 2,
      explain: "<b>###</b> means the cell is <b>not wide enough</b> to display its contents. Widening the column shows the number again. Division by zero gives #DIV/0! instead.",
      diff: "E"
    },
    {
      q: "A long heading in cell A1 should continue onto two or more lines <b>inside the same cell</b>, without changing the column width. Which option on the <b>Alignment</b> tab of Format Cells does this?",
      options: ["Shrink to fit cell size", "Wrap text automatically", "Thousands separator", "Negative numbers red"],
      answer: 1,
      explain: "<b>Wrap text automatically</b> breaks the text onto new lines at the cell border, and the row grows taller. Shrink to fit makes the font smaller instead; the last two options belong to the Numbers tab.",
      diff: "M"
    },
    {
      q: "To show the title <b>Class IX Result</b> centred across columns A to E, Meera selects A1:E1. Which feature joins these cells into one large cell?",
      options: ["Merge cells", "Wrap text", "Sort", "Fill handle"],
      answer: 0,
      explain: "<b>Merging</b> combines the selected adjacent cells into a single cell, so a heading can be centred over several columns.",
      diff: "E"
    },
    {
      q: "In LibreOffice Calc, A1 contains <b>5</b> and A2 contains <b>10</b>. You select A1:A2 and drag the fill handle down to A6. What will A6 contain?",
      options: ["10", "25", "35", "30"],
      answer: 3,
      explain: "Calc recognises the step of 5 between the two selected numbers and continues the series 15, 20, 25, <b>30</b>. A6 holds the sixth term of 5, 10, 15, 20, 25, 30.",
      diff: "M"
    },
    {
      q: "You type <b>Jan</b> in cell A1 and drag its fill handle down to A4. What appears in A2, A3 and A4?",
      options: ["Jan, Jan, Jan", "Jan1, Jan2, Jan3", "Feb, Mar, Apr", "Dec, Nov, Oct"],
      answer: 2,
      explain: "AutoFill recognises month names, and day names such as Monday, and continues the list: <b>Feb, Mar, Apr</b>.",
      diff: "E"
    },
    {
      q: "Cell C2 contains <code>=A2*B2</code>. You drag C2's fill handle down to C6. What formula will C6 contain?",
      options: ["=A6*B6", "=A2*B2", "=A2*B6", "=C2*C6"],
      answer: 0,
      explain: "Copying with the fill handle adjusts <b>relative references</b>: moving 4 rows down turns A2 and B2 into A6 and B6, so each row multiplies its own values.",
      diff: "M"
    },
    {
      q: "Ravi wants the numbers he types into a range to be treated as <b>labels</b> (text), not as values. In Format Cells ▸ Numbers, which category should he choose?",
      options: ["Number", "Text", "Scientific", "Fraction"],
      answer: 1,
      explain: "The <b>Text</b> category makes Calc treat numbers entered afterwards as text, left-aligned like other labels. Numbers already in the cells are not converted.",
      diff: "M"
    },
    {
      q: "Cell B3 contains <b>123456</b>. You apply the <b>Scientific</b> number format with 2 decimal places. What does B3 display?",
      options: ["12.35E+04", "1.23E+06", "123.46E+03", "1.23E+05"],
      answer: 3,
      explain: "Scientific format writes the number with one digit before the decimal point, times a power of 10: 123456 = 1.23456 × 10<sup>5</sup>, shown with two decimals as <b>1.23E+05</b>.",
      diff: "H"
    },
  ],
});
