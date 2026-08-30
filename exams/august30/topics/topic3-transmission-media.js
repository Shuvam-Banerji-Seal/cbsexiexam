// August 30 Examination — Topic 3: Transmission Media.
// 20 questions · CBSE Class XII Computer Science · Unit 2 Computer Networks.
window.AUGUST30_TOPICS = window.AUGUST30_TOPICS || [];
window.AUGUST30_TOPICS.push({
  key: "transmission-media",
  name: "Transmission Media",
  questions: [
    {
      q: "In a twisted pair cable, two insulated copper wires are twisted around each other mainly to:",
      options: [
        "Make the cable look attractive",
        "Reduce electromagnetic interference and crosstalk",
        "Increase the weight of the cable",
        "Allow water to drain out"
      ],
      answer: 1,
      explain: "Twisting causes external interference to affect both wires equally so it can be cancelled out — reducing noise and crosstalk.",
      diff: "E"
    },
    {
      q: "UTP stands for:",
      options: [
        "Universal Transfer Protocol",
        "Unshielded Twisted Pair",
        "United Transmission Path",
        "Underground Telephony Pipe"
      ],
      answer: 1,
      explain: "UTP (Unshielded Twisted Pair) is the most common LAN cabling — categories like Cat 5e and Cat 6 are UTP.",
      diff: "E"
    },
    {
      q: "Twisted pair cables are most commonly used in:",
      options: [
        "Satellite links",
        "Telephone lines and LAN Ethernet cabling",
        "TV remote controls",
        "Fibre optic backbones"
      ],
      answer: 1,
      explain: "Twisted pair is the standard media for telephone lines and Ethernet LANs (with RJ45 connectors).",
      diff: "E"
    },
    {
      q: "The difference between STP and UTP cable is that STP:",
      options: [
        "Is always faster than fibre",
        "Has an extra metallic shield around the twisted pairs for better noise protection",
        "Contains no copper at all",
        "Is a wireless medium"
      ],
      answer: 1,
      explain: "STP (Shielded Twisted Pair) adds a metallic braid or foil shield, giving better protection from interference than UTP, at higher cost.",
      diff: "M"
    },
    {
      q: "Which cable has a central copper conductor surrounded by insulation and a braided metallic shield, and is used by cable TV operators?",
      options: [
        "Twisted pair",
        "Co-axial cable",
        "Fibre optic",
        "Ribbon cable"
      ],
      answer: 1,
      explain: "Co-axial cable's braided metal shield gives it much better noise immunity than twisted pair — ideal for cable TV.",
      diff: "M"
    },
    {
      q: "Compared with twisted pair cable, co-axial cable offers:",
      options: [
        "Lower cost and lower bandwidth",
        "Better shielding and higher bandwidth but at a higher cost",
        "No shielding at all",
        "Only wireless transmission"
      ],
      answer: 1,
      explain: "The metallic shield lets co-ax carry higher frequencies over longer distances than twisted pair, but it is bulkier and costlier.",
      diff: "M"
    },
    {
      q: "Fibre optic cables transmit data in the form of:",
      options: [
        "Sound waves",
        "Light pulses through a glass or plastic core",
        "Radio signals",
        "Water pressure"
      ],
      answer: 1,
      explain: "Data is encoded as pulses of light that travel through the core by total internal reflection.",
      diff: "E"
    },
    {
      q: "The core of a fibre optic cable through which light travels is made of:",
      options: ["Copper", "Glass or plastic", "Aluminium", "Carbon fibre"],
      answer: 1,
      explain: "Ultra-pure glass or plastic forms the light-carrying core, clad in a lower-refractive-index layer to keep light inside.",
      diff: "E"
    },
    {
      q: "Which is NOT an advantage of fibre optic cable?",
      options: [
        "Very high bandwidth",
        "Immunity to electromagnetic interference",
        "Low signal attenuation over long distances",
        "It is the cheapest cable for home LANs"
      ],
      answer: 3,
      explain: "Fibre is fast, secure and interference-free, but it is more expensive and fragile than copper — not the cheapest option.",
      diff: "M"
    },
    {
      q: "A bank wants the most secure, high-speed link between two buildings 5 km apart that is immune to electrical interference. The best choice is:",
      options: [
        "Twisted pair cable",
        "Co-axial cable",
        "Fibre optic cable",
        "Infrared beam"
      ],
      answer: 2,
      explain: "Fibre offers huge bandwidth, low loss over kilometres, and complete immunity to electromagnetic interference.",
      diff: "H"
    },
    {
      q: "Which of the following is a wireless transmission medium?",
      options: [
        "Co-axial cable",
        "Twisted pair",
        "Microwaves",
        "Fibre optic"
      ],
      answer: 2,
      explain: "The three wireless media in the syllabus are radio waves, microwaves and infrared waves.",
      diff: "E"
    },
    {
      q: "Which of the following groups consists ONLY of wired communication media?",
      options: [
        "Radio waves, microwaves, infrared",
        "Twisted pair, co-axial cable, fibre optic cable",
        "Fibre optic, radio waves, co-axial",
        "Twisted pair, infrared, fibre optic"
      ],
      answer: 1,
      explain: "The wired trio is twisted pair, co-axial and fibre optic cable; radio, microwave and infrared are wireless.",
      diff: "E"
    },
    {
      q: "Radio waves are suitable for long-distance broadcasting because they:",
      options: [
        "Can only travel in straight lines",
        "Are omnidirectional and can penetrate walls",
        "Cannot pass through the atmosphere",
        "Work only underwater"
      ],
      answer: 1,
      explain: "Radio waves spread in all directions from the antenna and pass through obstacles, so one transmitter can reach many receivers.",
      diff: "E"
    },
    {
      q: "Wi-Fi networks inside homes and offices communicate using:",
      options: ["Infrared waves", "Radio waves", "Co-axial cable", "Fibre optic"],
      answer: 1,
      explain: "Wi-Fi uses low-power radio waves so devices can connect without line of sight.",
      diff: "E"
    },
    {
      q: "Microwave transmission requires:",
      options: [
        "The antennas to be within line of sight of each other",
        "A physical copper cable",
        "No antennas at all",
        "Only infrared light"
      ],
      answer: 0,
      explain: "Microwaves travel in straight lines, so sending and receiving antennas must 'see' each other — used in point-to-point links and satellites.",
      diff: "M"
    },
    {
      q: "Long-distance point-to-point links (such as satellite communication) typically use:",
      options: ["Infrared waves", "Microwaves", "Sound waves", "USB cables"],
      answer: 1,
      explain: "Microwave links carry high bandwidth over long distances between aligned antennas, including ground-to-satellite links.",
      diff: "M"
    },
    {
      q: "A TV remote control communicates with the television using:",
      options: [
        "Radio waves",
        "Infrared waves",
        "Microwaves",
        "Co-axial cable"
      ],
      answer: 1,
      explain: "Infrared is short-range and cannot pass through walls — perfect for a line-of-sight remote control.",
      diff: "M"
    },
    {
      q: "Infrared waves are unsuitable for networking between different rooms because they:",
      options: [
        "Travel too slowly",
        "Cannot penetrate walls and need line of sight",
        "Are illegal in most countries",
        "Only work under water"
      ],
      answer: 1,
      explain: "Infrared is blocked by walls and needs a clear path — fine for a remote, useless between rooms.",
      diff: "M"
    },
    {
      q: "Which wireless medium would you choose to broadcast a signal in ALL directions from one antenna?",
      options: ["Infrared waves", "Microwaves", "Radio waves", "Laser beam"],
      answer: 2,
      explain: "Radio waves are omnidirectional; microwaves and infrared need directional, line-of-sight alignment.",
      diff: "M"
    },
    {
      q: "Which medium would be MOST affected by an electric motor generating strong electromagnetic interference nearby?",
      options: [
        "Fibre optic cable",
        "Twisted pair cable",
        "Fibre and twisted pair equally",
        "None — copper cables are immune"
      ],
      answer: 1,
      explain: "Copper conductors pick up electromagnetic noise; fibre carries light and is completely immune.",
      diff: "H"
    },
  ],
});
