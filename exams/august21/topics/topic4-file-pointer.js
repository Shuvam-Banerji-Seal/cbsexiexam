// August 21 Examination — Topic 4: File Pointer — seek() & tell().
// 20 questions · CBSE Class XII Computer Science · Python File Handling.
window.AUGUST21_TOPICS = window.AUGUST21_TOPICS || [];
window.AUGUST21_TOPICS.push({
  key: "file-pointer",
  name: "File Pointer — seek() & tell()",
  questions: [
    {
      q: "The method <code>tell()</code> of a file object returns:",
      options: [
        "The current position of the file pointer",
        "The total size of the file in bytes",
        "The number of lines remaining",
        "The name of the file"
      ],
      answer: 0,
      explain: "<code>tell()</code> returns the current position of the file pointer from the beginning of the file. In binary mode this is a byte offset; in text mode it returns an opaque cookie (a number).",
      diff: "E"
    },
    {
      q: "Which call <b>moves the file pointer to the beginning</b> of the file?",
      options: ["f.seek(0)", "f.seek(1)", "f.reset()", "f.tell(0)"],
      answer: 0,
      explain: "<code>f.seek(0)</code> positions the pointer at offset 0, i.e. the start of the file. <code>tell()</code> only reports the position and there is no <code>reset()</code> method.",
      diff: "E"
    },
    {
      q: "Which call <b>moves the file pointer to the end</b> of the file?",
      options: [
        "f.seek(0, 2)",
        "f.seek(2)",
        "f.seek(0, 0)",
        "f.end()"
      ],
      answer: 0,
      explain: "<code>f.seek(0, 2)</code> uses <code>whence=2</code> (the end of the file) with offset 0, placing the pointer at the end. The second argument is the reference point: 0 = start, 1 = current, 2 = end.",
      diff: "E"
    },
    {
      q: "The <b>default value of the second argument (whence)</b> of <code>seek()</code> is:",
      options: ["0 (start of file)", "1 (current position)", "2 (end of file)", "-1"],
      answer: 0,
      explain: "<code>seek(offset, whence=0)</code> — the default reference point is 0, meaning offsets are measured from the start of the file. <code>f.seek(5)</code> is therefore the same as <code>f.seek(5, 0)</code>.",
      diff: "E"
    },
    {
      q: "What is the <b>output</b> of this code?<pre>with open(\"story.txt\", \"rb\") as f:\n    f.read(3)\n    print(f.tell())</pre>Assume <code>story.txt</code> contains exactly: <code>Hello World</code>",
      options: ["3", "0", "5", "11"],
      answer: 0,
      explain: "In binary mode, <code>read(3)</code> reads 3 bytes, advancing the pointer by 3. So <code>tell()</code> returns 3.",
      diff: "E"
    },
    {
      q: "What is the <b>output</b> of this code?<pre>with open(\"story.txt\") as f:\n    f.seek(3)\n    print(f.read())</pre>Assume <code>story.txt</code> contains exactly: <code>0123456789</code>",
      options: ["3456789", "0123456789", "012", "789"],
      answer: 0,
      explain: "<code>seek(3)</code> moves the pointer to index 3. <code>read()</code> then returns everything from that position to the end: <code>3456789</code>.",
      diff: "E"
    },
    {
      q: "What is the <b>output</b> of this code?<pre>with open(\"story.txt\") as f:\n    f.seek(4)\n    print(f.read(3))</pre>Assume <code>story.txt</code> contains exactly: <code>ABCDEFGHIJ</code>",
      options: ["EFG", "ABC", "DEF", "EFGH"],
      answer: 0,
      explain: "After <code>seek(4)</code> the pointer is at index 4 (the fifth character, <code>E</code>). <code>read(3)</code> reads the next 3 characters: <code>EFG</code>.",
      diff: "M"
    },
    {
      q: "What does <code>f.seek(0, 2)</code> followed by <code>f.tell()</code> return, if <code>f</code> is open in binary mode and the file is 200 bytes long?",
      options: ["200", "0", "2", "202"],
      answer: 0,
      explain: "<code>seek(0, 2)</code> moves the pointer to the end of the file. <code>tell()</code> then returns the position from the start, which equals the file size of 200 bytes.",
      diff: "M"
    },
    {
      q: "In <b>text mode</b>, what happens if you call <code>f.seek(5, 1)</code> (a relative seek)?",
      options: [
        "io.UnsupportedOperation is raised because nonzero whence is not supported in text mode",
        "The pointer moves 5 characters forward",
        "The pointer moves 5 bytes backward",
        "Nothing changes"
      ],
      answer: 0,
      explain: "In text mode, <code>seek()</code> only supports <code>whence=0</code> (and offsets of 0 or a value returned by <code>tell()</code>). Relative or end-relative seeks raise <code>io.UnsupportedOperation</code>.",
      diff: "M"
    },
    {
      q: "Which constant represents <b>the end of the file</b> as the reference point for <code>seek()</code>?",
      options: [
        "io.SEEK_END (value 2)",
        "io.SEEK_SET (value 0)",
        "io.SEEK_CUR (value 1)",
        "os.END"
      ],
      answer: 0,
      explain: "<code>io.SEEK_END</code> equals 2 and is the reference point 'end of file'. <code>io.SEEK_SET</code> (0) is the start and <code>io.SEEK_CUR</code> (1) is the current position.",
      diff: "M"
    },
    {
      q: "What is the <b>output</b> of this code?<pre>with open(\"story.txt\") as f:\n    f.readline()\n    print(f.tell())</pre>Assume <code>story.txt</code> contains exactly: <code>Line1\\nLine2</code>",
      options: ["6", "5", "11", "0"],
      answer: 0,
      explain: "The first line <code>Line1\\n</code> is 6 characters long, so after <code>readline()</code> the pointer (and <code>tell()</code>) is at position 6 — the start of the second line.",
      diff: "M"
    },
    {
      q: "In <b>binary mode</b>, what does <code>f.seek(-4, 2)</code> do?",
      options: [
        "Moves the pointer to 4 bytes before the end of the file",
        "Moves the pointer 4 bytes backward from the start",
        "Moves the pointer 4 bytes after the end of the file",
        "Raises an error"
      ],
      answer: 0,
      explain: "With <code>whence=2</code> (end) and a negative offset, <code>seek(-4, 2)</code> places the pointer 4 bytes before the end of the file. Negative offsets are allowed in binary mode.",
      diff: "M"
    },
    {
      q: "Which call moves the pointer <b>5 bytes forward from its current position</b>?",
      options: [
        "f.seek(5, 1)",
        "f.seek(5, 0)",
        "f.seek(1, 5)",
        "f.seek(-5, 1)"
      ],
      answer: 0,
      explain: "<code>f.seek(5, 1)</code> uses <code>whence=1</code> (current position) with offset +5, moving the pointer 5 bytes forward. Binary mode supports this; text mode does not.",
      diff: "M"
    },
    {
      q: "What does <code>f.truncate()</code> (called with <b>no argument</b>) do?",
      options: [
        "Deletes everything after the current position of the file pointer",
        "Deletes the whole file",
        "Truncates the file to zero bytes always",
        "Renames the file"
      ],
      answer: 0,
      explain: "<code>truncate()</code> without an argument cuts the file at the current pointer position, discarding everything after it. With an argument such as <code>truncate(50)</code> it sets the file size to 50 bytes.",
      diff: "M"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>with open(\"t.txt\", \"r+\") as f:\n    f.truncate(4)\nwith open(\"t.txt\") as f:\n    print(f.read())</pre>Assume <code>t.txt</code> contains exactly: <code>0123456789</code>",
      options: ["0123", "0123456789", "0", "456789"],
      answer: 0,
      explain: "<code>truncate(4)</code> sets the file size to 4 bytes, keeping only the first 4 characters <code>0123</code> and deleting the rest.",
      diff: "M"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>with open(\"t.txt\", \"rb\") as f:\n    f.seek(-4, 2)\n    print(f.read().decode())</pre>Assume <code>t.txt</code> contains exactly: <code>12345678</code>",
      options: ["5678", "12345678", "1234", "8"],
      answer: 0,
      explain: "<code>seek(-4, 2)</code> positions the pointer 4 bytes before the end, at the <code>5</code>. <code>read()</code> then returns the remaining bytes, and <code>.decode()</code> turns them into the string <code>5678</code>. (Without decode, binary <code>read()</code> returns a <code>bytes</code> object like <code>b'5678'</code>.)",
      diff: "M"
    },
    {
      q: "A file is opened in <b>append mode <code>\"a\"</code></b>. Immediately after opening, what does <code>f.tell()</code> return?",
      options: [
        "The total size of the file (the pointer is at the end)",
        "0 (the pointer is at the start)",
        "The name of the file",
        "None"
      ],
      answer: 0,
      explain: "In append mode the pointer is placed at the end of the file, so <code>tell()</code> returns the file size. In <code>r</code> mode the pointer starts at 0.",
      diff: "M"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>with open(\"t.txt\", \"r+b\") as f:\n    f.seek(100)\n    f.write(b\"X\")\nwith open(\"t.txt\", \"rb\") as f:\n    data = f.read()\nprint(len(data))</pre>Assume <code>t.txt</code> initially contains exactly: <code>abc</code>",
      options: ["101", "4", "100", "1"],
      answer: 0,
      explain: "The file is opened in binary read-write mode <code>r+b</code>. Seeking beyond the end of the file and then writing creates a gap that is filled with zero bytes. The file becomes 3 original bytes + 97 zero bytes + the 1 byte <code>X</code> = 101 bytes.",
      diff: "H"
    },
    {
      q: "Which of these correctly reads the <b>last character</b> of a file opened in binary mode?",
      options: [
        "f.seek(-1, 2); ch = f.read(1)",
        "f.seek(1, 0); ch = f.read(1)",
        "ch = f.read(-1)",
        "f.seek(0, 2); ch = f.read(1)"
      ],
      answer: 0,
      explain: "<code>seek(-1, 2)</code> moves to the last byte, and <code>read(1)</code> reads it. <code>seek(0, 2)</code> puts the pointer at the very end, where <code>read(1)</code> returns nothing.",
      diff: "M"
    },
    {
      q: "What is the <b>output</b> of this code?<pre>with open(\"story.txt\") as f:\n    data = f.read()\n    print(f.tell())</pre>Assume <code>story.txt</code> contains exactly: <code>Python</code>",
      options: ["6", "0", "5", "1"],
      answer: 0,
      explain: "<code>read()</code> consumes the whole file, moving the pointer to the end. Since <code>Python</code> is 6 characters, <code>tell()</code> returns 6.",
      diff: "E"
    }
  ]
});
