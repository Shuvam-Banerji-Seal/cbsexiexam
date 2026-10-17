// October 20 Examination — Topic 1: Safe Browsing & Social Networks.
// 10 questions · CBSE Class IX · Computer Applications (165), Unit 2: Cyber-safety (with the Lab Exercise on browser settings).
window.OCT20_TOPICS = window.OCT20_TOPICS || [];
window.OCT20_TOPICS.push({
  key: "safe-browsing",
  name: "Safe Browsing & Social Networks",
  questions: [
    {
      q: "A website address that begins with <b>https://</b> and shows a padlock icon in the address bar tells you that —",
      options: ["The connection between your browser and the website is encrypted", "The website can never contain false information", "The website is owned by the government", "The website does not store any cookies"],
      answer: 0,
      explain: "<b>HTTPS</b> (HTTP Secure) encrypts the data travelling between your browser and the site, so others on the network cannot read it. The padlock does not prove the site is honest: a fake site can also use HTTPS.",
      diff: "E"
    },
    {
      q: "Which browser setting stops unwanted windows full of advertisements from opening on their own while you browse?",
      options: ["Zoom level", "Default search engine", "Pop-up blocker", "Home page setting"],
      answer: 2,
      explain: "A <b>pop-up blocker</b> prevents websites from opening extra windows by themselves. Pop-ups are often adverts and are sometimes used to push fake downloads.",
      diff: "E"
    },
    {
      q: "Which statement about <b>private (incognito) browsing</b> is correct?",
      options: ["It hides all your activity from your school network and Internet service provider", "It does not keep that session's history, cookies and form data after the window is closed", "It protects the computer from all viruses and malware", "It encrypts every website, even those without HTTPS"],
      answer: 1,
      explain: "Private browsing only stops the browser from <b>saving the history, cookies and form data</b> of that session on your device. The websites, the network administrator and the Internet service provider can still see your activity, and it gives no virus protection.",
      diff: "M"
    },
    {
      q: "Small text files that a website stores through your browser to remember your login and preferences are called —",
      options: ["Bookmarks", "Plug-ins", "Extensions", "Cookies"],
      answer: 3,
      explain: "<b>Cookies</b> remember things such as a login or the items in a shopping cart. Browser settings let you clear cookies or block third-party cookies, which are used to track you across websites.",
      diff: "E"
    },
    {
      q: "Riya checks her e-mail on a computer in a cyber café. The browser asks whether it should <b>save her password</b>. What should she do?",
      options: ["Choose 'Never', then log out and close the browser when she finishes", "Choose 'Save', so that she can log in faster next time", "Choose 'Save', but clear the history before leaving", "Ignore the prompt and leave the browser open for the next user"],
      answer: 0,
      explain: "On a <b>shared or public computer</b>, never let the browser save a password, and always log out and close the browser. A saved password or an open session lets the next user get into her account.",
      diff: "M"
    },
    {
      q: "Why should a web browser be kept <b>updated</b> to its latest version?",
      options: ["Updates delete old bookmarks to free up space", "Updates remove all advertisements from websites", "Updates fix security weaknesses that attackers could misuse", "An old browser cannot open any website at all"],
      answer: 2,
      explain: "Browser <b>updates</b> include security fixes for weaknesses that attackers have found. An out-of-date browser may still work, but it is easier to attack.",
      diff: "E"
    },
    {
      q: "Your <b>digital footprint</b> is the trail of posts, photos, comments and searches you leave online. Why is it hard to erase completely?",
      options: ["It is saved only in your own browser history", "Deleting a post requires permission from the police", "Posts become read-only once they get ten likes", "Others may have copied, shared or saved it, so it can stay online after you delete it"],
      answer: 3,
      explain: "Once something is posted, others can take <b>screenshots, share or save it</b>, so it may stay online even after you delete your copy. That is why you should think before you post.",
      diff: "M"
    },
    {
      q: "Which habit <b>best</b> protects Aman's identity on a social networking site?",
      options: ["Accepting every friend request so his profile looks popular", "Keeping his profile private and not posting his address, phone number or daily routine", "Using his full name and date of birth as his public username", "Sharing his live location whenever he leaves home"],
      answer: 1,
      explain: "<b>Identity protection</b> means using the privacy settings to limit who sees your posts and keeping personal details private. Strangers can misuse an address, phone number, date of birth or daily routine.",
      diff: "M"
    },
    {
      q: "Kabir connects his phone to <b>free, open public Wi-Fi</b> at a railway station. Which activity should he <b>avoid</b> on this network?",
      options: ["Logging in to his bank account to transfer money", "Reading the day's news headlines", "Checking the latest cricket score", "Looking at a map of the station"],
      answer: 0,
      explain: "Other people on an <b>open public network</b> may be able to watch the traffic or set up a fake hotspot. Banking and other logins are safer on mobile data or a trusted network.",
      diff: "M"
    },
    {
      q: "Meera wants to buy a book online. In which situation is it <b>safest</b> for her to enter her card details?",
      options: ["The page starts with http:// but looks very professional", "The page starts with https:// but she reached it from an SMS offering a 90% discount", "She typed the shop's known address herself and the page shows https:// and a padlock", "A pop-up says she has won a prize and asks for her card to pay for delivery"],
      answer: 2,
      explain: "Two checks are needed: the site must be the <b>genuine shop</b> (an address she typed herself) and the connection must be <b>encrypted</b> (https and a padlock). A link from an unexpected SMS can lead to a fake site that also uses https, and plain http is not encrypted.",
      diff: "H"
    },
  ],
});
