// September 26 Examination — Section C: CBSE PYQ Long Answer Questions.
// 5 questions · 4–5 marks each · WRITTEN answers (emailed for evaluation).
window.SEPT26_TOPICS = window.SEPT26_TOPICS || [];
window.SEPT26_TOPICS.push({
  key: "pyq-long-answer",
  name: "Section C — PYQ Long Answer (4–5 Marks)",
  questions: [
    {
      type: "written",
      marks: 5,
      q: "NextStep stores data of its resource persons in the binary file <b>RESOURCES.DAT</b> using the record structure (each record is a tuple):<br/><code>(R_ID, R_Name, R_Expertise, Charges)</code><br/>where R_ID is an integer, R_Name a string, R_Expertise the area of expertise, and Charges the per-hour charge. Example record: <code>(12, 'P. Velusami', 'Machine Learning', 5000)</code>.<br/><br/>Write the following user-defined functions in Python:<br/>(i) <b>Append()</b> — to input the data of a resource person and write it to RESOURCES.DAT. (2)<br/>(ii) <b>Update()</b> — to increase the Charges of each resource person by 500. (3)<br/><br/><i>(CBSE 2026)</i>",
      explain: "(i) import pickle; open RESOURCES.DAT in 'ab'; build the tuple from input() and pickle.dump(record, f); close. (ii) Read all records into a list (open 'rb', pickle.load until EOFError); add 500 to record[3] for each; rewrite the file in 'wb' with pickle.dump for every record.",
      diff: "M"
    },
    {
      type: "written",
      marks: 5,
      q: "Sanjeevani group is setting up a new University campus in Amritsar with four blocks — ADMIN, ACADEMIC, HOSTEL, SPORTS.<br/><br/><b>Distances:</b> ADMIN–ACADEMIC 60 m · ADMIN–HOSTEL 160 m · ADMIN–SPORTS 80 m · ACADEMIC–HOSTEL 40 m · ACADEMIC–SPORTS 120 m · HOSTEL–SPORTS 150 m<br/><b>Hyderabad Head Office to Amritsar campus: 2000 km</b><br/><b>Computers:</b> ADMIN 25, ACADEMIC 600, HOSTEL 120, SPORTS 50<br/><br/>(i) Suggest the most appropriate location of the server inside the campus, with justification. (1)<br/>(ii) Draw the cable layout to efficiently connect the blocks. (1)<br/>(iii) Name any two wired media that can connect computers within a block. (1)<br/>(iv) The university will run its own 24×7 FM channel. Which communication medium does FM use — Radio Waves, Micro Waves or Infrared Waves? (1)<br/>(v) Students attend online audio-visual sessions. Write the full name of the protocol used for such communication over the Internet. (1)<br/><br/><i>(CBSE 2026)</i>",
      explain: "(i) ACADEMIC block — it has by far the most computers (600). (ii) Star topology centred on ACADEMIC block (or tree: stars per block joined to the main block). (iii) Twisted pair (UTP Cat 5e/6) and co-axial/optical fibre. (iv) Radio Waves. (v) VoIP — Voice over Internet Protocol.",
      diff: "M"
    },
    {
      type: "written",
      marks: 5,
      q: "A stack named <b>FruitStack</b>, implemented using a list, contains records of fruits. Each record is a dictionary with keys 'Name', 'Origin', 'Price', 'Expiry'. Sample record:<br/><code>{'Name':'Apple','Origin':'France','Price':120,'Expiry':'12-08-2025'}</code><br/><br/>Write the following user-defined functions in Python:<br/>(i) <b>push_fruit(FruitStack, Fruit)</b> — pushes the record Fruit onto FruitStack <b>only if its Price is less than 100</b>.<br/>(ii) <b>pop_fruit(FruitStack)</b> — pops the topmost record and returns it; if the stack is empty, display \"UNDERFLOW\".<br/>(iii) <b>display(FruitStack)</b> — displays all elements from the topmost element down; if empty, display 'EMPTY STACK'.<br/><br/><i>(CBSE 2026)</i>",
      explain: "(i) if Fruit['Price'] < 100: FruitStack.append(Fruit). (ii) if FruitStack: return FruitStack.pop() else: print('UNDERFLOW'). (iii) if not FruitStack: print('EMPTY STACK') else: for i in range(len(FruitStack)-1, -1, -1): print(FruitStack[i]).",
      diff: "M"
    },
    {
      type: "written",
      marks: 4,
      q: "TechMart Inc. manages inventory in an SQL table <b>PRODUCTS</b> with attributes PID, PName, Category, Price, Quantity, LastUpdated. Sample records include: (101, 'Laptop Pro', 'Electronics', 1200, 50, '2024-01-10'), (102, 'Gaming Mouse', 'Peripherals', 45.99, 200, '2023-11-25'), (109, 'Web Camera HD', 'Peripherals', 60, NULL, '2024-01-25').<br/><br/>Write the SQL statements for the following:<br/>(I) Display PName and Price of products in the 'Electronics' category with Price greater than 100.00.<br/>(II) Display each Category and the total number of products in it.<br/>(III) Display the entire PRODUCTS table in ascending order of LastUpdated (earliest first).<br/>(IV) Make the Price 0 for all products whose Quantity is not known (NULL).<br/><br/><i>(CBSE 2026 Compartment)</i>",
      explain: "(I) SELECT PName, Price FROM PRODUCTS WHERE Category='Electronics' AND Price > 100;  (II) SELECT Category, COUNT(*) FROM PRODUCTS GROUP BY Category;  (III) SELECT * FROM PRODUCTS ORDER BY LastUpdated;  (IV) UPDATE PRODUCTS SET Price = 0 WHERE Quantity IS NULL;",
      diff: "M"
    },
    {
      type: "written",
      marks: 4,
      q: "A CSV file <b>States.csv</b> contains records of Indian states: [State Name, Capital, Population, Official Language]. Example record:<br/><code>['Andhra Pradesh','Amaravati',52221000,'Telugu']</code><br/><br/>Write a Python program that reads this file and appends all records whose <b>population is more than 10000000</b> into another CSV file <b>More.csv</b>.<br/><br/><b>Note:</b> States.csv also contains a Header row — the header should <b>NOT</b> be copied to More.csv.<br/><br/><i>(CBSE 2026)</i>",
      explain: "import csv; open States.csv in 'r'; rdr = csv.reader(f); skip the header with next(rdr); open More.csv in 'a' with newline=''; for each row, if int(row[2]) > 10000000: csv.writer(w).writerow(row). Close both files.",
      diff: "M"
    },
  ],
});
