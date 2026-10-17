// October 24 Examination — Topic 1: Word Processing & the Writer Window.
// 10 questions · CBSE Class IX · Information Technology (402), Unit 3: Digital Documentation.
window.OCT24_TOPICS = window.OCT24_TOPICS || [];
window.OCT24_TOPICS.push({
  key: "writer-basics",
  name: "Word Processing & the Writer Window",
  questions: [
    {
      q: "Using a computer to create, edit, format, save and print text documents such as letters, reports and notices is called —",
      options: ["Spreadsheet analysis", "Database management", "Word processing", "Image editing"],
      answer: 2,
      explain: "<b>Word processing</b> means typing, editing, formatting and printing text documents. Spreadsheets handle numbers in rows and columns, and databases store organised records.",
      diff: "E"
    },
    {
      q: "Which program of the LibreOffice suite is a <b>word processor</b>?",
      options: ["LibreOffice Writer", "LibreOffice Calc", "LibreOffice Impress", "LibreOffice Base"],
      answer: 0,
      explain: "<b>LibreOffice Writer</b> is the word processor, like Microsoft Word or Google Docs. Calc is a spreadsheet, Impress makes presentations and Base is a database program.",
      diff: "E"
    },
    {
      q: "When a new document is saved in LibreOffice Writer without changing the file type, it is saved in which <b>default</b> format?",
      options: [".docx (Microsoft Word)", ".ods (spreadsheet)", ".txt (plain text)", ".odt (ODF Text Document)"],
      answer: 3,
      explain: "Writer's default format is the OpenDocument text format, <b>.odt</b>. A .docx copy can be made with File ▸ Save As, and .ods is the Calc spreadsheet format.",
      diff: "E"
    },
    {
      q: "In the LibreOffice Writer window, the bar along the <b>bottom</b> that shows the current page number, the word count and the zoom level is the —",
      options: ["Title bar", "Status bar", "Formatting toolbar", "Menu bar"],
      answer: 1,
      explain: "The <b>status bar</b> at the bottom of the window shows the page number, word and character count, page style, language and zoom. The title bar is at the top.",
      diff: "M"
    },
    {
      q: "Which part of the LibreOffice Writer window shows the <b>name of the document</b> that is currently open?",
      options: ["Title bar", "Status bar", "Ruler", "Sidebar"],
      answer: 0,
      explain: "The <b>title bar</b> at the top of the window shows the document's file name and the program name. The status bar shows page and word details, not the file name.",
      diff: "E"
    },
    {
      q: "In the LibreOffice Writer window, which part shows the page <b>margins</b>, the paragraph <b>indents</b> and the <b>tab stops</b>, and lets you change them by dragging their markers with the mouse?",
      options: ["Status bar", "Title bar", "Ruler", "Scroll bar"],
      answer: 2,
      explain: "The <b>ruler</b> above the page shows the margins, indents and tab stops, and dragging its markers changes them. The status bar at the bottom shows page and word details instead.",
      diff: "M"
    },
    {
      diagram: "flowchart TD\n  A[\"Press Ctrl+S\"] --> B{\"Saved before?\"}\n  B -->|Yes| C[\"Changes saved to the same file\"]\n  B -->|No| D[\"?\"]",
      diagramCaption: "Figure: What happens when Ctrl+S is pressed in LibreOffice Writer",
      q: "The flowchart shows what LibreOffice Writer does when Ctrl+S is pressed. What happens at the box marked <b>?</b>, for a new document that has never been saved?",
      options: ["The document closes without being saved", "The document is sent to the printer", "All changes since opening are undone", "The Save As dialog opens to ask for a name and location"],
      answer: 3,
      explain: "A new document has no file name yet, so the first Save opens the <b>Save As</b> dialog, where you choose a name, folder and file type. Later saves go straight to the same file.",
      diff: "M"
    },
    {
      q: "Which LibreOffice Writer view shows the document as it would appear in a <b>web browser</b>?",
      options: ["Web layout", "Normal layout", "Print Preview", "Full Screen"],
      answer: 0,
      explain: "The <b>Web</b> layout (View menu) shows the document as a web browser would display it. Normal layout shows the printed page, and Full Screen (Ctrl+Shift+J) only hides the menus and toolbars.",
      diff: "E"
    },
    {
      q: "Aman wrote <i>report.odt</i> in LibreOffice Writer. His teacher has asked for the file in Microsoft Word's <b>.docx</b> format, and Aman also wants to keep his own .odt copy. What should he do?",
      options: ["Send report.odt, since every file type is the same", "Use File ▸ Save As to save an extra copy in Word (.docx) format and send that", "Rename report.odt to report.docx in the file manager", "Copy the text into an e-mail instead of sending a file"],
      answer: 1,
      explain: "<b>File ▸ Save As</b> with a Word file type writes a real .docx copy while his .odt stays as it is. Just renaming the extension does not convert the file's contents.",
      diff: "H"
    },
    {
      q: "Kiran chooses File ▸ Close on a LibreOffice Writer document that has <b>unsaved changes</b>. What does Writer do?",
      options: ["Closes it at once and quietly discards the changes", "Saves the changes automatically under a new name", "Asks whether to save the changes, discard them or cancel", "Prints the document and then closes it"],
      answer: 2,
      explain: "Writer never throws away work silently. It <b>asks whether to save</b> the changes, close without saving, or cancel and go back to the document.",
      diff: "M"
    },
  ],
});
