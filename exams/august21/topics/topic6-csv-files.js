// August 21 Examination — Topic 6: CSV Files.
// 20 questions · CBSE Class XII Computer Science · Python File Handling.
window.AUGUST21_TOPICS = window.AUGUST21_TOPICS || [];
window.AUGUST21_TOPICS.push({
  key: "csv-files",
  name: "CSV Files",
  questions: [
    {
      q: "Which Python module is used to <b>read and write CSV files</b>?",
      options: ["csv", "file", "comma", "data"],
      answer: 0,
      explain: "The <code>csv</code> module provides <code>reader()</code> and <code>writer()</code> (and their dict variants) for working with comma-separated-value files.",
      diff: "E"
    },
    {
      q: "What does <code>csv.reader(f)</code> return, where <code>f</code> is a text file object?",
      options: [
        "An iterable of rows, where each row is a list of strings",
        "A single string containing all the file",
        "A list of characters",
        "A dictionary of the file contents"
      ],
      answer: 0,
      explain: "<code>csv.reader(f)</code> returns an iterator that yields one <b>list of strings</b> per row of the file, with the commas already split into fields.",
      diff: "E",
      diagram: "flowchart LR\n  A[CSV file] --> B[csv.reader f]\n  B --> C[iterator of rows]\n  C --> D[each row is a list of strings]",
      diagramCaption: "Figure 4: Reading a CSV file with csv.reader"
    },
    {
      q: "If a CSV file contains <code>25</code> in a cell, reading it with <code>csv.reader()</code> gives you:",
      options: [
        "The string \"25\"",
        "The integer 25",
        "The float 25.0",
        "A bytes object"
      ],
      answer: 0,
      explain: "csv.reader always returns fields as <b>strings</b>. To use them as numbers you must convert explicitly, e.g. <code>int(row[1])</code>.",
      diff: "E"
    },
    {
      q: "Which method of a <code>csv.writer</code> object writes <b>a single row</b>?",
      options: ["writerow()", "writerows()", "write()", "row()"],
      answer: 0,
      explain: "<code>writerow(row)</code> writes one row (a list/sequence of values) to the file. <code>writerows()</code> writes many rows at once, and <code>write()</code> is a plain file method, not a csv method.",
      diff: "E"
    },
    {
      q: "What argument should be passed to <code>writerow()</code>?",
      options: [
        "A list (or sequence) of values for the columns",
        "A string containing commas",
        "A dictionary of column names",
        "A file name"
      ],
      answer: 0,
      explain: "<code>writerow()</code> accepts an iterable of values — usually a list such as <code>[\"Rohan\", 89]</code> — where each value becomes one comma-separated field.",
      diff: "E"
    },
    {
      q: "Consider the code below. What will <code>out.csv</code> contain?<pre>import csv\nwith open(\"out.csv\", \"w\", newline=\"\") as f:\n    w = csv.writer(f)\n    w.writerow([\"Rohan\", 89])</pre>",
      options: ["Rohan,89", "Rohan,89\\n\\n", "Rohan|89", "['Rohan', 89]"],
      answer: 0,
      explain: "<code>writerow([\"Rohan\", 89])</code> writes the two values separated by a comma: <code>Rohan,89</code> followed by a newline. Note that 89 is converted to its string form automatically.",
      diff: "E"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>import csv\nwith open(\"marks.csv\") as f:\n    r = csv.reader(f)\n    for row in r:\n        print(row)</pre>Assume <code>marks.csv</code> contains:<pre>Rohan,89\nMeera,95</pre>",
      options: [
        "['Rohan', '89']\\n['Meera', '95']",
        "Rohan 89\\nMeera 95",
        "Rohan,89 Meera,95",
        "Rohan\\n89\\nMeera\\n95"
      ],
      answer: 0,
      explain: "Each row is read as a <b>list of strings</b>, so the loop prints <code>['Rohan', '89']</code> then <code>['Meera', '95']</code>. Note 89 and 95 are strings.",
      diff: "E"
    },
    {
      q: "To <b>skip the header row</b> of a CSV file while reading, you can:",
      options: [
        "Call next(reader) once before the loop",
        "Call reader.head()",
        "Open the file in \"r+\" mode",
        "Use reader.skip(1)"
      ],
      answer: 0,
      explain: "The reader is an iterator, so a single <code>next(reader)</code> consumes and discards the header row before the for loop processes the remaining data rows.",
      diff: "E"
    },
    {
      q: "Which argument of <code>csv.reader()</code> / <code>csv.writer()</code> handles files that use <b>a semicolon as the delimiter</b>?",
      options: [
        "delimiter=\";\"",
        "separator=\";\"",
        "quotechar=\";\"",
        "quote=\";\""
      ],
      answer: 0,
      explain: "The <code>delimiter</code> parameter sets the field separator. The default is a comma; for European-style files it is often set to <code>\";\"</code> or a tab (<code>delimiter=\"\\t\"</code>).",
      diff: "M"
    },
    {
      q: "Consider the code below. What will <code>out.csv</code> contain?<pre>import csv\nrows = [[\"A\", 1], [\"B\", 2]]\nwith open(\"out.csv\", \"w\", newline=\"\") as f:\n    w = csv.writer(f)\n    w.writerows(rows)</pre>",
      options: ["A,1\\nB,2", "A1B2", "[[\"A\", 1], [\"B\", 2]]", "A,1,B,2"],
      answer: 0,
      explain: "<code>writerows()</code> writes each inner list as its own row, so the file contains <code>A,1</code> on the first line and <code>B,2</code> on the second.",
      diff: "E"
    },
    {
      q: "When a field value <b>contains a comma</b> (e.g. the name <code>Smith, John</code>), the csv writer will:",
      options: [
        "Enclose the value in double quotes so it is kept as one field",
        "Split it into two separate fields",
        "Remove the comma",
        "Raise an error"
      ],
      answer: 0,
      explain: "The writer quotes any field containing a comma (or quote character), producing <code>\"Smith, John\"</code>, so that on reading the value is restored as a single field.",
      diff: "M"
    },
    {
      q: "Why is <code>newline=\"\"</code> recommended when <b>opening a file for the csv module</b>?",
      options: [
        "It prevents unwanted extra blank lines on some operating systems",
        "It makes the file read-only",
        "It encodes the file as UTF-8 automatically",
        "It removes all commas from the file"
      ],
      answer: 0,
      explain: "Without <code>newline=\"\"</code>, newline translation on Windows can insert extra blank lines between rows when writing. The csv module handles line endings itself, so it asks you to disable translation.",
      diff: "M"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>import csv\nwith open(\"marks.csv\") as f:\n    r = csv.reader(f)\n    next(r)\n    total = 0\n    count = 0\n    for row in r:\n        total += int(row[1])\n        count += 1\nprint(total / count)</pre>Assume <code>marks.csv</code> contains:<pre>Name,Marks\nRohan,80\nMeera,90</pre>",
      options: ["85.0", "80", "170", "2"],
      answer: 0,
      explain: "The header is skipped with <code>next(r)</code>. The loop converts each marks field with <code>int()</code> and sums them: 80 + 90 = 170 over 2 rows, giving an average of 85.0.",
      diff: "M"
    },
    {
      q: "What does <code>csv.DictReader(f)</code> return per row?",
      options: [
        "A dictionary with column headers as keys and field values as values",
        "A list of column names",
        "A tuple of values",
        "A string of the whole row"
      ],
      answer: 0,
      explain: "<code>DictReader</code> treats the first row as headers and returns each subsequent row as an <code>OrderedDict</code> keyed by those headers, so you can access <code>row[\"Name\"]</code> directly.",
      diff: "M"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>import csv\nwith open(\"people.csv\") as f:\n    r = csv.DictReader(f)\n    for row in r:\n        print(row[\"Name\"])</pre>Assume <code>people.csv</code> contains:<pre>Name,Age\nAarav,21\nBina,19</pre>",
      options: ["Aarav\\nBina", "Name\\nAarav\\nBina", "['Aarav']", "21"],
      answer: 0,
      explain: "<code>DictReader</code> uses the header row (<code>Name,Age</code>) as keys. The loop prints the <code>Name</code> column of each data row: <code>Aarav</code> then <code>Bina</code>.",
      diff: "M"
    },
    {
      q: "Which option correctly creates a CSV writer that writes a file with a <b>header row</b> using column names as keys?",
      options: [
        "csv.DictWriter(f, fieldnames=[\"Name\", \"Age\"]); w.writeheader()",
        "csv.DictReader(f, fieldnames=[\"Name\", \"Age\"]); w.writeheader()",
        "csv.writer(f, header=[\"Name\", \"Age\"])",
        "w.writerow(header=True)"
      ],
      answer: 0,
      explain: "<code>DictWriter</code> takes <code>fieldnames</code> and writes the header line with <code>writeheader()</code>, then rows via <code>writerow(dict)</code>. <code>DictReader</code> is for reading, not writing.",
      diff: "H"
    },
    {
      q: "When you read a quoted field like <code>\"New Delhi, India\"</code> with <code>csv.reader()</code>, the quotes are:",
      options: [
        "Stripped, giving the field \"New Delhi, India\"",
        "Kept as part of the field",
        "Replaced by spaces",
        "Counted as separate fields"
      ],
      answer: 0,
      explain: "The csv module automatically removes the enclosing quotes while keeping the commas inside, so the field is restored as <code>New Delhi, India</code>.",
      diff: "M"
    },
    {
      q: "Which statement about a <b>CSV file</b> is correct?",
      options: [
        "It is a text file whose values are separated by commas",
        "It is a binary file requiring pickle to read",
        "It can only be created by spreadsheet software",
        "It cannot contain a header row"
      ],
      answer: 0,
      explain: "A CSV file is a plain text file where each line is a record and fields are separated by commas. It is readable in any text editor and can be created by any program.",
      diff: "E"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>import csv\nwith open(\"out.csv\", \"w\", newline=\"\") as f:\n    w = csv.writer(f)\n    w.writerow([\"a,b\"])\nwith open(\"out.csv\", newline=\"\") as f:\n    r = csv.reader(f)\n    for row in r:\n        print(len(row))</pre>",
      options: ["1", "2", "3", "0"],
      answer: 0,
      explain: "The field <code>a,b</code> contains a comma, so the writer quotes it as <code>\"a,b\"</code>. Reading back, it is one field, so <code>len(row)</code> is 1.",
      diff: "H"
    },
    {
      q: "Which statement about <code>csv.writer.writerow()</code> is <b>true</b>?",
      options: [
        "It requires the file to be opened in text mode (with newline=\"\")",
        "It requires the file to be opened in binary mode",
        "It returns a file object",
        "It can write only numeric values"
      ],
      answer: 0,
      explain: "<code>csv.writer</code> needs a text-mode file object (usually opened with <code>newline=\"\"</code>). It writes strings to that file; numbers are converted to strings automatically.",
      diff: "M"
    }
  ]
});
