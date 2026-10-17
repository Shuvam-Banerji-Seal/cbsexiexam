// October 24 Examination — Topic 3: Find & Replace, Navigation & Proofing.
// 10 questions · CBSE Class IX · Information Technology (402), Unit 3: Digital Documentation.
window.OCT24_TOPICS = window.OCT24_TOPICS || [];
window.OCT24_TOPICS.push({
  key: "find-proofing",
  name: "Find & Replace, Navigation & Proofing",
  questions: [
    {
      q: "Which shortcut opens the <b>Find &amp; Replace</b> dialog in LibreOffice Writer?",
      options: ["Ctrl+F", "Ctrl+R", "Ctrl+G", "Ctrl+H"],
      answer: 3,
      explain: "<b>Ctrl+H</b> opens the Find &amp; Replace dialog (Edit ▸ Find &amp; Replace). Ctrl+F only opens the smaller Find toolbar, which cannot replace text.",
      diff: "E"
    },
    {
      diagram: "flowchart TD\n  A[\"Open the Find and Replace dialog\"] --> B[\"Find box: colour\"]\n  B --> C[\"Replace box: color\"]\n  C --> D[\"Click ?\"]\n  D --> E[\"Every match changed in one step\"]",
      diagramCaption: "Figure: Neha's steps for changing a word throughout her essay",
      q: "The flowchart shows how Neha changes every <i>colour</i> in her essay to <i>color</i> in one go. Which button belongs in the box marked <b>?</b>",
      options: ["Replace All", "Find Next", "Replace", "Find All"],
      answer: 0,
      explain: "<b>Replace All</b> changes every match at once. Replace changes only the current match, and Find All just selects the matches without changing them.",
      diff: "M"
    },
    {
      q: "In LibreOffice Writer's Find &amp; Replace dialog, which option makes a search for <i>India</i> find only <i>India</i>, and not <i>INDIA</i> or <i>india</i>?",
      options: ["Whole words only", "Match case", "Regular expressions", "Similarity search"],
      answer: 1,
      explain: "<b>Match case</b> finds only text with exactly the same capital and small letters. Whole words only stops matches inside longer words; it does not look at capitals.",
      diff: "M"
    },
    {
      q: "With <b>no options</b> ticked in Find &amp; Replace, Ali searches for <i>cat</i>, replaces it with <i>dog</i> and clicks Replace All. What does his sentence <i>The cat sat on the category list</i> become?",
      options: ["The dog sat on the category list", "The cat sat on the dogegory list", "The dog sat on the dog list", "The dog sat on the dogegory list"],
      answer: 3,
      explain: "Without <b>Whole words only</b>, the letters <i>cat</i> inside <i>category</i> also match, giving <i>dogegory</i>. Ticking Whole words only would have changed only the word <i>cat</i>.",
      diff: "H"
    },
    {
      q: "Which key opens the <b>Navigator</b> in LibreOffice Writer, where you can type a page number to jump straight to that page?",
      options: ["F7", "F12", "F5", "F1"],
      answer: 2,
      explain: "<b>F5</b> shows or hides the Navigator. It lists headings, tables and images, and its page box takes you to any page number. F7 starts the spelling check.",
      diff: "E"
    },
    {
      q: "After pressing Ctrl+F10 in LibreOffice Writer, a ¶ symbol appears at the end of every paragraph. This symbol is a —",
      options: ["Non-printing formatting mark", "Paragraph sign that will be printed", "Mark showing a spelling error", "Symbol for a manual page break"],
      answer: 0,
      explain: "Ctrl+F10 (View ▸ Formatting Marks) shows <b>non-printing characters</b> such as paragraph marks, spaces and tabs. They help in editing but never appear on paper.",
      diff: "E"
    },
    {
      q: "With automatic spell checking on in LibreOffice Writer, a word underlined with a <b>red wavy line</b> —",
      options: ["Has been changed by Track Changes", "Is a hyperlink to a website", "Has a grammar mistake", "Is not found in the spelling dictionary"],
      answer: 3,
      explain: "A red wavy underline marks a <b>possible spelling mistake</b>, a word not found in the dictionary. LibreOffice marks grammar errors in blue.",
      diff: "E"
    },
    {
      q: "The spelling check (F7) stops at your friend's surname <i>Raghunathan</i>, which is spelt correctly. Which button stops Writer from marking this name in <b>all your future documents</b>?",
      options: ["Ignore Once", "Add to Dictionary", "Correct All", "Ignore All"],
      answer: 1,
      explain: "<b>Add to Dictionary</b> saves the word in your own dictionary, so it is accepted from then on. Ignore All skips it only until LibreOffice is closed.",
      diff: "M"
    },
    {
      q: "As you type in LibreOffice Writer, a commonly misspelt word is corrected <b>automatically</b> as soon as you press the Spacebar, using a built-in replacement table. Which feature does this?",
      options: ["AutoCorrect", "Thesaurus", "Find &amp; Replace", "Navigator"],
      answer: 0,
      explain: "<b>AutoCorrect</b> (Tools ▸ AutoCorrect ▸ AutoCorrect Options) replaces entries from its replacement table as you type. Its options also fix things such as TWo INitial CApitals.",
      diff: "E"
    },
    {
      q: "Aditi has used the word <i>big</i> five times in her essay. She wants words with the <b>same meaning</b> to use instead. Which LibreOffice Writer tool, opened with Ctrl+F7, should she use?",
      options: ["Spelling", "AutoCorrect", "Thesaurus", "Navigator"],
      answer: 2,
      explain: "The <b>Thesaurus</b> lists synonyms (words of similar meaning) for the selected word. A short list of synonyms is also shown when you right-click the word.",
      diff: "M"
    },
  ],
});
