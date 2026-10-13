// October 13 Examination — Part B, Topic 7: Memory & Storage (RAM, ROM, secondary storage).
// 10 questions · CBSE Class IX · Unit 1: Basics of Information Technology.
window.OCT13_TOPICS = window.OCT13_TOPICS || [];
window.OCT13_TOPICS.push({
  key: "memory-storage",
  name: "Memory & Storage — RAM, ROM, Secondary",
  questions: [
    {
      q: "Which memory <b>loses its contents</b> when the power is switched off?",
      options: ["ROM", "Hard disk", "Pen drive", "RAM"],
      answer: 3,
      explain: "<b>RAM</b> (Random Access Memory) is <i>volatile</i>: it holds the programs and data in use only while the power is on.",
      diff: "E"
    },
    {
      q: "ROM is called <b>non-volatile</b> memory because —",
      options: ["It keeps its contents even when the power is switched off", "Its contents are erased whenever the computer shuts down", "It is the fastest memory inside the CPU", "It is a removable storage device"],
      answer: 0,
      explain: "ROM (Read Only Memory) <b>retains its data without power</b>. Its contents are written at manufacture and normally only read afterwards.",
      diff: "E"
    },
    {
      q: "The start-up instructions (BIOS / firmware) that a computer needs as soon as it is switched on are stored in —",
      options: ["RAM", "Cache", "ROM", "Registers"],
      answer: 2,
      explain: "The start-up instructions must survive power-off, so they are kept in non-volatile <b>ROM</b>. RAM is empty when the computer is first switched on.",
      diff: "M"
    },
    {
      q: "Which type of ROM can be erased using <b>ultraviolet (UV) light</b> and then reprogrammed?",
      options: ["PROM", "EPROM", "EEPROM", "Mask ROM"],
      answer: 1,
      explain: "<b>EPROM</b> (Erasable Programmable ROM) is erased by UV light. EEPROM is erased electrically. PROM can be written only once, and mask ROM is fixed at manufacture.",
      diff: "H"
    },
    {
      q: "A small, very fast memory placed between the CPU and RAM to hold frequently used data and instructions is called —",
      options: ["Virtual memory", "Secondary memory", "Flash memory", "Cache memory"],
      answer: 3,
      explain: "<b>Cache memory</b> is faster than RAM. Keeping frequently used data there means the CPU waits less for the slower main memory.",
      diff: "M"
    },
    {
      q: "Which of the following is a <b>secondary</b> storage device?",
      options: ["RAM", "Solid State Drive (SSD)", "Cache", "Registers"],
      answer: 1,
      explain: "Secondary storage keeps data permanently — <b>SSDs</b>, hard disks, pen drives, CDs and DVDs. RAM, cache and registers are primary or internal memory.",
      diff: "E"
    },
    {
      diagram: "flowchart TD\n  A[Registers] --> B[Cache Memory]\n  B --> C[Main Memory: RAM]\n  C --> D[Secondary Storage: HDD and SSD]",
      diagramCaption: "Figure: The memory hierarchy, from top to bottom",
      q: "In the memory hierarchy shown, which statement is true as we move <b>down</b> from registers to secondary storage?",
      options: ["Speed increases and capacity decreases", "Both speed and capacity increase", "Speed decreases and storage capacity increases", "Both speed and capacity decrease"],
      answer: 2,
      explain: "Registers are the fastest but tiny; secondary storage is the slowest but holds the most data. Cost per byte also falls as you move down.",
      diff: "M"
    },
    {
      q: "Which storage device reads and writes data using a <b>laser beam</b>?",
      options: ["Hard disk drive", "Pen drive", "DVD (optical disc)", "Magnetic tape"],
      answer: 2,
      explain: "CDs, DVDs and Blu-ray discs are <b>optical</b> storage, read by a laser. Hard disks and tapes are magnetic; pen drives use flash memory.",
      diff: "E"
    },
    {
      q: "A pen drive (USB flash drive) stores data using —",
      options: ["Flash memory chips", "Magnetic platters", "Laser-etched pits", "Punched holes on cards"],
      answer: 0,
      explain: "Pen drives, memory cards and SSDs use <b>flash memory</b>, a non-volatile chip with no moving parts.",
      diff: "M"
    },
    {
      q: "Why does a computer need <b>secondary</b> storage even though it already has RAM?",
      options: ["RAM is slower than a hard disk", "Secondary storage is located inside the CPU", "RAM cannot hold programs at all", "RAM is volatile and limited in size, so work must be saved permanently elsewhere"],
      answer: 3,
      explain: "RAM loses everything when the power goes off, and it is small. Files and programs therefore need <b>permanent, larger</b> secondary storage.",
      diff: "M"
    },
  ],
});
