import { useState } from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from '../components/TeamMemberCard';

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState('core');

  const facultyCoordinator = {
    name: 'Dr. Santhanakrishnan M',
    title: 'Faculty Coordinator',
    image: '/core/WhatsApp Image 2025-08-12 at 16.08.17_92f8956d.jpg',
  };

  const coreLeadership = [
    { name: 'Rtr. Nandhini V', title: 'President 26-27', image: '/board/nandhini-v-1.jpg' },
    { name: 'Rtr. Vinesh D', title: 'Vice President 26-27', image: '/board/vinesh-vp.png' },
    { name: 'Rtr. Shreenidhi T', title: 'Secretary 26-27', image: '/board/Shreenidhi(secretary).png' },
    { name: 'Rtr. Akshara G', title: 'Joint Secretary 26-27', image: '/board/akshara-rtr-pic-3.png' },
    { name: 'Rtr. Nikhilesh Anand', title: 'Sergeant-At-Arms 26-27', image: '/board/Nikhilesh Anand (Sergeant-At-Arms).png', imageClassName: 'object-[center_top]' },
    { name: 'Rtr. Nila Elango', title: 'Deputy Sergeant-At-Arms 26-27', image: '/board/Nila Elango.jpg' },
    { name: 'Rtr. Akshith R', title: 'Treasurer 26-27', image: '/board/Akshith R.jpg', imageClassName: 'object-[center_0%]' },
    { name: 'Rtr. Samyuktha K S S', title: 'Public Relations Officer (PRO) & Women Empowerment Head 26-27', image: '/board/Samyuktha K S S.jpg' },
    { name: 'Rtr. Adithya N', title: 'Club Service Director 26-27', image: '/board/adithya-it-rtr-pic.png' },
    { name: 'Rtr. Varshini S', title: 'Associate Club Service Director 26-27', image: '/board/Varshini S.JPG' },
    { name: 'Rtr. Praveen R', title: 'Community Service Director & Blood Donation Head 26-27', image: '/board/Praveen R.jpg' },
    { name: 'Rtr. Angel Antony', title: 'Associate Community Service Director 26-27', image: '/board/Angel Antony.png' },
    { name: 'Rtr. Rubaa Kumar K S', title: 'Professional Service Director & Foundation Chair 26-27', image: '/board/Rubaa Kumar K S.jpg' },
    { name: 'Rtr. Meenashi S', title: 'Associate Professional Service Director 26-27', image: '/board/Meenashi S.jpg' },
    { name: 'Rtr. Anuradha V', title: 'International Service Director 26-27', image: '/board/Anuradha V.png' },
    { name: 'Rtr. Irfana S', title: 'Associate International Service Director 26-27', image: '/board/Irfana S.png' },
    { name: 'Rtr. Sachin Saravanan', title: 'Creatives Head 26-27', image: '/board/Sachin Saravanan.jpg' },
    { name: 'Rtr. K Srihari', title: 'Associate Creatives Head 26-27', image: '/board/K Srihari.jpg' },
    { name: 'Rtr. Shree Nandhiga P', title: 'Editorial Board Head 26-27', image: '/board/Shree Nandhiga P.jpg' },
    { name: 'Rtr. Harish Bhuvan S', title: 'Media Head 26-27', image: '/board/Harish Bhuvan S.png' },
    { name: 'Rtr. Yugendran P', title: 'Membership Development Head 26-27', image: '/board/Yugendran P.png' },
    { name: 'Rtr. Yuvasri K', title: 'Associate Membership Development Head 26-27', image: '/board/Yuvasri K.jpg' },
    { name: 'Rtr. Aadithya R', title: 'Technical Head 26-27', image: '/board/rtr Aadithya Raj.jpeg' },
  ];

  const boardCoordinators: typeof coreLeadership = [
    { name: 'Adhithyan', title: 'Club Coordinator 26-27', image: '/core/rtr adhithyan.png' },
    { name: 'Aravindh', title: 'Club Coordinator 26-27', image: '/core/Rtr Aravindh.jpg' },
    { name: 'Bharath J', title: 'Club Coordinator 26-27', image: '/core/rtr Bharath.jpg' },
    { name: 'Charunetra R', title: 'Club Coordinator 26-27', image: '/core/rtr charunetra.jpg' },
    { name: 'Cheranath R', title: 'Club Coordinator 26-27', image: '/core/rtr cheranath.jpg' },
    { name: 'Dhiya V', title: 'Club Coordinator 26-27', image: '/core/rtr dhiya.jpg' },
    { name: 'Diksha Nagarajan', title: 'Club Coordinator 26-27', image: '/core/rtr diksha.jpeg' },
    { name: 'Harileena S', title: 'Club Coordinator 26-27', image: '/core/RTR HARILEENA JPG.jpg' },
    { name: 'Harshini Kathirvel', title: 'Club Coordinator 26-27', image: '/core/rtr harshini.jpg' },
    { name: 'Harshith R', title: 'Club Coordinator 26-27', image: '/core/rtr harshith.jpg' },
    { name: 'Jaron Roderick S', title: 'Club Coordinator 26-27', image: '/core/rtr jaron.jpg' },
    { name: 'Jayakeerthi S', title: 'Club Coordinator 26-27', image: '/core/Jayakeerthi.jpg' },
    { name: 'Joshnavi K B', title: 'Club Coordinator 26-27', image: '/core/rtr joshnavi.jpg' },
    { name: 'Kamesh S', title: 'Club Coordinator 26-27', image: '/core/kamesh.jpg' },
    { name: 'Lavanya Stephy P', title: 'Club Coordinator 26-27', image: '/core/lavanya_stephy.jpg' },
    { name: 'Lingeesh L', title: 'Club Coordinator 26-27', image: '/core/Rtr.Lingeesh.jpg' },
    { name: 'Nivas Kannan R', title: 'Club Coordinator 26-27', image: '/core/rtr nivas.PNG' },
    { name: 'Prathyusha P', title: 'Club Coordinator 26-27', image: '/core/rtr prathyusha.jpg' },
    { name: 'Preethi P', title: 'Club Coordinator 26-27', image: '/core/rtr preethi.jpg' },
    { name: 'Ragavi G', title: 'Club Coordinator 26-27', image: '/core/rtr ragavi.png' },
    { name: 'Rahul S', title: 'Club Coordinator 26-27', image: '/core/rtr s rahul.jpeg' },
    { name: 'Sandhiya E', title: 'Club Coordinator 26-27', image: '/core/rtr sandhiya.jpg' },
    { name: 'Shree Ram Vishal M', title: 'Club Coordinator 26-27', image: '/core/rtr shree ram.png' },
    { name: 'Shrinithi K', title: 'Club Coordinator 26-27', image: '/core/rtr shrinithi.png' },
    { name: 'Shruthi B', title: 'Club Coordinator 26-27', image: '/core/rtr shruthi.jpg' },
    { name: 'Soben Sree Arv', title: 'Club Coordinator 26-27', image: '/core/rtr soben.jpg' },
    { name: 'Sudhir K', title: 'Club Coordinator 26-27', image: '/core/rtr sudhir.png' },
    { name: 'Tarika R', title: 'Club Coordinator 26-27', image: '/core/Rtr. Tarika.png' },
    { name: 'Tharakeshwaran V', title: 'Club Coordinator 26-27', image: '/core/rtr tharakeshwaran.jpg' },
    { name: 'Vishaal G', title: 'Club Coordinator 26-27', image: '/core/rtr vishaal.jpg' },
  ];

  const currentTeam = activeTab === 'core' ? coreLeadership : boardCoordinators;

  return (
    <div className="min-h-screen bg-background">
      <section className="section-shell editorial-dark section-padding-top">
        <div className="container-custom grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="section-kicker mb-4">Leadership</p>
            <h1 className="font-serif text-5xl leading-[0.94] text-white md:text-7xl">
              Meet the people behind the movement.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-200">
            A club’s identity is shaped by the individuals who carry its values forward. This team
            page is designed to feel like a documented roster of stewardship, collaboration, and care.
          </p>
        </div>
      </section>

      <section className="section-shell section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="editorial-panel mx-auto grid max-w-5xl gap-8 overflow-hidden p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-[24px] bg-surface-muted">
              <img
                src={facultyCoordinator.image}
                alt={facultyCoordinator.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="section-kicker mb-3">Faculty Coordinator</p>
              <h2 className="font-serif text-4xl font-semibold text-text-dark md:text-5xl">
                {facultyCoordinator.name}
              </h2>
              <div className="gold-divider my-5" />
              <p className="text-lg text-ink-soft">{facultyCoordinator.title}</p>
              <p className="mt-5 max-w-xl leading-8 text-ink-soft">
                The enduring institutional anchor who helps channel student energy into meaningful,
                well-guided impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell section-padding bg-background">
        <div className="container-custom">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker mb-3">Team directory</p>
              <h2 className="section-title">Core leadership and board coordinators.</h2>
            </div>
            <div className="flex items-center justify-center rounded-full border border-border bg-surface-subtle p-1">
              <button
                onClick={() => setActiveTab('core')}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors sm:px-7 ${
                  activeTab === 'core' ? 'bg-brand text-white' : 'text-ink-soft hover:text-brand'
                }`}
              >
                Core Leadership
              </button>
              <button
                onClick={() => setActiveTab('board')}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors sm:px-7 ${
                  activeTab === 'board' ? 'bg-brand text-white' : 'text-ink-soft hover:text-brand'
                }`}
              >
                Board Members
              </button>
            </div>
          </div>

          {currentTeam.length === 0 ? (
            <motion.p
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-16 text-center text-lg text-ink-soft"
            >
              New board members coming soon.
            </motion.p>
          ) : (
            <motion.div
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {currentTeam.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <TeamMemberCard {...member} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
