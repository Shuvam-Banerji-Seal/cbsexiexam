// August 30 Examination — Topic 2: Network Types & Topologies.
// 20 questions · CBSE Class XII Computer Science · Unit 2 Computer Networks.
window.AUGUST30_TOPICS = window.AUGUST30_TOPICS || [];
window.AUGUST30_TOPICS.push({
  key: "network-types-topologies",
  name: "Network Types & Topologies",
  questions: [
    {
      q: "A network spread over a single room or building, such as a school computer lab, is an example of a:",
      options: ["PAN", "LAN", "MAN", "WAN"],
      answer: 1,
      explain: "A Local Area Network (LAN) covers a small area such as a room, building or campus, and offers high speeds.",
      diff: "E"
    },
    {
      q: "PAN stands for:",
      options: [
        "Public Area Network",
        "Personal Area Network",
        "Private Access Network",
        "Peripheral Attached Network"
      ],
      answer: 1,
      explain: "A Personal Area Network is set up around an individual person, typically within a range of about 10 metres (e.g., Bluetooth devices).",
      diff: "E"
    },
    {
      q: "Connecting a smartphone wirelessly to a smartwatch is an example of a:",
      options: ["WAN", "MAN", "PAN", "LAN"],
      answer: 2,
      explain: "Short-range personal device connections (Bluetooth, USB) form a Personal Area Network (PAN).",
      diff: "M"
    },
    {
      q: "A network that spans an entire city, such as a cable TV network, is called a:",
      options: ["LAN", "MAN", "WAN", "PAN"],
      answer: 1,
      explain: "A Metropolitan Area Network (MAN) covers a city or a large town, often connecting several LANs together.",
      diff: "E"
    },
    {
      q: "The largest WAN in existence today is:",
      options: ["NSFNET", "ARPANET", "The Internet", "An intranet"],
      answer: 2,
      explain: "The Internet is the largest Wide Area Network — a global 'network of networks'.",
      diff: "E"
    },
    {
      q: "Which option lists networks in order of increasing geographical size?",
      options: [
        "LAN, PAN, WAN, MAN",
        "PAN, LAN, MAN, WAN",
        "WAN, MAN, LAN, PAN",
        "PAN, MAN, LAN, WAN"
      ],
      answer: 1,
      explain: "PAN (personal, ~10 m) → LAN (building) → MAN (city) → WAN (country/continent).",
      diff: "M"
    },
    {
      q: "Network topology refers to:",
      options: [
        "The speed of a network",
        "The arrangement of nodes and the connections between them in a network",
        "The brand of routers used",
        "The number of users on the Internet"
      ],
      answer: 1,
      explain: "Topology is the physical or logical layout — how nodes are arranged and linked (bus, star, tree, etc.).",
      diff: "E"
    },
    {
      q: "In which topology are all nodes connected to a single common cable called the backbone?",
      options: ["Star", "Bus", "Tree", "Mesh"],
      answer: 1,
      explain: "In bus topology, every node taps into one shared backbone cable; data travels along it and each node checks if the data is addressed to it.",
      diff: "E"
    },
    {
      q: "A major disadvantage of bus topology is that:",
      options: [
        "It needs a separate cable between every pair of nodes",
        "If the backbone cable fails, the entire network stops working",
        "It requires a very expensive central hub",
        "It can connect only two computers"
      ],
      answer: 1,
      explain: "The single backbone is a point of failure — a break anywhere brings down the whole network; performance also degrades as traffic grows.",
      diff: "M"
    },
    {
      q: "In star topology, all nodes are connected to:",
      options: [
        "Each other directly",
        "A single central device such as a hub or switch",
        "A ring-shaped cable",
        "The Internet cloud"
      ],
      answer: 1,
      explain: "Every node has its own cable to a central hub/switch, which relays the communication.",
      diff: "E"
    },
    {
      q: "If the central hub of a star network fails, what happens?",
      options: [
        "Only one node is affected",
        "The network continues to work at reduced speed",
        "The entire network stops communicating",
        "Nodes automatically re-form a bus topology"
      ],
      answer: 2,
      explain: "The central device is a single point of failure — no node can communicate without it.",
      diff: "M"
    },
    {
      q: "An advantage of star topology over bus topology is:",
      options: [
        "It uses the least amount of cable",
        "A fault in one cable affects only that node, so faults are easy to isolate",
        "It needs no networking device at the centre",
        "It can never fail"
      ],
      answer: 1,
      explain: "Each node has an independent link to the centre, so a damaged cable affects only that node — much easier troubleshooting than a shared backbone.",
      diff: "M"
    },
    {
      q: "Tree topology is essentially a combination of:",
      options: [
        "Ring and mesh",
        "Bus and star",
        "Mesh and ring",
        "Star and ring only"
      ],
      answer: 1,
      explain: "Tree (hierarchical) topology connects several star networks to a common bus backbone — used widely in WANs.",
      diff: "E"
    },
    {
      q: "In a star network with 10 nodes, how many cables are needed to connect every node to the central switch?",
      options: ["9", "10", "45", "100"],
      answer: 1,
      explain: "Each node needs exactly one cable to the central device, so n nodes need n cables.",
      diff: "M"
    },
    {
      q: "In a full mesh topology with 6 computers, how many links are required?",
      options: ["6", "12", "15", "30"],
      answer: 2,
      explain: "Full mesh needs n(n−1)/2 links = 6×5/2 = 15. Very reliable, but expensive in cabling.",
      diff: "H"
    },
    {
      q: "In ring topology, data typically travels:",
      options: [
        "In both directions simultaneously",
        "From node to node around the circle, usually in one direction",
        "Directly from any node to any other node",
        "Only through a central hub"
      ],
      answer: 1,
      explain: "Each node is connected to exactly two neighbours; data passes around the ring, and one failed node or link can break the chain.",
      diff: "M"
    },
    {
      q: "A network that combines two or more different topologies is called a:",
      options: [
        "Hybrid topology",
        "Uniform topology",
        "Simplex topology",
        "Backbone topology"
      ],
      answer: 0,
      explain: "A hybrid topology (e.g., star-bus tree) inherits the features of the topologies it combines.",
      diff: "M"
    },
    {
      q: "Which of these is the correct full form of LAN?",
      options: [
        "Large Area Network",
        "Local Area Network",
        "Long Access Network",
        "Linked Area Node"
      ],
      answer: 1,
      explain: "LAN = Local Area Network — high speed, privately owned, limited to a small geographic area.",
      diff: "E"
    },
    {
      q: "The offices of a company in Delhi, Mumbai and Chennai are connected so employees can share data. This is an example of a:",
      options: ["PAN", "LAN", "MAN", "WAN"],
      answer: 3,
      explain: "A network spanning cities is a Wide Area Network (WAN) — it uses long-distance carriers to link distant sites.",
      diff: "H"
    },
    {
      diagram: "flowchart TD\n  H[Central Hub] --- A[Node A]\n  H --- B[Node B]\n  H --- C[Node C]\n  H --- D[Node D]",
      diagramCaption: "Figure: Identify this topology",
      q: "Which network topology is shown in the diagram?",
      options: ["Bus topology", "Ring topology", "Star topology", "Mesh topology"],
      answer: 2,
      explain: "Every node has its own link to one central hub — the defining shape of star topology.",
      diff: "M"
    },
  ],
});
