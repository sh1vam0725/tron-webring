export interface Member {
  name: string;
  url: string;
  program?: string;
  year?: string;
}

export const members: Member[] = [
  { name: "Alex Chen", url: "https://alexchen.dev", program: "MTE 2025", year: "4A" },
  { name: "Priya Sharma", url: "https://priyasharma.ca", program: "MTE 2026", year: "3B" },
  { name: "Jordan Lee", url: "https://jordanlee.io", program: "MTE 2025", year: "4B" },
  { name: "Sam Nakamura", url: "https://samnakamura.com", program: "MTE 2027", year: "2A" },
  { name: "Taylor Okafor", url: "https://taylorokafor.dev", program: "MTE 2026", year: "3A" },
  { name: "Morgan Patel", url: "https://morganpatel.ca", program: "MTE 2025", year: "4A" },
  { name: "Riley Zhang", url: "https://rileyzhang.dev", program: "MTE 2027", year: "2B" },
  { name: "Casey Dubois", url: "https://caseydubois.com", program: "MTE 2026", year: "3B" },
];
