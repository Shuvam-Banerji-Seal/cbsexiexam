// October 28 Examination — Topic 5: Functions: SUM, AVERAGE, MAX, MIN, COUNT & IF.
// 10 questions · CBSE Class IX · Information Technology (402), Unit 4: Electronic Spreadsheet; Computer Applications (165), Unit 3: Office Tools.
window.OCT28_TOPICS = window.OCT28_TOPICS || [];
window.OCT28_TOPICS.push({
  key: "functions",
  name: "Functions: SUM, AVERAGE, MAX, MIN, COUNT & IF",
  questions: [
    {
      q: "Which formula adds all the numbers in the cells A1 to A10?",
      options: ["=ADD(A1:A10)", "=SUM(A1:A10)", "=TOTAL(A1:A10)", "=PLUS(A1:A10)"],
      answer: 1,
      explain: "<b>SUM</b> adds the numbers in its arguments; here the single argument is the range A1:A10. Calc has no ADD, TOTAL or PLUS function.",
      diff: "E"
    },
    {
      q: "Which of these formulas is written with the correct syntax?",
      options: ["=AVERAGE B2:B6", "AVERAGE(B2:B6)=", "=AVERAGE(B2:B6)", "=AVERAGE[B2:B6]"],
      answer: 2,
      explain: "A function is written as <b>=NAME(arguments)</b>: an equals sign, the function name, and the arguments inside round brackets.",
      diff: "E"
    },
    {
      q: "Which function returns the <b>smallest</b> number in a range of cells?",
      options: ["MIN", "MAX", "COUNT", "AVERAGE"],
      answer: 0,
      explain: "<b>MIN</b> gives the minimum (smallest) value and MAX the largest. COUNT counts the numeric cells and AVERAGE finds the mean.",
      diff: "E"
    },
    {
      q: "Column B holds the entries shown; cell B6 is empty. What does <code>=COUNT(B2:B7)</code> return?<br/><table class=\"q-table\"><tr><th></th><th>B</th></tr><tr><th>1</th><td>Marks</td></tr><tr><th>2</th><td>40</td></tr><tr><th>3</th><td>75</td></tr><tr><th>4</th><td>Absent</td></tr><tr><th>5</th><td>65</td></tr><tr><th>6</th><td></td></tr><tr><th>7</th><td>80</td></tr></table>",
      options: ["6", "5", "3", "4"],
      answer: 3,
      explain: "<b>COUNT</b> counts only the cells that contain <b>numbers</b>: 40, 75, 65 and 80. The text 'Absent' and the empty cell B6 are not counted, so the answer is 4.",
      diff: "M"
    },
    {
      q: "Column B holds the entries shown; cell B4 is empty. What does <code>=AVERAGE(B2:B6)</code> return?<br/><table class=\"q-table\"><tr><th></th><th>B</th></tr><tr><th>1</th><td>Runs</td></tr><tr><th>2</th><td>18</td></tr><tr><th>3</th><td>24</td></tr><tr><th>4</th><td></td></tr><tr><th>5</th><td>Leave</td></tr><tr><th>6</th><td>30</td></tr></table>",
      options: ["14.4", "24", "18", "72"],
      answer: 1,
      explain: "AVERAGE ignores text and empty cells. It adds the three numbers, 18 + 24 + 30 = 72, and divides by <b>3</b>, giving <b>24</b>. Dividing by all five cells would wrongly give 14.4.",
      diff: "H"
    },
    {
      q: "Column C holds the scores shown. What does <code>=MAX(C2:C6)-MIN(C2:C6)</code> return?<br/><table class=\"q-table\"><tr><th></th><th>C</th></tr><tr><th>1</th><td>Score</td></tr><tr><th>2</th><td>34</td></tr><tr><th>3</th><td>58</td></tr><tr><th>4</th><td>21</td></tr><tr><th>5</th><td>47</td></tr><tr><th>6</th><td>39</td></tr></table>",
      options: ["58", "21", "37", "79"],
      answer: 2,
      explain: "MAX gives 58 and MIN gives 21, so the formula returns 58 − 21 = <b>37</b>, the spread between the highest and lowest scores. 79 would be their sum.",
      diff: "M"
    },
    {
      q: "Cell B2 contains <b>30</b>. What does <code>=IF(B2>=33,\"Pass\",\"Fail\")</code> show?",
      options: ["Fail", "Pass", "30", "TRUE"],
      answer: 0,
      explain: "IF tests the condition B2>=33. Since 30 is less than 33 the condition is false, so IF returns its third argument, <b>\"Fail\"</b>.",
      diff: "E"
    },
    {
      diagram: "flowchart TD\n  A[\"Marks in C2\"] --> B{\"Is C2 40 or more?\"}\n  B -->|Yes| C[\"Show Pass\"]\n  B -->|No| D[\"Show Fail\"]",
      diagramCaption: "Figure: The decision Riya wants cell D2 to make",
      q: "The figure shows the logic Riya wants in cell D2 for the marks in C2. Which formula follows it exactly?",
      options: ["=IF(C2>40,\"Pass\",\"Fail\")", "=IF(C2>=40,\"Fail\",\"Pass\")", "=IF(C2>=40,\"Pass\",\"Fail\")", "=MAX(C2>=40,\"Pass\",\"Fail\")"],
      answer: 2,
      explain: "'40 or more' means C2>=40. In <b>IF(condition, value if true, value if false)</b> the Yes result \"Pass\" comes second and the No result \"Fail\" third. C2>40 would wrongly give Fail to a student with exactly 40.",
      diff: "M"
    },
    {
      q: "A shop gives a 10% discount on bills above ₹5000 and a 5% discount on other bills. The bill amount is in B2, and C2 contains <code>=IF(B2>5000,B2*10%,B2*5%)</code>. What does C2 show?<br/><table class=\"q-table\"><tr><th></th><th>B</th></tr><tr><th>1</th><td>Bill (₹)</td></tr><tr><th>2</th><td>4800</td></tr></table>",
      options: ["480", "4800", "5040", "240"],
      answer: 3,
      explain: "4800 is not greater than 5000, so the condition is false and IF works out its third argument: 4800 × 5% = <b>240</b>. 480 would be the 10% discount, given only on bills above ₹5000.",
      diff: "H"
    },
    {
      q: "The worksheet contains the values shown. What does <code>=SUM(B2:B4,D2)</code> return?<br/><table class=\"q-table\"><tr><th></th><th>B</th><th>C</th><th>D</th></tr><tr><th>2</th><td>5</td><td>7</td><td>20</td></tr><tr><th>3</th><td>10</td><td>8</td><td>30</td></tr><tr><th>4</th><td>15</td><td>9</td><td>40</td></tr></table>",
      options: ["144", "50", "30", "120"],
      answer: 1,
      explain: "SUM can take several arguments separated by commas. The range B2:B4 gives 5 + 10 + 15 = 30, and D2 adds 20, so the result is <b>50</b>.",
      diff: "M"
    },
  ],
});
