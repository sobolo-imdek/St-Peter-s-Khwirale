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
            { title: "School Gallery", path: "/about#gallery" },
            { title: "Alumni Community", path: "/about#alumni" },
        ]
    },
    {
        title: "Academics",
        path: "/academics",
        submenu: [
            { title: "Departments Overview", path: "/academics/departments" },
            { title: "Our Teachers", path: "/academics/teachers" },
            { title: "KCSE Results", path: "/academics/results" },
            { title: "KCSE Timetable 2025", path: "/academics/timetable" },
        ]
    },
    {
        title: "CBE",
        path: "/cbe",
        submenu: [
            { title: "Pathways Offered", path: "/cbe/pathways" },
            { title: "Admissions & Process", path: "/admissions" },
            { title: "Fee Structure", path: "/admissions/fees" },
            { title: "Student Life", path: "/student-life" },
        ]
    },
    {
        title: "Updates",
        path: "/updates",
        submenu: [
            { title: "Upcoming Events", path: "/events" },
            { title: "News & Articles", path: "/news" },
            { title: "Tenders", path: "/tenders" },
            { title: "Job Vacancies", path: "/careers" },
        ]
    },
    {
        title: "Contact",
        path: "/contact"
    }
];
