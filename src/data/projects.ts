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
    createdAt?: string;
    updatedAt?: string;
    details?: string;
}

export const projects: Project[] = [
    {
        "id": 14,
        "title": "Dosa Meets Chole",
        "description": "A vibrant cultural exchange bringing together traditions, conversations, and connections.",
        "oneLiner": "A lively cultural exchange celebrating diversity, connection, and shared experiences.",
        "eventDate": "18-07-2026",
        "venue": "Google Meet",
        "avenue": "international",
        "isSignature": false,
        "status": "active",
        "image": "/uploads/dosa-meets-chole.png",
        "createdAt": "2026-07-18T20:52:00.000000",
        "details": "Dosa Meets Chole was a fun and engaging cultural exchange event conducted in collaboration with the Rotaract Club of Galgotias Educational Institutions, RID 3011. The event brought members together for an enjoyable exchange of cultures, traditions, experiences, and perspectives, fostering meaningful connections and celebrating the diversity that makes Rotaract special."
    },
    {
        "id": 15,
        "title": "The Final Draft",
        "description": "A memorable farewell celebrating the bonds, memories, and legacy of our outgoing core team.",
        "oneLiner": "A heartfelt farewell honoring the journey and legacy of our outgoing core team.",
        "eventDate": "19-07-2026",
        "venue": "Qasr Mandhi & Bougan Villa Park",
        "avenue": "club",
        "isSignature": false,
        "status": "active",
        "image": "/uploads/the-final-draft.jpg",
        "createdAt": "2026-07-19T18:00:00.000000",
        "details": "The Final Draft was a fun and heartfelt farewell event organized for our outgoing core members, who had guided and shaped the club before passing the baton to the next team. The event brought everyone together for an evening filled with laughter, conversations, and cherished memories, celebrating the journey of the outgoing team while marking the beginning of a new chapter for us."
    },
    {
        "id": 16,
        "title": "Thrive",
        "description": "An insightful orientation session empowering the upcoming board team with knowledge, guidance, and leadership insights.",
        "oneLiner": "An orientation session equipping the upcoming board team with clarity, confidence, and leadership insight.",
        "eventDate": "05-08-2026",
        "venue": "Rajalakshmi Engineering College",
        "avenue": "professional",
        "isSignature": false,
        "status": "active",
        "image": "/uploads/thrive.jpg",
        "createdAt": "2026-08-05T18:00:00.000000",
        "details": "Thrive was an engaging orientation session conducted for the upcoming Board Team, led by IPDRR. RTR. PP. PHF. DINESHKUMAR M. The session provided valuable insights into leadership, responsibilities, and the journey ahead, helping the new team gain clarity and confidence as they prepare to take on their respective roles."
    },
    {
        "id": 17,
        "title": "Blue Cross Event",
        "description": "A meaningful volunteering experience dedicated to caring for and supporting animals in need.",
        "oneLiner": "A compassionate volunteering initiative centered on animal care, service, and teamwork.",
        "eventDate": "08-08-2026",
        "venue": "Blue Cross of India, Greater Chennai",
        "avenue": "community",
        "isSignature": false,
        "status": "active",
        "image": "/uploads/blue-cross-event.jpeg",
        "createdAt": "2026-08-08T18:00:00.000000",
        "details": "The Blue Cross Event was a volunteering initiative where our members spent time at the Blue Cross of India facility, contributing their time and effort towards the care and well-being of animals. The experience provided an opportunity to engage in meaningful service while creating a positive impact through compassion, teamwork, and community involvement."
    },
    {
        "id": 18,
        "title": "1st Club Service",
        "description": "A memorable first step towards building stronger bonds within our new Board Team.",
        "oneLiner": "A fun board-team bonding experience that strengthened connection, spirit, and shared memories.",
        "eventDate": "09-08-2026",
        "venue": "The Board Room & Empire Restaurant",
        "avenue": "club",
        "isSignature": false,
        "status": "active",
        "image": "/uploads/1st-club-service.jpg",
        "createdAt": "2026-08-09T18:00:00.000000",
        "details": "The 1st Club Service was a fun and engaging bonding experience for our new Board Team, giving everyone an opportunity to connect beyond their roles and responsibilities. Through shared conversations, laughter, and quality time together, the event helped strengthen our team spirit and create lasting memories as we began our journey together."
    },
    {
        "id": 19,
        "title": "Tiny Tots",
        "description": "A joyful hands-on workshop introducing little minds to the fun and creativity of clay modelling.",
        "oneLiner": "A playful clay modelling workshop sparking creativity, imagination, and joy among young children.",
        "eventDate": "20-07-2026",
        "venue": "Littleville Preschool, Valasaravakkam",
        "avenue": "professional",
        "isSignature": false,
        "status": "active",
        "image": "/uploads/tiny-tots.jpg",
        "createdAt": "2026-07-20T18:00:00.000000",
        "details": "Tiny Tots was a fun and engaging clay modelling workshop conducted for the young children of Littleville Preschool. The session encouraged the kids to explore their creativity and imagination by creating simple clay models in a playful and interactive environment. It was a delightful experience filled with learning, laughter, and plenty of little creations."
    }
];
