// September 22 Examination — Section B: CBSE PYQ Short Answer Questions.
// 15 questions · 2 marks each · WRITTEN answers (emailed for evaluation).
window.SEPT22_TOPICS = window.SEPT22_TOPICS || [];
window.SEPT22_TOPICS.push({
  key: "pyq-short-answer",
  name: "Section B — PYQ Short Answer (2 Marks)",
  questions: [
    {
      type: "written",
      marks: 2,
      q: "What is the difference between <b>=</b> and <b>==</b> in Python? Give an example of each.<br/><br/><i>(CBSE 2025 Compartment)</i>",
      explain: "= is the assignment operator (x = 5 stores 5 in x); == is the comparison operator (x == 5 evaluates to True/False).",
      diff: "E"
    },
    {
      type: "written",
      marks: 2,
      q: "Give an example of each of the following:<br/>(i) An expression using any one <b>identity operator</b>.<br/>(ii) An <b>arithmetic expression</b> which uses any one <b>augmented assignment operator</b>.<br/><br/><i>(CBSE 2025 Compartment)</i>",
      explain: "(i) a is b (or a is not b) — identity operators check whether two names refer to the same object. (ii) x += 5 — augmented assignment combines an operation with assignment.",
      diff: "E"
    },
    {
      type: "written",
      marks: 2,
      q: "Assuming that D1 and D2 are Python dictionaries, write the following statements using built-in functions/methods:<br/>(i) To delete all the elements of D1, and to generate a list of the values of D2.<br/>(ii) To update dictionary D2 with the elements of D1, and to generate a tuple of the keys of D2.<br/><br/><i>(CBSE 2025 Compartment)</i>",
      explain: "(i) D1.clear() and list(D2.values()); (ii) D2.update(D1) and tuple(D2.keys()).",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "The code given below is intended to input a positive integer and display the total number of its factors. There are syntax and logical errors. Rewrite the code after removing all the errors. <b>Underline all corrections made.</b><br/><pre>n=int(input(\"Enter a positive integer:\")\nc=0\nfor i in range(n+1):\n    if n%i=0:\n        c+=1\nprint(c)</pre><i>(CBSE 2025 Compartment)</i>",
      explain: "Corrections: missing closing bracket in input(); range should start at 1 and exclude 0 (range(1, n+1)) to avoid ZeroDivisionError; == instead of = in the if; indentation fixed.",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "(i) Write any one difference between <b>CHAR</b> and <b>VARCHAR</b> data types in MySQL.<br/>(ii) Write one difference between the <b>PRIMARY KEY</b> and the <b>UNIQUE</b> constraint.<br/><br/><i>(CBSE 2025 Compartment)</i>",
      explain: "(i) CHAR is fixed-length (pads with spaces); VARCHAR is variable-length. (ii) A primary key cannot contain NULL values; a UNIQUE column may allow NULL.",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "(i) Expand the following terms: <b>POP</b>, <b>TCP</b>.<br/>(ii) Write any one difference between a <b>hub</b> and a <b>switch</b> used in computer networks.<br/><br/><i>(CBSE 2025 Compartment)</i>",
      explain: "(i) POP = Post Office Protocol; TCP = Transmission Control Protocol. (ii) A hub broadcasts data to all ports causing collisions; a switch forwards data only to the destination port using MAC addresses.",
      diff: "E"
    },
    {
      type: "written",
      marks: 2,
      q: "What is the difference between <b>default parameters</b> and <b>positional parameters</b> in Python? Also give an example of a function header that uses both.<br/><br/><i>(CBSE 2026)</i>",
      explain: "Positional parameters receive values by position and are mandatory; default parameters have preset values used when the argument is omitted. Example: def f(a, b=5).",
      diff: "E"
    },
    {
      type: "written",
      marks: 2,
      q: "Write a Python statement for each of the following tasks (use built-in functions/methods only):<br/>(i) To create a new list L1 containing the elements of list L arranged in ascending order, <b>without modifying</b> L.<br/>(ii) A statement to check whether the given character <code>ch</code> is an alphabet or a number.<br/><br/><i>(CBSE 2026)</i>",
      explain: "(i) L1 = sorted(L)  (ii) ch.isalnum() — True if ch is a letter or a digit.",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "Assuming that D1 is a dictionary in Python:<br/>(i) Write an expression to check if the key 'RNo' is present in D1.<br/>(ii) Write a single statement using a built-in method to add the pair 'RNo' : 12 if the key 'RNo' is not present — but return its existing value if it is present.<br/><br/><i>(CBSE 2026)</i>",
      explain: "(i) 'RNo' in D1  (ii) D1.setdefault('RNo', 12) — adds the key with the default value only if absent.",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "The function given below is intended to return the number of vowels in a string. It has logical and syntax errors. Rewrite it after removing all errors. <b>Underline all corrections made.</b><br/><pre>def CountVowels(s):\n    c=0\n    for ch in range(s):\n        if 'aeiouAEIOU' in ch:\n            c=+1\n    return(ch)</pre><i>(CBSE 2026)</i>",
      explain: "Corrections: iterate over the string itself (for ch in s:); test membership the other way ('aeiouAEIOU' must contain ch); increment with c+=1 (not c=+1); return c (not ch).",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "Ms. Zoya wants to create a table <b>W_STOCK</b> in a database to track packaged mineral water stock, with fields: W_Code CHAR(5), W_Description VARCHAR(20), B_Qty INTEGER, U_Price FLOAT.<br/>(i) Write an SQL command to create the table (W_Code as primary key).<br/>(ii) Write an SQL command to add an attribute E_Date of DATE type to the table.<br/><br/><i>(CBSE 2026)</i>",
      explain: "(i) CREATE TABLE W_STOCK (W_Code CHAR(5) PRIMARY KEY, W_Description VARCHAR(20), B_Qty INTEGER, U_Price FLOAT);  (ii) ALTER TABLE W_STOCK ADD E_Date DATE;",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "(i) List one advantage and one disadvantage of <b>Bus topology</b>.<br/>(ii) What is a <b>protocol</b> in the context of computer networks? Which protocol is used to transmit hypertext across the web?<br/><br/><i>(CBSE 2026)</i>",
      explain: "(i) Advantage: simple and needs the least cable; disadvantage: a fault in the backbone brings down the whole network. (ii) A protocol is a set of rules for data communication; HTTP/HTTPS transmit hypertext on the web.",
      diff: "E"
    },
    {
      type: "written",
      marks: 2,
      q: "Differentiate between <b>find()</b> and <b>index()</b> with respect to strings in Python. Give supporting examples for both.<br/><br/><i>(CBSE 2026 Compartment)</i>",
      explain: "Both return the position of a substring, but find() returns −1 when the substring is absent, while index() raises a ValueError. Example: 'abc'.find('x') → −1; 'abc'.index('x') → ValueError.",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "Consider the tuple <code>PRICE = (100, 55, 72, 65, 85, 90)</code>.<br/>(i) Write a single-line statement that displays the contents of PRICE in ascending order.<br/>(ii) Write a single-line Python statement using built-in methods to display string S with every occurrence of the alphabet 'i' replaced by an underscore. For S = \"time is precious\", the output is <code>t_me _s prec_ous</code>.<br/><br/><i>(CBSE 2026 Compartment)</i>",
      explain: "(i) print(sorted(PRICE))  (ii) print(S.replace('i', '_'))",
      diff: "E"
    },
    {
      type: "written",
      marks: 2,
      q: "The code given below is intended to display all numbers <b>not divisible by 7</b> from the given list. There are syntax and logical errors. Rewrite it after removing all errors. <b>Underline all corrections made.</b><br/><pre>define display(L):\n    for i in range(0,len(L))\n        if i % 7 = = 0:\n            break\n        else:\n            print(L[i])\nnumbers = [11,21,33,42,55]\ndisplay(numbers)</pre><i>(CBSE 2026 Compartment)</i>",
      explain: "Corrections: def instead of define; colon after the range(); compare L[i] % 7 (not the index i); use == and continue instead of break (break would stop the loop); remove else (print only when not divisible).",
      diff: "H"
    },
  ],
});
