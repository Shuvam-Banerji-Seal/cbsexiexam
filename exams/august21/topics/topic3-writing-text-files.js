// August 21 Examination — Topic 3: Writing Text Files & the with Statement.
// 20 questions · CBSE Class XII Computer Science · Python File Handling.
window.AUGUST21_TOPICS = window.AUGUST21_TOPICS || [];
window.AUGUST21_TOPICS.push({
  key: "writing-text-files",
  name: "Writing Text Files & the with Statement",
  questions: [
    {
      q: "What does <code>f.write(\"hello\")</code> <b>return</b> after successfully writing?",
      options: [
        "The number of characters written (5)",
        "True",
        "The string \"hello\"",
        "None"
      ],
      answer: 0,
      explain: "<code>write()</code> returns the number of characters written. Here <code>\"hello\"</code> has 5 characters, so it returns 5. It does <b>not</b> add a newline automatically.",
      diff: "E"
    },
    {
      q: "Which statement about <code>f.write()</code> is correct?",
      options: [
        "It adds a newline after every write",
        "It never adds a newline automatically",
        "It overwrites the entire file on every call",
        "It returns None always"
      ],
      answer: 1,
      explain: "<code>write()</code> writes exactly the string given, with <b>no automatic newline</b>. If you want a newline, you must include <code>\\n</code> in the string yourself, e.g. <code>f.write(\"hello\\n\")</code>.",
      diff: "E"
    },
    {
      q: "What does the <code>writelines()</code> method of a file object accept?",
      options: [
        "A single string that must not contain a newline",
        "An iterable of strings (for example a list of lines)",
        "Two arguments — a string and a separator",
        "A file object to be copied"
      ],
      answer: 1,
      explain: "<code>writelines(lines)</code> writes each string of an iterable (like a list) to the file. It does <b>not</b> insert separators or newlines between the items — you must include <code>\\n</code> yourself.",
      diff: "E"
    },
    {
      q: "To <b>add data to the end of an existing file</b> without deleting its current contents, you should open it in:",
      options: ["\"a\" (append) mode", "\"w\" (write) mode", "\"x\" mode", "\"r\" mode"],
      answer: 0,
      explain: "Append mode (<code>a</code>) preserves existing content and adds new data at the end. Write mode (<code>w</code>) truncates the file, destroying its previous contents.",
      diff: "E"
    },
    {
      q: "After the <b><code>with</code> block</b> exits, the file object <code>f</code> is:",
      options: [
        "Automatically closed",
        "Still open until the program ends",
        "Deleted from the disk",
        "Flushed but left open"
      ],
      answer: 0,
      explain: "The <code>with</code> statement guarantees the file is closed when the block exits — even if an exception occurs inside. After the block, <code>f.closed</code> is <code>True</code>.",
      diff: "E",
      diagram: "flowchart TD\n  A[open file in w mode] --> B[write data]\n  B --> C[with block ends]\n  C --> D[file auto-closed]",
      diagramCaption: "Figure 2: Lifecycle of a file opened with the with statement"
    },
    {
      q: "Which code writes the string <code>\"result: 10\"</code> to a file called <code>out.txt</code>?",
      options: [
        "with open(\"out.txt\", \"w\") as f: f.write(\"result: \" + str(10))",
        "with open(\"out.txt\", \"r\") as f: f.write(\"result: 10\")",
        "with open(\"out.txt\", \"wb\") as f: f.write(\"result: 10\")",
        "open(\"out.txt\").write(\"result: 10\")"
      ],
      answer: 0,
      explain: "Write mode <code>w</code> plus <code>write()</code> is correct; numbers must be converted with <code>str()</code> before writing. <code>r</code> mode is read-only, <code>wb</code> expects bytes, and <code>open()</code> must be assigned to a variable.",
      diff: "E"
    },
    {
      q: "Consider the code below. What will <code>data.txt</code> contain?<pre>with open(\"data.txt\", \"w\") as f:\n    f.write(\"Hello\")\n    f.write(\"World\")</pre>",
      options: ["HelloWorld", "Hello\\nWorld", "Hello World", "WorldHello"],
      answer: 0,
      explain: "Each <code>write()</code> appends to the current position, and no newline is added, so the two writes combine into the single string <code>HelloWorld</code>.",
      diff: "E"
    },
    {
      q: "Consider the code below. What will <code>data.txt</code> contain?<pre>with open(\"data.txt\", \"w\") as f:\n    f.writelines([\"A\", \"B\", \"C\"])</pre>",
      options: ["ABC", "A\\nB\\nC", "['A', 'B', 'C']", "A B C"],
      answer: 0,
      explain: "<code>writelines()</code> writes the items of the list one after another without any separator, producing <code>ABC</code>. Use <code>\"\\n\".join(lines)</code> or add <code>\\n</code> to each item if you want lines.",
      diff: "E"
    },
    {
      q: "What is the <b>output</b> of this code?<pre>with open(\"out.txt\", \"w\") as f:\n    print(\"Marks: 98\", file=f)\nwith open(\"out.txt\") as f:\n    print(f.read(), end=\"\")</pre>",
      options: [
        "Marks: 98",
        "Marks: 98\\n",
        "True",
        "The code raises an error"
      ],
      answer: 0,
      explain: "<code>print(..., file=f)</code> writes the text followed by a newline to the file. When the file is then read back, <code>print(f.read(), end=\"\")</code> displays <code>Marks: 98</code> — the trailing newline stored in the file is not doubled because <code>end=\"\"</code> suppresses print's own newline.",
      diff: "M"
    },
    {
      q: "What happens when you run <code>f.write(25)</code> where <code>f</code> is a text file opened with <code>\"w\"</code>?",
      options: [
        "A TypeError is raised because write() expects a string, not an int",
        "The number 25 is written to the file",
        "25 is converted automatically and written",
        "Nothing happens and the call is ignored"
      ],
      answer: 0,
      explain: "In text mode, <code>write()</code> requires a <b>str</b>. Passing an integer raises <code>TypeError: write() argument must be str, not int</code>. Convert first with <code>str(25)</code>.",
      diff: "M"
    },
    {
      q: "A file is opened with <code>f = open(\"t.txt\", \"w\")</code>. Calling <code>f.read()</code> on it will:",
      options: [
        "Raise io.UnsupportedOperation (not readable)",
        "Return an empty string",
        "Return the file contents before the write",
        "Truncate the file"
      ],
      answer: 0,
      explain: "A file opened in write-only mode (<code>w</code>) cannot be read. Any read attempt raises <code>io.UnsupportedOperation: not readable</code>. Use <code>w+</code> for both reading and writing.",
      diff: "M"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>with open(\"t.txt\", \"w\") as f:\n    f.write(\"abcdef\")\nwith open(\"t.txt\", \"r+\") as f:\n    f.write(\"XY\")\nwith open(\"t.txt\") as f:\n    print(f.read())</pre>",
      options: ["XYcdef", "XYabcdef", "abXYef", "XYabef"],
      answer: 0,
      explain: "<code>r+</code> opens the file for reading and writing without truncating. The write starts at the current position (0) and <b>overwrites</b> the first two characters, so <code>abcdef</code> becomes <code>XYcdef</code>.",
      diff: "M"
    },
    {
      q: "Which statement about the <b>with statement</b> is true?",
      options: [
        "It closes the file even if an exception occurs inside the block",
        "It deletes the file from disk when the block ends",
        "It can only be used with read modes",
        "It prevents the file from being opened again later"
      ],
      answer: 0,
      explain: "The <code>with</code> statement calls the file's <code>__exit__</code>, which closes it, and this happens whether the block completes normally or raises an exception. Files are not deleted by <code>with</code>.",
      diff: "M"
    },
    {
      q: "What does <code>f.flush()</code> do?",
      options: [
        "Writes buffered data from memory to the disk immediately",
        "Closes the file permanently",
        "Clears the file so it becomes empty",
        "Reloads the file contents from disk"
      ],
      answer: 0,
      explain: "Writes are often buffered in memory. <code>flush()</code> pushes the buffered data to the disk right away without closing the file. <code>close()</code> also flushes before closing.",
      diff: "M"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>with open(\"data.txt\", \"w\") as f:\n    f.write(\"One\")\nwith open(\"data.txt\", \"a\") as f:\n    f.write(\"Two\")\nwith open(\"data.txt\") as f:\n    print(f.read())</pre>",
      options: ["OneTwo", "One\\nTwo", "TwoOne", "One\\n\\nTwo"],
      answer: 0,
      explain: "The first write creates <code>One</code>. Append mode then adds <code>Two</code> at the end without a separator, giving <code>OneTwo</code>.",
      diff: "E"
    },
    {
      q: "The <code>newline=\"\"</code> argument in <code>open(\"out.csv\", \"w\", newline=\"\")</code> is used to:",
      options: [
        "Prevent extra blank lines and control newline translation",
        "Make the file read-only",
        "Add a BOM header to the file",
        "Split the file into multiple parts"
      ],
      answer: 0,
      explain: "With <code>newline=\"\"</code>, no newline translation takes place, which avoids the double line spacing that can occur when writing CSV files on Windows. It is the recommended setting for csv writers.",
      diff: "M"
    },
    {
      q: "A file opened in <b><code>\"a+\"</code> mode</b> has its pointer initially placed:",
      options: [
        "At the end of the file",
        "At the start of the file",
        "In the middle of the file",
        "At the position of the last read"
      ],
      answer: 0,
      explain: "In <code>a+</code> mode the pointer starts at the <b>end</b> of the file, so <code>read()</code> immediately returns <code>\"\"</code> unless you first call <code>seek(0)</code>. Writes are always appended at the end.",
      diff: "M"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>with open(\"data.txt\", \"a+\") as f:\n    f.write(\"END\")\n    f.seek(0)\n    print(f.read())</pre>Assume <code>data.txt</code> initially contains <code>START</code>.",
      options: ["STARTEND", "START", "END", "ENDSTART"],
      answer: 0,
      explain: "<code>a+</code> allows reading after a write. The write adds <code>END</code> at the end, then <code>seek(0)</code> moves the pointer to the beginning, so <code>read()</code> returns the full content <code>STARTEND</code>.",
      diff: "M"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>with open(\"t.txt\", \"w\") as f:\n    f.write(\"12345\")\n    f.seek(0)\n    print(f.read())</pre>",
      options: [
        "An io.UnsupportedOperation error is raised",
        "12345",
        "An empty string",
        "54321"
      ],
      answer: 0,
      explain: "The file is opened in write-only <code>w</code> mode, so <code>read()</code> is not allowed and raises <code>io.UnsupportedOperation: not readable</code>. Use <code>w+</code> to read after writing.",
      diff: "H"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>with open(\"t.txt\", \"a\") as f:\n    f.write(\"X\")\n    f.seek(0)\n    f.write(\"Y\")\nwith open(\"t.txt\") as f:\n    print(f.read())</pre>Assume <code>t.txt</code> initially contains <code>12345</code>.",
      options: ["12345XY", "Y12345X", "X12345Y", "12345YX"],
      answer: 0,
      explain: "In append mode (<code>a</code>), writes are always forced to the end of the file regardless of where the pointer is. So <code>seek(0)</code> does not affect the write position — <code>Y</code> is appended after <code>X</code>, giving <code>12345XY</code>.",
      diff: "H"
    }
  ]
});
