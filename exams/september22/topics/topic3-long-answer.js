// September 22 Examination — Section C: CBSE PYQ Long Answer Questions.
// 5 questions · 4–5 marks each · WRITTEN answers (emailed for evaluation).
window.SEPT22_TOPICS = window.SEPT22_TOPICS || [];
window.SEPT22_TOPICS.push({
  key: "pyq-long-answer",
  name: "Section C — PYQ Long Answer (4–5 Marks)",
  questions: [
    {
      type: "written",
      marks: 5,
      q: "'CKNG Auto' is a car-selling agency with its Head Office in Delhi, planning a new branch in Patiala with four blocks — ADMIN, SALES, SERVICE and INSURANCE.<br/><br/><b>Block to block distances:</b><br/>ADMIN–SALES: 70 m · ADMIN–SERVICE: 60 m · ADMIN–INSURANCE: 65 m<br/>SALES–SERVICE: 80 m · SALES–INSURANCE: 100 m · SERVICE–INSURANCE: 60 m<br/><b>Distance Delhi HO to Patiala branch: 250 km</b><br/><b>Computers:</b> ADMIN 18, SALES 30, SERVICE 20, INSURANCE 10<br/><br/>(I) Suggest the most appropriate location of the server inside the Patiala branch. Justify. (1)<br/>(II) What kind of network (PAN/LAN/MAN/WAN) is formed by interconnecting all computers inside a block? (1)<br/>(III) Draw the most effective cable layout to connect all four blocks. (1)<br/>(IV) Which device should be used to provide Internet connection to all the computers in the branch? (1)<br/>(V) Which is the best wired medium to connect the server of the Patiala office to the head office at Delhi, and why? (1)<br/><br/><i>(CBSE 2025 Compartment)</i>",
      explain: "(I) SALES block — highest number of computers (30). (II) LAN — a single building/block. (III) Star topology layout centred on the server block (or per distances, a star from SALES). (IV) Router (with modem) — routes traffic between the LAN and the Internet. (V) Optical fibre — very high speed over 250 km, immune to interference.",
      diff: "M"
    },
    {
      type: "written",
      marks: 4,
      q: "Assume you work for ABC Corporation. The data of contracts and contractors is kept in tables <b>Work</b> and <b>Contractor</b>:<br/><br/>Work: W_ID | C_ID | W_Name | W_Amt<br/>P0001 | C_01 | Painting | 20000<br/>E0001 | C_01 | Electrical | 50000<br/>D0001 | C_02 | Dumping | 10000<br/><br/>Contractor: C_ID | C_Name | Phone | email<br/>C_01 | M. Khan &amp; Sons | 1232311 | MK@xyz.com<br/>C_02 | Acharya Pvt. Ltd. | 2323311 | APL@xyz.com<br/>C_03 | Charu Corp. | NULL | CCP@pqr.xyz<br/><br/>Write the SQL queries for the following:<br/>(I) To display all the records from the Work table in alphabetical order of W_Name.<br/>(II) To display the names of contractors where W_Amt is more than 15000.<br/>(III) To display the structure of the Work table.<br/>(IV) To count the total number of records present in the Work table.<br/><br/><i>(CBSE 2025 Compartment)</i>",
      explain: "(I) SELECT * FROM Work ORDER BY W_Name;  (II) SELECT DISTINCT C_Name FROM Contractor, Work WHERE Contractor.C_ID = Work.C_ID AND W_Amt > 15000;  (III) DESCRIBE Work;  (IV) SELECT COUNT(*) FROM Work;",
      diff: "M"
    },
    {
      type: "written",
      marks: 4,
      q: "Suman must create a CSV file <b>CLUB.CSV</b> storing records of club members in the format [Mno, Name, Mobile, Fee]. Write Python code with user-defined functions:<br/><br/><b>NewMembers()</b> — to accept records of members from the user and add them to CLUB.CSV.<br/><b>PriorityMember()</b> — to find and display those members from CLUB.CSV who are paying Fee more than 35000.<br/><br/><i>(CBSE 2025 Compartment)</i>",
      explain: "Use import csv. NewMembers(): open CLUB.CSV in 'a' with newline='' and csv.writer().writerow([Mno,Name,Mobile,Fee]). PriorityMember(): open in 'r' with csv.reader(), check float(row[3]) > 35000 and display the row.",
      diff: "M"
    },
    {
      type: "written",
      marks: 4,
      q: "Nutan Kumar uses Python connectivity with MySQL to maintain a table <b>MEDICINES</b> in database PHARMACY with attributes: MId (string), Mname (string), Expiry (Date), Status (string).<br/><br/>Connection details: Username — root, Password — tiger, Host — localhost.<br/><br/>Write the definition of a user-defined function <b>ChangeStatus()</b> in Python that changes the Status to 'DISCARD' for all medicines whose Expiry is before '2022-12-31'.<br/><br/><i>(CBSE 2025 Compartment)</i>",
      explain: "import mysql.connector as mysql; connect with host/user/passwd/database; cur = con.cursor(); cur.execute(\"UPDATE MEDICINES SET Status='DISCARD' WHERE Expiry < '2022-12-31'\"); con.commit(); close cursor and connection.",
      diff: "M"
    },
    {
      type: "written",
      marks: 5,
      q: "Keshav, the IT Head in a hospital, stores data about each doctor: D_ID (integer), D_Name (string), D_Dept (string), Experience (integer) — for example [1256, 'R. Gupta', 'Cardiology', 15].<br/><br/>(I) Write one difference between storing this data in a binary file over a CSV file. (1)<br/>(II) Assume the data is stored in a binary file <b>DOCTORS.DAT</b>, each record stored as a list. Write a function in Python to read and display all the records from DOCTORS.DAT. (2)<br/>(III) Write a function <b>addDoctor()</b> in Python which accepts a doctor's data from the user and writes it to DOCTORS.DAT. (2)<br/><br/><i>(CBSE 2025 Compartment)</i>",
      explain: "(I) Binary files store data in bytes and preserve exact data types/objects (via pickle), while CSV files store data as human-readable text. (II) import pickle; open DOCTORS.DAT in 'rb'; loop with pickle.load() until EOFError, printing each record. (III) open in 'ab' (append binary) and pickle.dump(record, f) for the accepted list.",
      diff: "M"
    },
  ],
});
