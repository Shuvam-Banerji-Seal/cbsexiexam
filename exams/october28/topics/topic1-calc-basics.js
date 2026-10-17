// October 28 Examination — Topic 1: Spreadsheets & the Calc Window.
// 10 questions · CBSE Class IX · Information Technology (402), Unit 4: Electronic Spreadsheet.
window.OCT28_TOPICS = window.OCT28_TOPICS || [];
window.OCT28_TOPICS.push({
  key: "calc-basics",
  name: "Spreadsheets & the Calc Window",
  questions: [
    {
      q: "An electronic spreadsheet such as LibreOffice Calc is mainly used to —",
      options: ["Store, calculate and analyse data arranged in rows and columns", "Design slides with animations for a slide show", "Type and format long letters and reports", "Browse websites and send e-mails"],
      answer: 0,
      explain: "A <b>spreadsheet</b> is a grid of rows and columns in which data can be entered, calculated with formulas and analysed, for example with charts. Slides are made in Impress and letters in Writer.",
      diff: "E"
    },
    {
      q: "In the LibreOffice <b>Start Center</b>, which button opens a new, blank spreadsheet?",
      options: ["Writer Document", "Calc Spreadsheet", "Impress Presentation", "Base Database"],
      answer: 1,
      explain: "<b>Calc Spreadsheet</b> starts LibreOffice Calc with a new spreadsheet. The other buttons open the word processor, the presentation program and the database program.",
      diff: "E"
    },
    {
      q: "In a spreadsheet program, a single file that can hold several sheets of data is called a —",
      options: ["Cell range", "Sheet tab", "Workbook", "Worksheet"],
      answer: 2,
      explain: "A <b>workbook</b> is the whole spreadsheet file. Each page inside it is a worksheet (sheet), so a worksheet is only one part of the workbook.",
      diff: "E"
    },
    {
      q: "By default, LibreOffice Calc saves a new spreadsheet with the file extension —",
      options: [".odt", ".odp", ".xlsx", ".ods"],
      answer: 3,
      explain: "Calc's default format is the OpenDocument Spreadsheet, <b>.ods</b>. .odt is a Writer text document, .odp is an Impress presentation and .xlsx is the Microsoft Excel format.",
      diff: "E"
    },
    {
      q: "In the LibreOffice Calc window, the <b>Name Box</b> at the left end of the Formula Bar shows —",
      options: ["The reference of the active cell, such as C5", "The file name of the spreadsheet", "The total of the selected numbers", "The list of all sheets in the file"],
      answer: 0,
      explain: "The <b>Name Box</b> displays the reference of the current cell, or of the selected range such as A1:C4. The file name appears in the title bar.",
      diff: "E"
    },
    {
      q: "In LibreOffice Calc, the long box to the right of the Name Box, where you can see and edit the contents of the active cell, is called the —",
      options: ["Status bar", "Sheet tab", "Input line", "Title bar"],
      answer: 2,
      explain: "The <b>Input line</b> of the Formula Bar shows what is actually stored in the active cell, including any formula, and lets you edit it. The status bar is at the very bottom of the window.",
      diff: "M"
    },
    {
      q: "You click on cell E7. Column header E and row header 7 are highlighted, and a thick border appears around E7. This cell is called the —",
      options: ["Range", "Active cell", "Name Box", "Header cell"],
      answer: 1,
      explain: "The cell with the thick border (the <b>cell cursor</b>) is the <b>active cell</b>. Whatever you type next goes into it, and its address, E7, appears in the Name Box.",
      diff: "M"
    },
    {
      q: "Before printing a worksheet in LibreOffice Calc, Riya wants to check how the pages will look on paper. Which command should she use?",
      options: ["Insert ▸ Chart", "Format ▸ Cells", "File ▸ Save As", "File ▸ Print Preview"],
      answer: 3,
      explain: "<b>File ▸ Print Preview</b> shows the pages as they will be printed. When the layout looks right, File ▸ Print sends the worksheet to the printer.",
      diff: "M"
    },
    {
      diagram: "flowchart TD\n  A[\"Workbook: Marks.ods\"] --> B[\"Worksheet: Term1\"]\n  A --> C[\"Worksheet: Term2\"]\n  B --> D[Rows and columns]\n  D --> E[X]",
      diagramCaption: "Figure: How a LibreOffice Calc file is organised",
      q: "The figure shows how a LibreOffice Calc file is organised. Box <b>X</b> stands for the smallest unit, formed where a row meets a column, that holds one entry. What is X?",
      options: ["Cells", "Sheet tabs", "Workbooks", "Charts"],
      answer: 0,
      explain: "A <b>workbook</b> contains worksheets, each worksheet is a grid of rows and columns, and every intersection of a row and a column is a <b>cell</b> that holds one entry.",
      diff: "M"
    },
    {
      q: "Aman's workbook has three worksheets. The status bar of LibreOffice Calc shows <b>Sheet 2 of 3</b> and the Name Box shows <b>B4</b>. Where is the active cell?",
      options: ["Column 2, row 4 of the third worksheet", "Column D, row 2 of the second worksheet", "Column B, row 4 of the second worksheet", "Column B, row 4 of the third worksheet"],
      answer: 2,
      explain: "The status bar shows the <b>current sheet number</b> and the total number of sheets, so Aman is on the second of three sheets. The Name Box gives the cell address with the column letter first: <b>B4</b> is column B, row 4.",
      diff: "H"
    },
  ],
});
