// August 01 Examination — Topic 4: Relational Algebra.
// 25 questions · CBSE Class XII Computer Science.
window.AUGUST_TOPICS = window.AUGUST_TOPICS || [];
window.AUGUST_TOPICS.push({
  key: "relational-algebra",
  name: "Relational Algebra",
  questions: [
    {
      q: "What does the relational algebra operator <b>σ</b> (sigma) do?",
      options: [
        "Selects specific columns (attributes) from a relation",
        "Renames a relation or its attributes",
        "Selects rows (tuples) that satisfy a given condition",
        "Combines two relations side by side"
      ],
      answer: 2,
      explain: "Selection <code>σ</code> filters tuples by a condition, just like the <code>WHERE</code> clause of SQL. Picking columns is the job of projection <code>π</code>.",
      diff: "E"
    },
    {
      q: "The projection operator <b>π</b> (pi) is used to:",
      options: [
        "Filter rows by a condition",
        "Keep only the listed columns and remove duplicate rows",
        "Rename attributes of a relation",
        "Count the number of rows in a relation"
      ],
      answer: 1,
      explain: "Projection <code>π</code> picks only the listed attributes. Because the output of a relational operation is a relation (a set), duplicate rows are automatically eliminated.",
      diff: "E"
    },
    {
      q: "What is the purpose of the rename operator <b>ρ</b> (rho)?",
      options: [
        "Sorts the tuples of a relation in ascending order",
        "Deletes unwanted tuples from a relation",
        "Computes the total of a numeric attribute",
        "Gives a new name to a relation or to its attributes"
      ],
      answer: 3,
      explain: "Rename <code>ρ</code> renames a relation (e.g. <code>ρ S (STUDENT)</code>) or its attributes. This helps in self-joins and in making results more readable.",
      diff: "E"
    },
    {
      q: "Relation R has 4 tuples and relation S has 3 tuples. How many tuples does <code>R × S</code> contain?",
      options: ["7", "1", "12", "4"],
      answer: 2,
      explain: "The cartesian product <code>R × S</code> pairs every tuple of R with every tuple of S, so the result has 4 × 3 = 12 tuples.",
      diff: "E"
    },
    {
      q: "Two relations R and S are <b>union-compatible</b> if:",
      options: [
        "They have the same number of tuples",
        "They share at least one attribute name",
        "They are stored in the same database",
        "They have the same number of attributes and corresponding attributes are drawn from the same domain"
      ],
      answer: 3,
      explain: "Union <code>∪</code>, intersection <code>∩</code> and difference <code>−</code> are defined only when both relations have the same number of attributes with compatible domains. The number of tuples is irrelevant.",
      diff: "E"
    },
    {
      q: "Which SQL query is equivalent to <code>σ City='Delhi' (STUDENT)</code>?",
      options: [
        "SELECT City FROM STUDENT",
        "SELECT DISTINCT City FROM STUDENT",
        "SELECT * FROM STUDENT WHERE City = 'Delhi'",
        "SELECT * FROM STUDENT"
      ],
      answer: 2,
      explain: "Selection <code>σ</code> corresponds to the <code>WHERE</code> clause; the <code>*</code> keeps all columns, matching the unprojected result of <code>σ</code>.",
      diff: "E"
    },
    {
      q: "Which symbol denotes the <b>natural join</b> operator?",
      options: ["×", "∪", "÷", "⋈"],
      answer: 3,
      explain: "<code>⋈</code> is the natural join, <code>×</code> the cartesian product, <code>∪</code> the union and <code>÷</code> the division operator.",
      diff: "E"
    },
    {
      q: "<b>Relation: STUDENT</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Roll</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Name</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>City</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Aarav</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Delhi</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Bhavya</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Mumbai</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Chhavi</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Delhi</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Dev</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Kolkata</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">5</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Esha</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Delhi</td></tr></table><br>How many tuples are in the result of <code>σ City='Delhi' (STUDENT)</code>?",
      options: ["5", "2", "4", "3"],
      answer: 3,
      explain: "Selection keeps only rows where City is Delhi: Aarav (1), Chhavi (3) and Esha (5) — 3 tuples.",
      diff: "E"
    },
    {
      q: "<b>Relation: MARKS</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Roll</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Sub</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Score</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Maths</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">90</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Science</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">85</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Maths</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">78</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Science</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">92</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Maths</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">88</td></tr></table><br>How many tuples are in the result of <code>π Sub (MARKS)</code>?",
      options: ["5", "3", "2", "4"],
      answer: 2,
      explain: "Projection keeps only the Sub column and removes duplicate values, leaving {Maths, Science} — 2 tuples.",
      diff: "M"
    },
    {
      q: "<b>Relation: STUDENT</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Roll</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Name</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>City</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Age</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Aarav</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Delhi</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">16</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Bhavya</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Mumbai</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">17</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Chhavi</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Delhi</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">17</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Dev</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Kolkata</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">16</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">5</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Esha</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Delhi</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">18</td></tr></table><br>Which names appear in the result of <code>π Name (σ City='Delhi' AND Age&gt;16 (STUDENT))</code>?",
      options: [
        "Aarav, Chhavi",
        "Aarav, Esha",
        "Bhavya, Dev",
        "Chhavi, Esha"
      ],
      answer: 3,
      explain: "Delhi students are Aarav (16), Chhavi (17) and Esha (18); the condition Age &gt; 16 keeps Chhavi and Esha only.",
      diff: "M"
    },
    {
      q: "<b>Relation: STUDENT</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Roll</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Name</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Aarav</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Bhavya</td></tr></table><br><b>Relation: MARKS</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Roll</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Subject</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Score</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Maths</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">90</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Maths</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">78</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Science</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">92</td></tr></table><br>Which set of columns does the result of <code>STUDENT ⋈ MARKS</code> have?",
      options: [
        "Roll, Name, Roll, Subject, Score",
        "Roll, Subject, Score",
        "Roll, Name, Subject, Score, Roll",
        "Roll, Name, Subject, Score"
      ],
      answer: 3,
      explain: "Natural join combines tuples on the common attribute Roll and includes that column only once, giving Roll, Name, Subject, Score.",
      diff: "M"
    },
    {
      q: "<b>Relation: STUDENT</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Roll</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Name</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Aarav</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Bhavya</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Chhavi</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Dev</td></tr></table><br><b>Relation: MARKS</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Roll</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Score</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">90</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">78</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">92</td></tr></table><br>What is the result of <code>STUDENT ⋈ MARKS</code>?",
      options: [
        "3 tuples; Chhavi (Roll 3) is dropped because she has no marks",
        "4 tuples; Chhavi (Roll 3) appears with NULL marks",
        "3 tuples; Dev (Roll 4) is dropped",
        "5 tuples; all rows from both relations appear"
      ],
      answer: 0,
      explain: "Natural join keeps only rows whose Roll matches in both relations: rolls 1, 2 and 4 — (1, Aarav, 90), (2, Bhavya, 78), (4, Dev, 92).",
      diff: "M"
    },
    {
      q: "<b>Relation: TEACHER</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>TID</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Name</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">T1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Meera</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">T2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Rohan</td></tr></table><br><b>Relation: DEPT</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DID</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>TID</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DName</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">D1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">T1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Maths</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">D2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">T2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Science</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">D3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">T1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Physics</td></tr></table><br>What is the key difference between <code>TEACHER ⋈ DEPT</code> and the equi-join <code>TEACHER ⋈<sub>TID=TID</sub> DEPT</code>?",
      options: [
        "They produce identical results in all cases",
        "Natural join removes the duplicate TID column; equi-join keeps both copies of TID",
        "Equi-join removes duplicate columns; natural join keeps both copies",
        "Equi-join works only when the join condition uses a non-equality comparison"
      ],
      answer: 1,
      explain: "An equi-join is a theta join with an equality condition — it keeps both join attributes. Natural join combines on all common attributes and drops the redundant column.",
      diff: "M"
    },
    {
      q: "A <b>theta join</b> <code>R ⋈<sub>θ</sub> S</code> allows the condition θ to be:",
      options: [
        "Only equality between columns",
        "Only a condition on a single attribute",
        "Any comparison such as =, &gt;, &lt;, ≤, ≥, ≠ between attributes",
        "Only conditions comparing an attribute with a constant"
      ],
      answer: 2,
      explain: "Theta join generalizes joins to any comparison condition. The equi-join is the special case where θ is equality.",
      diff: "M"
    },
    {
      q: "<b>Relation: STUDENT</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Roll</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Name</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Aarav</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Bhavya</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Chhavi</td></tr></table><br><b>Relation: MARKS</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Roll</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Score</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">90</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">78</td></tr></table><br>What is the result of the left outer join <code>STUDENT ⟕ MARKS</code>?",
      options: [
        "2 tuples; only matching rolls appear",
        "3 tuples; Chhavi (Roll 3) appears with a NULL score",
        "3 tuples; Bhavya (Roll 2) gets a NULL score",
        "2 tuples; Chhavi (Roll 3) is dropped"
      ],
      answer: 1,
      explain: "Left outer join keeps every tuple of the left relation and pads unmatched right-side attributes with NULL: (1, Aarav, 90), (2, Bhavya, 78), (3, Chhavi, NULL).",
      diff: "M"
    },
    {
      q: "<b>Relation: STUDENT</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Roll</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Name</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Aarav</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Bhavya</td></tr></table><br><b>Relation: MARKS</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Roll</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Score</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">90</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">85</td></tr></table><br>What is the result of the right outer join <code>STUDENT ⟖ MARKS</code>?",
      options: [
        "2 tuples; Roll 3 appears with a NULL name",
        "2 tuples; Roll 3 is dropped",
        "1 tuple; only the common roll appears",
        "3 tuples; Roll 2 gets a NULL score"
      ],
      answer: 0,
      explain: "Right outer join keeps every tuple of the right relation: (1, Aarav, 90) and (3, NULL, 85) — Roll 3 has no student, so Name is padded with NULL.",
      diff: "M"
    },
    {
      q: "The division operator <code>R ÷ S</code> returns:",
      options: [
        "Tuples of S that also appear in R",
        "Tuples of R that match at least one tuple of S",
        "Tuples of R that match no tuple of S",
        "Tuples of R that match every tuple of S on the common attributes"
      ],
      answer: 3,
      explain: "Division is the \"for all\" operator: a tuple of R appears in R ÷ S only if its values on the common attributes match every tuple of S.",
      diff: "M"
    },
    {
      q: "Which relational algebra expression is equivalent to the SQL query<br><code>SELECT Name FROM STUDENT WHERE City = 'Delhi'</code>?",
      options: [
        "<code>σ City='Delhi' (π Name (STUDENT))</code>",
        "<code>π City (σ Name (STUDENT))</code>",
        "<code>σ Name (π City='Delhi' (STUDENT))</code>",
        "<code>π Name (σ City='Delhi' (STUDENT))</code>"
      ],
      answer: 3,
      explain: "The WHERE clause becomes σ and the SELECT column list becomes π. Selection is applied first (inside), then projection: π Name (σ City='Delhi' (STUDENT)).",
      diff: "M",
      diagram: "flowchart LR\n  SQL[\"SELECT Name FROM STUDENT WHERE City = 'Delhi'\"] --> WHERE[\"σ City='Delhi' (STUDENT)\"]\n  WHERE --> COLS[\"π Name\"]",
      diagramCaption: "Mapping of a SQL query to relational algebra"
    },
    {
      q: "<b>Relation: MARKS</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Roll</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Sub</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Score</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Maths</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">90</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Science</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">85</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Maths</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">78</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Science</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">92</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Maths</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">88</td></tr></table><br>Which set of rolls is returned by <code>π Roll (σ Score&gt;80 (MARKS))</code>?",
      options: [
        "Rolls {1, 2, 3}",
        "Rolls {1, 2}",
        "Rolls {1, 3}",
        "Rolls {2, 3}"
      ],
      answer: 0,
      explain: "Scores above 80: 90 and 85 (Roll 1), 92 (Roll 2), 88 (Roll 3); after projection removes duplicates, we get {1, 2, 3}.",
      diff: "M"
    },
    {
      q: "<b>Relation: STUDENT</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Roll</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Name</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Aarav</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Bhavya</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Chhavi</td></tr></table><br><b>Relation: MARKS</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Roll</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Score</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">90</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">85</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">92</td></tr></table><br>How many tuples are in the result of the full outer join <code>STUDENT ⟗ MARKS</code>?",
      options: ["3", "5", "2", "4"],
      answer: 3,
      explain: "Full outer join keeps all rows from both sides: (1, Aarav, 90), (2, Bhavya, NULL), (3, Chhavi, 85), (4, NULL, 92) — 4 tuples, with NULL padding on either side as needed.",
      diff: "H"
    },
    {
      q: "<b>Relation: STUDENT</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Roll</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Name</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Aarav</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Bhavya</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Chhavi</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Dev</td></tr></table><br><b>Relation: MARKS</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Roll</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Subject</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Maths</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Science</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Maths</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Science</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Maths</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Maths</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">Science</td></tr></table><br><b>Relation: SUBJECT</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>Subject</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">Maths</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">Science</td></tr></table><br>Which rolls appear in the result of <code>MARKS ÷ SUBJECT</code> (students with a mark in every subject)?",
      options: [
        "Rolls {1, 2}",
        "Rolls {1, 3, 4}",
        "Rolls {1, 2, 4}",
        "Rolls {1, 2, 3}"
      ],
      answer: 2,
      explain: "Division keeps rolls having a row for <b>every</b> subject in SUBJECT: rolls 1, 2 and 4. Roll 3 has only Maths, so it is excluded.",
      diff: "H"
    },
    {
      q: "Given <code>STUDENT(Roll, Name, City)</code> and <code>MARKS(Roll, Score)</code>, which expression gives the <b>names of students from Delhi who scored more than 80</b>?",
      options: [
        "<code>π Name (σ City='Delhi' AND Score&gt;80 (STUDENT × MARKS))</code>",
        "<code>π Name (σ City='Delhi' OR Score&gt;80 (STUDENT ⋈ MARKS))</code>",
        "<code>π Name (σ City='Delhi' AND Score&gt;80 (STUDENT ⋈ MARKS))</code>",
        "<code>σ City='Delhi' (π Name (STUDENT ⋈ MARKS))</code>"
      ],
      answer: 2,
      explain: "Join first so Score is available with the student, then select with the combined AND condition, then project names. The × version would pair scores with the wrong students; OR would include non-Delhi students.",
      diff: "H"
    },
    {
      q: "R has attributes <code>A, B</code> and S has attributes <code>C, D</code> — the two relations share <b>no common attribute name</b>. Then <code>R ⋈ S</code> is equivalent to:",
      options: ["R ∪ S", "R ∩ S", "R − S", "R × S"],
      answer: 3,
      explain: "With no common attributes, the natural-join match condition is always true, so every tuple of R pairs with every tuple of S — the join degenerates into a cartesian product.",
      diff: "H"
    },
    {
      q: "In the nested expression <code>π Name (σ Score&gt;90 (STUDENT ⋈ MARKS))</code>, which operation is executed <b>first</b>?",
      options: [
        "π (projection) is executed first",
        "σ (selection) is executed first",
        "⋈ (natural join) is executed first",
        "All three are executed at the same time"
      ],
      answer: 2,
      explain: "Nested expressions are evaluated innermost first: the join produces the combined relation, then σ filters it, then π projects the required column.",
      diff: "H",
      diagram: "flowchart TD\n  JOIN[\"STUDENT ⋈ MARKS\"] --> SIGMA[\"σ Score > 90\"]\n  SIGMA --> PI[\"π Name\"]",
      diagramCaption: "Order of evaluation of a nested relational algebra expression"
    },
    {
      q: "<b>Relation: R</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>A</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>B</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">x</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">y</td></tr></table><br><b>Relation: S</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>A</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>B</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">y</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">z</td></tr></table><br>Which statement about the set operations on R and S is <b>true</b>?",
      options: [
        "R ∪ S has 4 tuples",
        "R ∩ S has 2 tuples",
        "R − S has exactly 1 tuple",
        "R − S has 2 tuples"
      ],
      answer: 2,
      explain: "R − S removes tuples of S from R: (2, y) is dropped, leaving only (1, x) — 1 tuple. R ∪ S has 3 tuples and R ∩ S has 1 tuple.",
      diff: "H"
    }
  ]
});
