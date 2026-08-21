// August 21 Examination — Topic 1: File Fundamentals & Opening Modes.
// 20 questions · CBSE Class XII Computer Science · Python File Handling.
window.AUGUST21_TOPICS = window.AUGUST21_TOPICS || [];
window.AUGUST21_TOPICS.push({
  key: "file-fundamentals",
  name: "File Fundamentals & Opening Modes",
  questions: [
    {
      q: "Which of the following is <b>not</b> a type of data file in Python?",
      options: [
        "Text file",
        "Binary file",
        "CSV file",
        "Executable file"
      ],
      answer: 3,
      explain: "Python commonly works with three kinds of data files — text files (.txt), binary files (images, .dat, .pickle) and CSV files. An executable file is a compiled program, not a data file.",
      diff: "E",
      diagram: "flowchart TD\n  A[Data Files] --> B[Text File]\n  A --> C[Binary File]\n  A --> D[CSV File]",
      diagramCaption: "Figure 1: The three kinds of data files"
    },
    {
      q: "A <b>text file</b> stores data as:",
      options: [
        "Sequences of characters readable by humans",
        "Sequences of 0s and 1s in a proprietary format",
        "Only ASCII digits",
        "Bytes that always require a codec to interpret"
      ],
      answer: 0,
      explain: "A text file is a sequence of characters (letters, digits, punctuation) stored in a readable form. Binary files store data in machine-readable bytes.",
      diff: "E"
    },
    {
      q: "The <b>absolute path</b> of a file:",
      options: [
        "Always begins from the root of the file system",
        "Begins from the current working directory",
        "Contains only the file name",
        "Is the same for all users on a computer"
      ],
      answer: 0,
      explain: "An absolute path starts at the root of the file system (for example <code>/home/riya/data.txt</code> on Linux or <code>C:\\data\\notes.txt</code> on Windows). A relative path starts from the current working directory.",
      diff: "E"
    },
    {
      q: "Which statement about a <b>relative path</b> is correct?",
      options: [
        "It begins with a forward slash or a drive letter",
        "It is resolved with respect to the current working directory",
        "It can never contain sub-directories",
        "It always refers to a file in the Python installation folder"
      ],
      answer: 1,
      explain: "A relative path is resolved against the current working directory. For example <code>\"data/marks.txt\"</code> refers to <code>marks.txt</code> inside the <code>data</code> folder of the current directory. Absolute paths begin at the root.",
      diff: "E"
    },
    {
      q: "Which of the following is a <b>binary file</b> in Python?",
      options: [
        "notes.txt",
        "data.csv",
        "image.png",
        "report.txt"
      ],
      answer: 2,
      explain: "Image, audio and video files (like <code>.png</code>, <code>.jpg</code>, <code>.mp3</code>) are binary files — they store machine-readable bytes. <code>.txt</code> and <code>.csv</code> files are text files.",
      diff: "E"
    },
    {
      q: "Which function is used to <b>open a file</b> in Python?",
      options: ["open()", "file()", "read()", "fopen()"],
      answer: 0,
      explain: "The built-in <code>open()</code> function opens a file and returns a file object. <code>read()</code> is a method of the file object, and there is no built-in <code>file()</code> or <code>fopen()</code> in Python.",
      diff: "E"
    },
    {
      q: "The default mode used by <code>open()</code> when no mode is passed is:",
      options: ["w", "r", "a", "r+"],
      answer: 1,
      explain: "If no mode is given, <code>open()</code> opens the file in <b>read</b> mode (<code>r</code>, text). The file must already exist, otherwise a <code>FileNotFoundError</code> is raised.",
      diff: "E"
    },
    {
      q: "What happens if <code>open(\"notes.txt\", \"r\")</code> is executed and <code>notes.txt</code> <b>does not exist</b>?",
      options: [
        "An empty file is created and opened",
        "A FileNotFoundError is raised",
        "The program silently continues with an empty file object",
        "A None value is returned"
      ],
      answer: 1,
      explain: "Read modes (<code>r</code>, <code>r+</code>) never create a file — they raise <code>FileNotFoundError</code> if the file is missing. Only write modes like <code>w</code> and <code>a</code> create a new file.",
      diff: "E"
    },
    {
      q: "Opening a file in <b>append mode <code>\"a\"</code></b> means:",
      options: [
        "The file is truncated and written from the beginning",
        "Data is added at the end of the file, creating it if it does not exist",
        "The file is opened for reading only",
        "A copy of the file is created with a new name"
      ],
      answer: 1,
      explain: "Append mode (<code>a</code>) opens the file for writing and places the file pointer at the end, so new data is added after existing content. If the file does not exist, it is created.",
      diff: "E"
    },
    {
      q: "Which mode opens a file for <b>both reading and writing without truncating</b> it?",
      options: ["w+", "r+", "a", "x+"],
      answer: 1,
      explain: "<code>r+</code> opens the file for reading and writing. It does <b>not</b> truncate the file, but it requires the file to exist. <code>w+</code> truncates, and <code>a</code> is write-only append.",
      diff: "E"
    },
    {
      q: "What does the <b><code>\"x\"</code></b> mode do when opening a file?",
      options: [
        "Opens the file for exclusive creation, failing if it already exists",
        "Opens the file for reading in XML format",
        "Opens the file in binary mode",
        "Removes the file after it is closed"
      ],
      answer: 0,
      explain: "<code>x</code> stands for exclusive creation: it creates a new file for writing. If the file already exists, a <code>FileExistsError</code> is raised, preventing accidental overwriting.",
      diff: "E"
    },
    {
      q: "Which mode, when used, <b>truncates (empties) an existing file</b> as soon as it is opened?",
      options: ["w", "r", "a", "r+"],
      answer: 0,
      explain: "Write mode <code>w</code> creates the file if it is missing and truncates it to zero bytes if it already exists. <code>a</code> preserves existing content, while <code>r</code> and <code>r+</code> never truncate.",
      diff: "E"
    },
    {
      q: "The <b><code>+</code></b> sign in a mode like <code>\"r+\"</code> indicates that the file is opened:",
      options: [
        "In binary format",
        "For both reading and writing",
        "In exclusive creation mode",
        "With a newline translation disabled"
      ],
      answer: 1,
      explain: "Adding <code>+</code> to a mode opens the file for update — both reading and writing are allowed (for example <code>r+</code>, <code>w+</code>, <code>a+</code>, <code>rb+</code>).",
      diff: "E"
    },
    {
      q: "Which mode should be used to open an <b>image file</b> so that it can be read as raw bytes?",
      options: ["r", "w", "rb", "ra"],
      answer: 2,
      explain: "Binary mode <code>rb</code> opens the file for reading as bytes. Text modes (<code>r</code>) try to decode the file using a character encoding, which would corrupt image data.",
      diff: "E"
    },
    {
      q: "A file opened in <b>text mode</b> returns ________ when read, while the same file opened in <b>binary mode</b> returns ________.",
      options: [
        "str ; bytes",
        "bytes ; str",
        "str ; str",
        "list ; tuple"
      ],
      answer: 0,
      explain: "In text mode, <code>read()</code> returns a <b>str</b>. In binary mode (<code>rb</code>, <code>wb</code>), <code>read()</code> returns a <b>bytes</b> object. This is why you must open pickle files in binary mode.",
      diff: "M"
    },
    {
      q: "What is the effect of the <code>encoding</code> argument in <code>open(\"data.txt\", \"r\", encoding=\"utf-8\")</code>?",
      options: [
        "It compresses the file to save disk space",
        "It specifies the character encoding used to decode the file",
        "It sets the mode of the file to UTF-8",
        "It adds a header to the file"
      ],
      answer: 1,
      explain: "The <code>encoding</code> parameter tells Python which character encoding to use while decoding (reading) or encoding (writing) the text file. <code>utf-8</code> is the recommended encoding in Python 3.",
      diff: "M"
    },
    {
      q: "In Python 3, if <code>f</code> is a file object opened in write mode, the expression <code>f.mode</code> evaluates to:",
      options: ["'w'", "\"write\"", "True", "'wt'"],
      answer: 0,
      explain: "The <code>mode</code> attribute of a file object returns the exact mode string used to open it. With <code>open(\"f.txt\", \"w\")</code> the mode attribute is <code>'w'</code>; with <code>\"wb\"</code> it is <code>'wb'</code>.",
      diff: "M"
    },
    {
      q: "The file object attribute that stores the <b>name of the opened file</b> is:",
      options: ["f.name", "f.filename", "f.path", "f.title"],
      answer: 0,
      explain: "A file object exposes its file name through the <code>name</code> attribute — for example <code>f.name</code> gives the path used in <code>open()</code>. There is no <code>filename</code> or <code>path</code> attribute.",
      diff: "M"
    },
    {
      q: "Which built-in exception is raised when a file opened for writing cannot be created because <b>permission is denied</b>?",
      options: ["FileExistsError", "PermissionError", "IOError", "IsADirectoryError"],
      answer: 1,
      explain: "When the operating system refuses an operation (such as creating a file in a protected folder), Python raises <code>PermissionError</code>. <code>FileExistsError</code> occurs with <code>x</code> mode and an existing file; <code>IOError</code> is an alias of <code>OSError</code>.",
      diff: "H"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>with open(\"demo.txt\", \"x\") as f:\n    f.write(\"hello\")\nprint(\"created\")</pre>Assume <code>demo.txt</code> does not exist initially, and the code runs a second time in the same folder.",
      options: [
        "created",
        "FileExistsError is raised",
        "hello",
        "The file is overwritten and the program prints created"
      ],
      answer: 1,
      explain: "<code>x</code> mode fails if the file already exists. On the second run <code>demo.txt</code> exists, so <code>FileExistsError</code> is raised before any write takes place.",
      diff: "H"
    }
  ]
});
