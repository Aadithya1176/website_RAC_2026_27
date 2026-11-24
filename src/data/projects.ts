export interface Project {
    id: number;
    title: string;
    description: string;
    oneLiner: string;
    eventDate: string;
    venue: string;
    avenue: string;
    isSignature: boolean;
    status: string;
    image: string;
    chairperson?: string;
    focusArea?: string;
    membersAttended?: number;
    beneficiaries?: number;
    manHours?: number;
    createdAt?: string;
    updatedAt?: string;
}

// Source: DRR Half Yearly Visit report (2026-27 tenure). The Impact page sorts these by eventDate (DD-MM-YYYY).
export const projects: Project[] = [
    {
        "id": 1,
        "title": "Dosa Meets Chole",
        "description": "Dosa Meets Chole was a fun and engaging cultural exchange event conducted in collaboration with the Rotaract Club of Galgotias Educational Institutions, RID 3011. The event brought members together for an enjoyable exchange of cultures, traditions, experiences, and perspectives, fostering meaningful connections and celebrating the diversity that makes Rotaract special.",
        "oneLiner": "A lively cultural exchange celebrating diversity, connection, and shared experiences.",
        "eventDate": "18-07-2026",
        "venue": "Google Meet",
        "avenue": "international",
        "isSignature": false,
        "status": "active",
        "image": "/uploads/dosa-meets-chole.png",
        "chairperson": "Rtr. Irfana S",
        "focusArea": "Peacebuilding and Conflict Prevention",
        "membersAttended": 15,
        "beneficiaries": 35,
        "manHours": 70
    },
    {
        "id": 2,
        "title": "Final Drafts",
        "description": "Final Drafts was a fun and heartfelt farewell event organized for our outgoing core members, who had guided and shaped the club before passing the baton to the next team. The event brought everyone together for an evening filled with laughter, conversations, and cherished memories, celebrating the journey of the outgoing team while marking the beginning of a new chapter for us.",
        "oneLiner": "A heartfelt farewell honoring the journey and legacy of our outgoing core team.",
        "eventDate": "19-07-2026",
        "venue": "Qasr Mandi, Maduravoyal & Bougainvillea Park, Anna Nagar",
        "avenue": "club",
        "isSignature": false,
        "status": "active",
        "image": "/uploads/the-final-draft.jpg",
        "chairperson": "Rtr. Adithya N",
        "focusArea": "Peacebuilding and Conflict Prevention",
        "membersAttended": 25,
        "beneficiaries": 25,
        "manHours": 125
    },
    {
        "id": 3,
        "title": "Tiny Tots",
        "description": "Tiny Tots was a fun and engaging clay modelling workshop conducted for the young children of Littleville Preschool. The session encouraged the kids to explore their creativity and imagination by creating simple clay models in a playful and interactive environment. It was a delightful experience filled with learning, laughter, and plenty of little creations.",
        "oneLiner": "A playful clay modelling workshop sparking creativity, imagination, and joy among young children.",
        "eventDate": "20-07-2026",
        "venue": "Littleville Preschool, Valasaravakkam",
        "avenue": "community",
        "isSignature": false,
        "status": "active",
        "image": "/uploads/tiny-tots.jpg",
        "chairperson": "Rtr. Nikhilesh Anand",
        "focusArea": "Basic Education and Literacy",
        "membersAttended": 5,
        "beneficiaries": 60,
        "manHours": 15
    },
    {
        "id": 4,
        "title": "Thrive",
        "description": "Thrive was an engaging orientation session conducted for the upcoming Board Team, led by IPDRR. RTR. PP. PHF. DINESHKUMAR M. The session provided valuable insights into leadership, responsibilities, and the journey ahead, helping the new team gain clarity and confidence as they prepare to take on their respective roles.",
        "oneLiner": "An orientation session equipping the upcoming board team with clarity, confidence, and leadership insight.",
        "eventDate": "05-08-2026",
        "venue": "Heritage Hall, Rajalakshmi Engineering College",
        "avenue": "professional",
        "isSignature": false,
        "status": "active",
        "image": "/uploads/thrive.jpg",
        "chairperson": "Rtr. Rubaa Kumar",
        "focusArea": "Basic Education and Literacy",
        "membersAttended": 27,
        "beneficiaries": 27,
        "manHours": 76
    },
    {
        "id": 5,
        "title": "Painted Tails",
        "description": "Painted Tails was a volunteering initiative where our members spent time at the Blue Cross of India facility, contributing their time and effort towards the care and well-being of animals, including repainting and refreshing animal enclosures. The experience provided an opportunity to engage in meaningful service while creating a positive impact through compassion, teamwork, and community involvement.",
        "oneLiner": "A compassionate volunteering initiative centered on animal care, service, and teamwork.",
        "eventDate": "08-08-2026",
        "venue": "Blue Cross of India",
        "avenue": "community",
        "isSignature": false,
        "status": "active",
        "image": "/uploads/blue-cross-event.jpeg",
        "chairperson": "Rtr. Vinesh D",
        "focusArea": "Water, Sanitation, and Hygiene",
        "membersAttended": 4,
        "beneficiaries": 30,
        "manHours": 12
    },
    {
        "id": 6,
        "title": "Dice and Dine",
        "description": "Dice and Dine was a fun and engaging bonding experience for our new Board Team, giving everyone an opportunity to connect beyond their roles and responsibilities. Over board games and a shared meal, the event helped strengthen our team spirit and create lasting memories as we began our journey together.",
        "oneLiner": "A board-team bonding experience over games and food that strengthened connection and team spirit.",
        "eventDate": "09-08-2026",
        "venue": "The Board Game, Mylapore & The Empire Restaurant, Royapettah",
        "avenue": "club",
        "isSignature": false,
        "status": "active",
        "image": "/uploads/1st-club-service.jpg",
        "chairperson": "Rtr. Harish Bhuvan S",
        "focusArea": "Peacebuilding and Conflict Prevention",
        "membersAttended": 28,
        "beneficiaries": 28,
        "manHours": 168
    },
    {
        "id": 7,
        "title": "SafeHer",
        "description": "SafeHer was a women's safety awareness session held at the Seminar Hall of Rajalakshmi Engineering College. The session reached 200 participants, encouraging awareness, confidence, and open conversation around personal safety, with 21 club members coming together to organise and run the event.",
        "oneLiner": "A women's safety awareness session empowering participants with confidence and awareness.",
        "eventDate": "18-08-2026",
        "venue": "Seminar Hall, Rajalakshmi Engineering College",
        "avenue": "community",
        "isSignature": false,
        "status": "active",
        "image": "/uploads/safeher.jpg",
        "chairperson": "Rtr. Samyuktha K S",
        "focusArea": "Peacebuilding and Conflict Prevention",
        "membersAttended": 21,
        "beneficiaries": 200,
        "manHours": 63
    },
    {
        "id": 8,
        "title": "Untitled.psd",
        "description": "Untitled.psd was an online Photoshop workshop that walked members through the fundamentals of graphic design. Through a live, hands-on poster design demonstration, participants learned essential tools and techniques they could put to use in creating designs for the club and beyond.",
        "oneLiner": "A hands-on online Photoshop workshop unlocking creative design skills.",
        "eventDate": "20-08-2026",
        "venue": "Google Meet",
        "avenue": "professional",
        "isSignature": false,
        "status": "active",
        "image": "/uploads/untitled-psd.jpg",
        "chairperson": "Rtr. Sachin Saravanan",
        "focusArea": "Basic Education and Literacy",
        "membersAttended": 36,
        "beneficiaries": 27,
        "manHours": 72
    },
    {
        "id": 9,
        "title": "The Edit Room",
        "description": "The Edit Room was an online video editing workshop built around DaVinci Resolve. Members were guided through the editing timeline, effects, and audio tools through live demonstrations, building the confidence to edit and produce their own videos.",
        "oneLiner": "An online video editing workshop mastering the essentials of DaVinci Resolve.",
        "eventDate": "26-08-2026",
        "venue": "Google Meet",
        "avenue": "professional",
        "isSignature": false,
        "status": "active",
        "image": "/uploads/the-edit-room.jpg",
        "chairperson": "Rtr. Akshara G",
        "focusArea": "Basic Education and Literacy",
        "membersAttended": 33,
        "beneficiaries": 27,
        "manHours": 82
    },
    {
        "id": 10,
        "title": "Guru Prashansa 3.0",
        "description": "Guru Prashansa 3.0, the third edition of the club's teacher appreciation initiative, was held at Rajalakshmi Engineering College. The event honoured the faculty who guide and inspire students every day, reaching 550 beneficiaries with 36 club members coming together to make it possible.",
        "oneLiner": "The third edition of our initiative honouring the teachers who shape us.",
        "eventDate": "05-10-2026",
        "venue": "Rajalakshmi Engineering College",
        "avenue": "community",
        "isSignature": false,
        "status": "active",
        "image": "/uploads/guru-prashansa-3.jpg",
        "chairperson": "Rtr. Nila Elango",
        "focusArea": "Peacebuilding and Conflict Prevention",
        "membersAttended": 36,
        "beneficiaries": 550,
        "manHours": 180
    },
    {
        "id": 11,
        "title": "Anna Vriksha 3.0",
        "description": "Anna Vriksha 3.0, the third edition of the club's food distribution drive, served wholesome meals to 200 people in need around Urban Square, Guindy. Volunteers worked in teams to ensure respectful and efficient distribution, strengthening social responsibility and empathy among members.",
        "oneLiner": "A compassionate food distribution drive serving the underserved.",
        "eventDate": "18-10-2026",
        "venue": "Urban Square, Guindy",
        "avenue": "community",
        "isSignature": false,
        "status": "active",
        "image": "/uploads/anna-vriksha-3.jpg",
        "chairperson": "Rtr. Yuvasri K",
        "focusArea": "Community Economic Development",
        "membersAttended": 27,
        "beneficiaries": 200,
        "manHours": 162
    },
    {
        "id": 12,
        "title": "Coast to Kovai",
        "description": "Coast to Kovai was a virtual exchange that connected Rotaractors from the coast of Chennai with peers from Kovai. Through conversations and interactive activities, members shared cultures and experiences, building friendships across cities.",
        "oneLiner": "A virtual exchange connecting Chennai and Kovai through culture and conversation.",
        "eventDate": "10-11-2026",
        "venue": "Google Meet",
        "avenue": "club",
        "isSignature": false,
        "status": "active",
        "image": "/uploads/coast-to-kovai.jpg",
        "chairperson": "Rtr. Varshini S",
        "focusArea": "Peacebuilding and Conflict Prevention",
        "membersAttended": 38,
        "beneficiaries": 72,
        "manHours": 76
    },
    {
        "id": 13,
        "title": "Mugizh",
        "description": "Mugizh brought 51 club members together at the Main Seminar Hall of Rajalakshmi Engineering College, alongside distinguished guests and Rotary leaders, for a formal gathering of the club.",
        "oneLiner": "A formal gathering of the club with distinguished guests and Rotary leaders.",
        "eventDate": "13-08-2026",
        "venue": "Main Seminar Hall, Rajalakshmi Engineering College",
        "avenue": "professional",
        "isSignature": false,
        "status": "active",
        "image": "/uploads/mugizh.jpg",
        "chairperson": "Rtr. Angel Antony",
        "membersAttended": 51,
        "beneficiaries": 51,
        "manHours": 102
    }
];
