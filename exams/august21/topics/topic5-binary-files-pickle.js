// August 21 Examination — Topic 5: Binary Files & Pickle.
// 20 questions · CBSE Class XII Computer Science · Python File Handling.
window.AUGUST21_TOPICS = window.AUGUST21_TOPICS || [];
window.AUGUST21_TOPICS.push({
  key: "binary-files-pickle",
  name: "Binary Files & Pickle",
  questions: [
    {
      q: "Which mode is required to <b>store (dump) a Python object</b> using <code>pickle</code>?",
      options: ["\"wb\"", "\"w\"", "\"r\"", "\"ab\" only when appending to a text file"],
      answer: 0,
      explain: "<code>pickle.dump()</code> writes binary data, so the file must be opened in binary write mode <code>\"wb\"</code>. Opening in text mode <code>\"w\"</code> raises <code>TypeError</code> because pickle writes bytes.",
      diff: "E",
      diagram: "flowchart LR\n  A[Python object] --> B[pickle.dump obj into f]\n  B --> C[file opened wb]\n  C --> D[bytes stored on disk]\n  D --> E[pickle.load f]\n  E --> F[original object restored]",
      diagramCaption: "Figure 3: Storing and retrieving objects with pickle"
    },
    {
      q: "To <b>read back (load) an object</b> from a pickle file, the file should be opened in:",
      options: ["\"rb\"", "\"r\"", "\"w\"", "\"rt\""],
      answer: 0,
      explain: "<code>pickle.load()</code> reads binary data, so the file must be opened in binary read mode <code>\"rb\"</code>. Text modes would attempt a character decoding and fail.",
      diff: "E"
    },
    {
      q: "Which module is used in Python for <b>object serialization</b> (converting an object to a storable format)?",
      options: ["pickle", "csv", "jsonify", "serialize"],
      answer: 0,
      explain: "The <code>pickle</code> module converts Python objects into a byte stream (serialization) and back (deserialization) using <code>dump()</code>/<code>load()</code>. <code>jsonify</code> is not a standard module.",
      diff: "E"
    },
    {
      q: "What type of value does <code>pickle.dumps(obj)</code> return?",
      options: ["bytes", "str", "a pickle file object", "a list"],
      answer: 0,
      explain: "<code>dumps()</code> serializes the object into a <b>bytes</b> object in memory (without writing to a file). <code>loads()</code> converts such bytes back into the object.",
      diff: "E"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>import pickle\nstudent = {\"name\": \"Aman\", \"marks\": 92}\nwith open(\"stu.dat\", \"wb\") as f:\n    pickle.dump(student, f)\nwith open(\"stu.dat\", \"rb\") as f:\n    data = pickle.load(f)\nprint(data[\"marks\"])</pre>",
      options: ["92", "{\"name\": \"Aman\", \"marks\": 92}", "student", "None"],
      answer: 0,
      explain: "<code>pickle.dump</code> writes the dictionary, and <code>pickle.load</code> restores it with its original type. Accessing the <code>\"marks\"</code> key gives <code>92</code>.",
      diff: "E"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>import pickle\nlst = [1, 2, 3]\nwith open(\"nums.dat\", \"wb\") as f:\n    pickle.dump(lst, f)\nwith open(\"nums.dat\", \"rb\") as f:\n    data = pickle.load(f)\nprint(sum(data))</pre>",
      options: ["6", "[1, 2, 3]", "1 + 2 + 3", "123"],
      answer: 0,
      explain: "The list is restored intact, and <code>sum([1, 2, 3])</code> is 6. Pickle preserves the object's type and contents across dump and load.",
      diff: "E"
    },
    {
      q: "If two objects are written to the same file with <b>two <code>pickle.dump()</code> calls</b>, how are they read back?",
      options: [
        "By two pickle.load() calls in the same order they were dumped",
        "By a single pickle.load() that returns both as a tuple",
        "By pickle.readall()",
        "They cannot be stored in one file"
      ],
      answer: 0,
      explain: "Each <code>dump()</code> appends one object to the file. To retrieve them, call <code>load()</code> once per object, in the order they were written.",
      diff: "E"
    },
    {
      q: "What happens if <code>pickle.dump(student, f)</code> is executed when <code>f</code> was opened with <code>\"w\"</code> (text mode)?",
      options: [
        "TypeError: write() argument must be str, not bytes",
        "The object is stored correctly",
        "FileNotFoundError",
        "The text is garbled but the file is usable"
      ],
      answer: 0,
      explain: "Pickle writes <b>bytes</b>, but a text-mode file expects <code>str</code>, so Python raises <code>TypeError</code>. Binary write mode <code>\"wb\"</code> must be used.",
      diff: "M"
    },
    {
      q: "What happens when <code>pickle.load(f)</code> is called on an <b>empty file</b>?",
      options: [
        "EOFError is raised",
        "None is returned",
        "An empty object is returned",
        "A zero is returned"
      ],
      answer: 0,
      explain: "There is no pickled data to read, so <code>load()</code> hits end-of-file and raises <code>EOFError</code>. This is why programs check whether a pickle file is empty before loading.",
      diff: "M"
    },
    {
      q: "A binary file opened in <code>\"rb\"</code> mode and read with <code>f.read()</code> returns:",
      options: [
        "A bytes object",
        "A str object",
        "A list of lines",
        "A pickle object automatically"
      ],
      answer: 0,
      explain: "Binary mode always returns <b>bytes</b>. To reconstruct a Python object you must unpickle the data with <code>pickle.load()</code>, not read it as text.",
      diff: "E"
    },
    {
      q: "Which statement correctly contrasts <b>pickle</b> and <b>JSON</b>?",
      options: [
        "Pickle produces bytes specific to Python; JSON produces human-readable text",
        "JSON can store Python objects of any type without conversion",
        "Pickle files can be edited by any text editor",
        "Both produce identical file contents"
      ],
      answer: 0,
      explain: "Pickle is a Python-specific binary format. JSON is a standard, human-readable text format that can be used by other languages, but it cannot directly store arbitrary Python objects like a set or a custom class.",
      diff: "M"
    },
    {
      q: "Which is the <b>recommended approach</b> to update one record inside a pickle file that stores a list of student dictionaries?",
      options: [
        "Load the whole list, modify the record, and dump the entire list back to the file",
        "Use pickle.update() to edit just that record",
        "Open the file in \"a\" mode and dump only the changed record",
        "Edit the file with a text editor"
      ],
      answer: 0,
      explain: "Binary pickle files do not support in-place record updates. The standard pattern is to load all records, modify the required one in memory, and rewrite the whole list with <code>pickle.dump()</code>.",
      diff: "M"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>import pickle\nrecords = [{\"rno\": 1}, {\"rno\": 2}, {\"rno\": 3}]\nwith open(\"rec.dat\", \"wb\") as f:\n    pickle.dump(records, f)\nwith open(\"rec.dat\", \"rb\") as f:\n    data = pickle.load(f)\nfor r in data:\n    if r[\"rno\"] == 2:\n        print(\"found\")</pre>",
      options: ["found", "1", "2", "3"],
      answer: 0,
      explain: "The whole list is restored. The loop scans for the record with <code>rno == 2</code> and prints <code>found</code> — a typical search pattern over a pickle file.",
      diff: "M"
    },
    {
      q: "What is the <b>output</b> of this code?<pre>import pickle\nb = pickle.dumps(25)\nprint(pickle.loads(b) + 5)</pre>",
      options: ["30", "255", "b'25'5", "Error"],
      answer: 0,
      explain: "<code>dumps(25)</code> serializes the integer 25 into bytes, and <code>loads()</code> restores it as the integer 25, so <code>25 + 5</code> is 30.",
      diff: "E"
    },
    {
      q: "What happens when you try to <b>pickle a lambda function</b>?",
      options: [
        "PicklingError is raised because lambdas cannot be pickled",
        "The lambda is stored as a string",
        "The lambda is pickled successfully",
        "A TypeError about bytes is raised"
      ],
      answer: 0,
      explain: "Pickle works by reference for functions and classes; a lambda has no name to reference, so <code>pickle.dump()</code> (or <code>dumps()</code>) raises <code>PicklingError</code>. Only importable top-level functions are picklable.",
      diff: "H"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>import pickle\nwith open(\"n.dat\", \"wb\") as f:\n    pickle.dump(10, f)\n    pickle.dump(20, f)\nwith open(\"n.dat\", \"rb\") as f:\n    a = pickle.load(f)\n    b = pickle.load(f)\nprint(a + b)</pre>",
      options: ["30", "1020", "10", "Error"],
      answer: 0,
      explain: "The two integers are stored one after another and are loaded in the same order, giving <code>10</code> and <code>20</code>, whose sum is 30.",
      diff: "M"
    },
    {
      q: "A file written with <code>pickle.dump()</code> is best described as:",
      options: [
        "A non-human-readable binary file",
        "A plain text file readable in any editor",
        "A CSV file with rows of records",
        "A compressed zip archive"
      ],
      answer: 0,
      explain: "Pickle output is a binary, Python-specific byte stream that is not meant to be read by humans. It can only be interpreted correctly by <code>pickle.load()</code>.",
      diff: "E"
    },
    {
      q: "After reading all objects from a pickle file, one more <code>pickle.load(f)</code> call will:",
      options: [
        "Raise EOFError",
        "Return None",
        "Return the first object again",
        "Restart from the beginning"
      ],
      answer: 0,
      explain: "Once the pointer reaches the end of the file, another <code>load()</code> finds no data and raises <code>EOFError</code>. Programs often use a try/except to stop reading at this point.",
      diff: "M"
    },
    {
      q: "Which code correctly stores a <b>list of dictionaries</b> into a file so it can be retrieved later?",
      options: [
        "with open(\"data.dat\", \"wb\") as f: pickle.dump(students, f)",
        "with open(\"data.dat\", \"w\") as f: pickle.dump(students, f)",
        "with open(\"data.dat\", \"r\") as f: pickle.dump(students, f)",
        "with open(\"data.dat\", \"rb\") as f: pickle.dump(students, f)"
      ],
      answer: 0,
      explain: "Dumping requires binary write mode <code>\"wb\"</code>. Text mode raises <code>TypeError</code>, <code>\"r\"</code> is read-only, and <code>\"rb\"</code> opens for reading only.",
      diff: "M"
    },
    {
      q: "Consider the code below. What is the <b>output</b>?<pre>import pickle\nwith open(\"d.dat\", \"wb\") as f:\n    pickle.dump({\"x\": 5}, f)\nwith open(\"d.dat\", \"rb\") as f:\n    obj = pickle.load(f)\nobj[\"x\"] += 1\nprint(obj[\"x\"])</pre>",
      options: ["6", "5", "1", "51"],
      answer: 0,
      explain: "The loaded dictionary is an independent copy of the stored one, so modifying it (<code>obj[\"x\"] += 1</code>) changes only the in-memory object to 6; the file is not affected.",
      diff: "M"
    }
  ]
});
