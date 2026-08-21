// August 21 Examination — Topic 2: Reading Text Files.
// 20 questions · CBSE Class XII Computer Science · Python File Handling.
window.AUGUST21_TOPICS = window.AUGUST21_TOPICS || [];
window.AUGUST21_TOPICS.push({
  key: "reading-text-files",
  name: "Reading Text Files",
  questions: [
    {
      q: "Which method of a file object reads <b>the entire file</b> as a single string?",
      options: ["read()", "readline()", "readlines()", "scan()"],
      answer: 0,
      explain: "<code>read()</code> with no argument returns the whole remaining content of the file as one string. <code>readline()</code> reads one line and <code>readlines()</code> returns a list of lines.",
      diff: "E"
    },
    {
      q: "In <code>data = f.read(10)</code>, the argument <b>10</b> means that Python will read:",
      options: [
        "Exactly 10 lines from the file",
        "At most 10 characters from the current position",
        "10 bytes always, even for a text file",
        "10 whole words from the file"
      ],
      answer: 1,
      explain: "In text mode, <code>read(n)</code> reads at most <b>n characters</b> from the current file position (or fewer if the file ends first). In binary mode it reads n bytes.",
      diff: "E"
    },
    {
      q: "What does <code>line = f.readline()</code> return if it reads the line <code>\"hello\\n\"</code>?",
      options: [
        "\"hello\\n\" including the newline character",
        "\"hello\" without the newline",
        "[\"hello\\n\"] as a list",
        "\"h\" only"
      ],
      answer: 0,
      explain: "<code>readline()</code> reads up to and including the newline character, so the returned string still ends with <code>\\n</code>. Use <code>line.rstrip(\"\\n\")</code> or <code>line.strip()</code> to remove it.",
      diff: "E"
    },
    {
      q: "When <code>f.readline()</code> is called <b>after the end of the file</b> is reached, it returns:",
      options: ["None", "An empty string \"\"", "The string \"\\n\"", "An empty list []"],
      answer: 1,
      explain: "At end of file, <code>readline()</code> returns an empty string <code>\"\"</code>, which is falsy. Because of this, <code>line = f.readline()</code> is commonly used in a while loop that stops at EOF.",
      diff: "E"
    },
    {
      q: "Which method returns <b>all lines of a file as a list of strings</b>?",
      options: ["read()", "readline()", "readlines()", "getlines()"],
      answer: 2,
      explain: "<code>readlines()</code> reads the whole file and returns a list, where each element is one line (still including its trailing newline). <code>readline()</code> returns a single string.",
      diff: "E"
    },
    {
      q: "What is returned by <code>f.readlines()</code> when the file is <b>empty</b>?",
      options: ["None", "An empty string", "An empty list []", "['']"],
      answer: 2,
      explain: "On an empty file, <code>readlines()</code> returns the empty list <code>[]</code>. An empty string is what <code>readline()</code> and <code>read()</code> return at EOF.",
      diff: "E"
    },
    {
      q: "Which code fragment correctly prints <b>every line of a file</b> using a for loop?",
      options: [
        "for line in open(\"notes.txt\"): print(line, end=\"\")",
        "for line in open(\"notes.txt\"): print(line.read())",
        "for read() in open(\"notes.txt\"): print(read)",
        "for i in open(\"notes.txt\"): print(i.readline())"
      ],
      answer: 0,
      explain: "A file object is iterable: each iteration yields one line of the file. <code>end=\"\"</code> avoids adding an extra newline because each line already ends with <code>\\n</code>. The other options call methods that do not exist on a line string.",
      diff: "E"
    },
    {
      q: "If <code>f</code> is a file object, what does the built-in <code>next(f)</code> do?",
      options: [
        "Returns the next line of the file, same as f.readline()",
        "Returns the next character only",
        "Moves to the next file in the directory",
        "Raises StopIteration immediately"
      ],
      answer: 0,
      explain: "<code>next(f)</code> returns the next line from the file object (its iterator protocol), which is equivalent to <code>f.readline()</code> for practical reading purposes.",
      diff: "M"
    },
    {
      q: "Which of these correctly <b>removes the trailing newline</b> from a line read from a file?",
      options: [
        "line = line.strip(\"\\n\")",
        "line = line.remove(\"\\n\")",
        "line = line.replace(\"\\n\")",
        "line = line.trim()"
      ],
      answer: 0,
      explain: "<code>strip(\"\\n\")</code> removes the newline character (and whitespace) from the line. There is no <code>remove</code> or <code>trim</code> method on strings, and <code>replace</code> needs a replacement argument.",
      diff: "E"
    },
    {
      q: "Reading from a file object <b>after <code>f.close()</code></b> has been called raises:",
      options: [
        "FileNotFoundError",
        "ValueError: I/O operation on closed file",
        "StopIteration",
        "RuntimeError"
      ],
      answer: 1,
      explain: "Once closed, any read or write operation on the file object raises <code>ValueError</code> with the message \"I/O operation on closed file\". The <code>with</code> statement closes files automatically.",
      diff: "E"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>f = open(\"story.txt\")\nprint(f.read(5))\nf.close()</pre>Assume <code>story.txt</code> contains exactly: <code>Hello World</code>",
      options: ["Hello", "Hello ", "World", "Hello World"],
      answer: 0,
      explain: "<code>read(5)</code> reads the first 5 characters of the file, which are <code>Hello</code>. The space and the rest of the text are not read.",
      diff: "E"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>f = open(\"story.txt\")\nprint(f.readline().strip())\nprint(f.readline().strip())\nf.close()</pre>Assume <code>story.txt</code> contains exactly: <code>Line1\\nLine2\\nLine3</code>",
      options: ["Line1\\nLine2", "Line1\\n\\nLine2", "Line1Line2", "Line1\\nLine2\\nLine3"],
      answer: 0,
      explain: "Each <code>readline()</code> returns one line including its newline. <code>strip()</code> removes the trailing newline, so <code>print()</code> shows <code>Line1</code> then <code>Line2</code> on separate lines. Without <code>strip()</code>, the read line already ends in <code>\\n</code> and an extra blank line appears.",
      diff: "M"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>f = open(\"story.txt\")\nlines = f.readlines()\nprint(len(lines))\nf.close()</pre>Assume <code>story.txt</code> contains exactly: <code>One\\nTwo\\nThree</code>",
      options: ["3", "1", "2", "13"],
      answer: 0,
      explain: "<code>readlines()</code> splits the file on its line breaks, returning <code>['One\\n', 'Two\\n', 'Three']</code> — a list of 3 elements. The last line has no trailing newline because the file ends there.",
      diff: "E"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>f = open(\"story.txt\")\nfor line in f:\n    print(line, end=\"\")\nf.close()</pre>Assume <code>story.txt</code> contains exactly: <code>Alpha\\nBeta</code>",
      options: ["Alpha\\nBeta", "AlphaBeta", "['Alpha\\n', 'Beta']", "Alpha\\n\\nBeta"],
      answer: 0,
      explain: "Iterating over the file yields each line including its newline, and <code>end=\"\"</code> stops print from adding another newline. So the output is exactly <code>Alpha\\nBeta</code>.",
      diff: "E"
    },
    {
      q: "What is the <b>output</b> of this code?<pre>with open(\"story.txt\") as f:\n    data = f.read()\n    data = f.read()\nprint(data)</pre>Assume <code>story.txt</code> contains exactly: <code>Hello</code>",
      options: [
        "An empty line (the empty string)",
        "Hello",
        "HelloHello",
        "None"
      ],
      answer: 0,
      explain: "The first <code>read()</code> consumes the whole file and moves the pointer to the end. The second <code>read()</code> starts from the end and returns the empty string <code>\"\"</code>, so the print shows a blank line.",
      diff: "M"
    },
    {
      q: "Which expression counts the <b>number of lines</b> in the file <code>f</code>?",
      options: [
        "sum(1 for _ in f)",
        "len(f.read())",
        "f.count(\"\\n\")",
        "f.lines()"
      ],
      answer: 0,
      explain: "<code>sum(1 for _ in f)</code> iterates once per line and totals the count. <code>len(f.read())</code> counts characters, not lines. There is no <code>count</code> or <code>lines</code> method on a file object.",
      diff: "M"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>with open(\"story.txt\") as f:\n    text = f.read()\nprint(len(text.split()))</pre>Assume <code>story.txt</code> contains exactly: <code>The quick brown fox</code>",
      options: ["4", "19", "1", "5"],
      answer: 0,
      explain: "<code>text.split()</code> splits the string on whitespace into the words <code>['The', 'quick', 'brown', 'fox']</code>, so <code>len()</code> gives 4. <code>len(text)</code> would give the character count of 19.",
      diff: "E"
    },
    {
      q: "What is the <b>output</b> of this code?<pre>with open(\"story.txt\") as f:\n    data = f.read().splitlines()\nprint(data)</pre>Assume <code>story.txt</code> contains exactly: <code>A\\nB\\nC</code>",
      options: ["['A', 'B', 'C']", "['A\\n', 'B\\n', 'C']", "['ABC']", "'A\\nB\\nC'"],
      answer: 0,
      explain: "<code>str.splitlines()</code> splits the string on line boundaries and removes the newline characters, giving <code>['A', 'B', 'C']</code>. This differs from <code>readlines()</code>, which keeps the <code>\\n</code>.",
      diff: "M"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>with open(\"story.txt\") as f:\n    first = next(f)\n    second = f.readline()\nprint(first, end=\"\")\nprint(second, end=\"\")</pre>Assume <code>story.txt</code> contains exactly: <code>One\\nTwo\\nThree</code>",
      options: ["One\\nTwo", "OneTwo", "One\\n\\nTwo\\n", "Onetwo"],
      answer: 0,
      explain: "<code>next(f)</code> and <code>f.readline()</code> both read one line from the current position. The first reads <code>One\\n</code>, the second reads <code>Two\\n</code>, so the output is <code>One</code> and <code>Two</code> on separate lines.",
      diff: "M"
    },
    {
      q: "Which <b>single condition</b> correctly stops a while loop that reads a file line by line?",
      options: [
        "while line:", "while line is not None:", "while line >= 0:", "while len(line) == 1:"
      ],
      answer: 0,
      explain: "The standard pattern is <code>line = f.readline()</code> followed by <code>while line:</code>. An empty string at EOF is falsy, so the loop ends. <code>line is not None</code> would never stop because EOF returns <code>\"\"</code>, not <code>None</code>.",
      diff: "H"
    }
  ]
});
