// September 22 Examination — Section A: CBSE PYQ Objective (MCQ).
// 30 questions · 1 mark each · Second Sitting — new questions from CBSE board papers (2022–2026).
window.SEPT22_TOPICS = window.SEPT22_TOPICS || [];
window.SEPT22_TOPICS.push({
  key: "pyq-objective",
  name: "Section A — PYQ Objective (MCQ)",
  questions: [
    {
      q: "What will be the output of the following code segment?<br><pre>a=5\ndef func_1(b=10):\n    global a\n    a=b-10\n    b+=a\n    print(a,b)\nfunc_1(a)</pre>",
      options: ["0 5", "5 0", "-5 -5", "-5 0"],
      answer: 3,
      explain: "func_1(a) passes b=5. Inside: a = 5−10 = −5 (global a changes), then b = 5+(−5) = 0. Output: −5 0. <i>(CBSE 2025 Compartment)</i>",
      diff: "H"
    },
    {
      q: "Which of the following is <b>not</b> a valid relational operator used with the WHERE clause in SQL?",
      options: [">", "<=", "=>", "&lt;&gt;"],
      answer: 2,
      explain: "SQL uses <= for 'less than or equal'; '=>' is not a valid relational operator. <> means 'not equal'. <i>(CBSE 2025 Compartment)</i>",
      diff: "M"
    },
    {
      q: "Which date format is used by MySQL for the DATE data type?",
      options: ["DD-MM-YYYY", "MM-DD-YYYY", "YYYY-MM-DD", "YYYY-DD-MM"],
      answer: 2,
      explain: "MySQL stores and expects dates as YYYY-MM-DD. <i>(CBSE 2025 Compartment)</i>",
      diff: "E"
    },
    {
      q: "Which of the following devices is essential to set up a wired LAN?",
      options: ["Modem", "NIC", "Repeater", "Firewall"],
      answer: 1,
      explain: "Every computer on a wired LAN needs a Network Interface Card (Ethernet card) to connect to the cable. <i>(CBSE 2025 Compartment)</i>",
      diff: "E"
    },
    {
      q: "Which network device serves as the entry and exit point of a network, as all data coming in or going out of the network must first pass through it?",
      options: ["Modem", "Gateway", "Switch", "Repeater"],
      answer: 1,
      explain: "A gateway is the entry/exit point that can also translate between different protocols. <i>(CBSE 2025 Compartment)</i>",
      diff: "M"
    },
    {
      q: "Which of the following IP addresses is valid?",
      options: ["122.94.96.212", "212.254.258.210", "210.10.12.156.209", "122.294.56.68"],
      answer: 0,
      explain: "An IPv4 address has exactly four octets, each in the range 0–255. Only 122.94.96.212 qualifies — 258 and 294 exceed 255, and the third option has five octets. <i>(CBSE 2025 Compartment)</i>",
      diff: "M"
    },
    {
      q: "<b>Assertion (A):</b> Every object in Python is assigned a unique identity (ID).<br/><b>Reason (R):</b> The ID remains the same for the lifetime of that object.<br/><br/>Mark the correct choice:",
      options: ["Both (A) and (R) are true and (R) is the correct explanation for (A).", "Both (A) and (R) are true and (R) is not the correct explanation for (A).", "(A) is true but (R) is false.", "(A) is false but (R) is true."],
      answer: 0,
      explain: "Every object gets a unique id(), and that identity is stable for the object's lifetime — so (R) correctly explains (A). <i>(CBSE 2025 Compartment)</i>",
      diff: "H"
    },
    {
      q: "<b>Assertion (A):</b> A foreign key column of a table cannot have NULL entries.<br/><b>Reason (R):</b> A primary key column of a table cannot have NULL entries.<br/><br/>Mark the correct choice:",
      options: ["Both (A) and (R) are true and (R) is the correct explanation for (A).", "Both (A) and (R) are true and (R) is not the correct explanation for (A).", "(A) is true but (R) is false.", "(A) is false but (R) is true."],
      answer: 3,
      explain: "A primary key cannot be NULL (R true), but a foreign key CAN contain NULL (A false). <i>(CBSE 2025 Compartment)</i>",
      diff: "H"
    },
    {
      q: "If L is a list with 6 elements, which of the following statements will raise an exception?",
      options: ["L.pop(1)", "L.pop(6)", "L.insert(1,6)", "L.insert(6,1)"],
      answer: 1,
      explain: "Valid indices run 0–5, so L.pop(6) raises IndexError. <i>(CBSE 2026)</i>",
      diff: "M"
    },
    {
      q: "What will be the output of the following code?<br><pre>def f1(a,b=1):\n    print(a+b,end='-')\nc=f1(1,2)\nprint(c,sep='*')</pre>",
      options: ["3-2", "3-2*", "3-None", "3*None-"],
      answer: 2,
      explain: "f1(1,2) prints 3- and returns None; the next print outputs None. With a single argument, sep has no effect. Output: 3-None. <i>(CBSE 2026)</i>",
      diff: "M"
    },
    {
      q: "Write the output of the following code:<br><pre>def Exam2026(given):\n    new=[]\n    for ch in given[1:-1]:\n        if ch.isupper():\n            new.reverse()\n        elif ch not in new:\n            new.append(ch)\n        elif ch in new:\n            new.pop()\n    print(new)\nExam2026(\"Gold–24Medals\")</pre>",
      options: ["['4', '2', '–', 'd', 'l', 'o']", "['G', 'o', 'l', 'd', '2', '4']", "['4', '2', 'd', 'l', 'o']", "Error"],
      answer: 0,
      explain: "From 'old–24Medal': lowercase letters append when new, pop when present; uppercase letters reverse the list. Tracing gives ['4', '2', '–', 'd', 'l', 'o']. <i>(CBSE 2026)</i>",
      diff: "H"
    },
    {
      q: "What will be the output of the following code?<br><pre>def Exam2026(given):\n    new = 0\n    while given:\n        if new % 2:\n            new += given % 10\n        else:\n            new += given % 5\n        print(new, end='–')\n        given //= 10\nExam2026(123456)</pre>",
      options: ["1–6–10–13–15–16–", "1–6–10–13–15–", "6–10–13–15–16–", "1–2–3–4–5–6–"],
      answer: 0,
      explain: "Digits are processed right to left; 5/0 decide each addition. Trace: 1, 6, 10, 13, 15, 16 → '1–6–10–13–15–16–'. <i>(CBSE 2026)</i>",
      diff: "H"
    },
    {
      q: "What possible output from the given options is expected when the following code is executed?<br><pre>import random\nITEMS={1:\"PEN\", 2: \"ERASER\", 3: \"PENCIL\"}\nfor i in range(len(ITEMS)):\n    print(ITEMS[random.randint(0,i)+1],end=\"*\")</pre>",
      options: ["PEN*PENCIL*PENCIL*", "PENCIL*PEN*ERASER*", "PEN*PENCIL*ERASER*", "PEN*ERASER*PEN*"],
      answer: 3,
      explain: "i=0 always picks PEN; i=1 picks PEN or ERASER; i=2 picks PEN, ERASER or PENCIL. Only option D (PEN, ERASER, PEN) respects these possibilities. <i>(CBSE 2026 Compartment)</i>",
      diff: "M"
    },
    {
      q: "Write the output of the code given below:<br><pre>g=0\ndef fun1(x,y):\n    global g\n    g=x+y\n    return g\ndef fun2(m,n):\n    global g\n    g=m-n\n    return g\nk=fun1(2,3)\nfun2(k,7)\nprint(g)</pre>",
      options: ["-2", "5", "0", "-5"],
      answer: 0,
      explain: "fun1(2,3) sets g=5 and k=5. fun2(5,7) sets g=5−7=−2. Output: −2. <i>(CBSE 2023 Compartment)</i>",
      diff: "M"
    },
    {
      q: "Predict the output of the code given below:<br><pre>a=15\ndef update(x):\n    global a\n    a+=2\n    if x%2==0:\n        a*=x\n    else:\n        a//=x\n    a=a+5\n    print(a,end=\"$\")\nupdate(5)\nprint(a)</pre>",
      options: ["8$8", "15$15", "8$15", "7$7"],
      answer: 0,
      explain: "a=15 → a+=2 makes 17 → 17//5 = 3 → +5 = 8, printed with $. The global a is now 8, so the second print shows 8. Output: 8$8. <i>(CBSE 2023 Compartment)</i>",
      diff: "H"
    },
    {
      q: "Predict the output of the following code:<br><pre>d={\"IND\":\"DEL\", \"SRI\":\"COL\", \"CHI\":\"BEI\"}\nstr1=\"\"\nfor i in d:\n    str1=str1+str(d[i])+\"@\"\nstr2=str1[:-1]\nprint(str2)</pre>",
      options: ["DEL@COL@BEI", "DEL@COL@BEI@", "BEI@COL@DEL", "Error"],
      answer: 0,
      explain: "Values are concatenated with '@' between them, and [:−1] removes the trailing '@'. Output: DEL@COL@BEI. <i>(CBSE 2024 Compartment)</i>",
      diff: "M"
    },
    {
      q: "<b>Assertion (A):</b> Global variables are accessible in the whole program.<br/><b>Reason (R):</b> Local variables are accessible only within the function or block in which they are declared.<br/><br/>Mark the correct choice:",
      options: ["Both (A) and (R) are true and (R) is the correct explanation for (A).", "Both (A) and (R) are true and (R) is not the correct explanation for (A).", "(A) is true but (R) is false.", "(A) is false but (R) is true."],
      answer: 1,
      explain: "Both statements are correct, but the local-variable rule does not explain why globals are accessible everywhere — they are independent facts. <i>(CBSE 2024 Compartment)</i>",
      diff: "H"
    },
    {
      q: "<b>Assertion (A):</b> If numeric data are to be written to a text file, the data needs to be converted into a string before writing.<br/><b>Reason (R):</b> The write() method takes a string as an argument and writes it to the text file.<br/><br/>Mark the correct choice:",
      options: ["Both (A) and (R) are true and (R) is the correct explanation for (A).", "Both (A) and (R) are true and (R) is not the correct explanation for (A).", "(A) is true but (R) is false.", "(A) is false but (R) is true."],
      answer: 0,
      explain: "write() requires a string — that is exactly why numbers must be converted with str() first. <i>(CBSE 2024 Compartment)</i>",
      diff: "M"
    },
    {
      q: "__________ files are stored in a computer as a sequence of bytes.",
      options: ["Text", "Binary", "CSV", "Notepad"],
      answer: 1,
      explain: "Binary files store data as raw bytes (e.g., images, .dat files), while text files store human-readable characters. <i>(CBSE 2024 Compartment)</i>",
      diff: "E"
    },
    {
      q: "What will be displayed on execution of the following code?<br><pre>a=10\ndef convert(b=20):\n    a=30\n    c=a+b\n    print(a,c)\nconvert(30)\nprint(a)</pre>",
      options: ["30 60 followed by 10", "10 60 followed by 30", "30 50 followed by 10", "Error"],
      answer: 0,
      explain: "Inside convert, a is a local variable (=30), b=30, c=60 → prints '30 60'. The global a is untouched (10). Output: 30 60 then 10. <i>(CBSE 2024 Compartment)</i>",
      diff: "M"
    },
    {
      q: "State True or False:<br/>\"While defining a function in Python, the positional parameters in the function header must always be written after the default parameters.\"",
      options: ["True", "False"],
      answer: 1,
      explain: "It is the reverse — default parameters must come AFTER positional parameters, e.g., def f(a, b=5). <i>(CBSE 2024)</i>",
      diff: "E"
    },
    {
      q: "The SELECT statement, when combined with the __________ clause, returns records without repetition.",
      options: ["DISTINCT", "DESCRIBE", "GROUP", "UNIQUE"],
      answer: 0,
      explain: "SELECT DISTINCT removes duplicate rows from the result. <i>(CBSE 2024)</i>",
      diff: "E"
    },
    {
      q: "Write the output displayed on execution of the following code:<br><pre>LS=[\"HIMALAYA\", \"NILGIRI\", \"ALASKA\", \"ALPS\"]\nD={}\nfor S in LS:\n    if len(S)%4 == 0:\n        D[S] = len(S)\nfor K in D:\n    print(K, D[K], sep = \"#\")</pre>",
      options: ["HIMALAYA#8 and ALPS#4", "HIMALAYA#8 and NILGIRI#7", "ALPS#4 and ALASKA#6", "No output"],
      answer: 0,
      explain: "Only names whose length is divisible by 4 enter the dictionary: HIMALAYA (8) and ALPS (4). <i>(CBSE 2024)</i>",
      diff: "M"
    },
    {
      q: "Predict the output of the code given below:<br><pre>def callon(b=20,a=10):\n    b=b+a\n    a=b-a\n    print(b, \"#\", a)\n    return b\nx=100\ny=200\nx=callon(x,y)\nprint(x,\"@\",y)\ny=callon(y)\nprint(x,\"@\",y)</pre>",
      options: ["300 # 100 · 300 @ 200 · 210 # 200 · 300 @ 210", "300 # 100 · 300 @ 200 · 200 # 210 · 300 @ 210", "100 # 300 · 200 @ 300 · 200 # 210 · 210 @ 300", "Error"],
      answer: 0,
      explain: "callon(100,200): b=300, a=100 → 300 # 100; x=300. callon(200) uses only b=200, a=10 → b=210, a=200 → 210 # 200; y=210. Final line: 300 @ 210. <i>(CBSE 2024)</i>",
      diff: "H"
    },
    {
      q: "Write the output on execution of the following Python code:<br><pre>P=[3,5,7,4]\nP.insert(2,3)\nP.extend([10, 6])\nprint(P)\nprint(P.index(7))\nprint(P[::2])</pre>",
      options: ["[3, 5, 3, 7, 4, 10, 6] · 3 · [3, 3, 4, 6]", "[3, 5, 7, 4, 3, 10, 6] · 2 · [5, 7, 10]", "[3, 5, 3, 7, 4, 10, 6] · 7 · [5, 7, 10]", "Error"],
      answer: 0,
      explain: "insert(2,3) puts 3 at index 2; extend appends 10 and 6 → [3, 5, 3, 7, 4, 10, 6]. The value 7 now sits at index 3, so index(7) gives 3; P[::2] takes every second element → [3, 3, 4, 6]. <i>(CBSE 2025 Compartment)</i>",
      diff: "M"
    },
    {
      q: "Write the output on execution of the following Python code:<br><pre>def ALTER(Y=25):\n    global X\n    Y += X\n    X += Y\n    print(X,Y,sep=\"#\")\nX=5; Y=15\nALTER(Y)\nALTER()\nprint(X,Y,sep=\"@\")</pre>",
      options: ["25#20 · 75#50 · 75@15", "25#20 · 75#50 · 75@75", "20#25 · 50#75 · 75@15", "Error"],
      answer: 0,
      explain: "ALTER(15): 15+5=20 (Y), 5+20=25 (X) → 25#20. ALTER(): 25+25=50 (Y), 25+50=75 (X) → 75#50. The global Y outside is still 15 → 75@15. <i>(CBSE 2025 Compartment)</i>",
      diff: "H"
    },
    {
      q: "Write the output on execution of the following Python code:<br><pre>S=\"Racecar Car Radar\"\nL=S.split()\nfor W in L:\n    x=W.upper()\n    if x==x[::-1]:\n        for I in x:\n            print(I,end=\"*\")\n    else:\n        for I in W:\n            print(I,end=\"#\")\n    print()</pre>",
      options: ["R*A*C*E*C*A*R* / C#a#r# / R*A*D*A*R*", "R*A*C*E*C*A*R* / C*a*r# / R*A*D*A*R*", "RACECAR / Car / RADAR", "Error"],
      answer: 0,
      explain: "Racecar and Radar are palindromes (letters starred), Car is not (letters hashed with the original case). <i>(CBSE 2024)</i>",
      diff: "H"
    },
    {
      q: "Predict the output of the Python code given below:<br><pre>s=\"India Growing\"\nn = len(s)\nm=\"\"\nfor i in range (0, n) :\n    if (s[i] >= 'a' and s[i] <= 'm') :\n        m = m + s[i].upper()\n    elif (s[i] >= 'O' and s[i] <= 'z') :\n        m = m + s[i-1]\n    elif (s[i].isupper()):\n        m = m + s[i].lower()\n    else:\n        m = m + '@'\nprint (m)</pre>",
      options: ["iIDIA@gGroIiG", "INDIA@GGROIIG", "iindia@growing", "Error"],
      answer: 0,
      explain: "Letters a–m become uppercase; letters ≥ 'O' repeat the previous character; other uppercase letters become lowercase; spaces become @. The exact output is iIDIA@gGroIiG. <i>(CBSE 2024 Compartment)</i>",
      diff: "H"
    },
    {
      q: "Which of the following pairs contains <b>only DDL</b> commands?",
      options: ["CREATE, DROP", "INSERT, UPDATE", "SELECT, DELETE", "COMMIT, ROLLBACK"],
      answer: 0,
      explain: "DDL (Data Definition Language) commands define structure: CREATE, ALTER, DROP. INSERT/UPDATE/DELETE are DML; SELECT is DQL; COMMIT/ROLLBACK are TCL. <i>(CBSE 2025 Compartment — Q13 context)</i>",
      diff: "M"
    },
    {
      q: "Which of the following statements about write() and writelines() is TRUE?",
      options: ["writelines() adds a newline after each element automatically.", "write() can write a list of strings directly to a text file.", "writelines() writes each element of the list without adding separators or newlines.", "Both methods work only with binary files."],
      answer: 2,
      explain: "writelines() writes a list of strings as-is — no newline or separator is inserted, so you must include them yourself. write() accepts a single string only. <i>(CBSE file-handling pattern)</i>",
      diff: "M"
    },
  ],
});
