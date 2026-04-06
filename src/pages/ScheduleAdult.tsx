import SEO from '../components/SEO';
import SchedulePage from '../components/SchedulePage';
import CTASection from '../components/CTASection';

export const adultSchedule = [
  { 
    day: "Monday", 
    classes: [
      { time: "5:15pm - 7:00pm", class: "BJJ Competition Team", level: "By Professor Invitation Only" },
      { time: "7:00pm - 8:00pm", class: "Brazilian Jiu-Jitsu GI & NOGI", level: "Beginner", gold: true },
      { time: "7:00pm - 8:30pm", class: "Brazilian Jiu-Jitsu GI & NOGI", level: "Inter/Adv" }
    ] 
  },
  { 
    day: "Tuesday", 
    classes: [
      { time: "11:00am - 12:30pm", class: "Brazilian Jiu-Jitsu GI ONLY", level: "All Levels", gold: true },
      { time: "11:00am - 12:00pm", class: "Boxing", level: "All Levels" },
      { time: "5:15pm - 7:00pm", class: "BJJ Competition Team", level: "By Professor Invitation Only" },
      { time: "6:00pm - 7:00pm", class: "MMA (Inter/Adv)", level: "Prerequisite: 6 Months Striking & BJJ Required" },
      { time: "6:30pm - 7:00pm", class: "Boxing Fundamentals", level: "Technique Only", gold: true },
      { time: "7:00pm - 8:00pm", class: "Boxing", level: "Beginner", gold: true },
      { time: "7:00pm - 8:30pm", class: "Boxing", level: "Inter/Adv" },
      { time: "7:00pm - 8:00pm", class: "Muay Thai Kickboxing", level: "All Levels", gold: true },
      { time: "7:00pm - 8:30pm", class: "Brazilian Jiu-Jitsu", level: "GI Inter/Adv" }
    ] 
  },
  { 
    day: "Wednesday", 
    classes: [
      { time: "11:00am - 12:30pm", class: "Brazilian Jiu-Jitsu GI ONLY", level: "All Levels", gold: true },
      { time: "5:15pm - 7:00pm", class: "BJJ Competition Team", level: "By Professor Invitation Only" },
      { time: "7:00pm - 8:00pm", class: "Brazilian Jiu-Jitsu GI & NOGI", level: "Beginner", gold: true },
      { time: "7:00pm - 8:30pm", class: "Brazilian Jiu-Jitsu GI & NOGI", level: "Inter/Adv" }
    ] 
  },
  { 
    day: "Thursday", 
    classes: [
      { time: "11:00am - 12:30pm", class: "Brazilian Jiu-Jitsu GI ONLY", level: "All Levels", gold: true },
      { time: "11:00am - 12:00pm", class: "Muay Thai Kickboxing", level: "All Levels" },
      { time: "5:15pm - 7:00pm", class: "BJJ Competition Team", level: "By Professor Invitation Only" },
      { time: "6:00pm - 7:00pm", class: "MMA (Inter/Adv)", level: "Prerequisite: 6 Months Striking & BJJ Required" },
      { time: "6:30pm - 7:00pm", class: "Boxing Fundamentals", level: "Technique Only", gold: true },
      { time: "7:00pm - 8:00pm", class: "Boxing", level: "Beginner", gold: true },
      { time: "7:00pm - 8:30pm", class: "Boxing", level: "Inter/Adv" },
      { time: "7:00pm - 8:00pm", class: "Muay Thai Kickboxing", level: "All Levels", gold: true },
      { time: "7:00pm - 8:30pm", class: "Brazilian Jiu-Jitsu", level: "NOGI Inter/Adv" }
    ] 
  },
  { 
    day: "Friday", 
    classes: [
      { time: "11:00am - 12:30pm", class: "NO GI Jiu-Jitsu", level: "Inter/Adv - Members Only" },
      { time: "5:15pm - 7:00pm", class: "BJJ Competition Team", level: "By Professor Invitation Only" },
      { time: "7:00pm - 8:30pm", class: "Wrestling NOGI Inter/Adv", level: "Active Members Only: No Drop-Ins" }
    ] 
  },
  { 
    day: "Saturday", 
    classes: [
      { time: "9:00am - 10:00am", class: "Boxing", level: "All Levels", gold: true },
      { time: "11:00am - 12:00pm", class: "Muay Thai Kickboxing", level: "All Levels", gold: true },
      { time: "12:00pm - 1:30pm", class: "NO GI Brazilian Jiu-Jitsu", level: "All Levels", gold: true }
    ] 
  },
  { 
    day: "Sunday", 
    classes: [
      { time: "1:30pm - 3:00pm", class: "Brazilian Jiu-Jitsu GI & NOGI. - All Levels", level: "Active Members Only: No Drop-Ins" }
    ] 
  }
];

export const adultPolicy = {
  title: "Adult Policy",
  items: [
    {
      label: "New Students",
      text: "Trial classes are exclusively available for sessions marked Gold. All other classes are reserved for active members."
    },
    {
      label: "Official Attire",
      text: "We prefer all students train in Mohler Brand gear to maintain a unified, professional team environment."
    },
    {
      label: "Safety & Risk",
      text: "Sparring is an optional privilege (3–6 months training recommended). Protective gear is the student's sole responsibility; training without it is at your own risk."
    }
  ]
};

export default function ScheduleAdult() {
  return (
    <>
      <SEO 
        title="Adult Class Schedule | Team Mohler MMA Grapevine" 
        description="Check out our adult class schedule for BJJ, Boxing, Muay Thai, and MMA in Grapevine, TX. We offer morning and evening classes for all skill levels." 
      />
      <SchedulePage 
        title="Adult" 
        titleAccent="Schedule" 
        subtitle="Training Times" 
        schedule={adultSchedule} 
        image="/mohler-teaching-jiu-jitsu-2.jpeg"
        policy={adultPolicy}
        variant="dark"
      />
      <CTASection image="/adult-private-lesson.jpeg" />
    </>
  );
}
