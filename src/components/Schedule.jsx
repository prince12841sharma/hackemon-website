import { FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mt-10 mx-auto max-w-5xl px-4 py-12 text-white"
    >
        <h1 className="text-4xl text-center md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-amber-600 font-sans font-bold mb-8">
          Hackemon Schedule
        </h1>
      
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-10 mt-20 text-xl md:text-4xl font-black uppercase text-yellow-300"
      >
        Hackathon Schedule (Online)
      </motion.h1>
      
      <ScheduleItem title="Online Kickoff & Ideation" date="April 25, 2025 (Friday)" location="Online" />
      <ScheduleItem title="Opening Ceremony (Introduction, Rules, Judging Criteria)" date="5:00 PM" location="Online" />
      <ScheduleItem title="Expert Talks & Sponsor Presentations" date="5:00 PM – 7:00 PM" location="Online" />
      <ScheduleItem title="Icebreaker + Networking" date="7:00 PM – 8:00 PM" location="Online" />
      <ScheduleItem title="Hack Begins (Online)" date="8:00 PM" location="Online" />

      <motion.h1
  initial={{ y: 48, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ ease: "easeInOut", duration: 0.75 }}
  className="mb-10 mt-20 text-xl md:text-4xl font-black uppercase text-yellow-300"
>
  Hackathon Schedule (Offline Day 1)
</motion.h1>

<ScheduleItem title="Transition to Offline Mode" date="Day 2: April 26, 2025 (Saturday)" location="Offline (Venue TBD)" />
<ScheduleItem title="Offline Registration & Welcome Kit Distribution" date="9:00 AM – 10:00 AM" location="Offline" />
<ScheduleItem title="Offline Hack Begins" date="10:00 AM" location="Offline" />
<ScheduleItem title="Lunch Break" date="2:00 PM – 3:00 PM" location="Offline" />
<ScheduleItem title="First Offline Mentoring Round" date="3:00 PM – 5:00 PM" location="Offline (Judging: Ideation, Feasibility, Impact)" />
<ScheduleItem title="Dinner Break" date="8:00 PM – 9:00 PM" location="Offline" />
<ScheduleItem title="Board Games, Music & Chill" date="9:00 PM – 10:00 PM" location="Offline" />
<ScheduleItem title="Second Mentoring Round" date="12:30 AM (Midnight)" location="Offline (Judging: Implementation, Innovation, Tech, Pitch)" />
<ScheduleItem title="Surprise Challenge for Fun" date="2:00 AM – 3:00 AM" location="Offline (Debugging / Meme AI / Speed Coding)" />

<motion.h1
  initial={{ y: 48, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ ease: "easeInOut", duration: 0.75 }}
  className="mb-10 mt-20 text-xl md:text-4xl font-black uppercase text-yellow-300"
>
  Grand Finale & Demo Day (Offline Day 2)
</motion.h1>

<ScheduleItem title="Doubt Clearing with Mentors (Optional)" date="6:00 AM" location="Offline" />
<ScheduleItem title="Breakfast" date="9:00 AM" location="Offline" />
<ScheduleItem title="Hacking Ends & Final Submissions" date="10:00 AM" location="Offline" />
<ScheduleItem title="Top 10 Teams Announced & Pitching Round" date="12:00 PM" location="Offline" />


    </section>
  );
};

const ScheduleItem = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-yellow-300">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};

export default Schedule;
