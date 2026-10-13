// October 13 Examination — Part B, Topic 6: Characteristics & Components of a Computer.
// 10 questions · CBSE Class IX · Unit 1: Basics of Information Technology.
window.OCT13_TOPICS = window.OCT13_TOPICS || [];
window.OCT13_TOPICS.push({
  key: "computer-characteristics",
  name: "Computer Characteristics & Components",
  questions: [
    {
      q: "Which characteristic of a computer means it can work for hours on end without getting tired or losing concentration?",
      options: ["Speed", "Diligence", "Versatility", "Accuracy"],
      answer: 1,
      explain: "<b>Diligence</b>: a computer never gets tired or bored, and it does the millionth calculation with the same care as the first.",
      diff: "E"
    },
    {
      q: "The same computer can be used to type letters, play music, book train tickets and forecast the weather. This characteristic is called —",
      options: ["Diligence", "Accuracy", "Versatility", "Storage capacity"],
      answer: 2,
      explain: "<b>Versatility</b> is the ability to perform many different kinds of tasks.",
      diff: "E"
    },
    {
      q: "The term <b>GIGO</b> (Garbage In, Garbage Out) means —",
      options: ["A computer automatically corrects wrong data", "Computers produce garbage when they overheat", "Deleted files are sent to the Recycle Bin", "If wrong input is given, the output will also be wrong"],
      answer: 3,
      explain: "A computer processes exactly what it is given. Its results are only as accurate as its input, so <b>wrong input gives wrong output</b>.",
      diff: "M"
    },
    {
      q: "Which of the following is a <b>limitation</b> of a computer?",
      options: ["It works at a very high speed", "It cannot think or take decisions on its own", "It can store a large amount of data", "It gives accurate results"],
      answer: 1,
      explain: "A computer has <b>no IQ and no feelings</b>. It only follows instructions given by humans. Speed, storage and accuracy are its strengths.",
      diff: "E"
    },
    {
      q: "The <b>CPU</b> (Central Processing Unit) is often called the —",
      options: ["Brain of the computer", "Eye of the computer", "Heart of the computer", "Voice of the computer"],
      answer: 0,
      explain: "The CPU processes all data and controls every other part of the computer, so it is called the <b>brain of the computer</b>.",
      diff: "E"
    },
    {
      diagram: "flowchart LR\n  subgraph CPU[Central Processing Unit]\n    CU[Control Unit]\n    X[Unit X]\n    MU[Memory Unit]\n  end\n  I[Input Unit] --> CPU\n  CPU --> O[Output Unit]",
      diagramCaption: "Figure: Block diagram of a computer system",
      q: "In the block diagram shown, <b>Unit X</b> inside the CPU carries out all arithmetic calculations and logical comparisons. Unit X is the —",
      options: ["Visual Display Unit (VDU)", "Power Supply Unit (PSU)", "Arithmetic Logic Unit (ALU)", "Uninterruptible Power Supply (UPS)"],
      answer: 2,
      explain: "The <b>ALU</b> does arithmetic (+, −, ×, ÷) and logical comparisons (greater than, equal to). Together with the Control Unit and the memory unit, it makes up the CPU.",
      diff: "M"
    },
    {
      q: "Which part of the CPU directs and coordinates all the other parts of the computer, telling them what to do and when?",
      options: ["Arithmetic Logic Unit", "Cache memory", "Hard disk", "Control Unit"],
      answer: 3,
      explain: "The <b>Control Unit (CU)</b> fetches and interprets instructions and controls the flow of data between the input unit, memory, ALU and output unit.",
      diff: "E"
    },
    {
      q: "The basic working cycle of a computer, in the correct order, is —",
      options: ["Process → Input → Output", "Output → Process → Input", "Input → Process → Output", "Input → Output → Process"],
      answer: 2,
      explain: "This is the <b>IPO cycle</b>: data is entered (Input), the CPU works on it (Process) and the result is given (Output). Data can also be stored for later use.",
      diff: "E"
    },
    {
      q: "The speed of a processor (its clock speed) is commonly measured in —",
      options: ["Gigahertz (GHz)", "Gigabytes (GB)", "Pixels", "Pages per minute"],
      answer: 0,
      explain: "Clock speed is measured in hertz, the number of cycles per second. Modern CPUs run at several <b>gigahertz (GHz)</b>, i.e. billions of cycles per second. GB measures storage.",
      diff: "M"
    },
    {
      q: "A complete CPU built on a single integrated-circuit chip is called a —",
      options: ["Motherboard", "Modem", "Monitor", "Microprocessor"],
      answer: 3,
      explain: "A <b>microprocessor</b> puts the whole CPU (ALU, CU and registers) on one chip. It plugs into the motherboard, the main circuit board of the computer.",
      diff: "M"
    },
  ],
});
