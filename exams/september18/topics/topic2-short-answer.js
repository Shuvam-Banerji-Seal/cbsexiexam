// September 18 Examination — Section B: CBSE PYQ Short Answer Questions.
// 15 questions · 2 marks each · WRITTEN answers (emailed for evaluation).
// Sourced from CBSE Class XII Computer Science board papers (2022–2024).
window.SEPT18_TOPICS = window.SEPT18_TOPICS || [];
window.SEPT18_TOPICS.push({
  key: "pyq-short-answer",
  name: "Section B — PYQ Short Answer (2 Marks)",
  questions: [
    {
      type: "written",
      marks: 2,
      q: "Differentiate between <b>Push</b> and <b>Pop</b> operations in the context of stacks.<br/><br/><i>(CBSE 2022 Compartment)</i>",
      explain: "Push adds an element on top of the stack; Pop removes and returns the topmost element. Both operate only at the TOP of the stack (LIFO).",
      diff: "E"
    },
    {
      type: "written",
      marks: 2,
      q: "Differentiate between <b>Degree</b> and <b>Cardinality</b> in the context of the Relational Data Model.<br/><br/><i>(CBSE 2022 Compartment)</i>",
      explain: "Degree = number of attributes (columns) in a relation; Cardinality = number of tuples (rows) in a relation.",
      diff: "E"
    },
    {
      type: "written",
      marks: 2,
      q: "Explain <b>Primary Key</b> in the context of the Relational Database Model. Support your answer with a suitable example.<br/><br/><i>(CBSE 2022 Compartment)</i>",
      explain: "A primary key is a candidate key chosen to uniquely identify each tuple in a relation. It cannot be NULL and cannot repeat. Example: Roll_No in a STUDENT table.",
      diff: "E"
    },
    {
      type: "written",
      marks: 2,
      q: "Ravi, a Python programmer, wants to write a function to count the number of even and odd values in a list. He has written the following code, but it has errors. <b>Rewrite the correct code and underline the corrections made.</b><br/><pre>define EOCOUNT(L):\n    even_no=odd_no=0\n    for i in range(0,len(L))\n        if L[i]%2=0:\n            even_no+=1\n        Else:\n            odd_no+=1\n    print(even_no, odd_no)</pre><i>(CBSE 2023 Compartment)</i>",
      explain: "Corrections: def instead of define; colon after range(0,len(L)); == instead of = in the if; lowercase else. Final code: def EOCOUNT(L): with even_no+=1 / odd_no+=1 and print at the end.",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "Write any <b>two differences</b> between a fibre-optic cable and a co-axial cable.<br/><br/><i>(CBSE 2023 Compartment)</i>",
      explain: "Fibre optic: transmits light, very high bandwidth, immune to electromagnetic interference, expensive. Co-axial: transmits electrical signals, lower bandwidth than fibre, cheaper, used for cable TV. Any two correct differences score full marks.",
      diff: "E"
    },
    {
      type: "written",
      marks: 2,
      q: "Explain the usage of the <b>HAVING</b> clause with the GROUP BY command in RDBMS, with the help of an example.<br/><br/><i>(CBSE 2023 Compartment)</i>",
      explain: "HAVING filters groups formed by GROUP BY (WHERE cannot be used with aggregate functions). Example: SELECT FCODE, COUNT(*) FROM GARMENT GROUP BY FCODE HAVING COUNT(*)>1;",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "Write the full forms of the following:<br/>(i) XML<br/>(ii) HTTPS<br/><br/>Also state what <b>FTP</b> is used for.<br/><br/><i>(CBSE 2023 Compartment)</i>",
      explain: "XML = eXtensible Markup Language; HTTPS = HyperText Transfer Protocol Secure. FTP (File Transfer Protocol) is used to upload and download files between a client and a server.",
      diff: "E"
    },
    {
      type: "written",
      marks: 2,
      q: "Differentiate between the <b>IN</b> and <b>BETWEEN</b> operators in SQL with appropriate examples.<br/><br/><i>(CBSE 2023 Compartment)</i>",
      explain: "IN checks membership in a given list of values — WHERE CITY IN ('DELHI','MUMBAI'). BETWEEN checks a range (inclusive) — WHERE PRICE BETWEEN 100 AND 500.",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "Expand the following terms:<br/>(i) URL<br/>(ii) XML<br/><br/>Also give one difference between <b>HTTP</b> and <b>FTP</b>.<br/><br/><i>(CBSE 2024 Compartment)</i>",
      explain: "URL = Uniform Resource Locator; XML = eXtensible Markup Language. HTTP transfers web pages between browser and server; FTP transfers files between client and server.",
      diff: "E"
    },
    {
      type: "written",
      marks: 2,
      q: "(i) Define the term <b>IP address</b> with respect to a network.<br/>(ii) What is the main purpose of a <b>Router</b>?<br/><br/><i>(CBSE 2024 Compartment)</i>",
      explain: "IP address: a unique logical address assigned to each device on a network (IPv4 = 32-bit, four octets). Router: connects two or more different networks and forwards packets between them using IP addresses.",
      diff: "E"
    },
    {
      type: "written",
      marks: 2,
      q: "Observe the following code carefully and rewrite it after removing all syntactical errors. <b>Underline all the corrections made.</b><br/><pre>def 1func():\n    a=input(\"Enter a number\"))\n    if a>=33\n        print(\"Promoted to next class\")\n    ELSE:\n        print(\"Repeat\")</pre><i>(CBSE 2024 Compartment)</i>",
      explain: "Corrections: function name cannot start with a digit (def func()); extra closing bracket removed from input(); colon added after if a>=33; ELSE → else. (Also note a=input() returns a string; int(a) would be needed for the comparison.)",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "Write the definition of a method/function <b>SearchOut(Teachers, TName)</b> to search for TName from a list Teachers and display the position of its presence.<br/><br/>For example, if Teachers = [\"Ankit\", \"Siddharth\", \"Rahul\", \"Sangeeta\", \"rahul\"] and TName = \"Rahul\", the function should display:<br/><code>Rahul at 2</code><br/><code>rahul at 4</code><br/><br/><i>(CBSE 2024 Compartment)</i>",
      explain: "Loop over the list with index; if Teachers[i] == TName, print TName, 'at', i. Note the example prints positions 2 and 4 (1-based).",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "Mr. Atharva is given a task to create a database named <b>Admin</b>. He has to create a table <b>users</b> in that database with the following columns:<br/>User_id – int<br/>User_name – varchar(20)<br/>Password – varchar(10)<br/><br/>Write the SQL queries for both tasks.<br/><br/><i>(CBSE 2024 Compartment)</i>",
      explain: "CREATE DATABASE Admin; then USE Admin; then CREATE TABLE users (User_id INT, User_name VARCHAR(20), Password VARCHAR(10));",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "Predict the output of the following code:<br><pre>def Total (Num=10):\n    Sum=0\n    for C in range(1,Num+1):\n        if C%2!=0:\n            continue\n        Sum+=C\n    return Sum\nprint(Total(4),end=\"$\")\nprint(Total(),sep=\"@\")</pre><i>(CBSE 2024 Compartment)</i>",
      explain: "Total(4): skips odd numbers 1,3; adds 2+4 = 6 → prints 6$. Total(): adds evens up to 10 → 2+4+6+8+10 = 30 → prints 30. Output: 6$30",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "Write the Python statement for each of the following tasks using <b>built-in functions/methods only</b>:<br/>(i) To delete an element 10 from the list <code>lst</code>.<br/>(ii) To replace the string \"This\" with \"That\" in the string <code>str1</code>.<br/><br/><i>(CBSE 2024 Compartment)</i>",
      explain: "(i) lst.remove(10)  (ii) str1 = str1.replace(\"This\", \"That\")",
      diff: "M"
    },
  ],
});
