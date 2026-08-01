// August 01 Examination — Topic 6: Python & SQLite (sqlite3 module).
// 25 questions · CBSE Class XII Computer Science.
window.AUGUST_TOPICS = window.AUGUST_TOPICS || [];
window.AUGUST_TOPICS.push({
  key: "python-sqlite",
  name: "Python & SQLite Integration",
  questions: [
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect('school.db')\nprint(type(conn).__name__)</pre>What is printed?",
      options: [
        "<code>Connection</code>",
        "<code>Cursor</code>",
        "<code>Database</code>",
        "<code>Table</code>"
      ],
      answer: 0,
      explain: "<code>sqlite3.connect()</code> returns a <code>Connection</code> object that represents the database, so <code>type(conn).__name__</code> prints <code>'Connection'</code>.",
      diff: "E"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect('exam.db')\ncur = conn.cursor()\nprint(type(cur).__name__)</pre>What is printed?",
      options: [
        "<code>Connection</code>",
        "<code>Table</code>",
        "<code>Cursor</code>",
        "<code>Row</code>"
      ],
      answer: 2,
      explain: "<code>conn.cursor()</code> returns a <code>Cursor</code> object used to execute SQL statements and fetch results, so <code>type(cur).__name__</code> prints <code>'Cursor'</code>.",
      diff: "E"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect('library.db')\ncur = conn.cursor()\ncur.execute('CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT)')\nconn.close()\nprint('Done')</pre>Which statement is TRUE?",
      options: [
        "An error is raised because <code>CREATE TABLE</code> requires <code>conn.commit()</code>",
        "<code>library.db</code> is created on disk and the <code>books</code> table persists after the program ends",
        "The table exists only in memory and is lost when the program ends",
        "An error is raised because DDL statements cannot be run through <code>cursor.execute()</code>"
      ],
      answer: 1,
      explain: "<code>CREATE TABLE</code> (a DDL statement) runs through <code>cursor.execute()</code> and takes effect immediately — DDL does not need <code>commit()</code>. The file <code>library.db</code> is created on disk and the table persists.",
      diff: "E"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE t (x INTEGER)')\ncur.execute('INSERT INTO t VALUES (10)')\ncur.execute('INSERT INTO t VALUES (20)')\nconn.commit()\ncur.execute('SELECT x FROM t')\nrow = cur.fetchone()\nprint(row)</pre>What is printed?",
      options: [
        "<code>[10]</code>",
        "<code>(10,)</code>",
        "<code>10</code>",
        "<code>((10,))</code>"
      ],
      answer: 1,
      explain: "<code>fetchone()</code> returns the next row as a <b>tuple</b>. The first row is <code>(10,)</code> — the trailing comma marks a one-element tuple.",
      diff: "E"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE t (x INTEGER)')\ncur.execute('INSERT INTO t VALUES (10)')\ncur.execute('INSERT INTO t VALUES (20)')\nconn.commit()\ncur.execute('SELECT x FROM t')\nprint(cur.fetchall())</pre>What is printed?",
      options: [
        "<code>((10,), (20,))</code>",
        "<code>[10, 20]</code>",
        "<code>[(10,), (20,)]</code>",
        "<code>[(10, 20)]</code>"
      ],
      answer: 2,
      explain: "<code>fetchall()</code> returns a <b>list of tuples</b>, one tuple per row: <code>[(10,), (20,)]</code>.",
      diff: "E"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE t (x INTEGER)')\nconn.commit()\ncur.execute('SELECT x FROM t')\nprint(cur.fetchone())</pre>What is printed?",
      options: [
        "<code>0</code>",
        "<code>()</code>",
        "<code>[]</code>",
        "<code>None</code>"
      ],
      answer: 3,
      explain: "The table has no rows, so <code>fetchone()</code> returns <code>None</code> — not an empty tuple or an empty list.",
      diff: "E"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect('bank.db')\ncur = conn.cursor()\ncur.execute('CREATE TABLE acc (id INTEGER, bal INTEGER)')\ncur.execute('INSERT INTO acc VALUES (1, 500)')\nconn.close()\n\nconn2 = sqlite3.connect('bank.db')\ncur2 = conn2.cursor()\ncur2.execute('SELECT * FROM acc')\nprint(cur2.fetchall())</pre>What is printed?",
      options: [
        "<code>[(1, 500)]</code>",
        "<code>[]</code>",
        "<code>None</code>",
        "An error, because the table <code>acc</code> was never committed"
      ],
      answer: 1,
      explain: "The <code>INSERT</code> was never committed, so when the first connection closes, the uncommitted change is <b>rolled back</b>. (<code>CREATE TABLE</code> is DDL and persists automatically.) The second connection therefore sees an empty table and prints <code>[]</code>.",
      diff: "M"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE t (x INTEGER)')\ncur.execute('INSERT INTO t VALUES (99)')\ncur.execute('SELECT x FROM t')\nprint(cur.fetchone())</pre>What is printed?",
      options: [
        "<code>None</code>",
        "<code>[]</code>",
        "<code>(99,)</code>",
        "An error is raised"
      ],
      answer: 2,
      explain: "A connection can always see its <b>own</b> uncommitted changes, so <code>(99,)</code> is printed. <code>commit()</code> is needed only to make changes visible to <b>other</b> connections and to make them permanent on disk.",
      diff: "H"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE t (x INTEGER)')\ncur.execute('INSERT INTO t VALUES (5)')\nconn.rollback()\ncur.execute('SELECT COUNT(*) FROM t')\nprint(cur.fetchone())</pre>What is printed?",
      options: [
        "<code>(0,)</code>",
        "<code>(1,)</code>",
        "<code>(5,)</code>",
        "<code>0</code>"
      ],
      answer: 0,
      explain: "<code>rollback()</code> undoes all uncommitted changes of the current transaction, so the <code>INSERT</code> of 5 is undone. <code>COUNT(*)</code> therefore returns 0, printed as the tuple <code>(0,)</code>.",
      diff: "M"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE emp (name TEXT, salary INTEGER)')\ndata = [('Amit', 50000), ('Bina', 60000), ('Cherry', 55000)]\ncur.executemany('INSERT INTO emp VALUES (?, ?)', data)\nconn.commit()\ncur.execute('SELECT name FROM emp WHERE salary &gt; 55000')\nprint(cur.fetchall())</pre>What is printed?",
      options: [
        "<code>[('Bina',), ('Cherry',)]</code>",
        "<code>[]</code>",
        "<code>[('Amit',), ('Bina',), ('Cherry',)]</code>",
        "<code>[('Bina',)]</code>"
      ],
      answer: 3,
      explain: "<code>executemany()</code> inserts all three rows. Only Bina (60000) has salary strictly greater than 55000 — Cherry's 55000 is not &gt; 55000. So <code>[('Bina',)]</code> is printed.",
      diff: "M"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE t (x INTEGER)')\ncur.executemany('INSERT INTO t VALUES (?)', [[1], [2], [3]])\nconn.commit()\ncur.execute('SELECT COUNT(*) FROM t')\nprint(cur.fetchone())</pre>What is printed?",
      options: [
        "<code>(1,)</code>",
        "<code>(3,)</code>",
        "<code>(0,)</code>",
        "<code>((1, 2, 3),)</code>"
      ],
      answer: 1,
      explain: "<code>executemany()</code> executes the same SQL once for <b>each</b> element of the sequence — three elements, so three rows are inserted. <code>COUNT(*)</code> therefore returns <code>(3,)</code>.",
      diff: "E"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE t (x INTEGER)')\ncur.executemany('INSERT INTO t VALUES (?)', [(1,), (2,), (3,), (4,)])\nconn.commit()\ncur.execute('UPDATE t SET x = x + 10 WHERE x &gt; 1')\nprint(cur.rowcount)</pre>What is printed?",
      options: [
        "<code>4</code>",
        "<code>1</code>",
        "<code>3</code>",
        "<code>0</code>"
      ],
      answer: 2,
      explain: "<code>rowcount</code> reports the number of rows affected by the last DML statement. The <code>UPDATE</code> changes rows 2, 3 and 4 — three rows — so <code>rowcount</code> is 3.",
      diff: "M"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE t (x INTEGER)')\ncur.executemany('INSERT INTO t VALUES (?)', [(10,), (20,)])\nconn.commit()\nresult = cur.execute('SELECT x FROM t')\nprint(result.fetchall())</pre>What is printed?",
      options: [
        "<code>[(10,), (20,)]</code>",
        "An error, because <code>execute()</code> does not return anything",
        "<code>(10, 20)</code>",
        "<code>[(10,), (20,), (10,), (20,)]</code>"
      ],
      answer: 0,
      explain: "<code>Cursor.execute()</code> returns the cursor object itself, so <code>result</code> is the same cursor and <code>result.fetchall()</code> works normally, giving <code>[(10,), (20,)]</code>.",
      diff: "M"
    },
    {
      q: "Consider this unsafe code:<br><pre>name = 'Ravi'\ncur.execute(\"SELECT * FROM users WHERE name = '\" + name + \"'\")</pre>String concatenation of user input is unsafe. Which is the CORRECT parameterized way to run the same query in the <code>sqlite3</code> module?",
      options: [
        "<code>cur.execute('SELECT * FROM users WHERE name = ?', name)</code>",
        "<code>cur.execute('SELECT * FROM users WHERE name = ?')</code>",
        "<code>cur.execute('SELECT * FROM users WHERE name = %s', (name,))</code>",
        "<code>cur.execute('SELECT * FROM users WHERE name = ?', (name,))</code>"
      ],
      answer: 3,
      explain: "<code>sqlite3</code> uses <code>?</code> placeholders and parameters must be passed as a <b>sequence</b> (tuple/list) — hence <code>(name,)</code>. <code>%s</code> belongs to other DB-API modules (MySQL/PostgreSQL). Parameterization binds the value as data, so malicious input cannot alter the SQL structure (SQL injection).",
      diff: "H"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE t (x INTEGER)')\ncur.executemany('INSERT INTO t VALUES (?)', [(i,) for i in range(1, 11)])\nconn.commit()\ncur.execute('SELECT x FROM t')\nprint(cur.fetchmany(4))\nprint(cur.fetchmany(4))\nprint(cur.fetchall())</pre>What is the output?",
      options: [
        "<pre>[(1,), (2,), (3,), (4,)]\n[(5,), (6,), (7,), (8,)]\n[]</pre>",
        "<pre>[(1,), (2,), (3,), (4,)]\n[(5,), (6,), (7,), (8,), (9,), (10,)]\n[]</pre>",
        "<pre>[(1,), (2,), (3,), (4,)]\n[(5,), (6,), (7,), (8,)]\n[(9,), (10,)]</pre>",
        "<pre>[(1,), (2,), (3,), (4,), (5,), (6,)]\n[(7,), (8,), (9,), (10,)]\n[]</pre>"
      ],
      answer: 2,
      explain: "Each <code>fetchmany(4)</code> call returns the <b>next</b> 4 rows as a list of tuples, and <code>fetchall()</code> then returns whatever remains — here rows 9 and 10.",
      diff: "H"
    },
    {
      q: "Which sequence shows the CORRECT order of steps in a typical CRUD program using the <code>sqlite3</code> module?",
      options: [
        "<pre>conn = sqlite3.connect('d.db')\ncur.execute('...')\ncur = conn.cursor()\nconn.commit()\nconn.close()</pre>",
        "<pre>cur = conn.cursor()\ncur.execute('...')\nconn = sqlite3.connect('d.db')\nconn.close()\nconn.commit()</pre>",
        "<pre>conn = sqlite3.connect('d.db')\ncur = conn.cursor()\nconn.commit()\ncur.execute('...')\nconn.close()</pre>",
        "<pre>conn = sqlite3.connect('d.db')\ncur = conn.cursor()\ncur.execute('...')\nconn.commit()\nconn.close()</pre>"
      ],
      answer: 3,
      explain: "The standard order is: <code>connect()</code> → <code>cursor()</code> → <code>execute()</code> → <code>commit()</code> (to save changes) → <code>close()</code>.",
      diff: "M",
      diagram: "flowchart LR\n  A[\"sqlite3.connect()\"] --> B[\"conn.cursor()\"]\n  B --> C[\"cursor.execute(sql)\"]\n  C --> D[\"conn.commit()\"]\n  D --> E[\"conn.close()\"]",
      diagramCaption: "Typical CRUD pipeline using the sqlite3 module"
    },
    {
      q: "In the <code>sqlite3</code> module, changes made by <code>INSERT</code>/<code>UPDATE</code>/<code>DELETE</code> become permanent (saved in the database file) only when ______ is called.",
      options: [
        "<code>connection.commit()</code>",
        "<code>cursor.execute()</code>",
        "<code>connection.rollback()</code>",
        "<code>cursor.fetchall()</code>"
      ],
      answer: 0,
      explain: "Autocommit is off by default: DML changes remain uncommitted (in memory) until <code>conn.commit()</code>. <code>rollback()</code> does the opposite — it discards them.",
      diff: "E",
      diagram: "flowchart LR\n  A[\"INSERT / UPDATE / DELETE\"] --> B[\"changes in memory (uncommitted)\"]\n  B --> C[\"conn.commit()\"]\n  C --> D[\"saved in database file\"]",
      diagramCaption: "DML changes are written to the database file only after conn.commit()"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE t (x INTEGER)')\ncur.execute('INSERT INTO t VALUES (?)', (5,))\nconn.commit()\ncur.execute('SELECT * FROM t WHERE x = ?', 5)\nprint(cur.fetchall())</pre>What is the result of running this program?",
      options: [
        "The program prints <code>[(5,)]</code>",
        "The program prints <code>[]</code>",
        "<code>cur.execute()</code> raises <code>sqlite3.ProgrammingError</code> because parameters must be passed as a tuple/list, not a bare integer",
        "An error is raised at <code>conn.commit()</code>"
      ],
      answer: 2,
      explain: "<code>execute(sql, params)</code> requires the parameters to be a sequence or dict. Passing the bare integer <code>5</code> raises <code>sqlite3.ProgrammingError</code> ('parameters are of unsupported type'). Use <code>(5,)</code>.",
      diff: "H"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ntry:\n    cur.execute('CREATE TABLE t (x INTEGER)')\n    cur.execute('CREATE TABLE t (x INTEGER)')\nexcept sqlite3.Error:\n    print('Table already exists')</pre>What is the output?",
      options: [
        "Nothing is printed",
        "The program crashes with a traceback",
        "The table <code>t</code> is created twice",
        "<code>Table already exists</code>"
      ],
      answer: 3,
      explain: "The second <code>CREATE TABLE</code> raises <code>sqlite3.OperationalError</code> ('table t already exists'), which is a subclass of <code>sqlite3.Error</code>, so the <code>except</code> block catches it and prints the message.",
      diff: "M"
    },
    {
      q: "Consider the statement:<br><pre>conn = sqlite3.connect(':memory:')</pre>Which statement about this connection is TRUE?",
      options: [
        "A file named <code>:memory:</code> is created on disk",
        "An error is raised because a filename is required",
        "The database lives entirely in RAM and its data is lost when the connection closes",
        "Data is written to a temporary file that persists for 24 hours"
      ],
      answer: 2,
      explain: "The special name <code>:memory:</code> creates a database in RAM only. It is fast, but nothing is stored on disk — all data disappears when the connection is closed.",
      diff: "M"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE marks (name TEXT, m INTEGER)')\ncur.executemany('INSERT INTO marks VALUES (?, ?)',\n                [('A', 80), ('B', 90), ('C', 70)])\nconn.commit()\ncur.execute('SELECT name FROM marks ORDER BY m DESC LIMIT 1')\nprint(cur.fetchone())</pre>What is printed?",
      options: [
        "<code>('A',)</code>",
        "<code>('C',)</code>",
        "<code>('B',)</code>",
        "<code>('B', 90)</code>"
      ],
      answer: 2,
      explain: "<code>ORDER BY m DESC</code> sorts the rows as B (90), A (80), C (70) and <code>LIMIT 1</code> keeps only the top row, so <code>fetchone()</code> returns <code>('B',)</code> — only the selected column <code>name</code>.",
      diff: "H"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE t (x INTEGER)')\ncur.executemany('INSERT INTO t VALUES (?)', [(1,), (2,), (3,), (4,)])\nconn.commit()\ncur.execute('DELETE FROM t WHERE x &lt; 3')\nprint(cur.rowcount)\ncur.execute('SELECT COUNT(*) FROM t')\nprint(cur.fetchone())</pre>What is the output?",
      options: [
        "<pre>2\n(2,)</pre>",
        "<pre>2\n(4,)</pre>",
        "<pre>3\n(1,)</pre>",
        "<pre>4\n(0,)</pre>"
      ],
      answer: 0,
      explain: "The <code>DELETE</code> removes rows 1 and 2, so <code>rowcount</code> is 2. Rows 3 and 4 remain, so <code>COUNT(*)</code> prints <code>(2,)</code>.",
      diff: "M"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE users (name TEXT)')\ncur.execute(\"INSERT INTO users VALUES ('Amit')\")\ncur.execute(\"INSERT INTO users VALUES ('Bina')\")\nconn.commit()\nname = \"Amit' OR '1'='1\"\ncur.execute(\"SELECT * FROM users WHERE name = '\" + name + \"'\")\nprint(cur.fetchall())</pre>What is printed?",
      options: [
        "<code>[('Amit',)]</code>",
        "<code>[]</code>",
        "An error is raised because of the quotes",
        "<code>[('Amit',), ('Bina',)]</code>"
      ],
      answer: 3,
      explain: "Concatenating user input builds the query <code>SELECT * FROM users WHERE name = 'Amit' OR '1'='1'</code>. The injected <code>OR '1'='1'</code> is always true, so <b>all</b> rows are returned — a classic SQL injection. Parameterized queries (<code>?</code>) prevent this by binding the input as data.",
      diff: "H"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE t (x INTEGER)')\ncur.execute('INSERT INTO t VALUES (10)')\nconn.commit()\ncur.execute('SELECT x FROM t')\nprint(cur.fetchone())\nprint(cur.fetchone())</pre>What is printed?",
      options: [
        "<code>(10,)</code> then <code>None</code>",
        "<code>(10,)</code> then <code>(10,)</code>",
        "<code>(10,)</code> then <code>()</code>",
        "<code>[10]</code> then <code>None</code>"
      ],
      answer: 0,
      explain: "Each <code>fetchone()</code> call advances to the next row. After the only row is consumed, the second call returns <code>None</code>.",
      diff: "E"
    },
    {
      q: "Consider the program:<br><pre>import sqlite3\nconn = sqlite3.connect('school.db')\ncur = conn.cursor()\ncur.execute('CREATE TABLE IF NOT EXISTS stu (r INTEGER, name TEXT)')\ncur.execute(\"INSERT INTO stu VALUES (1, 'Amit')\")\n# ? missing line\nconn.close()</pre>Which line must be inserted at the position of the comment so that Amit's record is saved permanently in <code>school.db</code>?",
      options: [
        "<code>cur.commit()</code>",
        "<code>conn.save()</code>",
        "<code>conn.commit()</code>",
        "<code>cur.flush()</code>"
      ],
      answer: 2,
      explain: "DML changes persist only after <code>connection.commit()</code>; without it, closing the connection rolls the <code>INSERT</code> back. Note that <code>commit()</code> is a Connection method, not a Cursor method.",
      diff: "M"
    }
  ]
});
