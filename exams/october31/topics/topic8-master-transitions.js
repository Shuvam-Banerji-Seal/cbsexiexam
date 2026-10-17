// October 31 Examination — Topic 8: Slide Master & Transitions.
// 10 questions · CBSE Class IX · Information Technology (402), Unit 5: Digital Presentation.
window.OCT31_TOPICS = window.OCT31_TOPICS || [];
window.OCT31_TOPICS.push({
  key: "master-transitions",
  name: "Slide Master & Transitions",
  questions: [
    {
      q: "A <b>slide master</b> in Impress is —",
      options: ["The slide that is always shown first in the slide show", "The person who presents the slide show", "A list of the animation effects on a slide", "A slide that holds the common design, such as background, fonts and placeholders, used by the slides based on it"],
      answer: 3,
      explain: "The <b>slide master</b> sets the text formatting of the title and outline and the background design for every slide that uses it.",
      diff: "E"
    },
    {
      q: "Which menu command switches Impress to the view where the slide master can be edited?",
      options: ["View &gt; Slide Sorter", "View &gt; Master Slide", "Slide &gt; Duplicate Slide", "Insert &gt; Header and Footer"],
      answer: 1,
      explain: "<b>View &gt; Master Slide</b> opens master view, where elements added appear on all slides that use that master. View &gt; Normal returns to the slides.",
      diff: "E"
    },
    {
      q: "The main advantage of using a slide master is that —",
      options: ["A change made once on the master appears on every slide that uses it, giving a consistent look", "It plays a sound on every slide automatically", "It removes the need to save the presentation", "It starts the slide show automatically"],
      answer: 0,
      explain: "Because many slides share one master, a single change to fonts, colours, background or a logo <b>updates all of them</b> and keeps the design consistent.",
      diff: "M"
    },
    {
      diagram: "flowchart TD\n  A[\"Master A: blue background\"] --> C[Slide 1]\n  A --> D[Slide 2]\n  A --> E[Slide 3]\n  B[\"Master B: white background\"] --> F[Slide 4]",
      diagramCaption: "Figure: Two slide masters and the slides based on them",
      q: "The figure shows which slide master each slide uses. In Master Slide view, the title font colour on <b>Master A</b> is changed to red. None of the slides has its own title formatting. Which slides will now show red titles?",
      options: ["Slide 1 only", "All four slides", "Slides 1, 2 and 3 only", "Slide 4 only"],
      answer: 2,
      explain: "Each slide uses <b>exactly one</b> master. Slides 1–3 are based on Master A and change; slide 4 follows Master B and is unaffected.",
      diff: "H"
    },
    {
      q: "A <b>slide transition</b> is —",
      options: ["An effect applied to a single picture on a slide", "The effect played when the show changes from one slide to the next", "A slide that holds the background design", "A printed page showing several slides"],
      answer: 1,
      explain: "A <b>transition</b> is the special effect seen as a slide appears during the slide show. Effects on single objects are animations.",
      diff: "E"
    },
    {
      q: "In the Slide Transition deck, choosing <b>Automatically after</b> with 5 seconds for a slide means —",
      options: ["The transition effect itself takes 5 seconds to play", "The whole slide show ends after 5 seconds", "Every animation waits 5 seconds before starting", "The show moves on to the next slide by itself after 5 seconds, without a mouse click"],
      answer: 3,
      explain: "<b>Advance slide: Automatically after</b> moves to the next slide after the set number of seconds. On mouse click waits for the presenter instead.",
      diff: "M"
    },
    {
      q: "Which button in the Slide Transition deck applies the selected transition to every slide of the presentation?",
      options: ["Apply Transition to All Slides", "Play", "Automatic Preview", "Loop until next sound"],
      answer: 0,
      explain: "<b>Apply Transition to All Slides</b> copies the chosen effect to all slides. Play only previews it, and Loop until next sound repeats a transition sound.",
      diff: "E"
    },
    {
      q: "In the slide transition settings, what does <b>Duration</b> control?",
      options: ["How long the slide stays on screen before the show moves on", "How long the transition effect itself takes to play", "How many times the transition sound repeats", "How many slides are shown in the show"],
      answer: 1,
      explain: "<b>Duration</b> sets the length of the transition effect. The time a slide stays on screen is set with Automatically after.",
      diff: "M"
    },
    {
      q: "Kiran applies a Fade transition with <b>On mouse click</b> to all slides. He then selects only slide 4 and changes its transition to Wipe with <b>Automatically after 8 seconds</b>. What happens during the slide show?",
      options: ["Every slide now uses Wipe and moves on after 8 seconds", "Slide 4 is skipped in the show", "Only slide 4 waits for a mouse click", "Slide 4 appears with Wipe and moves on by itself after 8 seconds; the other slides fade in and wait for a click"],
      answer: 3,
      explain: "Transition settings belong to <b>each slide</b>. The later change affects only slide 4, so the other slides keep Fade with On mouse click.",
      diff: "H"
    },
    {
      q: "In Impress, a new slide master can be created with <b>Slide &gt; New Master</b> only while —",
      options: ["The slide show is running", "Outline view is open", "Master Slide view is open", "A table is selected"],
      answer: 2,
      explain: "New Master is available <b>only in master view</b> (View &gt; Master Slide). The new master can then be applied to some or all slides.",
      diff: "M"
    },
  ],
});
