// September 26 Examination — Section A: CBSE PYQ Objective (MCQ).
// 30 questions · 1 mark each · Third Sitting — new questions from CBSE board papers (2022–2026).
window.SEPT26_TOPICS = window.SEPT26_TOPICS || [];
window.SEPT26_TOPICS.push({
  key: "pyq-objective",
  name: "Section A — PYQ Objective (MCQ)",
  questions: [
    {
      q: "State True or False:<br/>\"In Python, the data type of 74 is the same as the data type of 74.0.\"",
      options: ["True", "False"],
      answer: 1,
      explain: "74 is an int and 74.0 is a float — different types. <i>(CBSE 2026)</i>",
      diff: "E"
    },
    {
      q: "What will be the output of the following statement?<br><pre>print(\"PythonProgram\"[-1:2:-2])</pre>",
      options: ["mroPo", "Po", "oProm", "Error"],
      answer: 0,
      explain: "Starting at index −1 ('m') and stepping −2 through indices 12, 10, 8, 6, 4 gives m, r, o, P, o → 'mroPo'. <i>(CBSE 2026)</i>",
      diff: "H"
    },
    {
      q: "Which of the following SQL commands can change the <b>degree</b> of a table?",
      options: ["DROP TABLE", "ALTER TABLE", "UPDATE … SET", "DELETE"],
      answer: 1,
      explain: "ALTER TABLE can add or drop columns, changing the number of attributes (degree). <i>(CBSE 2026)</i>",
      diff: "M"
    },
    {
      q: "A relation in a MySQL database consists of 2 tuples and 3 attributes. If 2 more records are added to it, what will be the new degree and cardinality?",
      options: ["5 and 3", "3 and 4", "4 and 3", "3 and 5"],
      answer: 1,
      explain: "Degree = number of attributes = 3 (unchanged). Cardinality = number of tuples = 2 + 2 = 4. <i>(CBSE 2026)</i>",
      diff: "M"
    },
    {
      q: "Which aggregate function in SQL returns the smallest value from a column?",
      options: ["MIN()", "SMALL()", "LOWEST()", "LEAST()"],
      answer: 0,
      explain: "MIN(column) returns the smallest value in that column. <i>(CBSE 2026)</i>",
      diff: "E"
    },
    {
      q: "Which of the following modes opens an existing binary file for <b>reading</b> only?",
      options: ["'rb'", "'ab'", "'w'", "'r'"],
      answer: 0,
      explain: "'rb' opens a binary file in read mode. 'r' is text mode; 'ab' is binary append; 'w' truncates. <i>(CBSE 2026 Compartment)</i>",
      diff: "E"
    },
    {
      q: "Which statement is TRUE about find() and index() for strings in Python?",
      options: ["find() raises an error when the substring is absent; index() returns -1.", "index() raises ValueError when the substring is absent; find() returns -1.", "Both return -1 when the substring is absent.", "Both raise ValueError when the substring is absent."],
      answer: 1,
      explain: "find() is safe (returns −1), index() raises ValueError. <i>(CBSE 2026 Compartment — Q22 context)</i>",
      diff: "M"
    },
    {
      q: "PIN codes are exactly 6 characters long. Which MySQL data type is best suited for the PIN code column?",
      options: ["CHAR(6)", "VARCHAR(6)", "INT(6)", "TEXT(6)"],
      answer: 0,
      explain: "CHAR(n) stores fixed-length strings — ideal for values that are always 6 characters. <i>(CBSE 2024 Compartment — datatype context)</i>",
      diff: "M"
    },
    {
      q: "Which network device maintains a MAC address table to forward frames only to the intended port?",
      options: ["Hub", "Repeater", "Switch", "Modem"],
      answer: 2,
      explain: "A switch learns MAC addresses per port and forwards frames selectively; a hub broadcasts everything. <i>(CBSE 2025 Compartment — hub vs switch context)</i>",
      diff: "M"
    },
    {
      q: "Which of the following is a disadvantage of bus topology?",
      options: ["It requires a central switch.", "A fault in the backbone cable can bring down the whole network.", "Each node needs a dedicated link to every other node.", "It cannot connect more than two computers."],
      answer: 1,
      explain: "The shared backbone is a single point of failure. <i>(CBSE 2026)</i>",
      diff: "E"
    },
    {
      q: "Which of the following statements is TRUE about = and == in Python?",
      options: ["= is used for comparison; == is used for assignment.", "== is used for comparison; = is used for assignment.", "Both can be used interchangeably.", "= works only with numbers."],
      answer: 1,
      explain: "= assigns a value to a variable; == compares two values and returns True/False. <i>(CBSE 2025 Compartment — Q22 context)</i>",
      diff: "E"
    },
    {
      q: "For the function definition <code>def calc(x, y=10):</code>, what will y be when the function is called as <code>calc(3)</code>?",
      options: ["0", "3", "10", "Error"],
      answer: 2,
      explain: "When the second argument is omitted, the default value y=10 is used. <i>(CBSE 2026 — default parameters context)</i>",
      diff: "E"
    },
    {
      q: "Which statement creates a new <b>sorted list</b> from list L <b>without modifying</b> L?",
      options: ["L.sort()", "sorted(L)", "L.sorted()", "sort(L)"],
      answer: 1,
      explain: "sorted(L) returns a new sorted list; L.sort() sorts in place and modifies L. <i>(CBSE 2026 — Q23 context)</i>",
      diff: "M"
    },
    {
      q: "Which method returns the number of non-overlapping occurrences of the substring 'is' in a string named message?",
      options: ["message.count('is')", "message.find('is')", "message.index('is')", "len(message)"],
      answer: 0,
      explain: "count() counts occurrences of a substring; find()/index() return only the first position. <i>(CBSE 2024 — Q23 context)</i>",
      diff: "E"
    },
    {
      q: "To process a text file and display only the lines ending with a full stop (.), which condition is correct in Python?",
      options: ["line.endswith('.')", "line.startswith('.')", "line.find('.')", "line.isdot()"],
      answer: 0,
      explain: "endswith('.') tests the last character; strip() the line first if it has trailing whitespace/newline. <i>(CBSE 2025 Compartment — Q29 context)</i>",
      diff: "M"
    },
    {
      q: "Which of the following reads a text file line by line using the <b>least memory</b>?",
      options: ["for line in f:", "f.read()", "f.readlines()", "f.read(10000)"],
      answer: 0,
      explain: "Iterating over the file object yields one line at a time; read()/readlines() load the entire file into memory. <i>(CBSE file-handling pattern)</i>",
      diff: "M"
    },
    {
      q: "A <b>foreign key</b> in a table:",
      options: ["must contain only unique values.", "refers to the primary key of another table, establishing a link between the tables.", "cannot contain NULL values.", "is always the first column of the table."],
      answer: 1,
      explain: "A foreign key references the primary/unique key of another table; it may repeat and may be NULL. <i>(CBSE 2026 Compartment — Q27 context)</i>",
      diff: "M"
    },
    {
      q: "Which clause is used to filter <b>groups</b> formed by the GROUP BY clause?",
      options: ["WHERE", "HAVING", "ORDER BY", "LIMIT"],
      answer: 1,
      explain: "WHERE filters rows before grouping; HAVING filters the groups produced by GROUP BY. <i>(CBSE SQL pattern)</i>",
      diff: "M"
    },
    {
      q: "Which is the correct command to add a column <code>Category</code> of type VARCHAR(10) to a table named Sports?",
      options: ["ALTER TABLE Sports ADD Category VARCHAR(10);", "ALTER Sports TABLE ADD Category;", "UPDATE Sports ADD Category;", "INSERT INTO Sports Category;"],
      answer: 0,
      explain: "ALTER TABLE … ADD column type is the DDL syntax for adding an attribute. <i>(CBSE 2024 — Q24 context)</i>",
      diff: "M"
    },
    {
      q: "Which clause displays records in <b>descending</b> order of the Salary column?",
      options: ["ORDER BY Salary DESC", "SORT Salary DESC", "GROUP BY Salary DESC", "ORDER Salary"],
      answer: 0,
      explain: "ORDER BY … DESC sorts the result set in descending order. <i>(CBSE SQL pattern)</i>",
      diff: "E"
    },
    {
      q: "Which aggregate function counts the number of records in a table?",
      options: ["SUM()", "COUNT()", "TOTAL()", "AVG()"],
      answer: 1,
      explain: "COUNT(*) returns the number of rows in a table. <i>(CBSE 2025/2026 SQL pattern)</i>",
      diff: "E"
    },
    {
      q: "FM radio broadcasts inside a campus use which communication medium?",
      options: ["Radio Waves", "Micro Waves", "Infrared Waves", "Fibre Optics"],
      answer: 0,
      explain: "FM broadcasting uses radio waves, which spread omnidirectionally from the antenna. <i>(CBSE 2026 Q37(iv))</i>",
      diff: "E"
    },
    {
      q: "A repeater is needed in a network when:",
      options: ["Two computers want to share a printer.", "The cable segment exceeds about 100 m and the signal weakens.", "The network switches to Wi-Fi.", "A new user joins the LAN."],
      answer: 1,
      explain: "A repeater regenerates the weakening signal, extending the reach beyond the ~100 m Ethernet segment limit. <i>(CBSE 2025 Compartment — Q37(v) context)</i>",
      diff: "M"
    },
    {
      q: "What is the output of the following statement?<br><pre>print(3 * 'ab')</pre>",
      options: ["ababab", "ab3", "abababab", "Error"],
      answer: 0,
      explain: "Multiplying a string by an integer repeats it that many times: 'ab' three times → ababab. <i>(CBSE Python string pattern)</i>",
      diff: "E"
    },
    {
      q: "What is the output of the following statement?<br><pre>print(10 // 3, 10 % 3)</pre>",
      options: ["3 1", "3.33 1", "1 3", "3 0"],
      answer: 0,
      explain: "// gives floor division (3) and % gives the remainder (1). <i>(CBSE Python operators pattern)</i>",
      diff: "E"
    },
    {
      q: "Which of the following creates an <b>empty set</b> in Python?",
      options: ["{}", "set()", "[]", "()"],
      answer: 1,
      explain: "set() creates an empty set. {} creates an empty dictionary; [] a list; () a tuple. <i>(CBSE Python datatypes pattern)</i>",
      diff: "M"
    },
    {
      q: "For the dictionary <code>d = {\"a\": 1, \"b\": 2}</code>, which of the following returns the value 1?",
      options: ["d.get(\"a\")", "d.pop(\"b\")", "d.values()", "d.keys()"],
      answer: 0,
      explain: "d.get(\"a\") returns the value stored against key 'a'; values() and keys() return collections. <i>(CBSE dictionary pattern)</i>",
      diff: "E"
    },
    {
      q: "Which mode opens a file for <b>both reading and writing</b> with the file pointer at the beginning, without truncating the file?",
      options: ["'r+'", "'a+'", "'w'", "'rb'"],
      answer: 0,
      explain: "'r+' allows reading and writing on an existing file from the start; 'a+' writes at the end; 'w' truncates. <i>(CBSE file-modes pattern)</i>",
      diff: "M"
    },
    {
      q: "In Python, the statement <code>int(\"abc\")</code> raises which exception?",
      options: ["TypeError", "ValueError", "NameError", "IndexError"],
      answer: 1,
      explain: "The type is correct (a string) but the value is invalid — ValueError. <i>(CBSE exception-handling pattern)</i>",
      diff: "M"
    },
    {
      q: "Which of the following is NOT a transmission medium?",
      options: ["Co-axial cable", "Fibre optic cable", "Microwave", "Modem"],
      answer: 3,
      explain: "A modem is a device, not a medium; the others carry signals. <i>(CBSE networking pattern)</i>",
      diff: "E"
    },
  ],
});
