// August 01 Examination — Topic 5: SQL Commands.
// 25 questions · CBSE Class XII Computer Science.
window.AUGUST_TOPICS = window.AUGUST_TOPICS || [];
window.AUGUST_TOPICS.push({
  key: "sql-commands",
  name: "SQL Commands",
  questions: [
    {
      q: "Which constraint ensures that a column <b>cannot store NULL</b> values but <b>allows duplicate</b> values?",
      options: [
        "<code>NOT NULL</code>",
        "<code>UNIQUE</code>",
        "<code>PRIMARY KEY</code>",
        "<code>CHECK</code>"
      ],
      answer: 0,
      explain: "<code>NOT NULL</code> prohibits NULL in a column without affecting duplicates. <code>PRIMARY KEY</code> also disallows NULL but must be unique; <code>UNIQUE</code> allows NULLs; <code>CHECK</code> enforces a condition on the value.",
      diff: "E"
    },
    {
      q: "Which statement removes <b>all rows</b> from a table but <b>keeps the table structure</b>?",
      options: [
        "<code>DROP TABLE EMPLOYEE;</code>",
        "<code>TRUNCATE TABLE EMPLOYEE;</code>",
        "<code>DELETE FROM EMPLOYEE;</code>",
        "<code>ALTER TABLE EMPLOYEE;</code>"
      ],
      answer: 1,
      explain: "<code>TRUNCATE</code> is a DDL command that deletes every row while keeping the table. <code>DROP TABLE</code> removes the table itself (structure and data); <code>DELETE</code> is DML and can remove selected rows using a WHERE clause.",
      diff: "E"
    },
    {
      q: "Which SQL command is used to <b>add a new row</b> of data into a table?",
      options: [
        "<code>INSERT</code>",
        "<code>UPDATE</code>",
        "<code>ALTER</code>",
        "<code>SELECT</code>"
      ],
      answer: 0,
      explain: "<code>INSERT</code> adds new rows. <code>UPDATE</code> modifies existing rows, <code>ALTER</code> changes the table structure, and <code>SELECT</code> only retrieves data.",
      diff: "E"
    },
    {
      q: "What is the purpose of <code>SELECT DISTINCT</code>?",
      options: [
        "It removes duplicate columns from the result",
        "It sorts the result in ascending order",
        "It removes duplicate rows from the result",
        "It filters rows using a condition"
      ],
      answer: 2,
      explain: "<code>DISTINCT</code> eliminates duplicate rows from the output. Sorting is done by <code>ORDER BY</code> and row filtering by <code>WHERE</code>.",
      diff: "E"
    },
    {
      q: "If no keyword is specified, <code>ORDER BY</code> sorts rows in:",
      options: [
        "random order",
        "order of insertion",
        "descending order",
        "ascending order"
      ],
      answer: 3,
      explain: "<code>ORDER BY</code> defaults to ascending (<code>ASC</code>) order. <code>DESC</code> must be written explicitly for descending order.",
      diff: "E"
    },
    {
      q: "<code>SELECT * FROM EMPLOYEE WHERE NAME LIKE 'A%';</code> matches names that:",
      options: [
        "end with the letter 'A'",
        "begin with the letter 'A'",
        "contain the letter 'A' anywhere",
        "are exactly two characters long"
      ],
      answer: 1,
      explain: "In <code>LIKE</code>, <code>%</code> matches any number of characters, so <code>'A%'</code> matches values starting with A followed by anything. <code>'%A'</code> would match values ending with A.",
      diff: "E"
    },
    {
      q: "Which clause is used to put a <b>condition on groups</b> created by <code>GROUP BY</code>?",
      options: [
        "<code>HAVING</code>",
        "<code>WHERE</code>",
        "<code>ORDER BY</code>",
        "<code>LIMIT</code>"
      ],
      answer: 0,
      explain: "<code>WHERE</code> filters individual rows before grouping; <code>HAVING</code> filters groups after grouping and can use aggregate functions.",
      diff: "E"
    },
    {
      q: "Which statement <b>adds a new column</b> BONUS to the existing table EMPLOYEE?",
      options: [
        "<code>INSERT INTO EMPLOYEE ADD BONUS INT;</code>",
        "<code>UPDATE TABLE EMPLOYEE ADD BONUS INT;</code>",
        "<code>ALTER TABLE EMPLOYEE ADD BONUS INT;</code>",
        "<code>CREATE TABLE EMPLOYEE ADD BONUS INT;</code>"
      ],
      answer: 2,
      explain: "<code>ALTER TABLE</code> changes the structure of an existing table — <code>ADD</code> adds a column, <code>MODIFY</code> changes a column's type and <code>DROP COLUMN</code> removes one.",
      diff: "E"
    },
    {
      q: "<b>Table: EMPLOYEE</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>EID</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>NAME</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DEPT</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>SALARY</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>CITY</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">AMIT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">50000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PRIYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">60000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ROHAN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">45000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SNEHA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">70000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PUNE</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">5</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">KAVYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">HR</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">40000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">6</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">VIKRAM</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ADMIN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">55000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr></table><br>What is the output of <code>SELECT COUNT(*) FROM EMPLOYEE WHERE DEPT = 'SALES' AND CITY = 'DELHI';</code>?",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: 1,
      explain: "AMIT and ROHAN are in SALES and DELHI. VIKRAM is in DELHI but his DEPT is ADMIN, so only 2 rows satisfy both conditions (AND requires both to be true).",
      diff: "M"
    },
    {
      q: "<b>Table: EMPLOYEE</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>EID</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>NAME</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DEPT</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>SALARY</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>CITY</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">AMIT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">50000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PRIYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">60000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ROHAN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">45000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SNEHA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">70000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PUNE</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">5</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">KAVYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">HR</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">40000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">6</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">VIKRAM</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ADMIN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">55000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr></table><br>What is the output of <code>SELECT DEPT, COUNT(*) FROM EMPLOYEE GROUP BY DEPT;</code>?",
      options: [
        "SALES 2, IT 2, HR 1",
        "SALES 3, IT 2, HR 1, ADMIN 1",
        "SALES 2, IT 1, HR 1, ADMIN 1",
        "SALES 2, IT 2, HR 1, ADMIN 1"
      ],
      answer: 3,
      explain: "Grouped by DEPT: SALES has 2 (AMIT, ROHAN), IT has 2 (PRIYA, SNEHA), HR has 1 (KAVYA) and ADMIN has 1 (VIKRAM).",
      diff: "M"
    },
    {
      q: "<b>Table: EMPLOYEE</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>EID</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>NAME</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DEPT</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>SALARY</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>CITY</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">AMIT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">50000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PRIYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">60000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ROHAN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">45000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SNEHA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">70000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PUNE</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">5</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">KAVYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">HR</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">40000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">6</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">VIKRAM</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ADMIN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">55000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr></table><br>What is the output of <code>SELECT NAME FROM EMPLOYEE WHERE NAME LIKE '%R%';</code>?",
      options: [
        "AMIT, ROHAN, VIKRAM",
        "PRIYA, SNEHA, VIKRAM",
        "PRIYA, ROHAN, VIKRAM",
        "AMIT, PRIYA, ROHAN"
      ],
      answer: 2,
      explain: "<code>%R%</code> matches names containing R anywhere. PRIYA, ROHAN and VIKRAM contain R; AMIT and SNEHA do not.",
      diff: "M"
    },
    {
      q: "<b>Table: EMPLOYEE</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>EID</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>NAME</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DEPT</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>SALARY</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>CITY</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">AMIT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">50000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PRIYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">60000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ROHAN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">45000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SNEHA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">70000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PUNE</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">5</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">KAVYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">HR</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">40000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">6</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">VIKRAM</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ADMIN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">55000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr></table><br>What is the output of <code>SELECT NAME, SALARY FROM EMPLOYEE ORDER BY SALARY DESC;</code>?",
      options: [
        "SNEHA 70000, PRIYA 60000, VIKRAM 55000, AMIT 50000, ROHAN 45000, KAVYA 40000",
        "KAVYA 40000, ROHAN 45000, AMIT 50000, VIKRAM 55000, PRIYA 60000, SNEHA 70000",
        "AMIT 50000, ROHAN 45000, VIKRAM 55000, SNEHA 70000, PRIYA 60000, KAVYA 40000",
        "PRIYA 60000, SNEHA 70000, AMIT 50000, VIKRAM 55000, KAVYA 40000, ROHAN 45000"
      ],
      answer: 0,
      explain: "<code>DESC</code> sorts salary from highest to lowest: 70000, 60000, 55000, 50000, 45000, 40000.",
      diff: "M"
    },
    {
      q: "<b>Table: EMPLOYEE</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>EID</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>NAME</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DEPT</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>SALARY</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>CITY</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">AMIT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">50000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PRIYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">60000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ROHAN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">45000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SNEHA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">70000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PUNE</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">5</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">KAVYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">HR</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">40000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">6</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">VIKRAM</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ADMIN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">55000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr></table><br>What is the output of <code>SELECT NAME FROM EMPLOYEE WHERE SALARY BETWEEN 45000 AND 60000;</code>?",
      options: [
        "AMIT, PRIYA, VIKRAM",
        "AMIT, ROHAN, VIKRAM",
        "PRIYA, SNEHA, VIKRAM",
        "AMIT, PRIYA, ROHAN, VIKRAM"
      ],
      answer: 3,
      explain: "<code>BETWEEN</code> is inclusive of both limits: AMIT 50000, PRIYA 60000, ROHAN 45000 and VIKRAM 55000 qualify. SNEHA (70000) does not.",
      diff: "M"
    },
    {
      q: "<b>Table: EMPLOYEE</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>EID</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>NAME</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DEPT</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>SALARY</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>CITY</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">AMIT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">50000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PRIYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">60000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ROHAN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">45000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SNEHA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">70000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PUNE</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">5</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">KAVYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">HR</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">40000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">6</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">VIKRAM</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ADMIN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">55000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr></table><br>What is the output of <code>SELECT COUNT(*) FROM EMPLOYEE WHERE CITY NOT IN ('PUNE');</code>?",
      options: [
        "3",
        "4",
        "5",
        "6"
      ],
      answer: 2,
      explain: "<code>NOT IN</code> excludes PUNE; only SNEHA is from PUNE, so the remaining 5 employees are counted.",
      diff: "M"
    },
    {
      q: "Which statement changes the salary of <b>only the employee with EID 3</b> to 50000?",
      options: [
        "<code>INSERT INTO EMPLOYEE (SALARY) VALUES (50000) WHERE EID = 3;</code>",
        "<code>UPDATE EMPLOYEE SET SALARY = 50000 WHERE EID = 3;</code>",
        "<code>UPDATE EMPLOYEE SET SALARY = 50000;</code>",
        "<code>MODIFY EMPLOYEE SET SALARY = 50000 WHERE EID = 3;</code>"
      ],
      answer: 1,
      explain: "<code>UPDATE ... SET ... WHERE</code> modifies only matching rows. Option C is valid SQL but updates every row; <code>INSERT</code> cannot be combined with <code>WHERE</code>, and <code>MODIFY</code> is not a DML keyword.",
      diff: "M"
    },
    {
      q: "What will be the <b>column headings</b> in the output of <code>SELECT NAME AS EMP_NAME, SALARY AS PAY FROM EMPLOYEE;</code>?",
      options: [
        "EMP_NAME, SALARY",
        "NAME, PAY",
        "EMP_NAME, PAY",
        "NAME, SALARY"
      ],
      answer: 2,
      explain: "<code>AS</code> renames a column in the query output only; the actual table columns remain NAME and SALARY. Hence the headings are EMP_NAME and PAY.",
      diff: "M"
    },
    {
      q: "<b>Table: EMPLOYEE</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>EID</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>NAME</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DEPT</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>SALARY</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>CITY</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">AMIT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">50000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PRIYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">60000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ROHAN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">45000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SNEHA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">70000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PUNE</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">5</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">KAVYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">HR</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">40000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">6</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">VIKRAM</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ADMIN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">55000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr></table><br><b>Table: DEPT</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DID</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DNAME</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>LOCATION</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">HR</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PUNE</td></tr></table><br>What is the output of <code>SELECT E.NAME, D.LOCATION FROM EMPLOYEE E INNER JOIN DEPT D ON E.DEPT = D.DNAME;</code>?",
      options: [
        "AMIT DELHI, PRIYA MUMBAI, ROHAN DELHI, SNEHA PUNE, KAVYA PUNE, VIKRAM DELHI",
        "AMIT DELHI, PRIYA MUMBAI, ROHAN DELHI, SNEHA MUMBAI, KAVYA PUNE",
        "AMIT DELHI, ROHAN DELHI, VIKRAM DELHI",
        "AMIT DELHI, PRIYA MUMBAI, ROHAN DELHI, SNEHA MUMBAI, KAVYA PUNE, VIKRAM NULL"
      ],
      answer: 1,
      explain: "<code>INNER JOIN</code> returns only matching rows. VIKRAM's DEPT (ADMIN) has no matching DNAME in DEPT, so he is excluded — 5 rows remain: AMIT, PRIYA, ROHAN, SNEHA, KAVYA.",
      diff: "M",
      diagram: "erDiagram\n    DEPT ||--o{ EMPLOYEE :employs\n    DEPT {\n        int DID\n        string DNAME\n        string LOCATION\n    }\n    EMPLOYEE {\n        int EID\n        string NAME\n        string DEPT\n        int SALARY\n    }",
      diagramCaption: "One department employs zero or more employees; E.DEPT is matched with D.DNAME."
    },
    {
      q: "<b>Table: EMPLOYEE</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>EID</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>NAME</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DEPT</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>SALARY</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>CITY</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">AMIT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">50000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PRIYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">60000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ROHAN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">45000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SNEHA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">70000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PUNE</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">5</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">KAVYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">HR</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">40000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">6</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">VIKRAM</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ADMIN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">55000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr></table><br><b>Table: DEPT</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DID</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DNAME</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>LOCATION</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">HR</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PUNE</td></tr></table><br>What is the output of <code>SELECT E.NAME, D.LOCATION FROM EMPLOYEE E LEFT JOIN DEPT D ON E.DEPT = D.DNAME;</code>?",
      options: [
        "AMIT DELHI, PRIYA MUMBAI, ROHAN DELHI, SNEHA MUMBAI, KAVYA PUNE, VIKRAM DELHI",
        "AMIT DELHI, PRIYA MUMBAI, ROHAN DELHI, SNEHA MUMBAI, KAVYA PUNE, VIKRAM NULL",
        "AMIT DELHI, ROHAN DELHI, VIKRAM DELHI",
        "AMIT DELHI, PRIYA MUMBAI, ROHAN DELHI, SNEHA MUMBAI, KAVYA PUNE"
      ],
      answer: 1,
      explain: "<code>LEFT JOIN</code> keeps every row of the left table (EMPLOYEE); unmatched rows get NULL for the right-table columns. VIKRAM (ADMIN) has no matching department, so his LOCATION is NULL — 6 rows total.",
      diff: "M"
    },
    {
      q: "<b>Table: EMPLOYEE</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>EID</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>NAME</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DEPT</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>SALARY</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>CITY</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">AMIT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">50000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PRIYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">60000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ROHAN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">45000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SNEHA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">70000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PUNE</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">5</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">KAVYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">HR</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">40000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">6</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">VIKRAM</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ADMIN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">55000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr></table><br>What is the output of <code>SELECT NAME FROM EMPLOYEE WHERE SALARY &gt; (SELECT AVG(SALARY) FROM EMPLOYEE);</code>?",
      options: [
        "AMIT, ROHAN, KAVYA",
        "PRIYA, SNEHA",
        "AMIT, PRIYA, SNEHA, VIKRAM",
        "PRIYA, SNEHA, VIKRAM"
      ],
      answer: 3,
      explain: "The subquery gives AVG = 320000/6 &asymp; 53333.33. Employees with salary above this average: PRIYA 60000, SNEHA 70000, VIKRAM 55000.",
      diff: "M"
    },
    {
      q: "<b>Table: STUDENT</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>SID</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>NAME</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>MARKS</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">AARAV</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">85</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">BHAVYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">NULL</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">CHETAN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">92</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DIYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">NULL</td></tr></table><br>What is the output of <code>SELECT COUNT(*) FROM STUDENT WHERE MARKS IS NULL;</code>?",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: 1,
      explain: "BHAVYA and DIYA have NULL marks, so COUNT(*) = 2. NULL cannot be compared with '=', so the <code>IS NULL</code> operator must be used.",
      diff: "M"
    },
    {
      q: "<b>Table: EMPLOYEE</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>EID</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>NAME</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DEPT</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>SALARY</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>CITY</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">AMIT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">50000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PRIYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">60000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ROHAN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">45000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SNEHA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">70000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PUNE</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">5</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">KAVYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">HR</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">40000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">6</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">VIKRAM</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ADMIN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">55000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr></table><br>What is the output of <code>SELECT DEPT, AVG(SALARY) FROM EMPLOYEE GROUP BY DEPT HAVING COUNT(*) &gt;= 2;</code>?",
      options: [
        "SALES 50000, IT 65000",
        "SALES 47500, IT 65000",
        "SALES 47500, IT 65000, HR 40000, ADMIN 55000",
        "HR 40000, ADMIN 55000"
      ],
      answer: 1,
      explain: "Only groups with 2 or more rows pass <code>HAVING</code>: SALES (AMIT, ROHAN) with AVG = 47500 and IT (PRIYA, SNEHA) with AVG = 65000. HR and ADMIN have one row each, so they are excluded.",
      diff: "H"
    },
    {
      q: "Which statement correctly distinguishes <code>WHERE</code> and <code>HAVING</code>?",
      options: [
        "<code>WHERE</code> filters rows before grouping; <code>HAVING</code> filters groups after grouping.",
        "<code>WHERE</code> is applied after grouping, <code>HAVING</code> before grouping.",
        "<code>HAVING</code> cannot be used with aggregate functions.",
        "<code>HAVING</code> is used to sort the final result."
      ],
      answer: 0,
      explain: "<code>WHERE</code> cannot use aggregate functions and filters individual rows first; <code>HAVING</code> filters groups (and may use COUNT, SUM, AVG, etc.) after <code>GROUP BY</code>.",
      diff: "H"
    },
    {
      q: "<b>Table: EMPLOYEE</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>EID</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>NAME</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DEPT</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>SALARY</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>CITY</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">AMIT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">50000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PRIYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">60000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ROHAN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">45000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SNEHA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">70000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PUNE</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">5</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">KAVYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">HR</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">40000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">6</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">VIKRAM</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ADMIN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">55000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr></table><br>What is the output of <code>SELECT DEPT, MAX(SALARY) FROM EMPLOYEE GROUP BY DEPT HAVING MAX(SALARY) &gt; 50000;</code>?",
      options: [
        "SALES 50000, IT 70000, ADMIN 55000",
        "IT 70000",
        "IT 70000, ADMIN 55000",
        "SALES 50000, HR 40000"
      ],
      answer: 2,
      explain: "MAX per department: SALES 50000 (not &gt; 50000, so excluded — comparison is strict), IT 70000, HR 40000, ADMIN 55000. Hence IT 70000 and ADMIN 55000 remain.",
      diff: "H"
    },
    {
      q: "Consider the statement:<br><pre>CREATE TABLE EMPLOYEE (EID INT PRIMARY KEY,\nNAME VARCHAR(20) NOT NULL,\nSALARY INT DEFAULT 10000,\nDID INT,\nFOREIGN KEY (DID) REFERENCES DEPT(DID));</pre><b>Table: DEPT</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DID</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DNAME</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>LOCATION</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">HR</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PUNE</td></tr></table><br>Which of the following <b>INSERT statements will FAIL</b>?",
      options: [
        "<code>INSERT INTO EMPLOYEE (EID, NAME, DID) VALUES (1, 'AMIT', 2);</code>",
        "<code>INSERT INTO EMPLOYEE (EID, NAME, SALARY, DID) VALUES (2, 'PRIYA', 50000, 9);</code>",
        "<code>INSERT INTO EMPLOYEE (EID, NAME, SALARY, DID) VALUES (3, 'ROHAN', 30000, 1);</code>",
        "<code>INSERT INTO EMPLOYEE (EID, NAME) VALUES (4, 'SNEHA');</code>"
      ],
      answer: 1,
      explain: "DID 9 does not exist in DEPT, so the <code>FOREIGN KEY</code> constraint is violated. Options A and C use valid DIDs; option D is fine because NAME is supplied, SALARY takes the DEFAULT 10000 and DID becomes NULL (it has no NOT NULL).",
      diff: "H"
    },
    {
      q: "<b>Table: EMPLOYEE</b><br><table style=\"border-collapse:collapse;border:1px solid #5C4632\"><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>EID</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>NAME</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>DEPT</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>SALARY</b></td><td style=\"border:1px solid #5C4632;padding:4px 8px\"><b>CITY</b></td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">1</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">AMIT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">50000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">2</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PRIYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">60000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">3</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ROHAN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SALES</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">45000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">4</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">SNEHA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">IT</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">70000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">PUNE</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">5</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">KAVYA</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">HR</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">40000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">MUMBAI</td></tr><tr><td style=\"border:1px solid #5C4632;padding:4px 8px\">6</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">VIKRAM</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">ADMIN</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">55000</td><td style=\"border:1px solid #5C4632;padding:4px 8px\">DELHI</td></tr></table><br>What is the output of <code>SELECT NAME, SALARY FROM EMPLOYEE ORDER BY SALARY DESC LIMIT 3;</code>?",
      options: [
        "SNEHA 70000, PRIYA 60000, VIKRAM 55000",
        "SNEHA 70000, PRIYA 60000, AMIT 50000",
        "PRIYA 60000, SNEHA 70000, VIKRAM 55000",
        "SNEHA 70000, VIKRAM 55000, AMIT 50000"
      ],
      answer: 0,
      explain: "<code>DESC</code> lists the highest salaries first (70000, 60000, 55000) and <code>LIMIT 3</code> keeps only the top three rows: SNEHA, PRIYA, VIKRAM.",
      diff: "H"
    }
  ]
});
