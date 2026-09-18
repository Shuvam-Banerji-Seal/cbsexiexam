// September 18 Examination — Section A: CBSE PYQ Objective (MCQ).
// 50 questions · 1 mark each · sourced from CBSE Class XII Computer Science board papers (2022–2026).
window.SEPT18_TOPICS = window.SEPT18_TOPICS || [];
window.SEPT18_TOPICS.push({
  key: "pyq-objective",
  name: "Section A — PYQ Objective (MCQ)",
  questions: [
    {
      q: "Which of the following is <b>not</b> a sequential datatype in Python?",
      options: ["Dictionary", "String", "List", "Tuple"],
      answer: 0,
      explain: "Dictionary is a mapped (key-value) datatype, not a sequential one. String, list and tuple are all sequences. <i>(CBSE 2023 Compartment)</i>",
      diff: "E"
    },
    {
      q: "Given the dictionary<br><pre>Day={1:\"Monday\", 2: \"Tuesday\", 3: \"Wednesday\"}</pre>Which statement will return \"Tuesday\"?",
      options: ["Day.pop()", "Day.pop(2)", "Day.pop(1)", "Day.pop(\"Tuesday\")"],
      answer: 1,
      explain: "pop(2) removes and returns the value stored against key 2 — \"Tuesday\". <i>(CBSE 2023 Compartment)</i>",
      diff: "M"
    },
    {
      q: "Consider the expression:<br><pre>7<4 or 6>3 and not 10==10 or 17>4</pre>Which is the correct output when it is evaluated?",
      options: ["True", "False", "NONE", "NULL"],
      answer: 0,
      explain: "and binds tighter: (6>3 and not 10==10) = True and False = False. Then 7<4 is False and 17>4 is True, so False or False or True = <b>True</b>. <i>(CBSE 2023 Compartment)</i>",
      diff: "M"
    },
    {
      q: "Select the correct output of the code:<br><pre>S=\"Amrit Mahotsav @ 75\"\nA=S.split(\" \",2)\nprint(A)</pre>",
      options: ["('Amrit', 'Mahotsav', '@', '75')", "['Amrit', 'Mahotsav', '@ 75']", "('Amrit', 'Mahotsav', '@ 75')", "['Amrit', 'Mahotsav', '@', '75']"],
      answer: 1,
      explain: "split(sep, maxsplit) performs at most 2 splits, so the remainder '&#64; 75' stays together, and split returns a <b>list</b>. <i>(CBSE 2023 Compartment)</i>",
      diff: "M"
    },
    {
      q: "Which mode in Python creates a new file if it does not exist and overwrites the content if the file exists?",
      options: ["r+", "r", "w", "a"],
      answer: 2,
      explain: "'w' (write) truncates an existing file or creates a new one. <i>(CBSE 2023 Compartment)</i>",
      diff: "E"
    },
    {
      q: "Fill in the blank: ___________ is <b>not</b> a valid built-in function/method for list manipulation.",
      options: ["count()", "length()", "append()", "extend()"],
      answer: 1,
      explain: "There is no length() method for lists — the built-in function is len(). count(), append() and extend() are valid list methods. <i>(CBSE 2023 Compartment)</i>",
      diff: "M"
    },
    {
      q: "Which of the following is an example of an identity operator in Python?",
      options: ["is", "on", "in", "not in"],
      answer: 0,
      explain: "The identity operators are <b>is</b> and <b>is not</b>. 'in' and 'not in' are membership operators. <i>(CBSE 2023 Compartment)</i>",
      diff: "E"
    },
    {
      q: "Which statement(s) would give an error after executing the code?<br><pre>S=\"Happy\"\n# Statement 1\nprint(S*2)\n# Statement 2\nS+=\"Independence\"\n# Statement 3\nS.append(\"Day\")\n# Statement 4\nprint(S)\n# Statement 5</pre>",
      options: ["Statement 2", "Statement 3", "Statement 4", "Statements 3 and 4"],
      answer: 1,
      explain: "Strings are immutable and have no append() method — Statement 3 raises AttributeError. <i>(CBSE 2023 Compartment)</i>",
      diff: "M"
    },
    {
      q: "Fill in the blank: In a relational model, tables are called _________, that store data for different columns.",
      options: ["Attributes", "Degrees", "Relations", "Tuples"],
      answer: 2,
      explain: "In the relational model a table is called a <b>relation</b>; rows are tuples and columns are attributes. <i>(CBSE 2023 Compartment)</i>",
      diff: "E"
    },
    {
      q: "The correct syntax of tell() is:",
      options: ["tell.file_object()", "file_object.tell()", "tell.file_object(1)", "file_object.tell(1)"],
      answer: 1,
      explain: "tell() is a method of the file object and takes no argument: file_object.tell(). <i>(CBSE 2023 Compartment)</i>",
      diff: "E"
    },
    {
      q: "Fill in the blank: _________ statement of SQL is used to insert new records in a table.",
      options: ["ALTER", "UPDATE", "INSERT", "CREATE"],
      answer: 2,
      explain: "INSERT INTO adds new rows; UPDATE modifies existing rows; ALTER changes the structure. <i>(CBSE 2023 Compartment)</i>",
      diff: "E"
    },
    {
      q: "Fill in the blank: In _________ switching, before communication starts, a dedicated path is identified between the sender and the receiver.",
      options: ["Packet", "Graph", "Circuit", "Plot"],
      answer: 2,
      explain: "Circuit switching reserves a dedicated path (like traditional telephone networks); packet switching does not. <i>(CBSE 2023 Compartment)</i>",
      diff: "E"
    },
    {
      q: "Which of the following functions is a valid built-in function for both list and dictionary datatypes?",
      options: ["items()", "len()", "update()", "values()"],
      answer: 1,
      explain: "len() works on both. items(), update() and values() are dictionary methods. <i>(CBSE 2023 Compartment)</i>",
      diff: "M"
    },
    {
      q: "fetchone() method fetches only one row from a ResultSet and returns a __________.",
      options: ["Tuple", "List", "Dictionary", "String"],
      answer: 0,
      explain: "fetchone() returns a single row as a tuple. <i>(CBSE 2023 Compartment)</i>",
      diff: "M"
    },
    {
      q: "<b>Assertion (A):</b> In Python, a stack can be implemented using a list.<br/><b>Reasoning (R):</b> A stack is an ordered linear list of elements that works on the principle of First In First Out (FIFO).<br/><br/>Mark the correct choice:",
      options: ["Both (A) and (R) are true and (R) is the correct explanation for (A).", "Both (A) and (R) are true and (R) is not the correct explanation for (A).", "(A) is true but (R) is false.", "(A) is false but (R) is true."],
      answer: 2,
      explain: "A stack works on LIFO (Last In First Out), not FIFO — so (A) is true but (R) is false. <i>(CBSE 2023 Compartment)</i>",
      diff: "H"
    },
    {
      q: "<b>Assertion (A):</b> readlines() reads all the lines from a text file and returns the lines along with newline as a list of strings.<br/><b>Reasoning (R):</b> readline() can read the entire text file line by line without using any looping statement.<br/><br/>Mark the correct choice:",
      options: ["Both (A) and (R) are true and (R) is the correct explanation for (A).", "Both (A) and (R) are true and (R) is not the correct explanation for (A).", "(A) is true but (R) is false.", "(A) is false but (R) is true."],
      answer: 2,
      explain: "readlines() indeed returns a list of lines (A true). But readline() reads only ONE line per call — a loop is needed to read the whole file (R false). <i>(CBSE 2023 Compartment)</i>",
      diff: "H"
    },
    {
      q: "The primary key is selected from the set of ___________.",
      options: ["composite keys", "alternate keys", "candidate keys", "foreign keys"],
      answer: 2,
      explain: "The primary key is one of the candidate keys, chosen to uniquely identify rows. <i>(CBSE 2024 Compartment)</i>",
      diff: "M"
    },
    {
      q: "What will be the output of the following statement?<br><pre>print(6+5/4**2//5+8)</pre>",
      options: ["–14.0", "14.0", "14", "–14"],
      answer: 1,
      explain: "** first: 4**2 = 16; then 5/16 = 0.3125; 0.3125//5 = 0.0; 6+0.0+8 = <b>14.0</b> (float). <i>(CBSE 2024 Compartment)</i>",
      diff: "M"
    },
    {
      q: "Select the correct output of the code:<br><pre>S = \"text#next\"\nprint(S.strip(\"t\"))</pre>",
      options: ["ext#nex", "ex#nex", "text#nex", "ext#next"],
      answer: 0,
      explain: "strip(\"t\") removes the leading and trailing 't' characters → 'ext#nex'. <i>(CBSE 2024 Compartment)</i>",
      diff: "M"
    },
    {
      q: "Mr. Ravi is creating a field that contains alphanumeric values of fixed length. Which MySQL data type should he choose?",
      options: ["VARCHAR", "CHAR", "INT", "DATE"],
      answer: 1,
      explain: "CHAR(n) stores fixed-length strings; VARCHAR stores variable-length. <i>(CBSE 2024 Compartment)</i>",
      diff: "M"
    },
    {
      q: "'L' in HTML stands for:",
      options: ["Large", "Language", "Long", "Laser"],
      answer: 1,
      explain: "HTML = HyperText Markup Language. <i>(CBSE 2024 Compartment)</i>",
      diff: "E"
    },
    {
      q: "Identify the valid Python identifier from the following:",
      options: ["2user", "user@2", "user_2", "user 2"],
      answer: 2,
      explain: "Identifiers cannot start with a digit, contain special characters like @, or contain spaces. user_2 is valid. <i>(CBSE 2024 Compartment)</i>",
      diff: "E"
    },
    {
      q: "Consider the statements below and choose the correct output:<br><pre>Game=\"World Cup 2023\"\nprint(Game[-6::-1])</pre>",
      options: ["CdrW", "ce o", "puC dlroW", "Error"],
      answer: 2,
      explain: "Index −6 is 'p' (the 'p' of Cup). Slicing backwards to the start gives 'puC dlroW'. <i>(CBSE 2024 Compartment)</i>",
      diff: "H"
    },
    {
      q: "Predict the output:<br><pre>>>>import statistics as s\n>>>s.mode([10, 20, 10, 30, 10, 20, 30])</pre>",
      options: ["30", "20", "10", "18.57"],
      answer: 2,
      explain: "mode() returns the most frequent value — 10 appears three times. <i>(CBSE 2024 Compartment)</i>",
      diff: "M"
    },
    {
      q: "Which output will <b>never</b> be obtained when the given code is executed?<br><pre>import random\nShuffle = random.randrange(10)+1\nDraw = 10*random.randrange(5)\nprint (\"Shuffle\", Shuffle, end=\"#\")\nprint (\"Draw\", Draw)</pre>",
      options: ["Shuffle 1 # Draw 0", "Shuffle 10 # Draw 10", "Shuffle 10 # Draw 0", "Shuffle 11 # Draw 50"],
      answer: 3,
      explain: "randrange(10)+1 gives 1–10 (never 11) and 10*randrange(5) gives {0,10,20,30,40} (never 50). <i>(CBSE 2024 Compartment)</i>",
      diff: "H"
    },
    {
      q: "Ethernet card is also known as:",
      options: ["LIC", "MIC", "NIC", "OIC"],
      answer: 2,
      explain: "It is a Network Interface Card (NIC). <i>(CBSE 2024 Compartment)</i>",
      diff: "E"
    },
    {
      q: "For the Python statement <code>N = (25)</code>, what shall be the type of N?",
      options: ["Integer", "String", "Tuple", "List"],
      answer: 0,
      explain: "Parentheses around a single value without a comma are just grouping — (25) is an int. A tuple needs a comma: (25,). <i>(CBSE 2024 Compartment)</i>",
      diff: "E"
    },
    {
      q: "State True or False:<br/>\"In Python, tuple is a mutable data type\".",
      options: ["True", "False"],
      answer: 1,
      explain: "Tuples are immutable — their elements cannot be changed after creation. <i>(CBSE 2024 Compartment)</i>",
      diff: "E"
    },
    {
      q: "Identify the output of the code segment:<br><pre>s = \"an apple. a toy.\"\ns=s.find('a',2)\nprint(s)</pre>",
      options: ["0", "1", "3", "&#39;a&#39;"],
      answer: 2,
      explain: "find('a', 2) searches from index 2 and returns the index of the first match — 'a' at index 3. <i>(CBSE 2025 Compartment)</i>",
      diff: "M"
    },
    {
      q: "What is the value of the following expression?<br><pre>3 + 3.0, 3**3.0</pre>",
      options: ["[6.0, 27.0]", "(6.0, 9.0)", "(6, 27)", "(6.0, 27.0)"],
      answer: 3,
      explain: "Mixing int and float promotes to float: 3+3.0 = 6.0 and 3**3.0 = 27.0, packed as a tuple. <i>(CBSE 2025 Compartment)</i>",
      diff: "M"
    },
    {
      q: "What is the output of the following expression?<br><pre>Sports=\"Paralympic Games\"\nprint (Sports.split(\"m\"))</pre>",
      options: ["['Paraly','m','pic Ga','m','es']", "('Paraly','m','pic Games')", "('Paraly','pic Ga','es')", "['Paraly','pic Ga','es']"],
      answer: 3,
      explain: "split() on 'm' cuts at every m and returns a list: ['Paraly','pic Ga','es']. <i>(CBSE 2025 Compartment)</i>",
      diff: "M"
    },
    {
      q: "Which of the following is a mapped data type?",
      options: ["List", "Sets", "Dictionary", "Boolean"],
      answer: 2,
      explain: "Dictionaries map keys to values, so they are mapped datatypes. <i>(CBSE 2025 Compartment)</i>",
      diff: "E"
    },
    {
      q: "If the dictionary D1 is defined as <code>D1={1:'a',2:'b'}</code>, which of the following statements is incorrect and will result in an error?",
      options: ["D1.get(1)", "D1.get(3)", "D1.del(1)", "D1.clear()"],
      answer: 2,
      explain: "There is no del() method — the correct way is <code>del D1[1]</code> or D1.pop(1). get(3) just returns None. <i>(CBSE 2025 Compartment)</i>",
      diff: "M"
    },
    {
      q: "Which of the following list methods accepts exactly 2 parameters?",
      options: ["append()", "extend()", "insert()", "pop()"],
      answer: 2,
      explain: "insert(index, element) takes two arguments. <i>(CBSE 2025 Compartment)</i>",
      diff: "M"
    },
    {
      q: "A text file song.txt contains the line:<br/><code>Life goes on as it never ends</code><br/>What is the output of the code?<br><pre>f1=open(\"song.txt\",\"r\")\ns1=f1.read(5)\ns2=f1.readline(4)\ns3=f1.read(3)\nprint(s1,s3,sep=\"#\")</pre>",
      options: ["goes# on", "Life #goes# on", "Life # on", "Error"],
      answer: 2,
      explain: "read(5) = 'Life '; readline(4) consumes 'goes'; read(3) = ' on'. Printed with sep='#' → 'Life # on'. <i>(CBSE 2025 Compartment)</i>",
      diff: "H"
    },
    {
      q: "State if the following statement is True or False:<br/>\"If T is a tuple and L is a list, then T+L is a valid statement in Python.\"",
      options: ["True", "False"],
      answer: 1,
      explain: "Tuple + list raises TypeError — you cannot concatenate different sequence types. <i>(CBSE 2025 Compartment)</i>",
      diff: "E"
    },
    {
      q: "Which of the following is a keyword in Python?",
      options: ["Break", "None", "For", "Class"],
      answer: 1,
      explain: "Python is case-sensitive — 'Break', 'For' and 'Class' are not keywords, but <b>None</b> is. <i>(CBSE 2026 Compartment)</i>",
      diff: "M"
    },
    {
      q: "What will be the output of the following statement?<br><pre>print(18/3 == 18//3)</pre>",
      options: ["0", "False", "1", "True"],
      answer: 3,
      explain: "18/3 = 6.0 and 18//3 = 6; comparison 6.0 == 6 is <b>True</b>. <i>(CBSE 2026 Compartment)</i>",
      diff: "E"
    },
    {
      q: "Consider the statements below and choose the correct output:<br><pre>D={\"A\":\"MUMBAI\", \"B\":\"CHENNAI\"}\nprint(\"C\" in D)</pre>",
      options: ["False", "0", "True", "1"],
      answer: 0,
      explain: "'C' is not a key in D, so the membership test is False. <i>(CBSE 2026 Compartment)</i>",
      diff: "E"
    },
    {
      q: "What will be the output of the following Python code?<br><pre>try:\n    num = 5\n    text = \"15\"\n    result = str(num) + text\n    print(result)\nexcept:\n    print(\"Error\")</pre>",
      options: ["Error", "515", "20", "75"],
      answer: 1,
      explain: "str(5) gives '5'; '5' + '15' concatenates to '515' — no exception occurs. <i>(CBSE 2026 Compartment)</i>",
      diff: "E"
    },
    {
      q: "What will be the output of the following statement?<br><pre>print(\"X\"* 2,\"Y\",end = 2 * \"X\", sep = \"#\")</pre>",
      options: ["Error", "YY#XX", "XXYY#", "XX#YXX"],
      answer: 3,
      explain: "sep='#' joins the two arguments (XX and Y) and end='XX' is printed at the end → XX#YXX. <i>(CBSE 2026 Compartment)</i>",
      diff: "M"
    },
    {
      q: "If L is an empty list, then which of the following expressions is <b>invalid</b>?",
      options: ["L +'Hello'", "L + []", "L + [2]", "L * 2"],
      answer: 0,
      explain: "A list can only be concatenated with another list — L + 'Hello' raises TypeError. <i>(CBSE 2026 Compartment)</i>",
      diff: "M"
    },
    {
      q: "Which of the following statements will return the substring \"STR\" (the first 3 characters) from the string \"STRING\"?",
      options: ["\"STRING\"[:-3]", "\"STRING\"[-3::-1]", "\"STRING\"[3:]", "\"STRING\".startswith(3)"],
      answer: 0,
      explain: "[:-3] takes everything up to (but not including) the last 3 characters → 'STR'. <i>(CBSE 2026 Compartment)</i>",
      diff: "M"
    },
    {
      q: "Consider the statements below and choose the correct output:<br><pre>K=('A','B')\nV='TEST'\nD = dict.fromkeys(K, V)\nprint(D)</pre>",
      options: ["{'A':'TEST', 'B': None}", "{'A': None, 'B':'TEST'}", "{'A':'TEST', 'B':'TEST'}", "Error"],
      answer: 2,
      explain: "fromkeys() assigns the same value V to every key in K. <i>(CBSE 2026 Compartment)</i>",
      diff: "M"
    },
    {
      q: "Which of the following is true about clear() in Python?",
      options: ["It deletes the dictionary itself with all its elements.", "It deletes all items of the dictionary resulting in an empty dictionary.", "If D is a dictionary, then clear(D) is the correct statement.", "No such function/method exists in Python."],
      answer: 1,
      explain: "D.clear() empties the dictionary in place — the dictionary object still exists. <i>(CBSE 2026 Compartment)</i>",
      diff: "M"
    },
    {
      q: "Consider the statements below and choose the correct output:<br><pre>L = [\"A\", \"B\"]\nS=['C','D']\nL.extend(S)\nprint(L)</pre>",
      options: ["['A', 'B', 'C', 'D']", "['A', 'B', 'CD']", "['A', 'B', ['CD']]", "['A', 'B', ['C','D']]"],
      answer: 0,
      explain: "extend() appends each element of S individually → ['A','B','C','D']. <i>(CBSE 2026 Compartment)</i>",
      diff: "E"
    },
    {
      q: "Identify the output of the code snippet:<br><pre>s = \"the Truth\"\nprint(s.capitalize())</pre>",
      options: ["The truth", "THE TRUTH", "The Truth", "the Truth"],
      answer: 0,
      explain: "capitalize() makes the first character upper and the rest lower → 'The truth'. <i>(CBSE 2026)</i>",
      diff: "E"
    },
    {
      q: "Which of the following expressions in Python evaluates to True?",
      options: ["2>3 and 2<3", "3>1 and 2", "3>1 and 3>2", "3>1 and 3<2"],
      answer: 2,
      explain: "3>1 (True) and 3>2 (True) → True. (B) evaluates to 2 (truthy but not True itself); (A) and (D) are False. <i>(CBSE 2026)</i>",
      diff: "E"
    },
    {
      q: "What is the output of the code snippet?<br><pre>s='War and Peace by Leo Tolstoy'\nprint(s.partition(\"by\"))</pre>",
      options: ["('War and Peace ', 'by', ' Leo Tolstoy')", "['War and Peace ', 'by', ' Leo Tolstoy']", "('War and Peace ', ' Leo Tolstoy')", "['War and Peace ', ' Leo Tolstoy']"],
      answer: 0,
      explain: "partition() returns a tuple of three parts: before, the separator, and after. <i>(CBSE 2026)</i>",
      diff: "M"
    },
    {
      q: "Which of the following statements is true about dictionaries in Python?",
      options: ["A dictionary is an example of sequence datatype.", "A dictionary cannot have two elements with same key.", "A dictionary cannot have two elements with same value.", "The key and value of an element cannot be the same."],
      answer: 1,
      explain: "Dictionary keys must be unique; values may repeat freely. <i>(CBSE 2026)</i>",
      diff: "E"
    },
  ],
});
