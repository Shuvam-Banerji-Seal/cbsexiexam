window.AUGUST_TOPICS = window.AUGUST_TOPICS || [];
window.AUGUST_TOPICS.push({
  key: "three-schema-architecture",
  name: "Database Architecture & Three-Schema Design",
  questions: [
    {
      q: "In the three-schema architecture, which level deals with how data is actually stored on physical storage devices, such as file organisation, blocks and indexing?",
      options: ["The external (view) level", "The conceptual (logical) level", "The internal (physical) level", "The data dictionary level"],
      answer: 2,
      explain: "The <b>internal (physical) level</b> is the lowest level of the three-schema architecture. It describes the physical storage of data, including file organisation, indexing and access methods.",
      diff: "E",
      diagram: "flowchart TB\n  USER[\"End Users and Application Programs\"] --> EXT[\"External / View Level<br/>Individual User Views\"]\n  EXT --> CON[\"Conceptual / Logical Level<br/>Community View of Whole Database\"]\n  CON --> INT[\"Internal / Physical Level<br/>File Organisation, Indexing and Storage\"]\n  style EXT fill:#DCCBA3\n  style CON fill:#DCCBA3\n  style INT fill:#DCCBA3",
      diagramCaption: "Figure 1: The three levels of the three-schema architecture"
    },
    {
      q: "Which level occupies the middle position in the three-schema architecture and gives the community view of the entire database?",
      options: ["The internal level", "The physical level", "The storage level", "The conceptual level"],
      answer: 3,
      explain: "The <b>conceptual (logical) level</b> is the middle level. It describes <i>what</i> data is stored and how the data items are related, without any concern for how it is stored.",
      diff: "E"
    },
    {
      q: "End users and application programs interact directly with which level of the three-schema architecture?",
      options: ["Internal level", "External level", "Conceptual level", "Physical level"],
      answer: 1,
      explain: "The <b>external (view) level</b> is the highest level of the architecture. End users and application programs work with these user views and never deal with storage details.",
      diff: "E"
    },
    {
      q: "The external level of the three-schema architecture is also commonly known as the <b>______</b> level.",
      options: ["physical", "internal", "view", "storage"],
      answer: 2,
      explain: "The external level is also called the <b>view level</b> because it provides individual user views of the database; each user sees only the data relevant to them.",
      diff: "E"
    },
    {
      q: "Which of the following best defines a database <b>schema</b>?",
      options: ["The actual data stored in the database at a particular moment", "The overall design or structure of the database", "A single row of a table", "A backup copy of the database"],
      answer: 1,
      explain: "A <b>schema</b> is the logical structure or design of the database (tables, attributes, constraints and relationships). It is relatively stable and does not change with the data.",
      diff: "E"
    },
    {
      q: "The collection of data stored in the database at a particular moment of time is called the ______.",
      options: ["schema", "metadata", "instance (database state)", "data dictionary"],
      answer: 2,
      explain: "An <b>instance</b> (database state) is the snapshot of actual data at a given instant. It keeps changing with every insert, delete or update, while the schema remains fixed.",
      diff: "E"
    },
    {
      q: "Data about data, such as the names of tables, names and types of columns and constraints, is called ______.",
      options: ["metadata", "records", "views", "instances"],
      answer: 0,
      explain: "<b>Metadata</b> is data that describes other data. It is maintained centrally in the data dictionary and used by the DBMS to manage the database.",
      diff: "E"
    },
    {
      q: "Which of the following statements about the external (view) level is TRUE?",
      options: ["It is the lowest level of the three-schema architecture", "It describes physical storage such as indexing", "Different users can have different external schemas (views) of the same database", "It stores a physical copy of every table"],
      answer: 2,
      explain: "The external level may have <b>many user views</b>, each tailored to a different user or application, over the same conceptual schema. It is the highest level and stores no data itself.",
      diff: "E"
    },
    {
      q: "The three-level (three-schema) architecture of database systems was proposed by ______.",
      options: ["ISO", "ANSI/SPARC", "IEEE", "W3C"],
      answer: 1,
      explain: "The <b>ANSI/SPARC</b> (American National Standards Institute / Standards Planning And Requirements Committee) proposed the external-conceptual-internal architecture to separate user views from physical storage.",
      diff: "M"
    },
    {
      q: "Which component of the database system stores metadata such as the names and properties of all tables, constraints and user privileges?",
      options: ["The external schema", "The data dictionary (system catalog)", "The view", "The query log"],
      answer: 1,
      explain: "The <b>data dictionary</b> (system catalog) is the central store of metadata. The DBMS consults it to interpret every query and to enforce constraints and privileges.",
      diff: "M"
    },
    {
      q: "A <code>view</code> in a database is best described as ______.",
      options: ["A physical copy of a table stored separately on disk", "A virtual table derived from one or more base tables", "An index created on a column", "A backup of the whole database"],
      answer: 1,
      explain: "A <b>view</b> is a virtual table defined by a query; it has no storage of its own and always reflects the current data of its underlying base tables.",
      diff: "M"
    },
    {
      q: "Which of the following is a valid reason for using views in a database?",
      options: ["To store redundant physical copies of data", "To hide sensitive columns or rows from particular users", "To replace the conceptual schema", "To reduce the size of the data dictionary"],
      answer: 1,
      explain: "Views provide <b>security</b> by exposing only selected columns and rows to specific users, and they also hide query complexity. They do not store any data themselves.",
      diff: "M"
    },
    {
      q: "Which of the following statements correctly distinguishes <b>data</b> from <b>metadata</b>?",
      options: ["Data describes the structure of the database; metadata is the stored values", "Metadata describes the structure of the database; data is the stored values", "Data and metadata are both stored only inside views", "Metadata is a user view of the data"],
      answer: 1,
      explain: "<b>Metadata</b> is descriptive information (table names, column types, constraints), while <b>data</b> is the actual stored values. For example, the column name <code>RollNo</code> is metadata; the value <code>42</code> in a row is data.",
      diff: "M"
    },
    {
      q: "Which of the following is NOT a responsibility of the Database Administrator (DBA)?",
      options: ["Defining and managing the schemas of the database", "Controlling user access and granting privileges", "Deciding the storage structure and access strategy", "Writing every application program used by all users"],
      answer: 3,
      explain: "The DBA is responsible for schema definition, storage decisions, access control and backup/recovery. Writing application programs is the job of <b>application programmers</b>, not the DBA.",
      diff: "M"
    },
    {
      q: "The internal (storage) schema of a database, which decides file organisation and indexing, is defined by ______.",
      options: ["end users", "the Database Administrator (DBA)", "application programmers only", "hardware vendors"],
      answer: 1,
      explain: "The <b>DBA</b> defines the internal schema, choosing physical storage structures such as file organisation, indexing and access methods, while keeping the conceptual schema unchanged.",
      diff: "M"
    },
    {
      q: "The conceptual schema of a database describes ______.",
      options: ["only the physical layout of files on disk", "the entities, attributes, relationships and constraints of the entire database", "only a single user view of the data", "the hardware configuration of the server"],
      answer: 1,
      explain: "The <b>conceptual (logical) schema</b> is the community view of the whole database — all entities, attributes, relationships and constraints — independent of storage details and of individual user views.",
      diff: "M"
    },
    {
      q: "Renaming a column in the conceptual schema while keeping all existing external views and applications working unchanged is an example of ______.",
      options: ["physical data independence", "logical data independence", "data redundancy", "view materialisation"],
      answer: 1,
      explain: "<b>Logical data independence</b> is the capacity to change the conceptual schema (structure such as column names) without modifying external views or application programs.",
      diff: "M"
    },
    {
      q: "Physical data independence means that ______.",
      options: ["the conceptual schema can be changed without changing the internal schema", "changes in the internal (physical) schema do not require changes in the conceptual schema", "external views can be changed without changing the conceptual schema", "data is always stored on multiple disks"],
      answer: 1,
      explain: "<b>Physical data independence</b> is the ability to change the internal schema (e.g., indexes or storage organisation) without affecting the conceptual schema or external views.",
      diff: "M",
      diagram: "flowchart TB\n  INTCH[\"Change at Internal Level (e.g. new index)\"] --> CONU[\"Conceptual Level: Unchanged\"]\n  INTCH --> EXTU[\"External Level: Unchanged\"]\n  style CONU fill:#DCCBA3\n  style EXTU fill:#DCCBA3",
      diagramCaption: "Figure 3: An internal-level change leaves higher levels unaffected under physical data independence"
    },
    {
      q: "A view is stored in the database as ______.",
      options: ["a separate physical table", "a query (SELECT) definition recorded in the data dictionary", "a duplicate of all its base tables", "an index structure"],
      answer: 1,
      explain: "A view is stored as a <b>query definition</b> (metadata) in the data dictionary. Its rows are computed from the base tables every time the view is accessed.",
      diff: "M"
    },
    {
      q: "Which mapping in the three-schema architecture translates between the internal schema and the conceptual schema, and what does it enable?",
      options: ["External/conceptual mapping; enables logical data independence", "Conceptual/internal mapping; enables physical data independence", "External/conceptual mapping; enables physical data independence", "Conceptual/internal mapping; enables logical data independence"],
      answer: 1,
      explain: "The <b>conceptual/internal mapping</b> relates the logical records of the conceptual schema to the physical records of the internal schema. Because this mapping can be adjusted, physical changes do not affect the conceptual schema — giving <b>physical data independence</b>.",
      diff: "H",
      diagram: "flowchart TB\n  EXT[\"External / View Level\"] -->|External/Conceptual Mapping| CON[\"Conceptual / Logical Level\"]\n  CON -->|Conceptual/Internal Mapping| INT[\"Internal / Physical Level\"]\n  style EXT fill:#DCCBA3\n  style CON fill:#DCCBA3\n  style INT fill:#DCCBA3",
      diagramCaption: "Figure 2: Mappings between adjacent levels of the architecture"
    },
    {
      q: "Which statement correctly describes the external/conceptual mapping?",
      options: ["It relates user views to the conceptual schema, and its adjustment gives logical data independence", "It relates the conceptual schema to the internal schema, and its adjustment gives physical data independence", "It maps data to hardware addresses directly", "It is defined by end users for every query"],
      answer: 0,
      explain: "The <b>external/conceptual mapping</b> relates each user view to the conceptual schema. When the conceptual schema changes, this mapping can be adjusted so that external views remain unaffected — enabling <b>logical data independence</b>.",
      diff: "H"
    },
    {
      q: "The DBA adds a new index at the internal level to speed up queries. Under the three-schema architecture, which of the following remains unchanged?",
      options: ["Only the external level", "Only the conceptual level", "Both the conceptual level and the external level", "Neither level, since both must be modified"],
      answer: 2,
      explain: "Because of <b>physical data independence</b>, an internal-level change such as adding an index does not affect either the conceptual schema or the external views. Only the conceptual/internal mapping may need to be adjusted.",
      diff: "H"
    },
    {
      q: "Arrange the three levels of data abstraction from the lowest (closest to hardware) to the highest (closest to the user).",
      options: ["External → Conceptual → Internal", "Internal → Conceptual → External", "Conceptual → Internal → External", "Internal → External → Conceptual"],
      answer: 1,
      explain: "The order from bottom to top is <b>Internal (physical) → Conceptual (logical) → External (view)</b>. Moving upward, more abstraction is added and storage details are hidden from the user.",
      diff: "H"
    },
    {
      q: "Which of the following statements about the three-schema architecture is TRUE?",
      options: ["All three schemas store physical copies of the data", "The three levels exist to separate user views from physical storage, thereby enabling data independence", "End users directly modify the internal schema", "The conceptual schema is identical to every external schema"],
      answer: 1,
      explain: "The purpose of the three-level architecture is <b>separation of user views from physical storage</b>, which gives data independence. Schemas are descriptions (metadata), not copies of data.",
      diff: "H"
    },
    {
      q: "The table lists what each schema level describes.<br/><br/><table style='border-collapse:collapse;border:1px solid #5C4632'><tr><td style='border:1px solid #5C4632;padding:4px 8px'><b>Level</b></td><td style='border:1px solid #5C4632;padding:4px 8px'><b>What it describes</b></td></tr><tr><td style='border:1px solid #5C4632;padding:4px 8px'>External (view) level</td><td style='border:1px solid #5C4632;padding:4px 8px'>User views, selected subsets of data</td></tr><tr><td style='border:1px solid #5C4632;padding:4px 8px'>Conceptual (logical) level</td><td style='border:1px solid #5C4632;padding:4px 8px'>Entities, attributes, relationships and constraints of the whole database</td></tr><tr><td style='border:1px solid #5C4632;padding:4px 8px'>Internal (physical) level</td><td style='border:1px solid #5C4632;padding:4px 8px'>File organisation, indexing and access methods</td></tr></table><br/>Based on the table, which pairing of user to schema level is correct?",
      options: ["End users work at the internal level; application programmers work at the conceptual level", "Application programmers and end users work with the external level; the DBA defines all three levels", "The DBA works only at the external level; end users define the internal schema", "Application programmers work at the internal level; the DBA works at the external level only"],
      answer: 1,
      explain: "From the table, user views live at the <b>external level</b>, so end users and application programmers work there. The <b>DBA</b> is responsible for defining and managing all three schemas.",
      diff: "H"
    }
  ]
});
