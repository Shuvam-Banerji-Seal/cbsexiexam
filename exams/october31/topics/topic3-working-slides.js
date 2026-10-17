// October 31 Examination — Topic 3: Working with Slides.
// 10 questions · CBSE Class IX · Information Technology (402), Unit 5: Digital Presentation.
window.OCT31_TOPICS = window.OCT31_TOPICS || [];
window.OCT31_TOPICS.push({
  key: "working-slides",
  name: "Working with Slides",
  questions: [
    {
      q: "In LibreOffice Impress, the <b>New Slide</b> command inserts the new slide —",
      options: ["Immediately after the currently selected slide", "Always at the very beginning of the presentation", "Always at the very end of the presentation", "In a new, separate presentation file"],
      answer: 0,
      explain: "New Slide <b>inserts a slide after the currently selected slide</b>. To add one at the end, first select the last slide.",
      diff: "E"
    },
    {
      q: "Which command makes an exact copy of the current slide, with its text and pictures, and places it right after that slide?",
      options: ["New Slide", "Delete Slide", "Rename Slide", "Duplicate Slide"],
      answer: 3,
      explain: "<b>Duplicate Slide</b> inserts a copy of the current slide after it. New Slide adds an empty slide instead.",
      diff: "E"
    },
    {
      q: "Sana's slide uses the Title Slide layout, but she now needs a title with two content boxes side by side. What should she do?",
      options: ["Delete the slide and start a new presentation", "Pick a different layout for the slide from Slide &gt; Layout or the Layouts panel of the Sidebar", "Apply a slide transition to the slide", "Switch to Notes view"],
      answer: 1,
      explain: "A slide's layout can be <b>changed at any time</b> from Slide &gt; Layout or the Layouts panel in the Sidebar's Properties deck. There is no need to start again.",
      diff: "M"
    },
    {
      q: "Which option lets you give a slide a meaningful name such as \"Introduction\" in place of its default name?",
      options: ["Rename Slide", "Duplicate Slide", "Expand Slide", "Hide Slide"],
      answer: 0,
      explain: "<b>Rename Slide</b> (Slide menu, or right-click the slide in the Slides pane) opens a box where a name can be set for the slide.",
      diff: "E"
    },
    {
      q: "Which is a correct way to <b>move</b> slide 5 so that it becomes slide 2?",
      options: ["Select slide 5 and press Delete", "Apply a transition to slide 5", "Drag the thumbnail of slide 5 in the Slides pane or Slide Sorter and drop it after slide 1", "Change the layout of slide 5 to Title Only"],
      answer: 2,
      explain: "Slides are rearranged by <b>dragging their thumbnails</b> in the Slides pane or in Slide Sorter view. Delete would remove the slide altogether.",
      diff: "M"
    },
    {
      q: "To delete the selected slide in Impress, you can choose —",
      options: ["View &gt; Slide Sorter", "Slide &gt; Duplicate Slide", "Slide &gt; Rename Slide", "Slide &gt; Delete Slide"],
      answer: 3,
      explain: "<b>Slide &gt; Delete Slide</b> removes the selected slide or slides. Pressing Delete on a selected thumbnail in the Slides pane also works.",
      diff: "E"
    },
    {
      q: "Kunal wants a copy of slide 3 at the end of the same presentation and wants the original slide 3 to stay where it is. Which method works?",
      options: ["Select slide 3 in the Slides pane, copy it (Ctrl+C), select the last slide and paste (Ctrl+V)", "Select slide 3, cut it (Ctrl+X), select the last slide and paste it", "Drag slide 3 to the end of the Slides pane", "Rename slide 3 as Last"],
      answer: 0,
      explain: "<b>Copy and paste</b> leaves the original in place and adds a copy. Cutting or dragging moves the slide, so it would no longer be slide 3.",
      diff: "M"
    },
    {
      q: "To <b>move</b> a picture from slide 2 to slide 6, you should —",
      options: ["Copy it on slide 2 and paste it on slide 6", "Press Delete on slide 2, then press Ctrl+V on slide 6", "Cut it on slide 2 (Ctrl+X), go to slide 6 and paste it (Ctrl+V)", "Drag slide 2 onto slide 6 in the Slides pane"],
      answer: 2,
      explain: "<b>Cut and paste</b> moves the object. Copying would leave the picture on slide 2 as well, and Delete does not place it on the clipboard.",
      diff: "M"
    },
    {
      q: "A presentation has slides 1 to 5. Raj selects slide 2 and uses <b>Duplicate Slide</b>. He then selects the last slide and uses <b>New Slide</b>. How many slides are there now, and where is the copy of slide 2?",
      options: ["6 slides; the copy is the last slide", "7 slides; the copy is the last slide", "6 slides; the copy is slide 3", "7 slides; the copy is slide 3"],
      answer: 3,
      explain: "Each command adds one slide, so 5 + 1 + 1 = <b>7</b>. Duplicate Slide places the copy right after slide 2, so it becomes <b>slide 3</b>.",
      diff: "H"
    },
    {
      q: "A presentation has 9 slides. In the Slides pane, Pooja clicks slide 2, holds Ctrl and clicks slides 4 and 6, and then chooses <b>Slide &gt; Delete Slide</b>. The slide that was slide 7 is now slide number —",
      options: ["3", "4", "5", "6"],
      answer: 1,
      explain: "All three selected slides are deleted. Three of the slides before old slide 7 are gone, so it moves up from 7 to 7 − 3 = <b>4</b>.",
      diff: "H"
    },
  ],
});
