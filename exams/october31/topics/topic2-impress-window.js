// October 31 Examination — Topic 2: The Impress Window & Creating a Presentation.
// 10 questions · CBSE Class IX · Information Technology (402), Unit 5: Digital Presentation.
window.OCT31_TOPICS = window.OCT31_TOPICS || [];
window.OCT31_TOPICS.push({
  key: "impress-window",
  name: "The Impress Window & Creating a Presentation",
  questions: [
    {
      q: "LibreOffice Impress is the — program of the LibreOffice suite.",
      options: ["Word processing", "Presentation", "Spreadsheet", "Database"],
      answer: 1,
      explain: "<b>Impress</b> is used to make slide presentations. Writer is the word processor, Calc the spreadsheet and Base the database.",
      diff: "E"
    },
    {
      q: "By default, LibreOffice Impress saves a presentation with the file extension —",
      options: [".odt", ".ods", ".pptx", ".odp"],
      answer: 3,
      explain: "<b>.odp</b> stands for OpenDocument Presentation, the default Impress format. .odt is used by Writer and .ods by Calc; .pptx is the PowerPoint format.",
      diff: "E"
    },
    {
      q: "In the Impress main window, the pane on the left that shows small thumbnails of all the slides in order is the —",
      options: ["Slides pane", "Workspace", "Sidebar", "Status bar"],
      answer: 0,
      explain: "The <b>Slides pane</b> lists slide thumbnails in show order. Clicking a thumbnail opens that slide in the Workspace in the centre.",
      diff: "M"
    },
    {
      q: "In Impress, the panel on the right of the window with decks such as Properties, Slide Transition, Animation and Master Slides is called the —",
      options: ["Slides pane", "Status bar", "Sidebar", "Workspace"],
      answer: 2,
      explain: "These decks open in the <b>Sidebar</b> (called the Tasks pane in older versions). The Workspace in the centre shows the slide being edited.",
      diff: "M"
    },
    {
      q: "Which key starts the slide show from the <b>first</b> slide in LibreOffice Impress?",
      options: ["F1", "F7", "F12", "F5"],
      answer: 3,
      explain: "<b>F5</b> starts the show from the beginning; Shift+F5 starts it from the current slide. F1 opens the Help.",
      diff: "E"
    },
    {
      q: "Arjun changes his presentation and then chooses <b>File &gt; Close</b> without saving. What does Impress do?",
      options: ["It closes the file at once and silently throws away the changes", "It asks whether to save the changes, offering choices such as Save, Don't Save and Cancel", "It saves the file automatically as a PDF", "It starts the slide show from the first slide"],
      answer: 1,
      explain: "When a document has unsaved changes, Impress <b>asks whether to save them</b> before closing. Cancel returns to the presentation without closing it.",
      diff: "M"
    },
    {
      q: "A ready-made design with a set background, colours, fonts and layout that can be used to start a new presentation quickly is called a —",
      options: ["Template", "Transition", "Handout", "Footer"],
      answer: 0,
      explain: "A <b>template</b> gives a presentation its design from the start. A transition is a slide-change effect and a handout is a printout for the audience.",
      diff: "E"
    },
    {
      q: "Where can a student read official explanations of Impress commands from inside the program?",
      options: ["Slide Show &gt; Custom Slide Show", "View &gt; Slide Sorter", "Insert &gt; Header and Footer", "Help &gt; LibreOffice Help, or by pressing F1"],
      answer: 3,
      explain: "The <b>Help</b> menu, or the <b>F1</b> key, opens LibreOffice Help, which explains every menu and command.",
      diff: "M"
    },
    {
      diagram: "flowchart LR\n  A[Start Impress] --> B[\"Choose a template or a blank presentation\"]\n  B --> C[Step X]\n  C --> D[\"Type text and insert pictures\"]\n  D --> E[\"Save the file in .odp format\"]\n  E --> F[Run the slide show]",
      diagramCaption: "Figure: Steps for building a new presentation in Impress",
      q: "The figure shows the steps of building a new presentation in Impress. Which step best fits <b>Step X</b>?",
      options: ["Rehearse the timings of every slide", "Export the file as PDF", "Choose a slide layout for the slide", "Close the presentation"],
      answer: 2,
      explain: "After starting a presentation you <b>choose a slide layout</b>, which gives the placeholders that the text and pictures are typed or inserted into. Rehearsing and exporting come after the content is ready.",
      diff: "M"
    },
    {
      q: "Kabir has saved his finished slides as <b>science.odp</b>. He now wants a copy his teacher can open in any PDF reader, and he also wants to keep a copy he can edit later. What should he do?",
      options: ["Export as PDF and then delete science.odp, because the PDF can be edited in Impress", "Use Export as PDF to make science.pdf and keep science.odp for future edits", "Rename science.odp to science.pdf", "Save over science.odp in the .ods format"],
      answer: 1,
      explain: "<b>Export as PDF</b> makes a separate PDF that opens anywhere, while the .odp file stays as the editable copy. Renaming the extension does not convert the file, and .ods is a spreadsheet format.",
      diff: "H"
    },
  ],
});
