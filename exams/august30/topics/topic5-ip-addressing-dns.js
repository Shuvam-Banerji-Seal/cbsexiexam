// August 30 Examination — Topic 5: IP Addressing & DNS.
// 20 questions · CBSE Class XII Computer Science · Unit 2 Computer Networks.
window.AUGUST30_TOPICS = window.AUGUST30_TOPICS || [];
window.AUGUST30_TOPICS.push({
  key: "ip-addressing-dns",
  name: "IP Addressing & DNS",
  questions: [
    {
      q: "An IP address is:",
      options: [
        "A unique logical address assigned to each device on a network",
        "The serial number of the monitor",
        "Only a website's name",
        "A type of password"
      ],
      answer: 0,
      explain: "The IP address identifies a device on a network so packets can be routed to it (and back).",
      diff: "E"
    },
    {
      q: "An IPv4 address is made up of:",
      options: ["32 bits", "64 bits", "128 bits", "8 bits"],
      answer: 0,
      explain: "IPv4 uses 32 bits, written as four 8-bit octets in dotted decimal (e.g., 192.168.0.1). IPv6 uses 128 bits.",
      diff: "E"
    },
    {
      q: "An IPv6 address is made up of:",
      options: ["32 bits", "64 bits", "128 bits", "8 bits"],
      answer: 2,
      explain: "IPv6 was introduced because 32-bit IPv4 addresses were running out — it provides 128-bit addresses.",
      diff: "M"
    },
    {
      q: "In the IPv4 address 192.168.10.5, the dots divide the address into:",
      options: ["2 parts", "4 parts (octets)", "8 parts", "16 parts"],
      answer: 1,
      explain: "Four octets of 8 bits each = 32 bits total. This style of writing is called dotted decimal notation.",
      diff: "E"
    },
    {
      q: "Each octet of an IPv4 address can range from:",
      options: ["0 to 999", "0 to 255", "1 to 128", "0 to 1024"],
      answer: 1,
      explain: "An octet is 8 bits, so it holds 2^8 = 256 values: 0 to 255.",
      diff: "M"
    },
    {
      q: "Which of the following is a VALID IPv4 address?",
      options: [
        "300.12.23.1",
        "192.168.1.1",
        "192.168.1",
        "abc.12.23.1"
      ],
      answer: 1,
      explain: "Every octet must be a number from 0–255 and there must be exactly four octets — only 192.168.1.1 qualifies.",
      diff: "M"
    },
    {
      q: "An IPv4 address is conceptually divided into:",
      options: [
        "A network ID and a host ID",
        "A username and a password",
        "A browser and a server",
        "A domain and a URL"
      ],
      answer: 0,
      explain: "The network ID identifies which network the device is on; the host ID identifies the device within that network.",
      diff: "M"
    },
    {
      q: "In classful addressing, the first octet of a Class C address lies in the range:",
      options: ["1 – 126", "128 – 191", "192 – 223", "224 – 239"],
      answer: 2,
      explain: "Class A: 1–126, Class B: 128–191, Class C: 192–223 (127 is reserved for loopback).",
      diff: "M"
    },
    {
      q: "The address 192.168.10.5 belongs to class:",
      options: ["A", "B", "C", "D"],
      answer: 2,
      explain: "First octet 192 falls in the 192–223 range → Class C (commonly used for small networks).",
      diff: "H"
    },
    {
      q: "The address 10.0.5.1 belongs to class:",
      options: ["A", "B", "C", "E"],
      answer: 0,
      explain: "First octet 10 lies in 1–126 → Class A. (10.x.x.x is also a famous private range.)",
      diff: "H"
    },
    {
      q: "Which of the following is a PRIVATE IP address range?",
      options: [
        "192.168.x.x",
        "8.8.8.8",
        "172.217.x.x",
        "1.1.1.1"
      ],
      answer: 0,
      explain: "Private ranges reserved for internal networks: 10.x.x.x, 172.16–31.x.x and 192.168.x.x. The others are public addresses.",
      diff: "E"
    },
    {
      q: "The address 172.20.5.9 is:",
      options: [
        "A public web server address",
        "A private IP address (172.16–31 range)",
        "A MAC address",
        "An invalid IPv4 address"
      ],
      answer: 1,
      explain: "172.16.0.0 – 172.31.255.255 is one of the three reserved private ranges, so 172.20.5.9 is private.",
      diff: "H"
    },
    {
      q: "A private IP address:",
      options: [
        "Is directly reachable from anywhere on the Internet",
        "Is used inside a local network and is not routable on the public Internet",
        "Must be purchased from an ISP",
        "Changes the MAC address of the device"
      ],
      answer: 1,
      explain: "Private addresses (e.g., 192.168.1.5) work only inside local networks; a router with a public IP connects them to the Internet.",
      diff: "M"
    },
    {
      q: "A public IP address is:",
      options: [
        "Invented by the user at home",
        "A globally unique address assigned by the ISP, reachable from the Internet",
        "The same on every computer",
        "Only used inside one classroom"
      ],
      answer: 1,
      explain: "Public IPs are unique across the Internet and assigned by ISPs — they are how your network is visible from outside.",
      diff: "M"
    },
    {
      q: "The main difference between a MAC address and an IP address is:",
      options: [
        "MAC is a permanent hardware identity; IP is a logical address that can change with the network",
        "MAC is for software; IP is for hardware",
        "Both are exactly the same thing",
        "IP is printed on the NIC chip"
      ],
      answer: 0,
      explain: "MAC is burned into the NIC and stays fixed; the IP address is assigned logically and changes when the device moves networks.",
      diff: "E"
    },
    {
      q: "DNS (Domain Name System) is used to:",
      options: [
        "Translate domain names (like ncert.nic.in) into IP addresses",
        "Encrypt emails",
        "Print documents over a network",
        "Store cookies"
      ],
      answer: 0,
      explain: "DNS is the Internet's 'phone book' — it resolves human-friendly names to the numeric IP addresses computers use.",
      diff: "M"
    },
    {
      q: "DNS is necessary because:",
      options: [
        "Computers cannot store numbers",
        "Names like google.com are easy for humans to remember, but routing needs numeric IP addresses",
        "IP addresses are illegal",
        "Every website must have a password"
      ],
      answer: 1,
      explain: "Humans remember names; machines route by numbers. DNS bridges the two.",
      diff: "E"
    },
    {
      diagram: "flowchart LR\n  A[Browser] -->|sends domain name| B[DNS Server]\n  B -->|returns IP address| A\n  A -->|sends request to IP| C[Web Server]",
      diagramCaption: "Figure: How a browser finds a web server",
      q: "In the diagram, the step performed by the DNS Server is:",
      options: [
        "Storing the web page content",
        "Resolving the domain name into an IP address",
        "Encrypting the password",
        "Printing the page"
      ],
      answer: 1,
      explain: "The browser asks DNS to translate the domain name into the server's IP address; only then can it send the actual request.",
      diff: "M"
    },
    {
      q: "The special IPv4 address 127.0.0.1 refers to:",
      options: [
        "The nearest router",
        "The local machine itself (loopback / localhost)",
        "Google's DNS server",
        "A broadcast address for all networks"
      ],
      answer: 1,
      explain: "127.0.0.1 is the loopback address — traffic sent to it never leaves the computer; it is used for testing.",
      diff: "H"
    },
    {
      q: "A network administrator wants to test whether the TCP/IP software on a machine is installed correctly WITHOUT touching the network. The best tool is:",
      options: [
        "Pinging 127.0.0.1 (the loopback address)",
        "Unplugging the router",
        "Formatting the hard disk",
        "Changing the MAC address"
      ],
      answer: 0,
      explain: "The loopback address exercises the local TCP/IP stack without any packet leaving the machine — the classic self-test.",
      diff: "H"
    },
  ],
});
