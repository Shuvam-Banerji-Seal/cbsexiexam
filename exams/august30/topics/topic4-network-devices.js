// August 30 Examination — Topic 4: Network Devices.
// 20 questions · CBSE Class XII Computer Science · Unit 2 Computer Networks.
window.AUGUST30_TOPICS = window.AUGUST30_TOPICS || [];
window.AUGUST30_TOPICS.push({
  key: "network-devices",
  name: "Network Devices",
  questions: [
    {
      q: "A modem is a device that:",
      options: [
        "Prints documents on paper",
        "Converts digital signals to analog and analog signals back to digital",
        "Stores web pages permanently",
        "Cools the server room"
      ],
      answer: 1,
      explain: "Modem = Modulator-Demodulator. It converts a computer's digital signal to an analog signal for transmission (and back again on receipt).",
      diff: "E"
    },
    {
      q: "Modem stands for:",
      options: [
        "Mode of Demodulation",
        "Modulator-Demodulator",
        "Modern Data Manager",
        "Modular Memory Device"
      ],
      answer: 1,
      explain: "MOdulator-DEModulator — modulation turns digital bits into a carrier signal; demodulation reverses it.",
      diff: "E"
    },
    {
      q: "A modem is required when connecting a computer to the Internet over a standard telephone line because:",
      options: [
        "Telephone lines carry analog signals while computers work with digital data",
        "The computer cannot count without it",
        "It stores the operating system",
        "It increases the screen resolution"
      ],
      answer: 0,
      explain: "The phone network was built for analog voice; the modem translates between the computer's digital world and the analog line.",
      diff: "E"
    },
    {
      q: "The Ethernet card (NIC) in a computer is used to:",
      options: [
        "Connect the computer to a network",
        "Increase the computer's RAM",
        "Store the operating system",
        "Display graphics on the monitor"
      ],
      answer: 0,
      explain: "A Network Interface Card (Ethernet card) is the hardware that physically connects a computer to the network medium.",
      diff: "E"
    },
    {
      q: "A MAC address is:",
      options: [
        "A 48-bit unique hardware address of a network interface card",
        "The name of an email account",
        "A password for Wi-Fi networks",
        "A type of network cable"
      ],
      answer: 0,
      explain: "Every NIC is manufactured with a permanent 48-bit MAC address (e.g., 00:1A:2B:3C:4D:5E) that identifies it on the network.",
      diff: "E"
    },
    {
      q: "Which of the following looks like a valid MAC address?",
      options: [
        "192.168.1.1",
        "00:1A:2B:3C:4D:5E",
        "www.example.com",
        "255.255.0.0"
      ],
      answer: 1,
      explain: "MAC addresses are 6 pairs of hexadecimal digits separated by colons or hyphens. 192.168.1.1 is an IPv4 address.",
      diff: "M"
    },
    {
      q: "RJ45 is a:",
      options: [
        "Type of network protocol",
        "8-pin connector commonly used with Ethernet (twisted pair) cables",
        "Wireless technology",
        "Brand of router"
      ],
      answer: 1,
      explain: "Registered Jack 45 is the standard 8-pin plastic connector at the ends of twisted-pair Ethernet cables.",
      diff: "E"
    },
    {
      q: "A repeater is used to:",
      options: [
        "Boost and regenerate a weakening signal so it can travel farther",
        "Translate one protocol into another",
        "Assign IP addresses",
        "Filter spam emails"
      ],
      answer: 0,
      explain: "Signals attenuate (weaken) with distance; a repeater regenerates them, extending the usable length of the network.",
      diff: "E"
    },
    {
      q: "In Ethernet, a single cable segment is limited to about 100 metres. Which device allows the network to extend beyond this limit?",
      options: ["Repeater", "Printer", "Modem", "Web browser"],
      answer: 0,
      explain: "A repeater regenerates the signal at the end of one segment so transmission can continue on the next segment.",
      diff: "M"
    },
    {
      q: "A hub forwards the data it receives:",
      options: [
        "Only to the intended destination port",
        "To all connected ports (broadcasts)",
        "Only to the Internet",
        "To the nearest router only"
      ],
      answer: 1,
      explain: "A hub is 'dumb' — it repeats incoming data on every port, so all nodes share bandwidth and collisions occur.",
      diff: "E"
    },
    {
      q: "The main difference between a switch and a hub is that a switch:",
      options: [
        "Is always wireless",
        "Sends data only to the intended device using MAC addresses, reducing collisions",
        "Cannot be used in a LAN",
        "Works only with fibre optic cables"
      ],
      answer: 1,
      explain: "A switch learns which MAC address is on which port and forwards frames only where they belong — more secure and efficient than a hub.",
      diff: "M"
    },
    {
      q: "A switch is able to send frames only to the intended device because it:",
      options: [
        "Guesses randomly",
        "Builds a table mapping MAC addresses to its physical ports",
        "Asks the DNS server for every frame",
        "Broadcasts a request to the Internet first"
      ],
      answer: 1,
      explain: "The switch inspects the destination MAC address of each frame and looks it up in its MAC address table to pick the right port.",
      diff: "H"
    },
    {
      q: "A router's main job is to:",
      options: [
        "Connect two or more different networks and route packets between them",
        "Amplify weak electrical signals",
        "Convert digital data to sound",
        "Store user passwords"
      ],
      answer: 0,
      explain: "Routers sit between networks (e.g., your LAN and the Internet) and forward packets toward their destination using IP addresses.",
      diff: "E"
    },
    {
      q: "A switch forwards frames based on ______ addresses, while a router routes packets based on ______ addresses.",
      options: [
        "IP; MAC",
        "MAC; IP",
        "email; MAC",
        "URL; email"
      ],
      answer: 1,
      explain: "Switches work with hardware (MAC) addresses inside a LAN; routers work with logical (IP) addresses between networks.",
      diff: "M"
    },
    {
      q: "In a home, the device that typically connects the household LAN to the Internet is a:",
      options: ["Router (often combined with a modem)", "Scanner", "Webcam", "USB stick"],
      answer: 0,
      explain: "The home router sits between your private network and your ISP's network, forwarding traffic in both directions.",
      diff: "M"
    },
    {
      q: "A gateway is best described as:",
      options: [
        "A device that connects two networks that may use different protocols, acting as an entry and exit point",
        "A very long cable",
        "A type of web page",
        "A network printer"
      ],
      answer: 0,
      explain: "A gateway operates at the edge of a network and can translate between different protocol architectures.",
      diff: "E"
    },
    {
      q: "Which device is said to act as a 'protocol translator' at the boundary of a network?",
      options: ["Hub", "Repeater", "Gateway", "RJ45"],
      answer: 2,
      explain: "A gateway can convert data between networks that use different communication protocols — hence 'protocol translator'.",
      diff: "M"
    },
    {
      q: "A Wi-Fi card enables a computer to:",
      options: [
        "Connect to a network wirelessly using radio waves",
        "Read DVDs",
        "Increase processing speed",
        "Use only wired networking"
      ],
      answer: 0,
      explain: "A Wi-Fi card is a wireless NIC — it transmits and receives radio waves to talk to a wireless router/access point.",
      diff: "E"
    },
    {
      q: "The difference between an Ethernet card and a Wi-Fi card is that:",
      options: [
        "An Ethernet card uses a wired cable connection while a Wi-Fi card uses radio waves",
        "A Wi-Fi card works only with fibre",
        "An Ethernet card cannot connect to any network",
        "They are identical in every way"
      ],
      answer: 0,
      explain: "Both are network interface cards — Ethernet connects through cables (RJ45), Wi-Fi connects wirelessly via radio waves.",
      diff: "M"
    },
    {
      q: "Which device would you install to join two office LANs that use completely different protocol architectures?",
      options: ["Repeater", "Hub", "Gateway", "RJ45 connector"],
      answer: 2,
      explain: "Only a gateway can translate between different protocol stacks — repeaters, hubs and switches work within similar networks.",
      diff: "H"
    },
  ],
});
