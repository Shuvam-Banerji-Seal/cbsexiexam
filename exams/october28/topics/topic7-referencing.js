// October 28 Examination — Topic 7: Relative, Absolute & Mixed References.
// 10 questions · CBSE Class IX · Information Technology (402), Unit 4: Electronic Spreadsheet.
window.OCT28_TOPICS = window.OCT28_TOPICS || [];
window.OCT28_TOPICS.push({
  key: "referencing",
  name: "Relative, Absolute & Mixed References",
  questions: [
    {
      q: "Which of the following is an <b>absolute</b> cell reference?",
      options: ["$B$3", "B3", "$B3", "B$3"],
      answer: 0,
      explain: "In <b>$B$3</b> both the column and the row carry a $ sign, so neither changes when the formula is copied. $B3 and B$3 are mixed references, and B3 is relative.",
      diff: "E"
    },
    {
      q: "A reference such as <b>B5</b>, which adjusts automatically when the formula is copied to another cell, is called —",
      options: ["An absolute reference", "A mixed reference", "A range reference", "A relative reference"],
      answer: 3,
      explain: "A <b>relative reference</b> has no $ signs, so it changes according to where the formula is copied and keeps the same relative position.",
      diff: "E"
    },
    {
      q: "In a cell reference, the dollar sign ($) is used to —",
      options: ["Show the value in rupees or dollars", "Fix the column or row so it does not change when copied", "Turn the entry into a label", "Round the value to two decimal places"],
      answer: 1,
      explain: "A <b>$</b> before the column letter or the row number <b>locks</b> that part of the reference. It has nothing to do with currency, which is a number format.",
      diff: "E"
    },
    {
      q: "Cell C1 contains <code>=A1+B1</code>. It is copied to D1, one column to the right. What formula will D1 contain?",
      options: ["=A1+B1", "=A2+B2", "=B1+C1", "=B2+C2"],
      answer: 2,
      explain: "Both references are relative. Moving one column right shifts each column letter by one, A to B and B to C, while the row stays 1: <b>=B1+C1</b>.",
      diff: "M"
    },
    {
      q: "Which reference keeps the <b>row</b> fixed but lets the <b>column</b> change when a formula is copied?",
      options: ["B4", "$B4", "$B$4", "B$4"],
      answer: 3,
      explain: "In <b>B$4</b> the $ stands before the row number, so row 4 stays fixed while the column letter can change. $B4 is the opposite: its column is fixed.",
      diff: "M"
    },
    {
      q: "Cell B7 contains <code>=SUM(B2:B6)</code>. It is copied to C7. What formula will C7 contain?",
      options: ["=SUM(B2:B6)", "=SUM(C2:C6)", "=SUM(C3:C7)", "=SUM(B3:B7)"],
      answer: 1,
      explain: "A range made of relative references shifts too. Moving one column right changes B2:B6 to <b>C2:C6</b>, so C7 totals its own column.",
      diff: "M"
    },
    {
      q: "Item prices are in cells B2 to B10, and the GST rate for every item is stored in cell F1. Which formula should be typed in C2 so that it can be copied down to C10 and still use the rate in F1?",
      options: ["=B2*$F$1", "=B2*F1", "=$B$2*F1", "=$B2*$F2"],
      answer: 0,
      explain: "<b>$F$1</b> is absolute, so every copy keeps using F1, while the relative B2 becomes B3, B4 and so on for each item. With a plain F1, the copies would point to F2, F3 and so on, which are empty.",
      diff: "M"
    },
    {
      diagram: "flowchart LR\n  A[\"B2: =$A2*B$1\"] -->|copied one column right| B[\"C2: ?\"]\n  A -->|copied one row down| C[\"B3: ?\"]",
      diagramCaption: "Figure: One formula in B2 copied to the right and downwards",
      q: "The formula in B2 is copied one column to the right and one row down, as shown in the figure. Which formulas appear in C2 and B3?",
      options: ["C2: =$A2*C$1 and B3: =$A2*B$1", "C2: =$B2*C$1 and B3: =$A3*B$2", "C2: =$A2*C$1 and B3: =$A3*B$1", "C2: =$A2*B$1 and B3: =$A3*B$1"],
      answer: 2,
      explain: "In <b>$A2</b> the column is fixed, so only its row can change; in <b>B$1</b> the row is fixed, so only its column can change. Copying right gives =$A2*C$1, and copying down gives =$A3*B$1. This is how a multiplication table is built.",
      diff: "M"
    },
    {
      q: "Rahul types <code>=B2*F1</code> in C2 to work out a 10% commission (F1 holds 10%), then copies it down to C5. Cells F2 to F5 are empty and B5 contains 400. What does C5 show?",
      options: ["40", "0", "400", "#REF!"],
      answer: 1,
      explain: "Copied 3 rows down, the relative formula becomes <b>=B5*F4</b>. F4 is empty and counts as 0, so C5 shows <b>0</b>. Writing $F$1 in C2 would have given 400 × 10% = 40.",
      diff: "H"
    },
    {
      q: "Cell C3 contains <code>=A$1*$B2</code>. It is copied to E6. What formula will E6 contain?",
      options: ["=A$1*$B2", "=C$4*$D5", "=C$1*$D5", "=C$1*$B5"],
      answer: 3,
      explain: "The copy moves 2 columns right and 3 rows down. In <b>A$1</b> only the column moves (A to C), giving C$1; in <b>$B2</b> only the row moves (2 to 5), giving $B5. So E6 holds <b>=C$1*$B5</b>.",
      diff: "H"
    },
  ],
});
