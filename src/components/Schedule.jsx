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
    Day 1 (25th April) – Online Hackathon
  </motion.h1>

  <ScheduleItem title="Opening Ceremony (Introduction, Rules, Judging Criteria)" date="3:30 PM - 4:00 PM" location="Online" />
  <ScheduleItem title="Expert Talks & Sponsor Presentations" date="4:00 PM – 5:00 PM" location="Online" />
  <ScheduleItem title="First Mentoring Round" date="6:00 PM – 9:00 PM" location="Online" />
  <ScheduleItem title="Icebreaker & Networking" date="10:00 PM – 11:00 PM" location="Online" />
  <ScheduleItem title="Idea Submission (PPT, Video, Prototype)" date="11:00 PM – 12:00 PM" location="Online" />

  <motion.h1
    initial={{ y: 48, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 0.75 }}
    className="mb-10 mt-20 text-xl md:text-4xl font-black uppercase text-yellow-300"
  >
    Day 2 (26th April) – Online Hackathon
  </motion.h1>

  <ScheduleItem title="Top 20 Teams Announcement" date="10:00 AM – 11:00 AM" location="Online" />
  <ScheduleItem title="Doubt-Clearing Session for Top 20 Teams" date="12:00 PM – 1:00 PM" location="Online (Meet)" />

  <motion.h1
    initial={{ y: 48, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 0.75 }}
    className="mb-10 mt-20 text-xl md:text-4xl font-black uppercase text-yellow-300"
  >
    Day 3 (27th April) – Offline Hackathon
  </motion.h1>

  <ScheduleItem title="Check-In" date="8:00 AM – 10:00 AM" location="Offline" />
  <ScheduleItem title="Final Mentoring Round" date="10:00 AM – 11:00 AM" location="Offline" />
  <ScheduleItem title="Judgement Round – Batch 1" date="11:00 AM – 1:00 PM" location="Offline" />
  <ScheduleItem title="Lunch Break" date="1:00 PM – 2:00 PM" location="Offline" />
  <ScheduleItem title="Judgement Round – Batch 2" date="2:00 PM – 4:00 PM" location="Offline" />
  <ScheduleItem title="Closing Ceremony & Prize Distribution" date="5:00 PM – 6:30 PM" location="Offline" />
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
