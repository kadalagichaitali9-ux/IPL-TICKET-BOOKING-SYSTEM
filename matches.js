export const matches = [
    {
        id: "match-1",
        number: "Match 01",
        teams: ["Chennai Super Kings", "Mumbai Indians"],
        dateTime: "2026-03-28T19:30",
        dateLabel: "28 Mar 2026 · 7:30 PM",
        venue: "Chennai",
        prices: [
            { category: "General", amount: "₹1,000" },
            { category: "Premium", amount: "₹3,000" },
            { category: "VIP", amount: "₹8,000" }
        ]
    },
    {
        id: "match-2",
        number: "Match 02",
        teams: ["Royal Challengers Bengaluru", "Kolkata Knight Riders"],
        dateTime: "2026-03-29T19:30",
        dateLabel: "29 Mar 2026 · 7:30 PM",
        venue: "Bengaluru",
        prices: [
            { category: "General", amount: "₹900" },
            { category: "Premium", amount: "₹2,800" },
            { category: "VIP", amount: "₹7,500" }
        ]
    },
    {
        id: "match-3",
        number: "Match 03",
        teams: ["Sunrisers Hyderabad", "Rajasthan Royals"],
        dateTime: "2026-03-30T19:30",
        dateLabel: "30 Mar 2026 · 7:30 PM",
        venue: "Hyderabad",
        prices: [
            { category: "General", amount: "₹850" },
            { category: "Premium", amount: "₹2,500" },
            { category: "VIP", amount: "₹7,000" }
        ]
    },
    {
        id: "match-4",
        number: "Match 04",
        teams: ["Delhi Capitals", "Punjab Kings"],
        dateTime: "2026-03-31T19:30",
        dateLabel: "31 Mar 2026 · 7:30 PM",
        venue: "New Delhi",
        prices: [
            { category: "General", amount: "₹800" },
            { category: "Premium", amount: "₹2,400" },
            { category: "VIP", amount: "₹6,500" }
        ]
    },
    {
        id: "match-5",
        number: "Match 05",
        teams: ["Gujarat Titans", "Lucknow Super Giants"],
        dateTime: "2026-04-01T19:30",
        dateLabel: "1 Apr 2026 · 7:30 PM",
        venue: "Ahmedabad",
        prices: [
            { category: "General", amount: "₹900" },
            { category: "Premium", amount: "₹2,700" },
            { category: "VIP", amount: "₹7,200" }
        ]
    }
];

export const teams = [...new Set(matches.flatMap((match) => match.teams))].sort();
