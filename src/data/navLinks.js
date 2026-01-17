export const navLinks = [
    {
        title: "Home",
        path: "/",
        isHome: true
    },
    {
        title: "About",
        path: "/about",
        submenu: [
            { title: "Overview & FAQs", path: "/about#overview" },
            { title: "School History", path: "/about#history" },
            { title: "BOM & PA", path: "/about#bom-pa" },
            { title: "Service Charter", path: "/about#service-charter" },
            { title: "School Gallery", path: "/gallery" },
            { title: "Alumni Community", path: "/about#alumni" },
        ]
    },
    {
        title: "Academics",
        path: "/academics",
        submenu: [
            { title: "Curriculum Overview", path: "/academics#curriculum" },
            { title: "Departments Overview", path: "/academics#departments" },
            { title: "Faculty & Teachers", path: "/academics#faculty" },
            { title: "Performance & Results", path: "/academics#results" },
        ]
    },
    {
        title: "CBE",
        path: "/cbe",
        submenu: [
            { title: "Pathways & Learning", path: "/cbe#pathways" },
            { title: "Admissions Process", path: "/cbe#admissions" },
            { title: "Fee Structure", path: "/cbe#fees" },
            { title: "Student Life & Welfare", path: "/cbe#student-life" },
        ]
    },
    {
        title: "Updates",
        path: "/updates",
        submenu: [
            { title: "Upcoming Events", path: "/updates#events" },
            { title: "News & Articles", path: "/updates#news" },
            { title: "Tenders & Public Notices", path: "/updates#tenders" },
            { title: "Job Vacancies", path: "/updates#careers" },
        ]
    },
    {
        title: "Contact Us",
        path: "/contact"
    }
];
