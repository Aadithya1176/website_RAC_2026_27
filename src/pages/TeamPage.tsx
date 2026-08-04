import { useState } from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from '../components/TeamMemberCard';

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState('core');

  // Sample data - replace with actual team data
  const facultyCoordinator = {
    name: "Dr. Santhanakrishnan M",
    title: "Faculty Coordinator",
    image: "/core/WhatsApp Image 2025-08-12 at 16.08.17_92f8956d.jpg",
  };


  const coreLeadership = [
    { name: "Rtr. Nandhini V", title: "President 26-27", image: "/board/Nandhini Velmurugan.jpg" },
    { name: "Rtr. Vinesh D", title: "Vice President 26-27", image: "/board/Vinesh D.jpg" },
    { name: "Rtr. Shreenidhi T", title: "Secretary 26-27", image: "/board/Shreenidhi T.jpg" },
    { name: "Rtr. Akshara G", title: "Joint Secretary 26-27", image: "/board/akshara-rtr-pic-3.png" },
    { name: "Rtr. Nikhilesh Anand", title: "Sergeant-At-Arms 26-27", image: "/board/Nikhilesh Anand.jpg", imageClassName: "object-[center_top]" },
    { name: "Rtr. Nila Elango", title: "Deputy Sergeant-At-Arms 26-27", image: "/board/Nila Elango.jpg" },
    { name: "Rtr. Akshith R", title: "Treasurer 26-27", image: "/board/Akshith R.jpg", imageClassName: "object-[center_0%]" },
    { name: "Rtr. Samyuktha K S S", title: "Public Relations Officer (PRO) & Women Empowerment Head 26-27", image: "/board/Samyuktha K S S.jpg" },
    { name: "Rtr. Adithya N", title: "Club Service Director 26-27", image: "/board/adithya-it-rtr-pic.png" },
    { name: "Rtr. Varshini S", title: "Associate Club Service Director 26-27", image: "/board/Varshini S.JPG" },
    { name: "Rtr. Praveen R", title: "Community Service Director & Blood Donation Head 26-27", image: "/board/Praveen R.jpg" },
    { name: "Rtr. Angel Antony", title: "Associate Community Service Director 26-27", image: "/board/Angel Antony.png" },
    { name: "Rtr. Rubaa Kumar K S", title: "Professional Service Director & Foundation Chair 26-27", image: "/board/Rubaa Kumar K S.jpg" },
    { name: "Rtr. Meenashi S", title: "Associate Professional Service Director 26-27", image: "/board/Meenashi S.jpg" },
    { name: "Rtr. Anuradha V", title: "International Service Director 26-27", image: "/board/Anuradha V.png" },
    { name: "Rtr. Irfana S", title: "Associate International Service Director 26-27", image: "/board/Irfana S.png" },
    { name: "Rtr. Sachin Saravanan", title: "Creatives Head 26-27", image: "/board/Sachin Saravanan.jpg" },
    { name: "Rtr. K Srihari", title: "Associate Creatives Head 26-27", image: "/board/K Srihari.jpg" },
    { name: "Rtr. Shree Nandhiga P", title: "Editorial Board Head 26-27", image: "/board/Shree Nandhiga P.jpg" },
    { name: "Rtr. Harish Bhuvan S", title: "Media Head 26-27", image: "/board/Harish Bhuvan S.png" },
    { name: "Rtr. Yugendran P", title: "Membership Development Head 26-27", image: "/board/Yugendran P.png" },
    { name: "Rtr. Yuvasri K", title: "Associate Membership Development Head 26-27", image: "/board/Yuvasri K.jpg" },
    { name: "Rtr. Aadithya R", title: "Technical Head 26-27", image: "/board/aadithyaraj_rtr_pic.jpg" },
  ];

  const boardCoordinators = [
    { name: "Rtr. Aadithya R", title: "Club Coordinator 25-26", image: "/board/Aadithya R.jpeg" },
    { name: "Rtr. Adithya N", title: "Club Coordinator 25-26", image: "/board/Adithya N.PNG" },
    { name: "Rtr. Akshara G", title: "Club Coordinator 25-26", image: "/board/Akshara G.png" },
    { name: "Rtr. Akshith R", title: "Club Coordinator 25-26", image: "/board/Akshith R.jpg", imageClassName: "object-[center_0%]" },
    { name: "Rtr. Angel Antony", title: "Club Coordinator 25-26", image: "/board/Angel Antony.png" },
    { name: "Rtr. Anuradha V", title: "Club Coordinator 25-26", image: "/board/Anuradha V.png" },
    { name: "Rtr. Harish Bhuvan S", title: "Club Coordinator 25-26", image: "/board/Harish Bhuvan S.png" },
    { name: "Rtr. Irfana S", title: "Club Coordinator 25-26", image: "/board/Irfana S.png" },
    { name: "Rtr. K Srihari", title: "Club Coordinator 25-26", image: "/board/K Srihari.jpg" },
    { name: "Rtr. Lakshan S", title: "Club Coordinator 25-26", image: "/board/Lakshan S.png" },
    { name: "Rtr. Meenashi S", title: "Club Coordinator 25-26", image: "/board/Meenashi S.jpg" },
    { name: "Rtr. Nandhini Velmurugan", title: "Club Coordinator 25-26", image: "/board/Nandhini Velmurugan.jpg" },
    { name: "Rtr. Nikhilesh Anand", title: "Club Coordinator 25-26", image: "/board/Nikhilesh Anand.jpg", imageClassName: "object-[center_top]" },
    { name: "Rtr. Nila Elango", title: "Club Coordinator 25-26", image: "/board/Nila Elango.jpg" },
    { name: "Rtr. Praveen R", title: "Club Coordinator 25-26", image: "/board/Praveen R.jpg" },
    { name: "Rtr. Rubaa Kumar K S", title: "Club Coordinator 25-26", image: "/board/Rubaa Kumar K S.jpg" },
    { name: "Rtr. Sachin Saravanan", title: "Club Coordinator 25-26", image: "/board/Sachin Saravanan.jpg" },
    { name: "Rtr. Samyuktha K S S", title: "Club Coordinator 25-26", image: "/board/Samyuktha K S S.jpg" },
    { name: "Rtr. Shree Nandhiga P", title: "Club Coordinator 25-26", image: "/board/Shree Nandhiga P.jpg" },
    { name: "Rtr. Shreenidhi T", title: "Club Coordinator 25-26", image: "/board/Shreenidhi T.jpg" },
    { name: "Rtr. Varshini S", title: "Club Coordinator 25-26", image: "/board/Varshini S.JPG" },
    { name: "Rtr. Vinesh D", title: "Club Coordinator 25-26", image: "/board/Vinesh D.jpg" },
    { name: "Rtr. Yugendran P", title: "Club Coordinator 25-26", image: "/board/Yugendran P.png" },
    { name: "Rtr. Yuvasri K", title: "Club Coordinator 25-26", image: "/board/Yuvasri K.jpg" }
  ];

  const currentTeam = activeTab === 'core' ? coreLeadership : boardCoordinators;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="section-padding-top pt-40 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Meet the Minds Behind the Movement
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our committed leaders and volunteers working together to make a real difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Coordinator */}
      <section className="section-padding bg-brand-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-text-dark mb-4">
              Faculty Coordinator
            </h2>
            <p className="text-gray-600">
              Our guiding mentor and advisor
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="card-surface p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src={facultyCoordinator.image}
                  alt={facultyCoordinator.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-2">
                {facultyCoordinator.name}
              </h3>
              <p className="text-lg text-gray-600 mb-4">{facultyCoordinator.title}</p>
              <div className="flex justify-center space-x-4">
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-text-dark mb-4">
              Our Team
            </h2>
            <p className="text-gray-600">
              The passionate individuals driving our initiatives forward
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center rounded-2xl border border-border bg-surface-subtle p-1">
              <button
                onClick={() => setActiveTab('core')}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-md font-semibold text-sm sm:text-base transition-colors ${activeTab === 'core'
                  ? 'bg-brand text-white shadow-sm shadow-brand/20'
                  : 'text-ink-soft hover:text-brand-700'
                  }`}
              >
                Core Leadership
              </button>
              <button
                onClick={() => setActiveTab('board')}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-md font-semibold text-sm sm:text-base transition-colors ${activeTab === 'board'
                  ? 'bg-brand text-white shadow-sm shadow-brand/20'
                  : 'text-ink-soft hover:text-brand-700'
                  }`}
              >
                Board Members
              </button>
            </div>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {currentTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TeamMemberCard {...member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage; 
