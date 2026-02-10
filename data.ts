import { Section } from './types';

export const EXAM_DATA: Section[] = [
  {
    id: 'A',
    title: 'Section A',
    description: 'Multiple Choice Questions & Assertions (1 Mark each)',
    questions: [
      {
        id: 'q1',
        text: 'Which of the following is an invalid identifier in Python?',
        type: 'MCQ',
        options: ['_my_var', '2nd_item', 'Total_Sum', 'print_data'],
        correctOptionIndex: 1,
        marks: 1,
        explanation: 'Identifiers cannot start with a digit.'
      },
      {
        id: 'q2',
        text: 'The value of (1011)₂ in decimal is:',
        type: 'MCQ',
        options: ['10', '11', '12', '13'],
        correctOptionIndex: 1,
        marks: 1,
        explanation: '1*8 + 0*4 + 1*2 + 1*1 = 11.'
      },
      {
        id: 'q3',
        text: 'Which Boolean gate returns True only if both inputs are True?',
        type: 'MCQ',
        options: ['OR', 'NAND', 'AND', 'XOR'],
        correctOptionIndex: 2,
        marks: 1
      },
      {
        id: 'q4',
        text: 'What is the output of print(17 // 4 + 2 ** 3)?',
        type: 'MCQ',
        options: ['12', '12.25', '11', '10'],
        correctOptionIndex: 0,
        marks: 1,
        explanation: '17 // 4 is 4. 2 ** 3 is 8. 4 + 8 = 12.'
      },
      {
        id: 'q5',
        text: 'State True or False: Strings in Python are mutable data types.',
        type: 'MCQ',
        options: ['True', 'False'],
        correctOptionIndex: 1,
        marks: 1,
        explanation: 'Strings are immutable in Python.'
      },
      {
        id: 'q6',
        text: 'Identify the error in the following code: x = input("Enter a number"); print(x + 5)',
        type: 'MCQ',
        options: ['Syntax Error', 'Logical Error', 'Runtime Error (Type Error)', 'No Error'],
        correctOptionIndex: 2,
        marks: 1,
        explanation: 'input() returns a string. Adding string and int causes TypeError.'
      },
      {
        id: 'q7',
        text: 'Which of the following is a "Universal Gate"?',
        type: 'MCQ',
        options: ['NOT', 'AND', 'NOR', 'XOR'],
        correctOptionIndex: 2,
        marks: 1
      },
      {
        id: 'q8',
        text: 'The encoding scheme that uses 16-bits to represent characters of all world languages is:',
        type: 'MCQ',
        options: ['ASCII', 'ISCII', 'Unicode', 'UTF-8'],
        correctOptionIndex: 2,
        marks: 1
      },
      {
        id: 'q9',
        text: 'Which part of the CPU performs mathematical calculations?',
        type: 'MCQ',
        options: ['Control Unit', 'ALU', 'Registers', 'Cache'],
        correctOptionIndex: 1,
        marks: 1
      },
      {
        id: 'q10',
        text: 'What will be the output of L = [1, 2, 3, 4, 5]; print(L[1:4:2])?',
        type: 'MCQ',
        options: ['[1, 3]', '[2, 4]', '[2, 3, 4]', '[1, 2, 3]'],
        correctOptionIndex: 1,
        marks: 1,
        explanation: 'Start at index 1 (value 2), end before index 4, step 2. Items: 2, 4.'
      },
      {
        id: 'q11',
        text: 'Which method is used to add an element to the end of a list?',
        type: 'MCQ',
        options: ['add()', 'insert()', 'append()', 'extend()'],
        correctOptionIndex: 2,
        marks: 1
      },
      {
        id: 'q12',
        text: "The act of stealing someone's personal information to commit fraud is called:",
        type: 'MCQ',
        options: ['Phishing', 'Identity Theft', 'Hacking', 'Spamming'],
        correctOptionIndex: 1,
        marks: 1
      },
      {
        id: 'q13',
        text: 'What is the output of bool(0)?',
        type: 'MCQ',
        options: ['True', 'False', '0', 'Error'],
        correctOptionIndex: 1,
        marks: 1
      },
      {
        id: 'q14',
        text: 'Select the correct expansion of RAM and ROM:',
        type: 'MCQ',
        options: [
          'Read Access Memory, Read Only Memory',
          'Random Access Memory, Random Only Memory',
          'Random Access Memory, Read Only Memory',
          'Rapid Access Memory, Read Only Model'
        ],
        correctOptionIndex: 2,
        marks: 1
      },
      {
        id: 'q15',
        text: 'Which operator is used to check if a value exists within a sequence?',
        type: 'MCQ',
        options: ['is', 'in', '==', 'exists'],
        correctOptionIndex: 1,
        marks: 1
      },
      {
        id: 'q16',
        text: 'Convert the hexadecimal number (A1)₁₆ to Decimal.',
        type: 'MCQ',
        options: ['160', '161', '101', '100'],
        correctOptionIndex: 1,
        marks: 1,
        explanation: 'A=10. 10*16^1 + 1*16^0 = 160 + 1 = 161.'
      },
      {
        id: 'q17',
        text: 'Choose the best definition for Digital Footprint:',
        type: 'MCQ',
        options: [
          'A trail of data you create while using the Internet.',
          'The physical weight of your computer.',
          'A secure password algorithm.',
          'The memory usage of a digital file.'
        ],
        correctOptionIndex: 0,
        marks: 1
      },
      {
        id: 'q18',
        text: 'Which module is required to use the randint() function?',
        type: 'MCQ',
        options: ['math', 'random', 'stats', 'numbers'],
        correctOptionIndex: 1,
        marks: 1
      },
      {
        id: 'q19',
        text: 'Assertion(A): Python is an interpreted language. Reason(R): Python code is converted into machine code line by line during execution.',
        type: 'MCQ',
        options: [
          'Both A and R are true and R is the correct explanation of A.',
          'Both A and R are true but R is not the correct explanation of A.',
          'A is true but R is false.',
          'A is false but R is true.'
        ],
        correctOptionIndex: 0,
        marks: 1
      },
      {
        id: 'q20',
        text: 'Assertion(A): A tuple T = (10) is considered an integer by Python. Reason(R): To create a single-element tuple, a trailing comma is required.',
        type: 'MCQ',
        options: [
          'Both A and R are true and R is the correct explanation of A.',
          'Both A and R are true but R is not the correct explanation of A.',
          'A is true but R is false.',
          'A is false but R is true.'
        ],
        correctOptionIndex: 0,
        marks: 1
      },
      {
        id: 'q21',
        text: 'Assertion(A): E-waste should not be disposed of in regular trash bins. Reason(R): E-waste contains toxic materials like lead and mercury.',
        type: 'MCQ',
        options: [
          'Both A and R are true and R is the correct explanation of A.',
          'Both A and R are true but R is not the correct explanation of A.',
          'A is true but R is false.',
          'A is false but R is true.'
        ],
        correctOptionIndex: 0,
        marks: 1
      }
    ]
  },
  {
    id: 'B',
    title: 'Section B',
    description: 'Short Answer Questions (2 Marks each)',
    questions: [
      {
        id: 'q22',
        text: 'Which statement correctly differentiates between Compiler and Interpreter?',
        type: 'MCQ',
        options: [
          'Compiler translates line by line; Interpreter translates whole code at once.',
          'Compiler translates whole code at once; Interpreter translates line by line.',
          'Compiler finds logical errors; Interpreter finds syntax errors.',
          'There is no difference.'
        ],
        correctOptionIndex: 1,
        marks: 2
      },
      {
        id: 'q23',
        text: 'Write a Python program to swap two numbers without using a third variable.',
        type: 'CODE',
        codeStarter: 'a = 10\nb = 20\n# Write your swap logic below\n\n\nprint("a =", a, "b =", b)',
        validationKeywords: ['a, b = b, a', 'a,b = b,a', 'a,b=b,a', 'a, b=b, a'],
        marks: 2,
        explanation: 'Pythonic swap: a, b = b, a'
      },
      {
        id: 'q24',
        text: 'Which snippet correctly demonstrates "continue" (skipping an iteration)?',
        type: 'MCQ',
        options: [
          'for i in range(5): if i==2: break; print(i)',
          'for i in range(5): if i==2: continue; print(i)',
          'for i in range(5): if i==2: exit(); print(i)',
          'for i in range(5): if i==2: pass; print(i)'
        ],
        correctOptionIndex: 1,
        marks: 2
      },
      {
        id: 'q25',
        text: 'Which of the following represents De Morgan\'s Law?',
        type: 'MCQ',
        options: [
          '(A + B)\' = A\' + B\'',
          '(A + B)\' = A\' . B\'',
          '(A . B)\' = A\' . B\'',
          '(A + B) = A\' . B\''
        ],
        correctOptionIndex: 1,
        marks: 2
      },
      {
        id: 'q26',
        text: 'What are the two modes of Python execution?',
        type: 'MCQ',
        options: [
          'Script Mode and Interactive Mode',
          'Run Mode and Debug Mode',
          'Compile Mode and Interpret Mode',
          'User Mode and Kernel Mode'
        ],
        correctOptionIndex: 0,
        marks: 2
      },
      {
        id: 'q27',
        text: 'Predict the output of: S = "Welcome to Python"; print(S[0:7])',
        type: 'MCQ',
        options: ['Welcome', 'Welcome ', 'Welcom', 'Python'],
        correctOptionIndex: 0,
        marks: 2
      },
      {
        id: 'q28',
        text: 'Select the correct definition of Cyber Bullying:',
        type: 'MCQ',
        options: [
          'Posting random comments on social media.',
          'Harassing, threatening, or humiliating someone using digital means.',
          'Searching for information online.',
          'Downloading copyrighted material.'
        ],
        correctOptionIndex: 1,
        marks: 2
      }
    ]
  },
  {
    id: 'C',
    title: 'Section C',
    description: 'Short Answer Questions (3 Marks each)',
    questions: [
      {
        id: 'q29',
        text: 'For the Boolean expression F = (A + B) . (A\' + C), which logic gates are required?',
        type: 'MCQ',
        options: [
          '2 AND gates, 1 OR gate',
          '2 OR gates, 1 AND gate, 1 NOT gate',
          '3 AND gates',
          '2 NOR gates'
        ],
        correctOptionIndex: 1,
        marks: 3,
        explanation: 'OR for (A+B), OR for (A\'+C), NOT for A\', AND to combine them.'
      },
      {
        id: 'q30',
        text: 'Write a Python program to find the factorial of a number "n".',
        type: 'CODE',
        codeStarter: 'n = 5\nfactorial = 1\n# Write loop to calculate factorial\n\nprint(factorial)',
        validationKeywords: ['range', 'for', 'while', '*='],
        marks: 3
      },
      {
        id: 'q31',
        text: 'Which of the following is NOT a function of an Operating System?',
        type: 'MCQ',
        options: [
          'Memory Management',
          'Processor Management',
          'Compilation of Source Code',
          'File Management'
        ],
        correctOptionIndex: 2,
        marks: 3
      },
      {
        id: 'q32',
        text: 'Write a program to print the Fibonacci Series up to n terms (e.g., n=5).',
        type: 'CODE',
        codeStarter: 'n = 5\na, b = 0, 1\nprint(a)\nprint(b)\n# Complete the series generation\n\n',
        validationKeywords: ['a, b = b, a + b', 'a,b = b,a+b', 'a=b', 'b=a+b', 'range'],
        marks: 3
      },
      {
        id: 'q33',
        text: 'Which right protects original literary, dramatic, musical and artistic works?',
        type: 'MCQ',
        options: [
          'Patent',
          'Copyright',
          'Trademark',
          'Industrial Design'
        ],
        correctOptionIndex: 1,
        marks: 3
      }
    ]
  },
  {
    id: 'D',
    title: 'Section D',
    description: 'Case Study & Long Answer (4 Marks each)',
    questions: [
      {
        id: 'q34',
        text: 'Given Marks = [78, 92, 45, 88, 60, 32, 95]. Which command sorts the list in descending order?',
        type: 'MCQ',
        options: [
          'Marks.sort()',
          'Marks.sort(reverse=True)',
          'Marks.order(desc)',
          'sorted(Marks)'
        ],
        correctOptionIndex: 1,
        marks: 4
      },
      {
        id: 'q35',
        text: 'Convert (110101)₂ to Decimal.',
        type: 'MCQ',
        options: ['52', '53', '54', '55'],
        correctOptionIndex: 1,
        marks: 4,
        explanation: '32 + 16 + 4 + 1 = 53'
      },
      {
        id: 'q36',
        text: 'Which Act in India deals with cybercrime and electronic commerce?',
        type: 'MCQ',
        options: [
          'IPC 1860',
          'Consumer Protection Act',
          'IT Act 2000',
          'RTI Act'
        ],
        correctOptionIndex: 2,
        marks: 4
      }
    ]
  },
  {
    id: 'E',
    title: 'Section E',
    description: 'Programming Questions (5 Marks each)',
    questions: [
      {
        id: 'q37',
        text: 'Write a Python program to create a dictionary of n employees (ID as key, Salary as value) and increase salary by 10%.',
        type: 'CODE',
        codeStarter: 'employees = {101: 50000, 102: 60000}\n# Write a loop to update values by 10%\n\nprint(employees)',
        validationKeywords: ['for', 'employees[', '1.1', '*='],
        marks: 5
      },
      {
        id: 'q38',
        text: 'Write a loop to generate the following pattern:\n*\n**\n***',
        type: 'CODE',
        codeStarter: 'n = 3\n# Write nested loops or string multiplication\n\n',
        validationKeywords: ['range', 'print', '*'],
        marks: 5
      }
    ]
  }
];