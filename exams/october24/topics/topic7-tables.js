// October 24 Examination — Topic 7: Working with Tables.
// 10 questions · CBSE Class IX · Information Technology (402), Unit 3: Digital Documentation.
window.OCT24_TOPICS = window.OCT24_TOPICS || [];
window.OCT24_TOPICS.push({
  key: "tables",
  name: "Working with Tables",
  questions: [
    {
      q: "Which shortcut opens the <b>Insert Table</b> dialog in LibreOffice Writer?",
      options: ["Ctrl+F12", "Ctrl+F2", "Ctrl+T", "F12"],
      answer: 0,
      explain: "<b>Ctrl+F12</b> (Table ▸ Insert Table) opens the dialog where you set the number of columns and rows. F12 alone starts a numbered list.",
      diff: "E"
    },
    {
      q: "The cursor is in a cell of the second column of a Writer table. To add a new column immediately to the <b>right</b> of it, you choose Table ▸ Insert ▸ —",
      options: ["Rows Above", "Rows Below", "Columns Before", "Columns After"],
      answer: 3,
      explain: "<b>Columns After</b> inserts a column after (to the right of) the cursor's column, and Columns Before inserts one to its left. The Rows commands add rows, not columns.",
      diff: "E"
    },
    {
      q: "While typing in a LibreOffice Writer table, the cursor is in the <b>last cell</b> of the last row. What happens when you press <b>Tab</b>?",
      options: ["A tab space is typed inside the cell", "A new row is added at the bottom of the table", "The whole table is deleted", "The cursor jumps to the first cell of the table"],
      answer: 1,
      explain: "Tab moves to the next cell, and in the <b>last cell it adds a new row</b>, so a table can grow as you type. Ctrl+Tab is used to put a tab stop inside a cell.",
      diff: "M"
    },
    {
      q: "Megha's table is shown below. She wants the title <i>Class IX Result</i> to sit in one wide cell across the top of all three columns. After selecting the three cells of the first row, she should choose —<br/><table class=\"q-table\"><tr><td>Class IX Result</td><td></td><td></td></tr><tr><td>Name</td><td>Maths</td><td>Science</td></tr><tr><td>Asha</td><td>82</td><td>76</td></tr></table>",
      options: ["Table ▸ Split Cells", "Table ▸ Split Table", "Table ▸ Merge Cells", "Table ▸ Merge Table"],
      answer: 2,
      explain: "<b>Merge Cells</b> joins the selected neighbouring cells into a single cell. Merge Table joins two separate tables, and the Split commands divide things up instead.",
      diff: "M"
    },
    {
      q: "A Writer table has 4 rows and 3 columns. Mehak <b>merges</b> all three cells of the first row into one cell, and then <b>splits</b> one cell of the last row into 2 cells. How many cells does the table have now?",
      options: ["12", "10", "13", "11"],
      answer: 3,
      explain: "4 × 3 = 12 cells. Merging 3 cells into 1 leaves 12 − 3 + 1 = 10, and splitting one cell into 2 adds one more, giving <b>11</b>.",
      diff: "H"
    },
    {
      q: "Two tables in a Writer document should be joined with <b>Table ▸ Merge Table</b>, but the command does not work. What is the most likely reason?",
      options: ["There is an empty paragraph between the two tables", "The two tables have different numbers of rows", "One of the tables has coloured borders", "The document is saved in .odt format"],
      answer: 0,
      explain: "Merge Table joins two tables only when they are <b>directly one after the other</b>. An empty paragraph between them stops the merge; deleting it lets the command work.",
      diff: "M"
    },
    {
      q: "Ravi has the table shown: one heading row and 5 rows of data. He clicks in a data row and chooses Table ▸ Split Table with the <b>Copy heading</b> option. How many rows are there in the two tables <b>altogether</b>?<br/><table class=\"q-table\"><tr><th>Roll No.</th><th>Name</th></tr><tr><td>1</td><td>Anu</td></tr><tr><td>2</td><td>Bala</td></tr><tr><td>3</td><td>Chirag</td></tr><tr><td>4</td><td>Dia</td></tr><tr><td>5</td><td>Eshan</td></tr></table>",
      options: ["6", "5", "7", "8"],
      answer: 2,
      explain: "Split Table divides the 6 rows between two tables at the cursor, and <b>Copy heading</b> repeats the first (heading) row at the top of the second table. That gives 6 + 1 = <b>7</b> rows. With No heading it would stay 6.",
      diff: "H"
    },
    {
      q: "With the cursor inside a table, which LibreOffice Writer command removes the <b>whole table</b>, not just the text in it?",
      options: ["Table ▸ Delete ▸ Rows", "Table ▸ Delete ▸ Table", "Edit ▸ Select All", "Table ▸ Merge Cells"],
      answer: 1,
      explain: "<b>Table ▸ Delete ▸ Table</b> removes the entire table. Delete ▸ Rows removes only the selected rows, and pressing Delete on a few selected cells clears just their contents.",
      diff: "E"
    },
    {
      q: "Ananya wants to <b>move</b> a table from page 1 to page 3 of her document. Which sequence does this?",
      options: ["Select the text above it, press Ctrl+C and then Ctrl+V", "Click once in the table and press Delete", "Use Table ▸ Split Table and then Table ▸ Merge Table", "Select the whole table, cut it (Ctrl+X), click at the new place and paste (Ctrl+V)"],
      answer: 3,
      explain: "As with text, a table is moved by <b>selecting all of it, cutting and pasting</b> at the new place. Copying (Ctrl+C) instead of cutting would leave the original table where it was.",
      diff: "M"
    },
    {
      q: "To change the <b>border lines</b> and the <b>background colour</b> of a table in LibreOffice Writer, which dialog do you open?",
      options: ["Table ▸ Properties", "Format ▸ Character", "Insert ▸ Field", "View ▸ Rulers"],
      answer: 0,
      explain: "The <b>Table Properties</b> dialog sets the table's name, alignment, column widths, <b>borders</b> and <b>background</b> (shading).",
      diff: "E"
    },
  ],
});
