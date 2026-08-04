import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const AboutUsPage = () => {
    const sections = [
        {
            title: "Rotaract Club of REC",
            content: (
                <p>
                    <b>The Rotaract Club of Rajalakshmi Engineering College</b> sponsored by the Rotary Club of Chennai K.K. Nagar is dedicated to fostering leadership, service, and fellowship among its members. As part of Rotary International's network, the club comes under <b>Rotary International District 3233</b> engages in various community service projects, professional development activities, and international initiatives. It serves as a platform for students to develop leadership skills, participate in social impact projects, and collaborate with local and international communities.
                </p>
            ),
            image: "/branding/REC AND RACREC.png",
            link: "https://www.rajalakshmi.org/",
            linkText: "Rajalakshmi Website"
        },
        {
            title: "Rotary District 3233",
            content: (
                <p>
                    Rotary District 3233 is a dynamic hub of service, leadership and fellowship based in Chennai. Today the district combines experienced Rotarians and an active Rotaract constituency to deliver targeted community programs from health and education drives to large-scale fellowship and leadership events while fostering innovation, membership growth and impactful partnerships across the region. The district’s leadership and digital initiatives are focused on scalable, measurable community outcomes and deeper engagement with youth leaders.
                </p>
            ),
            image: "/branding/rotary_district_3233.png",

            link: "https://rid3233.rotaryindia.org/",
            linkText: "Rotary 3233 Website"
        },
        {
            title: "Rotaract District 3233",
            content: (
                <p>
                    Rotaract 3233, an emblem of excellence and innovation in the realm of humanitarian endeavors, blossoming into its full potential in the year 2024. With 1900+ Rotaractors spanning over 59 clubs, the district focuses on placing emphasis on cultivating fellowship and fostering personal growth. Embracing a diverse array of talents, unwavering commitment to Rotary's core principles and a shared zeal for self-development, we stand ready to lead pioneering initiatives, nurture meaningful partnerships while catalyzing positive change that transcends boundaries. Together, our collective effort is dedicated to upholding Rotary's timeless objective of Service Above Self while nurturing the values of fellowship and personal development.
                </p>
            ),
            image: "/branding/rotaract_district_3233.png",

            link: "https://www.rotaract3233.com/index.php",
            linkText: "Rotaract 3233 Website"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/gallery/IMG_3163.JPG"
                        alt="Hero Background"
                        className="w-full h-full object-cover filter blur-[2px] brightness-[0.7]"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>

                <motion.div
                    className="relative z-10 text-center text-white px-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-sans">
                        About Us
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
                        Get to Know Us! <br />
                        We're a diverse group of individuals united by a common goal: to create positive change in our communities and around the world.
                    </p>
                </motion.div>
            </section>

            {/* Content Sections */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="space-y-24">
                        {sections.map((section, index) => (
                            <motion.div
                                key={section.title}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* Image container */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative group">
                                        <div className="absolute -inset-4 rounded-[2rem] bg-brand/10 blur-2xl transition-all duration-700 group-hover:bg-brand/20"></div>
                                        <div className={`relative rounded-2xl border border-white/40 bg-white/85 backdrop-blur-md ${section.title === "Rotaract Club of REC" ? 'p-2' : 'p-8'} shadow-[0_20px_50px_rgba(2,80,99,0.08)] transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-brand/10`}>
                                            <img
                                                src={section.image}
                                                alt={section.title}
                                                className="w-full h-auto object-contain rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Content container */}
                                <div className="w-full lg:w-1/2">
                                    <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-8 tracking-tight relative inline-block">
                                        {section.title}
                                        <div className="absolute -bottom-2 left-0 h-1 w-12 rounded-full bg-brand"></div>
                                    </h2>
                                    <div className="text-gray-700 text-lg leading-relaxed space-y-6 font-medium">
                                        {section.content}
                                    </div>
                                    <div className="mt-10">
                                        <a
                                            href={section.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center space-x-3 rounded-full bg-brand px-8 py-4 font-bold text-white shadow-xl shadow-brand/20 transition-all duration-300 hover:bg-brand-700 hover:shadow-2xl hover:shadow-brand/30"
                                        >
                                            <span>{section.linkText}</span>
                                            <FiExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;
