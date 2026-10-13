// October 13 Examination — Part B, Topic 13: Number Systems, Binary Representation & Data Units.
// 10 questions · CBSE Class IX · Computer Fundamentals (as covered in the school's prescribed material).
window.OCT13_TOPICS = window.OCT13_TOPICS || [];
window.OCT13_TOPICS.push({
  key: "number-systems",
  name: "Number Systems & Data Units",
  questions: [
    {
      q: "Which number system uses <b>only the digits 0 to 7</b>?",
      options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
      answer: 1,
      explain: "<b>Octal</b> is base 8 (digits 0–7). Binary is base 2 (0, 1), decimal is base 10 (0–9) and hexadecimal is base 16 (0–9 and A–F).",
      diff: "E"
    },
    {
      q: "Convert the decimal number <b>25</b> into binary.",
      options: ["10011", "11010", "11001", "10101"],
      answer: 2,
      explain: "Divide by 2 and note the remainders: 25÷2 = 12 r <b>1</b>, 12÷2 = 6 r <b>0</b>, 6÷2 = 3 r <b>0</b>, 3÷2 = 1 r <b>1</b>, 1÷2 = 0 r <b>1</b>. Reading the remainders from bottom to top gives <b>11001</b> (16 + 8 + 1 = 25).",
      diff: "M"
    },
    {
      q: "What is the decimal value of the binary number <b>(1011)<sub>2</sub></b>?",
      options: ["11", "13", "9", "10"],
      answer: 0,
      explain: "Place values from the right are 1, 2, 4, 8: 1×8 + 0×4 + 1×2 + 1×1 = 8 + 0 + 2 + 1 = <b>11</b>.",
      diff: "E"
    },
    {
      q: "How many <b>bits</b> make one <b>byte</b>?",
      options: ["4", "16", "1024", "8"],
      answer: 3,
      explain: "1 byte = <b>8 bits</b>. A bit (binary digit) is a single 0 or 1, the smallest unit of data. One byte can store one character, such as 'A'.",
      diff: "E"
    },
    {
      q: "A group of <b>4 bits</b> (half a byte) is called a —",
      options: ["Word", "Nibble", "Kilobyte", "Pixel"],
      answer: 1,
      explain: "4 bits = 1 <b>nibble</b>, and 2 nibbles = 1 byte.",
      diff: "M"
    },
    {
      q: "1 KB (kilobyte) is equal to —",
      options: ["1000 bits", "1024 bits", "1024 bytes", "1000 kilobits"],
      answer: 2,
      explain: "Computer memory works in powers of 2: 1 KB = 2<sup>10</sup> = <b>1024 bytes</b>. Similarly, 1 MB = 1024 KB and 1 GB = 1024 MB.",
      diff: "M"
    },
    {
      q: "Which of the following data units is the <b>largest</b>?",
      options: ["Gigabyte (GB)", "Terabyte (TB)", "Kilobyte (KB)", "Megabyte (MB)"],
      answer: 1,
      explain: "In increasing order: Byte → KB → MB → GB → <b>TB</b> → PB. Each unit is 1024 times the one before it.",
      diff: "E"
    },
    {
      q: "In the hexadecimal number system, the digit <b>F</b> stands for the decimal value —",
      options: ["14", "16", "15", "11"],
      answer: 2,
      explain: "Hexadecimal uses 0–9 and then A = 10, B = 11, C = 12, D = 13, E = 14, <b>F = 15</b>.",
      diff: "M"
    },
    {
      q: "Add the binary numbers <b>(101)<sub>2</sub> + (011)<sub>2</sub></b>.",
      options: ["111", "110", "1001", "1000"],
      answer: 3,
      explain: "Work from the right: 1 + 1 = 10 (write 0, carry 1); 0 + 1 + 1 = 10 (write 0, carry 1); 1 + 0 + 1 = 10 (write 0, carry 1). The final carry gives <b>1000</b>. Check: 5 + 3 = 8 = (1000)<sub>2</sub>.",
      diff: "H"
    },
    {
      q: "What is the <b>largest</b> decimal number that can be stored in <b>8 bits</b>?",
      options: ["255", "256", "128", "127"],
      answer: 0,
      explain: "The biggest 8-bit value is 11111111 = 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = <b>255</b> (2<sup>8</sup> − 1). 8 bits give 256 different values, from 0 to 255.",
      diff: "M"
    },
  ],
});
