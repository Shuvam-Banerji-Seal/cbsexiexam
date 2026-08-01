// August 01 Examination — Topic 1: Database Concepts & Components.
// 25 questions · CBSE Class XII Computer Science.
window.AUGUST_TOPICS = window.AUGUST_TOPICS || [];
window.AUGUST_TOPICS.push({
  key: "database-concepts",
  name: "Database Concepts & Components",
  questions: [
    {
      q: "Which of the following best defines a <b>database</b>?",
      options: [
        "A collection of computer programs that manage data",
        "An organized collection of related data stored and accessed electronically",
        "A spreadsheet containing formulas and charts",
        "A folder of text files kept on a hard disk"
      ],
      answer: 1,
      explain: "A database is an organized collection of related data that can be stored, retrieved and modified electronically. Programs that manage data are called a DBMS, not a database itself.",
      diff: "E"
    },
    {
      q: "A <b>DBMS</b> (Database Management System) is best described as:",
      options: [
        "A software system that defines, creates, maintains and controls access to databases",
        "A hardware device used to store database files",
        "A programming language such as Python or Java",
        "A network protocol used to connect computers"
      ],
      answer: 0,
      explain: "A DBMS is system software that defines, creates, maintains and controls access to the database. Hardware, programming languages and network protocols are not part of a DBMS.",
      diff: "E"
    },
    {
      q: "The term <b>metadata</b> refers to:",
      options: [
        "The actual data values stored in tables",
        "Data about data, such as table names, column names and data types",
        "Duplicate copies of data kept for backup",
        "The speed at which a query is executed"
      ],
      answer: 1,
      explain: "Metadata is 'data about data' — for example, the structure of a table: its column names, data types and constraints. The data dictionary of a DBMS stores this metadata.",
      diff: "E"
    },
    {
      q: "Which SQL command is used to <b>create a new table</b>?",
      options: ["CREATE", "INSERT", "ALTER", "NEW"],
      answer: 0,
      explain: "<code>CREATE TABLE</code> is a DDL (Data Definition Language) command that defines a new table and its structure. <code>INSERT</code> adds rows of data, <code>ALTER</code> modifies an existing structure, and <code>NEW</code> is not an SQL command.",
      diff: "E"
    },
    {
      q: "Which SQL command is used to <b>retrieve data</b> from a table?",
      options: ["GET", "FETCH", "SELECT", "SHOW"],
      answer: 2,
      explain: "<code>SELECT</code> is the DML command used to retrieve (query) data from one or more tables. <code>GET</code> and <code>SHOW</code> are not SQL commands, and <code>FETCH</code> is used with cursors in procedural SQL, not to query a table directly.",
      diff: "E"
    },
    {
      q: "In a relational database, the value <code>NULL</code> represents:",
      options: [
        "The numeric value 0",
        "An empty string (zero characters)",
        "A missing or unknown value",
        "The boolean value FALSE"
      ],
      answer: 2,
      explain: "<code>NULL</code> means 'unknown' or 'no value' — it is not 0, an empty string, or FALSE. Use <code>IS NULL</code> / <code>IS NOT NULL</code> to test for it, since comparisons with <code>NULL</code> evaluate to UNKNOWN.",
      diff: "E"
    },
    {
      q: "The attribute (or set of attributes) that <b>uniquely identifies each row</b> of a relation is called the:",
      options: ["Foreign key", "Primary key", "Super key", "Alternate key"],
      answer: 1,
      explain: "A primary key is the minimal set of attributes whose values uniquely identify every row of the relation. A super key is any superset of a key, an alternate key is a candidate key not chosen as primary, and a foreign key links two tables.",
      diff: "E"
    },
    {
      q: "The <b>degree</b> of a relation is the number of its:",
      options: ["Rows (tuples)", "Columns (attributes)", "Tables in the database", "Foreign keys"],
      answer: 1,
      explain: "Degree is the number of attributes (columns) in the relation. Do not confuse it with cardinality, which is the number of rows (tuples).",
      diff: "E"
    },
    {
      q: "The <b>cardinality</b> of a relation is the number of its:",
      options: ["Columns (attributes)", "Rows (tuples)", "Keys", "Indexes"],
      answer: 2,
      explain: "Cardinality is the number of tuples (rows) currently present in the relation. Degree, on the other hand, is the number of attributes (columns).",
      diff: "E"
    },
    {
      q: "Compared with a traditional <b>file system</b>, a DBMS offers the following advantage:",
      options: [
        "Higher data redundancy and duplication",
        "Centralized control that reduces redundancy and improves data consistency",
        "No need for user authentication or authorization",
        "A faster way to store data on paper files"
      ],
      answer: 1,
      explain: "A DBMS centralizes data management: it reduces redundancy, avoids inconsistency, and provides shared, concurrent and secure access to data. A file system stores data in separate files with little control and high redundancy.",
      diff: "M"
    },
    {
      q: "Which of the following is a <b>component of a DBMS environment</b>?",
      options: ["Hardware and software", "Data", "Procedures and users", "All of these"],
      answer: 3,
      explain: "The five components of a DBMS environment are: hardware, software, data, procedures and users. All of the options listed are part of the environment.",
      diff: "M"
    },
    {
      q: "Which group contains <b>only DML commands</b>?",
      options: [
        "SELECT, INSERT, UPDATE, DELETE",
        "CREATE, ALTER, DROP, TRUNCATE",
        "GRANT, REVOKE",
        "COMMIT, ROLLBACK, SAVEPOINT"
      ],
      answer: 0,
      explain: "DML (Data Manipulation Language) works on the data inside tables: <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code> and <code>DELETE</code>. The second group is DDL, the third is DCL, and the fourth is TCL.",
      diff: "M"
    },
    {
      q: "Which pair of SQL commands <b>grants and revokes privileges</b> to users?",
      options: ["INSERT, DELETE", "GRANT, REVOKE", "CREATE, DROP", "UPDATE, SELECT"],
      answer: 1,
      explain: "<code>GRANT</code> gives a privilege (e.g., <code>SELECT</code>, <code>INSERT</code>) to a user and <code>REVOKE</code> removes it. These are DCL (Data Control Language) commands; the other pairs belong to DML and DDL.",
      diff: "M"
    },
    {
      q: "The person responsible for <b>installing, maintaining and securing the database</b> is called the:",
      options: ["Application programmer", "End user", "Database Administrator (DBA)", "System analyst"],
      answer: 2,
      explain: "The DBA manages the overall database: designing the schema, granting and revoking access, taking backups and monitoring performance. Programmers, end users and analysts have different roles.",
      diff: "M"
    },
    {
      q: "Which statement about <b>super keys and candidate keys</b> is TRUE?",
      options: [
        "Every super key is also a candidate key",
        "Every candidate key is a super key, but not every super key is a candidate key",
        "A super key cannot contain more than one attribute",
        "A relation can have only one super key"
      ],
      answer: 1,
      explain: "A candidate key is a minimal super key. Therefore every candidate key is a super key, but a super key may contain redundant attributes — e.g., <code>(RollNo, Name)</code> when <code>RollNo</code> alone is a key.",
      diff: "M"
    },
    {
      q: "A <b>foreign key</b> in a table is best defined as:",
      options: [
        "The column that uniquely identifies rows in the same table",
        "An attribute whose values reference the primary key of another table, establishing a link between them",
        "A key that may contain duplicate values and is used for sorting",
        "A column that stores NULL in every row"
      ],
      answer: 1,
      explain: "A foreign key is an attribute (or set) in one table that matches the primary key of another table, enforcing the relationship between them. Its values must either match an existing primary key or be <code>NULL</code>.",
      diff: "M",
      diagram: "erDiagram\n    STUDENT ||--o{ ENROLLMENT : enrolls\n    STUDENT {\n        int rollno PK\n        string name\n    }\n    ENROLLMENT {\n        int enrollid PK\n        int rollno FK\n    }",
      diagramCaption: "ENROLLMENT.rollno is a foreign key referencing STUDENT.rollno."
    },
    {
      q: "When the primary key of a table is made up of <b>two or more attributes</b>, it is called a:",
      options: ["Foreign key", "Alternate key", "Composite key", "Surrogate key"],
      answer: 2,
      explain: "A composite (or compound) key is a key formed by combining two or more columns, e.g., <code>(StudentID, CourseID)</code> in a CourseEnrollment table. An alternate key is a candidate key not chosen as primary; a surrogate key is a system-generated identifier.",
      diff: "M"
    },
    {
      q: "<b>Referential integrity</b> of a database ensures that:",
      options: [
        "Every foreign key value must match an existing primary key value in the referenced table (or be NULL)",
        "No two rows in any table are identical",
        "Every column contains a non-NULL value",
        "Data stored in the database is encrypted"
      ],
      answer: 0,
      explain: "Referential integrity is enforced by foreign keys: a value inserted into a foreign key column must already exist as a primary key in the referenced table (or be <code>NULL</code>). This prevents 'orphan' records.",
      diff: "M"
    },
    {
      q: "A <b>domain constraint</b> restricts:",
      options: [
        "The set of valid values that an attribute can take, based on its domain (data type and range)",
        "The number of rows a table can hold",
        "The number of tables in a database",
        "Which users can log in to the DBMS"
      ],
      answer: 0,
      explain: "Every attribute has a domain — the set of permitted values, e.g., <code>Age</code> must be a positive integer below 150. Domain constraints are one category of integrity constraints.",
      diff: "M"
    },
    {
      q: "Which statement about an <b>RDBMS</b> is correct?",
      options: [
        "It is based on the relational model, storing data in tables that are linked through keys",
        "It stores data in unstructured files with no relationships",
        "It does not support keys or integrity constraints",
        "It is identical to a file system"
      ],
      answer: 0,
      explain: "An RDBMS (e.g., MySQL, Oracle) follows E. F. Codd's relational model: data is organized into relations (tables) and related through primary and foreign keys, with integrity constraints enforced by the system.",
      diff: "H"
    },
    {
      q: "In SQL classification, <code>TRUNCATE</code> is a ___ command while <code>DELETE</code> is a ___ command.",
      options: [
        "DDL; DML",
        "DML; DDL",
        "DCL; DML",
        "DDL; DCL"
      ],
      answer: 0,
      explain: "<code>TRUNCATE</code> removes all rows by dropping and recreating the table — it is DDL and cannot use a <code>WHERE</code> clause. <code>DELETE</code> removes rows one by one, may use <code>WHERE</code>, and is DML, so it can be rolled back within a transaction.",
      diff: "H"
    },
    {
      q: "The three levels of <b>data abstraction</b>, from highest to lowest, are:",
      options: [
        "Physical level, Logical level, View level",
        "View level, Logical level, Physical level",
        "Logical level, View level, Physical level",
        "View level, Physical level, Logical level"
      ],
      answer: 1,
      explain: "The ANSI/SPARC three-level architecture: the View (external) level shows each user only part of the data, the Logical (conceptual) level describes what data is stored and its relationships, and the Physical (internal) level describes how data is stored on disk.",
      diff: "H",
      diagram: "flowchart TD\n    V[View Level - what users see] --> L[Logical Level - overall structure]\n    L --> P[Physical Level - storage on disk]",
      diagramCaption: "Three levels of data abstraction."
    },
    {
      q: "Which command adds a new column <code>Marks</code> to an existing table <code>Student</code>?",
      options: [
        "<code>ALTER TABLE Student ADD Marks INT;</code>",
        "<code>INSERT INTO Student (Marks) VALUES (90);</code>",
        "<code>UPDATE Student SET Marks = 90;</code>",
        "<code>CREATE TABLE Student (Marks INT);</code>"
      ],
      answer: 0,
      explain: "<code>ALTER TABLE ... ADD</code> is the DDL command that changes the structure of an existing table, e.g., adding a column. <code>INSERT</code> and <code>UPDATE</code> modify data (DML), and <code>CREATE</code> would attempt to create a whole new table.",
      diff: "H"
    },
    {
      q: "Every student in <code>STUDENT(RollNo, AadharNo, Name, Phone)</code> has a <b>unique AadharNo</b>. Which of the following is a <b>candidate key</b>?",
      options: [
        "(RollNo, Name)",
        "(Name, Phone)",
        "AadharNo",
        "Name"
      ],
      answer: 2,
      explain: "A candidate key must uniquely identify each row AND be minimal. <code>AadharNo</code> is unique and has no redundant attribute, so it is a candidate key. <code>(RollNo, Name)</code> contains redundancy (RollNo alone is a key), while <code>Name</code> and <code>(Name, Phone)</code> cannot be guaranteed unique.",
      diff: "H"
    },
    {
      q: "Consider the relation <code>EMP(EmpID, Name, Dept, Salary)</code> containing 5 rows. Its <b>degree</b> and <b>cardinality</b> are respectively:",
      options: ["4 and 5", "5 and 4", "4 and 4", "5 and 5"],
      answer: 0,
      explain: "Degree = number of attributes = 4 (EmpID, Name, Dept, Salary). Cardinality = number of rows = 5.",
      diff: "H"
    }
  ]
});
