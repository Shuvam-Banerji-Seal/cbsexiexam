// September 26 Examination — Section B: CBSE PYQ Short Answer Questions.
// 15 questions · 2 marks each · WRITTEN answers (emailed for evaluation).
window.SEPT26_TOPICS = window.SEPT26_TOPICS || [];
window.SEPT26_TOPICS.push({
  key: "pyq-short-answer",
  name: "Section B — PYQ Short Answer (2 Marks)",
  questions: [
    {
      type: "written",
      marks: 2,
      q: "The code given below accepts five numbers and displays whether each is even or odd. Rewrite it after removing all syntax and logical errors. <b>Underline all corrections made.</b><br/><pre>def EvenOdd ()\nfor i in range(5):\nnum=int (input (\"Enter a number\")\nif num/2==0:\nprint (\"Even\")\nelse:\nprint (\"Odd\")\nEvenOdd ()</pre><i>(CBSE 2024)</i>",
      explain: "Corrections: colon after def EvenOdd(); indent the loop body; balanced brackets in int(input(...)); use num % 2 == 0 (not num/2) to test evenness.",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "Write the Python statements for each of the following tasks using built-in functions/methods only:<br/>(i) To remove the item whose key is \"NISHA\" from a dictionary named Students = {\"ANITA\":90, \"NISHA\":76, \"ASHA\":92}.<br/>(ii) To display the number of occurrences of the substring \"is\" in a string named message (e.g., \"This is his book\").<br/><br/><i>(CBSE 2024)</i>",
      explain: "(i) Students.pop(\"NISHA\")  (ii) print(message.count(\"is\"))",
      diff: "E"
    },
    {
      type: "written",
      marks: 2,
      q: "Ms. Veda created a table named <b>Sports</b> in a MySQL database with columns Game_id, P_Age and G_name. She realized the attribute <b>Category</b> has to be added.<br/>(i) Write the command to add the Category column.<br/>(ii) Write the command to insert the record: Game_id 'G42', P_Age 'Above 18', G_name 'Chess', Category 'Senior'.<br/><br/><i>(CBSE 2024)</i>",
      explain: "(i) ALTER TABLE Sports ADD Category VARCHAR(20);  (ii) INSERT INTO Sports VALUES ('G42','Above 18','Chess','Senior');",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "(i) Write the output of: <code>NAME = \"Learning Python is Fun\"</code> → <code>print(NAME[-5:-10:-1])</code><br/>(ii) Write the output of the code:<br/><pre>dict1={1:[\"Rohit\",20], 2:[\"Siya\",90]}\ndict2={1:[\"Rahul\",95], 5:[\"Rajan\",80]}\ndict1.update(dict2)\nprint(dict1.values())</pre><i>(CBSE 2023 Compartment)</i>",
      explain: "(i) NAME[-5:-10:-1] starts at the 5th character from the end ('s') and steps backwards to index −10 → 'si no'. (ii) dict1.update(dict2) overwrites key 1 and adds key 5 → the values printed are [Rahul, 95], [Siya, 90], [Rajan, 80].",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "EcoHarvest Solutions stores crop planting details in table <b>PLANTINGS</b> (PlantingID, CropType, PlantingDate, FieldLocation) and harvest details in table <b>HARVESTS</b> (HarvestID, PlantingID, YieldQuantity, YieldQuality, HarvestDate).<br/>(i) Identify the attribute that should be the FOREIGN KEY for joining the two tables.<br/>(ii) Write the SQL command to change the FieldLocation of the planting whose PlantingID is 'PL005' to 'North Field 3'.<br/><br/><i>(CBSE 2026 Compartment)</i>",
      explain: "(i) PlantingID in HARVESTS (it references PLANTINGS). (ii) UPDATE PLANTINGS SET FieldLocation = 'North Field 3' WHERE PlantingID = 'PL005';",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "(i) Define the term <b>web server</b>.<br/>(ii) Write one difference between <b>Circuit Switching</b> and <b>Packet Switching</b> techniques used in computer networks.<br/><br/><i>(CBSE 2026 Compartment)</i>",
      explain: "(i) A web server is a computer/software that stores websites and serves web pages on request. (ii) Circuit switching reserves a dedicated path for the whole session; packet switching divides data into packets routed independently, sharing the network.",
      diff: "E"
    },
    {
      type: "written",
      marks: 2,
      q: "What possible output(s) from the given options will <b>NOT</b> be displayed when the code is executed? Also state how many iterations the for loop runs.<br/><pre>import random\na = [1,2,3,4,5,6]\nfor i in range(4):\n    j = random.randrange(i,5)\n    print(a[j],end='–')\nprint()</pre>Options:<br/>(A) 3–4–5–4– &nbsp; (B) 2–2–4–5– &nbsp; (C) 4–3–3–5– &nbsp; (D) 5–1–2–4–<br/><br/><i>(CBSE 2026)</i>",
      explain: "The loop runs 4 iterations. For i=0 j∈{0..4}, i=1 j∈{1..4}, i=2 j∈{2..4}, i=3 j∈{3..4}. The second value can never be a[0] (value 1), so option (D) 5–1–2–4– will NOT be displayed. (A), (B) and (C) all respect the index ranges.",
      diff: "H"
    },
    {
      type: "written",
      marks: 2,
      q: "Identify the correct possible output(s) of the following code segment. Also write the minimum and maximum possible values of the variable b.<br><pre>import random\ns=\"War and Peace\"\na=len(s)//2\nfor i in range(4):\n    b=random.randrange(i,a)\n    print(s[b],end='+')\n</pre>Options:<br/>(A) n+P+d+a+ &nbsp; (B) W+r+n+n+ &nbsp; (C) e+r+W+a+ &nbsp; (D) a+P+e+r+<br/><br/><i>(CBSE 2025 Compartment)</i>",
      explain: "a = 13//2 = 6, so b ∈ {i, …, 5}. The minimum possible value of b is 0 (when i=0) and the maximum is 5. Only option (B) W+r+n+n+ is possible: W only appears for i=0, r for i≥1, and n for i≥2 — the other options place characters at positions their index ranges forbid (P and d do not even occur in the string).",
      diff: "H"
    },
    {
      type: "written",
      marks: 2,
      q: "The table <b>Bookshop</b> in MySQL has attributes B_code (Integer), B_name (String), Qty (Integer), Price (Integer). Username: shop, Password: Book, database: Bstore.<br/>Complete the code:<br/><pre>import mysql.connector as mysql\ndef update_book():\n    mydb=mysql.connect(host=\"localhost\", user=\"shop\",passwd=\"Book\",database=\"Bstore\")\n    mycursor=__________   # Statement 1\n    qry= \"update Bookshop set Qty=20 where B_code=105\"\n    ___________________  # Statement 2\n    ___________________  # Statement 3\n</pre><i>(CBSE 2023 Compartment)</i>",
      explain: "Statement 1: mydb.cursor();  Statement 2: mycursor.execute(qry);  Statement 3: mydb.commit().",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "Write the output of the SQL queries (a) and (b) based on the table:<br/><br/><b>Table: TRAVEL</b><br/>T_ID | START | END | T_DATE | FARE<br/>101 | DELHI | CHENNAI | 2021-12-25 | 4500<br/>102 | DELHI | BENGALURU | 2021-11-20 | 4000<br/>103 | MUMBAI | CHENNAI | 2020-12-10 | 5500<br/>104 | DELHI | MUMBAI | 2019-12-20 | 4500<br/>105 | MUMBAI | BENGALURU | 2022-01-15 | 5000<br/><br/>(a) SELECT T_ID, FARE FROM TRAVEL WHERE T_DATE LIKE '2021-12-%';<br/>(b) SELECT START, MIN(FARE) FROM TRAVEL GROUP BY START;<br/><br/><i>(CBSE 2022 Compartment)</i>",
      explain: "(a) Matches 2021-12-25 → 101 | 4500. (b) DELHI: min(4500,4000,4500)=4000; MUMBAI: min(5500,5000)=5000 → DELHI 4000 and MUMBAI 5000.",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "Write the output of the SQL query based on the tables:<br/><br/><b>Table: FLIGHT</b><br/>FNO | DEPART | ARRIVE | FARE<br/>F101 | DELHI | CHENNAI | 4500<br/>F102 | DELHI | BENGALURU | 4000<br/>F103 | MUMBAI | CHENNAI | 5500<br/>F104 | DELHI | MUMBAI | 4500<br/>F105 | MUMBAI | BENGALURU | 5000<br/><br/><b>Table: PASSENGER</b><br/>PNO | NAME | FLIGHTDATE | FNO<br/>P1 | PRAKASH | 2021-12-25 | F101<br/>P2 | NOOR | 2021-11-20 | F103<br/>P3 | HARMEET | 2020-12-10 | NULL<br/>P4 | ANNIE | 2019-12-20 | F105<br/><br/>SELECT NAME, FARE FROM PASSENGER P, FLIGHT F WHERE F.FNO = P.FNO AND F.DEPART = 'MUMBAI';<br/><br/><i>(CBSE 2022 Compartment)</i>",
      explain: "Equal-join on FNO where departure is MUMBAI: NOOR (F103, 5500) and ANNIE (F105, 5000). HARMEET has NULL FNO and is excluded.",
      diff: "H"
    },
    {
      type: "written",
      marks: 2,
      q: "Consider the table EMPLOYEE in database COMPANY:<br/><br/>E_ID | NAME | DEPT<br/>H1001 | Avneet | AC<br/>A1002 | Rakesh | HR<br/>A1003 | Amina | AC<br/>H1002 | Simon | HR<br/>A1004 | Pratik | AC<br/><br/>Predict the output of the Python code (DB is the connection to COMPANY):<br/><pre>CUR=DB.cursor()\nCUR.execute(\"USE COMPANY\")\nCUR.execute(\"SELECT * FROM EMPLOYEE WHERE DEPT = 'AC' \")\nfor i in range(2) :\n    R=CUR.fetchone()\n    print(R[0], R[1], sep =\"#\")\n</pre><i>(CBSE 2022 Compartment)</i>",
      explain: "The AC records in order are H1001/Avneet and A1003/Amina; fetchone() is called twice → prints H1001#Avneet then A1003#Amina.",
      diff: "H"
    },
    {
      type: "written",
      marks: 2,
      q: "Give the output of the following SQL statement, based on the tables:<br/><br/><b>Table: Student</b> — ADMNO | NAME | CLASS: 1100 | MEENA | X ; 1101 | VANI | XI<br/><b>Table: Sport</b> — ADMNO | GAME: 1100 | CRICKET ; 1103 | FOOTBALL<br/><br/><code>SELECT * FROM Student, Sport;</code><br/><br/><i>(CBSE 2023 Compartment)</i>",
      explain: "A cartesian product: every row of Student combines with every row of Sport → 2 × 2 = 4 rows (1100, MEENA, X, 1100, CRICKET / 1100, MEENA, X, 1103, FOOTBALL / 1101, VANI, XI, 1100, CRICKET / 1101, VANI, XI, 1103, FOOTBALL).",
      diff: "M"
    },
    {
      type: "written",
      marks: 2,
      q: "Write the Python statements using built-in functions/methods only:<br/>(i) To find and display the average of all values in the tuple <code>PRICE = (100, 55, 72, 65, 85, 90)</code>.<br/>(ii) To delete the first occurrence of the element 25 from the list <code>myList</code>.<br/><br/><i>(CBSE 2026 Compartment)</i>",
      explain: "(i) print(sum(PRICE)/len(PRICE))  (ii) myList.remove(25)",
      diff: "E"
    },
    {
      type: "written",
      marks: 2,
      q: "(a) Expand the term <b>FTP</b>.<br/>(b) Out of the following, which has the largest network coverage area? <b>LAN, MAN, PAN, WAN</b><br/><br/><i>(CBSE 2022 Compartment)</i>",
      explain: "(a) FTP = File Transfer Protocol. (b) WAN (Wide Area Network) covers the largest geographical area — the Internet itself is the largest WAN. Order: PAN < LAN < MAN < WAN.",
      diff: "E"
    },
  ],
});
