// October 28 Examination — Topic 4: Formulas & Operators.
// 10 questions · CBSE Class IX · Information Technology (402), Unit 4: Electronic Spreadsheet.
window.OCT28_TOPICS = window.OCT28_TOPICS || [];
window.OCT28_TOPICS.push({
  key: "formulas-operators",
  name: "Formulas & Operators",
  questions: [
    {
      q: "Which operator is used for <b>multiplication</b> in a LibreOffice Calc formula?",
      options: ["x", "^", "*", "#"],
      answer: 2,
      explain: "The asterisk <b>*</b> multiplies, as in =B2*C2. The letter x is not an operator, and ^ raises a number to a power.",
      diff: "E"
    },
    {
      q: "In a Calc formula such as <code>=5^2</code>, the operator <b>^</b> means —",
      options: ["Raise to the power (exponent)", "Multiply", "Divide", "Find the percentage"],
      answer: 0,
      explain: "<b>^</b> is the exponent operator: =5^2 means 5<sup>2</sup>, which is 25.",
      diff: "E"
    },
    {
      q: "The worksheet contains the values shown. What does the formula <code>=A1+B1*C1</code> give?<br/><table class=\"q-table\"><tr><th></th><th>A</th><th>B</th><th>C</th></tr><tr><th>1</th><td>10</td><td>4</td><td>5</td></tr></table>",
      options: ["70", "19", "45", "30"],
      answer: 3,
      explain: "Multiplication is done before addition: B1*C1 = 4 × 5 = 20, then 10 + 20 = <b>30</b>. You would get 70 only with brackets, as in =(A1+B1)*C1.",
      diff: "M"
    },
    {
      q: "The worksheet contains the values shown. What does the formula <code>=A1/B1^2</code> give?<br/><table class=\"q-table\"><tr><th></th><th>A</th><th>B</th></tr><tr><th>1</th><td>50</td><td>5</td></tr></table>",
      options: ["100", "2", "5", "10"],
      answer: 1,
      explain: "The exponent is worked out before division: B1^2 = 25, then 50 ÷ 25 = <b>2</b>. Working left to right instead, (50 ÷ 5)<sup>2</sup> would wrongly give 100.",
      diff: "M"
    },
    {
      q: "A student's marks in Science, Maths and English are in cells B2, C2 and D2. Which formula in E2 gives the total marks?",
      options: ["B2+C2+D2", "=B2*C2*D2", "=B2+C2+D2", "=Total(B2:D2)"],
      answer: 2,
      explain: "<b>=B2+C2+D2</b> adds the three cells. Without the = sign, B2+C2+D2 is stored as text, and =B2*C2*D2 multiplies instead of adding.",
      diff: "E"
    },
    {
      q: "Cell B2 contains the price shown. Cell C2 contains the formula <code>=B2*15%</code>. What value does C2 show?<br/><table class=\"q-table\"><tr><th></th><th>B</th></tr><tr><th>1</th><td>Price</td></tr><tr><th>2</th><td>1200</td></tr></table>",
      options: ["18000", "1380", "1800", "180"],
      answer: 3,
      explain: "The <b>%</b> operator divides the number before it by 100, so 15% = 0.15 and 1200 × 0.15 = <b>180</b>. 1380 would be the price plus 15%.",
      diff: "M"
    },
    {
      q: "The worksheet contains the values shown. What does the formula <code>=A1-B1-C1</code> give?<br/><table class=\"q-table\"><tr><th></th><th>A</th><th>B</th><th>C</th></tr><tr><th>1</th><td>20</td><td>8</td><td>2</td></tr></table>",
      options: ["10", "14", "26", "30"],
      answer: 0,
      explain: "Operators of the same level are worked <b>left to right</b>: 20 − 8 = 12, then 12 − 2 = <b>10</b>. 14 would need brackets, as in =A1-(B1-C1).",
      diff: "M"
    },
    {
      q: "Sana wants the <b>average</b> of the marks in B2, C2 and D2, and types <code>=B2+C2+D2/3</code> in E2. What does E2 show, and why?<br/><table class=\"q-table\"><tr><th></th><th>B</th><th>C</th><th>D</th></tr><tr><th>1</th><td>Science</td><td>Maths</td><td>English</td></tr><tr><th>2</th><td>80</td><td>70</td><td>90</td></tr></table>",
      options: ["80, the correct average of the three marks", "240, because Calc ignores the /3", "180, because only D2 is divided by 3, before the additions", "#VALUE!, because the formula has a syntax error"],
      answer: 2,
      explain: "Division comes before addition, so Calc first works out D2/3 = 30 and then 80 + 70 + 30 = <b>180</b>. The correct formula is <b>=(B2+C2+D2)/3</b>, which gives 80.",
      diff: "H"
    },
    {
      q: "Why is a formula such as <code>=B2*C2</code> usually better than typing the numbers themselves, as in <code>=40*5</code>?",
      options: ["It always calculates faster", "The result updates automatically when B2 or C2 changes", "It can be typed without the = sign", "It stops anyone from changing B2 or C2"],
      answer: 1,
      explain: "A formula built on <b>cell addresses</b> uses whatever is currently in those cells, so changing B2 or C2 <b>recalculates</b> the result automatically. =40*5 always gives 200.",
      diff: "M"
    },
    {
      q: "The worksheet contains the values shown. What does the formula <code>=(A1+B1)^C1-A1*C1</code> give?<br/><table class=\"q-table\"><tr><th></th><th>A</th><th>B</th><th>C</th></tr><tr><th>1</th><td>3</td><td>4</td><td>2</td></tr></table>",
      options: ["13", "92", "8", "43"],
      answer: 3,
      explain: "Brackets first: 3 + 4 = 7. Then the exponent: 7<sup>2</sup> = 49. Then the multiplication: 3 × 2 = 6. Finally the subtraction: 49 − 6 = <b>43</b>.",
      diff: "H"
    },
  ],
});
