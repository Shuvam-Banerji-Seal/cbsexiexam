// September 18 Examination — Section C: CBSE PYQ Long Answer Questions.
// 5 questions · 4–5 marks each · WRITTEN answers (emailed for evaluation).
// Sourced from CBSE Class XII Computer Science board papers (2023–2024).
window.SEPT18_TOPICS = window.SEPT18_TOPICS || [];
window.SEPT18_TOPICS.push({
  key: "pyq-long-answer",
  name: "Section C — PYQ Long Answer (4–5 Marks)",
  questions: [
    {
      type: "written",
      marks: 5,
      q: "ABC Consultants are setting up a secure network for their office campus at Noida for their day-to-day office and web-based activities. They are planning to have connectivity between three buildings and the head office situated in Bengaluru. As a network consultant, answer (i) to (v):<br/><br/><b>Distance between blocks:</b><br/>Building 1 to Building 3 — 120 m<br/>Building 1 to Building 2 — 50 m<br/>Building 2 to Building 3 — 65 m<br/>Noida Branch to Head Office — 1500 km<br/><br/><b>Number of computers:</b><br/>Building 1 — 25, Building 2 — 51, Building 3 — 150, Head Office — 10<br/><br/>(i) Suggest the most suitable place to install the server for this organization, with justification. (1)<br/>(ii) Suggest the cable layout of connections between the buildings inside the campus. (1)<br/>(iii) Suggest the placement of the following devices with justification: Switch, Repeater. (1)<br/>(iv) The organization plans a high-speed wired link with the Bengaluru head office. Suggest a suitable wired medium. (1)<br/>(v) The System Administrator does remote login to any PC when required. Name the protocol used. (1)<br/><br/><i>(CBSE 2023 Compartment)</i>",
      explain: "(i) Building 3 — most computers (server near maximum load). (ii) Star topology cable layout connecting the three buildings. (iii) Switch in each building to connect computers; Repeater between buildings where distance exceeds 100 m (Building 1–3: 120 m). (iv) Optical fibre — high speed, long distance, immune to interference. (v) TELNET.",
      diff: "M"
    },
    {
      type: "written",
      marks: 5,
      q: "Logistic Technologies Ltd. is a Delhi based organization expanding to Ambala. At the Ambala campus they plan three blocks — HR, Accounts and Logistics — each with computers that need to be networked.<br/><br/><b>Distances:</b><br/>HR Block to Accounts Block — 400 m<br/>Accounts Block to Logistics Block — 200 m<br/>Logistics Block to HR Block — 150 m<br/>Delhi Head Office to Ambala Office — 220 km<br/><br/><b>Computers:</b> HR — 70, Accounts — 40, Logistics — 30<br/><br/>(i) Suggest the most appropriate block to house the SERVER, with justification. (1)<br/>(ii) Suggest the best wired medium to connect the blocks within the campus. (1)<br/>(iii) Draw an ideal cable layout (block to block) for wired connectivity. (1)<br/>(iv) The company wants an online conference between managers of Delhi and Ambala offices. Which protocol will be used for effective voice communication over the Internet? (1)<br/>(v) Which kind of network will it be between the Delhi office and the Ambala office? (1)<br/><br/><i>(CBSE 2024 Compartment)</i>",
      explain: "(i) HR Block — highest number of computers (70). (ii) Co-axial cable or optical fibre (distances 150–400 m exceed twisted-pair limits); fibre preferred for 400 m segment. (iii) Star/bus layout connecting HR–Accounts–Logistics sensibly (e.g., Star at HR). (iv) VoIP. (v) WAN (Delhi to Ambala, 220 km).",
      diff: "M"
    },
    {
      type: "written",
      marks: 5,
      q: "Write a program in Python that defines and calls the following user-defined functions:<br/><br/>(i) <b>Add_Teacher()</b> — accepts values from the user and inserts a record consisting of a list with field elements T_id, Tname and Desig (teacher ID, teacher name, designation) into a text file.<br/><br/>(ii) <b>Search_Teacher()</b> — displays the records of all <b>PGT</b> (designation) teachers from the file.<br/><br/><i>(CBSE 2023 Compartment)</i>",
      explain: "Open file in append mode 'a' for Add_Teacher() and write each field separated by '#' or ',' with a newline; open in 'r' mode for Search_Teacher() and split each line, checking if the designation equals 'PGT'.",
      diff: "M"
    },
    {
      type: "written",
      marks: 4,
      q: "Mr. Mahesh is a Python programmer working in a school. He maintains records of sports students in a CSV file named <b>sports.csv</b> with the structure:<br/><code>[sport_id, competition, prize_won]</code><br/>where prize_won is one of \"Gold\", \"Silver\", \"Bronze\".<br/><br/>Write the following user-defined functions:<br/><br/>(i) <b>Add_detail()</b> — to accept the details of a student and add them to sports.csv.<br/><br/>(ii) <b>Count_Medal()</b> — to display the names of competitions in which students have won a \"Gold\" medal.<br/><br/><i>(CBSE 2024 Compartment)</i>",
      explain: "Use import csv; Add_detail() opens sports.csv in 'a' with newline='' and uses csv.writer().writerow([id, competition, prize]); Count_Medal() opens in 'r' and uses csv.reader(), printing row[1] where row[2] == 'Gold'.",
      diff: "M"
    },
    {
      type: "written",
      marks: 4,
      q: "The ABC Company maintains salespersons' records using SQL. The table <b>Salesperson</b> is:<br/><br/>S_ID | S_NAME | AGE | S_AMOUNT | REGION<br/>S001 | SHYAM | 35 | 20000 | NORTH<br/>S002 | RISHABH | 30 | 25000 | EAST<br/>S003 | SUNIL | 29 | 21000 | NORTH<br/>S004 | RAHIL | 39 | 22000 | WEST<br/>S005 | AMIT | 40 | 23000 | EAST<br/><br/>(i) Identify the attribute best suited to be the Primary Key, and why. (1)<br/>(ii) The company adds another attribute to the table. What will be the new degree and cardinality? (1)<br/>(iii) Write the statements to:<br/>(a) Insert details of one salesman with appropriate data.<br/>(b) Delete the record of salesman RISHABH, and remove the attribute REGION from the table. (2)<br/><br/><i>(CBSE 2023 Compartment, adapted)</i>",
      explain: "(i) S_ID — it is unique and cannot be NULL. (ii) Degree becomes 6 (was 5); cardinality stays 5. (iii)(a) INSERT INTO Salesperson VALUES ('S006','RAVI',32,24000,'NORTH'); (b) DELETE FROM Salesperson WHERE S_NAME='RISHABH'; ALTER TABLE Salesperson DROP REGION;",
      diff: "M"
    },
  ],
});
