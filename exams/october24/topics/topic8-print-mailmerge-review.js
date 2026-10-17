// October 24 Examination — Topic 8: Printing, Mail Merge & Review.
// 10 questions · CBSE Class IX · Information Technology (402), Unit 3: Digital Documentation; Computer Applications (165), Unit 3: Office Tools.
window.OCT24_TOPICS = window.OCT24_TOPICS || [];
window.OCT24_TOPICS.push({
  key: "print-mailmerge-review",
  name: "Printing, Mail Merge & Review",
  questions: [
    {
      q: "Which LibreOffice Writer feature shows how the pages will look <b>when printed</b>, but does not let you edit the text while it is open?",
      options: ["Web layout", "Navigator", "Full Screen", "Print Preview"],
      answer: 3,
      explain: "<b>Print Preview</b> (File ▸ Print Preview, Ctrl+Shift+O) shows the printed pages. You cannot edit in it; click Close Preview to return to editing.",
      diff: "E"
    },
    {
      q: "In the <b>Pages</b> box of LibreOffice Writer's Print dialog, Tanvi types <code>2-4, 7</code>. Which pages will be printed?",
      options: ["Pages 2, 4 and 7", "Pages 2, 3, 4 and 7", "Pages 2 to 7", "Pages 4 to 7 only"],
      answer: 1,
      explain: "A hyphen gives a <b>range</b> (2-4 means 2, 3 and 4) and a comma separates items in a list, so pages <b>2, 3, 4 and 7</b> are printed.",
      diff: "M"
    },
    {
      q: "A 5-page document is printed with the Pages box set to <code>1-3</code> and <b>Number of copies</b> set to 4. How many printed pages come out of the printer, printing on one side of each sheet?",
      options: ["7", "20", "12", "15"],
      answer: 2,
      explain: "Only pages 1 to 3 are printed, and each is printed 4 times: 3 × 4 = <b>12</b>. The answer 20 wrongly prints all 5 pages.",
      diff: "H"
    },
    {
      q: "To print <b>only the paragraph you have selected</b>, you choose File ▸ Print and, under Range and Copies, pick —",
      options: ["Selection", "All pages", "Pages", "Collate"],
      answer: 0,
      explain: "The <b>Selection</b> option prints just the selected text or objects. All pages prints the whole document, and Pages prints the page numbers you type.",
      diff: "M"
    },
    {
      q: "In LibreOffice Writer, the <b>Mail Merge Wizard</b>, which guides you step by step through making form letters, is opened from which menu?",
      options: ["File", "Tools", "Insert", "Format"],
      answer: 1,
      explain: "Choose <b>Tools ▸ Mail Merge Wizard</b>. It helps you pick the main document and the address list (data source), place the merge fields, and then print or save the merged letters.",
      diff: "E"
    },
    {
      diagram: "flowchart LR\n  A[\"Main document: letter with fields\"] --> C[\"Merge\"]\n  B[\"?\"] --> C\n  C --> D[\"One personalised letter for each record\"]",
      diagramCaption: "Figure: The mail-merge process",
      q: "In the mail-merge process shown, what does the box marked <b>?</b> stand for?",
      options: ["The printer", "The Navigator", "The data source holding names and addresses", "The Print Preview"],
      answer: 2,
      explain: "Mail merge needs two inputs: the <b>main document</b> with fields, and the <b>data source</b>, such as a spreadsheet or address list, whose records fill those fields.",
      diff: "M"
    },
    {
      q: "In a mail-merge main document, placeholders such as &lt;Name&gt; and &lt;City&gt;, which are replaced by each person's details during the merge, are called —",
      options: ["Records", "Headers", "Comments", "Merge fields (database fields)"],
      answer: 3,
      explain: "These are <b>fields</b>. Each one takes its value from a column of the data source. A record is one whole row of data, i.e. one person's details.",
      diff: "M"
    },
    {
      q: "The names for a mail merge come from a spreadsheet with <b>one heading row</b> (Name, Class, Address) followed by <b>30 rows</b> of student details. How many letters will the merge produce?",
      options: ["31", "30", "1", "60"],
      answer: 1,
      explain: "The heading row only gives the <b>field names</b>; each of the 30 rows below it is a record, so <b>30</b> letters are produced. 31 wrongly counts the heading row as a record.",
      diff: "M"
    },
    {
      q: "Track Changes is switched on in LibreOffice Writer. A reviewer deletes the word <i>very</i> from a sentence, and it shows crossed out in colour. The author then <b>rejects</b> this change. What happens?",
      options: ["The word very stays in the sentence as it was", "The word very is removed for good", "The whole sentence is deleted", "The word stays crossed out permanently"],
      answer: 0,
      explain: "With recording on (Edit ▸ Track Changes ▸ Record), a deletion stays visible, crossed out, until someone decides. <b>Accepting</b> would remove the word for good; <b>rejecting</b> cancels the deletion, so the original word stays.",
      diff: "H"
    },
    {
      q: "A teacher wants to add the note <i>Explain this point</i> beside a sentence of a student's essay <b>without changing the essay text</b>. In LibreOffice Writer she should use —",
      options: ["Insert ▸ Header and Footer", "Format ▸ Text", "Insert ▸ Comment", "Edit ▸ Find &amp; Replace"],
      answer: 2,
      explain: "<b>Insert ▸ Comment</b> (Ctrl+Alt+C) adds a note in the page margin, linked to the text, without changing the text itself. Comments are useful when reviewing documents.",
      diff: "M"
    },
  ],
});
