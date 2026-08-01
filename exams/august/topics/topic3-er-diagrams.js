window.AUGUST_TOPICS = window.AUGUST_TOPICS || [];
window.AUGUST_TOPICS.push({
  key: "er-diagrams",
  name: "ER Diagrams & Database Design",
  questions: [
    {
      q: "In an Entity-Relationship (ER) diagram, an <b>entity</b> (a real-world object such as STUDENT or COURSE) is represented by a —",
      options: ["Ellipse", "Rectangle", "Diamond", "Double rectangle"],
      answer: 1,
      explain: "An entity is drawn as a <b>rectangle</b>. Ellipses represent attributes, diamonds represent relationships, and a double rectangle represents a weak entity.",
      diff: "E"
    },
    {
      q: "Which shape is used to represent an <b>attribute</b> (a property of an entity) in an ER diagram?",
      options: ["Rectangle", "Diamond", "Ellipse", "Double rectangle"],
      answer: 2,
      explain: "An attribute such as <code>name</code> or <code>roll_no</code> is drawn as an <b>ellipse</b> and attached to its entity by a line.",
      diff: "E"
    },
    {
      q: "A <b>weak entity</b> — an entity that cannot exist without its owner entity — is represented in an ER diagram by a —",
      options: ["Single rectangle", "Dashed rectangle", "Rounded rectangle", "Double rectangle"],
      answer: 3,
      explain: "A weak entity is drawn with a <b>double (two-line) rectangle</b>, e.g. LOAN, which exists only if its owner entity CUSTOMER exists.",
      diff: "E"
    },
    {
      q: "In an ER diagram, the <b>primary key (key) attribute</b> of an entity is identified by —",
      options: ["A diamond symbol", "A dashed ellipse", "An underline below the attribute name", "A double ellipse"],
      answer: 2,
      explain: "The key attribute is shown with the attribute name <b>underlined</b> (e.g. <u>roll_no</u>). A dashed ellipse marks a derived attribute and a double ellipse marks a multivalued attribute.",
      diff: "E"
    },
    {
      q: "An association between two entities, such as STUDENT <i>takes</i> COURSE, is called a <b>relationship</b> and is drawn in an ER diagram as a —",
      options: ["Ellipse", "Rectangle", "Circle", "Diamond"],
      answer: 3,
      explain: "A relationship is represented by a <b>diamond</b> joined by lines to each participating entity, with the relationship name (e.g. takes) written inside the diamond.",
      diff: "E"
    },
    {
      q: "An attribute that can hold <b>multiple values</b> (e.g. an employee may have several phone numbers) is called a multivalued attribute and is drawn as a —",
      options: ["Underlined ellipse", "Dashed ellipse", "Double rectangle", "Double ellipse"],
      answer: 3,
      explain: "A multivalued attribute is shown with a <b>double ellipse</b>, e.g. <code>phone</code> for an employee who can have many phone numbers.",
      diff: "E"
    },
    {
      q: "A <b>derived attribute</b>, whose value can be computed from other stored attributes (e.g. age from date_of_birth), is represented by a —",
      options: ["Dashed ellipse", "Double ellipse", "Solid ellipse", "Diamond"],
      answer: 0,
      explain: "A derived attribute is drawn as a <b>dashed ellipse</b>, since its value is not stored in the database but calculated from other attributes.",
      diff: "E"
    },
    {
      q: "Which statement correctly describes a <b>composite attribute</b> in the ER model?",
      options: [
        "An attribute whose value is derived from other attributes",
        "An attribute that uniquely identifies an entity instance",
        "An attribute that can take more than one value",
        "An attribute that is made up of smaller sub-attributes"
      ],
      answer: 3,
      explain: "A composite attribute such as <code>address = (house_no, street, city)</code> is divided into component sub-attributes. A derived value is shown by a dashed ellipse, a unique identifier by an underline, and multiple values by a double ellipse.",
      diff: "M"
    },
    {
      q: "In the ER diagram shown below, the relationship between DEPARTMENT and EMPLOYEE has cardinality 1:N. Which statement in plain words is correct?",
      options: [
        "Each department employs exactly one employee, and each employee works in many departments",
        "Each department employs many employees, and each employee works in exactly one department",
        "Each department employs exactly one employee, and each employee works in exactly one department",
        "Each department employs many employees, and each employee works in many departments"
      ],
      answer: 1,
      explain: "The token <code>||</code> on the DEPARTMENT side means 'exactly one' and <code>o{</code> on the EMPLOYEE side means 'zero or more', so one department employs many employees while each employee belongs to exactly one department.",
      diff: "M",
      diagram: "erDiagram\n    DEPARTMENT ||--o{ EMPLOYEE : employs\n    DEPARTMENT {\n        int dept_id PK\n        string dept_name\n    }\n    EMPLOYEE {\n        int emp_id PK\n        string emp_name\n        int dept_id FK\n    }",
      diagramCaption: "Figure 1: ER diagram of DEPARTMENT and EMPLOYEE (1:N)"
    },
    {
      q: "In the ER diagram shown below, what does the M:N (many-to-many) relationship between STUDENT and COURSE mean in plain words?",
      options: [
        "A student can take many courses, but each course has exactly one student",
        "A course can be taken by many students, but each student takes exactly one course",
        "A student can take many courses and a course can be taken by many students",
        "A student takes exactly one course and a course has exactly one student"
      ],
      answer: 2,
      explain: "One student can have many ENROLLS records and each ENROLLS record belongs to exactly one course, so many students can be linked to many courses (M:N) through the ENROLLS relationship.",
      diff: "M",
      diagram: "erDiagram\n    STUDENT ||--o{ ENROLLS : takes\n    ENROLLS }o--|| COURSE : in\n    STUDENT {\n        int roll_no PK\n        string name\n        string class\n    }\n    COURSE {\n        string code PK\n        string title\n        int credits\n    }",
      diagramCaption: "Figure 2: ER diagram of STUDENT, ENROLLS and COURSE (M:N)"
    },
    {
      q: "The ER diagram below shows a 1:1 relationship between COUNTRY and CAPITAL. Which plain-language statement is correct?",
      options: [
        "A country has exactly one capital and a capital belongs to exactly one country",
        "A country has many capitals and a capital belongs to exactly one country",
        "A country has exactly one capital and a capital can belong to many countries",
        "A country may have zero or more capitals and a capital may belong to zero or more countries"
      ],
      answer: 0,
      explain: "The token <code>||--||</code> means exactly-one to exactly-one: each country has exactly one capital and each capital belongs to exactly one country.",
      diff: "M",
      diagram: "erDiagram\n    COUNTRY ||--|| CAPITAL : has\n    COUNTRY {\n        string code PK\n        string country_name\n    }\n    CAPITAL {\n        int capital_id PK\n        string capital_name\n    }",
      diagramCaption: "Figure 3: ER diagram of COUNTRY and CAPITAL (1:1)"
    },
    {
      q: "The ER diagram below shows a relationship in which the same entity type appears on both sides. Such a relationship is called a —",
      options: ["A binary relationship", "A recursive (unary) relationship", "A ternary relationship", "An identifying relationship"],
      answer: 1,
      explain: "When an entity participates in a relationship with itself (e.g. PERSON marries PERSON), the relationship is <b>recursive or unary</b>; its degree is 1.",
      diff: "M",
      diagram: "erDiagram\n    PERSON ||--o{ PERSON : marries\n    PERSON {\n        int person_id PK\n        string name\n    }",
      diagramCaption: "Figure 4: Recursive relationship on PERSON"
    },
    {
      q: "A relationship that involves <b>three</b> distinct entity types is said to have a degree of —",
      options: ["Ternary (degree 3)", "Unary (degree 1)", "Binary (degree 2)", "Nullary (degree 0)"],
      answer: 0,
      explain: "The degree of a relationship is the number of entity types that participate in it. Three entity types (e.g. SUPPLIER, PART, PROJECT) give a <b>ternary</b> relationship.",
      diff: "M"
    },
    {
      q: "In an ER diagram, <b>total participation</b> of an entity in a relationship is shown by a double line and means —",
      options: [
        "Every instance of the entity must participate in the relationship",
        "Only some instances of the entity participate in the relationship",
        "The entity is a weak entity with no key of its own",
        "At most one instance of the entity can participate"
      ],
      answer: 0,
      explain: "Total (mandatory) participation means <b>every occurrence</b> of the entity takes part in the relationship. A single line would indicate partial (optional) participation.",
      diff: "M"
    },
    {
      q: "The ER diagram below contains an M:N relationship between TEACHER and SUBJECT. When converted to a relational schema, how many tables are needed?",
      options: [
        "2 tables — TEACHER and SUBJECT only",
        "3 tables — TEACHER, SUBJECT and a linking table TEACHES",
        "4 tables — one table for each entity and each attribute",
        "1 table — a single merged table"
      ],
      answer: 1,
      explain: "An M:N relationship cannot be stored with a simple foreign key, so a separate <b>linking table</b> TEACHES is created holding the primary keys of both entities — 3 tables in all.",
      diff: "M",
      diagram: "erDiagram\n    TEACHER ||--o{ TEACHES : conducts\n    TEACHES }o--|| SUBJECT : covers\n    TEACHER {\n        int teacher_id PK\n        string name\n    }\n    SUBJECT {\n        string subject_code PK\n        string title\n    }",
      diagramCaption: "Figure 5: ER diagram of TEACHER, TEACHES and SUBJECT (M:N)"
    },
    {
      q: "A hospital database must record that <b>a patient can be admitted to many wards, and a ward can house many patients</b>. Which relationship line correctly models this in an ER diagram?",
      options: [
        "<code>PATIENT ||--o{ WARD : stays_in</code>",
        "<code>PATIENT }o--|| WARD : stays_in</code>",
        "<code>PATIENT }o--o{ WARD : stays_in</code>",
        "<code>PATIENT ||--|| WARD : stays_in</code>"
      ],
      answer: 2,
      explain: "Many patients to many wards is an <b>M:N</b> relationship, drawn with <code>}o--o{</code> ('zero or more' on both sides).",
      diff: "M"
    },
    {
      q: "In the ER diagram shown below, which attribute is the <b>primary key</b> of the STUDENT entity?",
      options: ["email", "dob", "name", "roll_no"],
      answer: 3,
      explain: "<code>roll_no</code> is marked with the <b>PK (primary key)</b> marker in the ER diagram; it uniquely identifies each student record.",
      diff: "M",
      diagram: "erDiagram\n    STUDENT {\n        int roll_no PK\n        string name\n        date dob\n        string email\n    }",
      diagramCaption: "Figure 6: STUDENT entity with its attributes"
    },
    {
      q: "In the ER diagram shown below, which column of the ORDER entity is a <b>foreign key</b>?",
      options: ["order_id", "cust_id", "order_date", "cust_name"],
      answer: 1,
      explain: "<code>cust_id</code> in ORDER references the primary key <code>cust_id</code> of CUSTOMER, so it is the foreign key that implements the 1:N relationship.",
      diff: "M",
      diagram: "erDiagram\n    CUSTOMER ||--o{ ORDER : places\n    CUSTOMER {\n        int cust_id PK\n        string cust_name\n    }\n    ORDER {\n        int order_id PK\n        int cust_id FK\n        date order_date\n    }",
      diagramCaption: "Figure 7: ER diagram of CUSTOMER and ORDER (1:N)"
    },
    {
      q: "In the ER diagram below, LOAN is a <b>weak entity</b> whose attribute loan_no is only a partial key. When converted to a relational schema, the primary key of the LOAN table is —",
      options: ["<code>loan_no</code>", "<code>cust_id</code>", "The combination <code>(cust_id, loan_no)</code>", "<code>taken_on</code>"],
      answer: 2,
      explain: "A weak entity has no complete key of its own; its primary key is the combination of the owner's primary key (<code>cust_id</code>) and its partial key (<code>loan_no</code>).",
      diff: "H",
      diagram: "erDiagram\n    CUSTOMER ||--o{ LOAN : borrows\n    CUSTOMER {\n        int cust_id PK\n        string cust_name\n    }\n    LOAN {\n        int loan_no\n        date taken_on\n    }",
      diagramCaption: "Figure 8: Weak entity LOAN of CUSTOMER"
    },
    {
      q: "Which set of CREATE TABLE statements correctly implements the ER diagram shown below?",
      options: [
        "<pre>CREATE TABLE Customer ( cust_id INT PRIMARY KEY, cust_name VARCHAR(50) );\nCREATE TABLE Orders ( order_id INT PRIMARY KEY, cust_id INT REFERENCES Customer(cust_id) );\nCREATE TABLE Product ( product_id INT PRIMARY KEY, product_name VARCHAR(50) );\nCREATE TABLE Order_Item ( order_id INT, product_id INT, quantity INT, PRIMARY KEY (order_id, product_id), FOREIGN KEY (order_id) REFERENCES Orders(order_id), FOREIGN KEY (product_id) REFERENCES Product(product_id) );</pre>",
        "<pre>CREATE TABLE Customer ( cust_id INT PRIMARY KEY, cust_name VARCHAR(50) );\nCREATE TABLE Orders ( order_id INT PRIMARY KEY );\nCREATE TABLE Product ( product_id INT PRIMARY KEY, product_name VARCHAR(50) );\nCREATE TABLE Order_Item ( order_id INT PRIMARY KEY, product_id INT, quantity INT );</pre>",
        "<pre>CREATE TABLE Customer ( cust_id INT PRIMARY KEY, cust_name VARCHAR(50) );\nCREATE TABLE Orders ( order_id INT PRIMARY KEY, cust_id INT, product_id INT, quantity INT );\nCREATE TABLE Product ( product_id INT PRIMARY KEY, product_name VARCHAR(50) );</pre>",
        "<pre>CREATE TABLE Customer ( cust_id INT PRIMARY KEY, cust_name VARCHAR(50) );\nCREATE TABLE Orders ( order_id INT PRIMARY KEY, cust_id INT REFERENCES Customer(cust_id) );\nCREATE TABLE Product ( product_id INT PRIMARY KEY, product_name VARCHAR(50) );\nCREATE TABLE Order_Item ( order_id INT PRIMARY KEY, product_id INT REFERENCES Product(product_id), quantity INT );</pre>"
      ],
      answer: 0,
      explain: "Orders stores <code>cust_id</code> as a foreign key to Customer (1:N). Order_Item links Orders and Product with a <b>composite primary key (order_id, product_id)</b> and two foreign keys, because one order can contain many items — only option A reflects this.",
      diff: "H",
      diagram: "erDiagram\n    CUSTOMER ||--o{ ORDER : places\n    ORDER ||--o{ ORDER_ITEM : contains\n    ORDER_ITEM }o--|| PRODUCT : refers\n    CUSTOMER {\n        int cust_id PK\n        string cust_name\n    }\n    ORDER {\n        int order_id PK\n        int cust_id FK\n    }\n    ORDER_ITEM {\n        int order_id PK\n        int product_id PK\n        int quantity\n    }\n    PRODUCT {\n        int product_id PK\n        string product_name\n    }",
      diagramCaption: "Figure 9: ER diagram of CUSTOMER, ORDER, ORDER_ITEM and PRODUCT"
    },
    {
      q: "In the ER diagram below, <code>address</code> is a <b>composite attribute</b> made up of (house_no, street, city). Which relational design is correct?",
      options: [
        "Keep <code>address</code> as a single column in the STUDENT table",
        "Replace <code>address</code> by three columns <code>house_no</code>, <code>street</code> and <code>city</code> in the STUDENT table",
        "Create a separate ADDRESS table with a foreign key to STUDENT",
        "Store the address as a multivalued column"
      ],
      answer: 1,
      explain: "A composite attribute is <b>flattened into its component columns</b> inside the same table. A separate table is needed only for multivalued attributes.",
      diff: "H",
      diagram: "erDiagram\n    STUDENT {\n        int roll_no PK\n        string name\n        string address\n        string phone\n    }",
      diagramCaption: "Figure 10: STUDENT entity with the composite attribute address"
    },
    {
      q: "In an ER diagram, the multivalued attribute <code>phone</code> of an EMPLOYEE entity is best converted into a relational schema by —",
      options: [
        "Adding a single <code>phone</code> column to the EMPLOYEE table",
        "Creating a separate PHONE table with <code>emp_id</code> as a foreign key",
        "Storing all numbers in one comma-separated text column",
        "Dropping the attribute during conversion"
      ],
      answer: 1,
      explain: "A multivalued attribute cannot be stored in a single normalised column, so it is moved to a <b>separate table</b> (e.g. PHONE(phone_no, emp_id)) whose rows link back to the owner through a foreign key.",
      diff: "H"
    },
    {
      q: "In the ER diagram below, <b>every EMPLOYEE must belong to a department</b> (total participation of EMPLOYEE in the employs relationship). Which CREATE TABLE fragment correctly enforces this?",
      options: [
        "<pre>CREATE TABLE Employee (\n  emp_id INT PRIMARY KEY,\n  emp_name VARCHAR(50),\n  dept_id INT REFERENCES Department(dept_id) NOT NULL\n);</pre>",
        "<pre>CREATE TABLE Employee (\n  emp_id INT PRIMARY KEY,\n  emp_name VARCHAR(50),\n  dept_id INT REFERENCES Department(dept_id)\n);</pre>",
        "<pre>CREATE TABLE Employee (\n  emp_id INT PRIMARY KEY,\n  emp_name VARCHAR(50)\n);\nCREATE TABLE Emp_Dept (\n  emp_id INT, dept_id INT\n);</pre>",
        "<pre>CREATE TABLE Employee (\n  emp_id INT PRIMARY KEY,\n  emp_name VARCHAR(50),\n  dept_id INT UNIQUE\n);</pre>"
      ],
      answer: 0,
      explain: "Total participation means the foreign key must be <b>NOT NULL</b> so that every employee row is forced to have a department; a nullable FK (option B) would allow partial participation.",
      diff: "H",
      diagram: "erDiagram\n    DEPARTMENT ||--o{ EMPLOYEE : employs\n    DEPARTMENT {\n        int dept_id PK\n        string dept_name\n    }\n    EMPLOYEE {\n        int emp_id PK\n        string emp_name\n    }",
      diagramCaption: "Figure 11: ER diagram of DEPARTMENT and EMPLOYEE (1:N)"
    },
    {
      q: "The ER diagram below shows a <b>recursive 1:N relationship</b> in which one employee supervises many employees. Which relational schema is correct?",
      options: [
        "One EMPLOYEE table with <code>supervisor_id</code> as a foreign key referencing <code>emp_id</code> in the same table",
        "Two tables: EMPLOYEE and a separate SUPERVISOR table",
        "One EMPLOYEE table with the composite primary key <code>(emp_id, supervisor_id)</code>",
        "A linking table <code>EMPLOYEE_SUPERVISOR(emp_id, supervisor_id)</code>"
      ],
      answer: 0,
      explain: "A recursive 1:N relationship needs no extra table: the EMPLOYEE table keeps <code>supervisor_id</code> as a <b>self-referencing foreign key</b> (NULL for the top-most employee).",
      diff: "H",
      diagram: "erDiagram\n    EMPLOYEE ||--o{ EMPLOYEE : supervises\n    EMPLOYEE {\n        int emp_id PK\n        string emp_name\n        int supervisor_id FK\n    }",
      diagramCaption: "Figure 12: Recursive 'supervises' relationship on EMPLOYEE"
    },
    {
      q: "A <b>ternary relationship</b> SUPPLIES connects SUPPLIER, PART and PROJECT (each entity is 1:N to the relationship). The primary key of the relationship table formed from this ternary relationship is —",
      options: [
        "The primary key of SUPPLIER alone",
        "The primary key of PART alone",
        "The combination of the primary keys of SUPPLIER, PART and PROJECT",
        "Any single column chosen arbitrarily"
      ],
      answer: 2,
      explain: "In a ternary relationship a tuple is identified only by all three participating entities together, so the relationship table's primary key is the <b>concatenation of the three foreign keys</b> (supplier_id, part_id, project_id).",
      diff: "H"
    }
  ]
});
