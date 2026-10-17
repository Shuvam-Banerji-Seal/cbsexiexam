// October 31 Examination — Topic 6: Animations, Sound & Rehearse Timings.
// 10 questions · CBSE Class IX · Information Technology (402), Unit 5 · Computer Applications (165), Unit 3: Office Tools.
window.OCT31_TOPICS = window.OCT31_TOPICS || [];
window.OCT31_TOPICS.push({
  key: "animation-sound",
  name: "Animations, Sound & Rehearse Timings",
  questions: [
    {
      q: "In Impress, an effect applied to an object <b>on</b> a slide, such as a picture flying in from the left, is called —",
      options: ["A slide transition", "A slide layout", "A slide master", "An animation (custom animation)"],
      answer: 3,
      explain: "Effects on individual objects such as text, pictures and shapes are <b>animations</b>. A transition is the effect between one slide and the next.",
      diff: "E"
    },
    {
      q: "In the Animation deck of the Impress Sidebar, which setting controls how long an animation effect takes to play, for example 0.5 s or 2 s?",
      options: ["Delay", "Direction", "Duration", "Start"],
      answer: 2,
      explain: "<b>Duration</b> sets the length of the effect itself. Delay is the waiting time before the effect begins, and Start decides what triggers it.",
      diff: "M"
    },
    {
      q: "An animation effect that makes an object <b>appear</b> on the slide during the show belongs to which category?",
      options: ["Entrance", "Exit", "Emphasis", "Motion Paths"],
      answer: 0,
      explain: "<b>Entrance</b> effects bring an object onto the slide. Exit effects take it off, and Emphasis effects act on an object already showing.",
      diff: "E"
    },
    {
      q: "To make a word that is already on the slide grow larger or change colour to draw attention, without it entering or leaving, you choose an effect from the —",
      options: ["Entrance category", "Emphasis category", "Exit category", "Slide Transition deck"],
      answer: 1,
      explain: "<b>Emphasis</b> effects highlight an object that is already visible. Entrance and Exit effects bring objects on or take them off.",
      diff: "M"
    },
    {
      q: "A picture of a car must travel along a curved road drawn on the slide. Which category of animation effect should be used?",
      options: ["Entrance", "Emphasis", "Exit", "Motion Paths"],
      answer: 3,
      explain: "A <b>motion path</b> moves an object along a set or custom-drawn path, such as a curve.",
      diff: "M"
    },
    {
      diagram: "flowchart TD\n  A[\"Effect 1: Title, Entrance Fly In, Start On click\"] --> B[\"Effect 2: Picture, Entrance Appear, Start With previous\"]\n  B --> C[\"Effect 3: Bullet list, Entrance Wipe, Start After previous\"]\n  C --> D[\"Effect 4: Picture, Exit Fade Out, Start On click\"]",
      diagramCaption: "Figure: The animation list of one slide, in playing order",
      q: "The figure shows the four animation effects on one slide, in order. After the slide appears in the show, how many mouse clicks are needed to play <b>all four</b> effects?",
      options: ["0", "1", "2", "3"],
      answer: 2,
      explain: "Click 1 starts effect 1. Effect 2 runs <b>with</b> it and effect 3 runs automatically <b>after</b> effect 2 ends. Effect 4 is On click, so a second click is needed: <b>2 clicks</b> in all.",
      diff: "H"
    },
    {
      q: "In Impress, a sound such as applause can be attached to one particular animation effect through —",
      options: ["The Header and Footer dialog", "The Effect Options of that animation, using its Sound list", "The Slide Properties dialog", "Outline view"],
      answer: 1,
      explain: "The <b>Effect Options</b> dialog of an animation has a <b>Sound</b> list, so a sound plays with that effect. A transition sound is set separately in the Slide Transition deck.",
      diff: "M"
    },
    {
      q: "The <b>Rehearse Timings</b> feature of Impress is used to —",
      options: ["Check the spelling on every slide", "Add speaker notes below each slide", "Print several slides on one page", "Record how long each slide is shown, so that the show can later advance by itself"],
      answer: 3,
      explain: "Rehearse Timings runs the show with a timer and <b>records the display time of each slide</b>. The saved timings are then used to change slides automatically.",
      diff: "E"
    },
    {
      diagram: "flowchart TD\n  A[\"Choose Rehearse Timings in the Slide Show menu\"] --> B[\"Show starts with a timer in the lower left corner\"]\n  B --> C[Step Y]\n  C --> D[\"Display time of each slide is recorded\"]\n  D --> E[\"Save, then later shows change slides automatically\"]",
      diagramCaption: "Figure: Recording slide timings with Rehearse Timings",
      q: "The figure shows how slide timings are recorded in Impress. What does the presenter do at <b>Step Y</b>?",
      options: ["Clicks the timer to move on once the slide has been shown long enough", "Types the number of seconds for each slide in a dialog box", "Drags the slides into a new order", "Presses F1 on every slide"],
      answer: 0,
      explain: "During rehearsal the presenter practises the talk and <b>clicks the timer</b> to go to the next slide. Impress records the time spent on each slide.",
      diff: "M"
    },
    {
      q: "Priya wants (i) every new slide to appear with a Wipe effect and (ii) the three bullet points on slide 4 to appear one by one as she clicks. What should she apply?",
      options: ["A transition to the bullet points and an animation to every slide", "Exit animations for both (i) and (ii)", "A slide transition for (i), and an Entrance animation set to Start On click for each bullet point for (ii)", "A motion path for (i) and a slide transition for (ii)"],
      answer: 2,
      explain: "A <b>slide transition</b> controls how a whole slide appears, while an <b>Entrance animation</b> started On click reveals objects on the slide one at a time.",
      diff: "H"
    },
  ],
});
