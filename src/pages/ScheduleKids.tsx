import SEO from '../components/SEO';
import SchedulePage from '../components/SchedulePage';
import CTASection from '../components/CTASection';

export const kidsSchedule = [
  { 
    day: "Monday", 
    classes: [
      { time: "6:00pm - 7:00pm", class: "Little Lions", level: "Ages 4-6" },
      { time: "6:00pm - 7:00pm", class: "Kids BJJ GI", level: "Ages 7-12" },
      { time: "7:00pm - 8:30pm", class: "Teen BJJ GI", level: "Ages 13+" }
    ] 
  },
  { 
    day: "Tuesday", 
    classes: [
      { time: "6:00pm - 7:00pm", class: "KIDs Competition Team", level: "(Entry requires Professor approval & separate enrollment)" },
      { time: "6:30pm - 7:00pm", class: "Teen Boxing Basics", level: "Ages 13+" },
      { time: "7:00pm - 8:00pm", class: "Teen Boxing", level: "Ages 13+" },
      { time: "7:00pm - 8:00pm", class: "Teen Kickboxing", level: "Ages 13+" }
    ] 
  },
  { 
    day: "Wednesday", 
    classes: [
      { time: "6:00pm - 7:00pm", class: "Little Lions", level: "Ages 4-6" },
      { time: "6:00pm - 7:00pm", class: "Kids BJJ GI", level: "Ages 7-12" },
      { time: "7:00pm - 8:30pm", class: "Teen BJJ GI", level: "Ages 13+" }
    ] 
  },
  { 
    day: "Thursday", 
    classes: [
      { time: "6:00pm - 7:00pm", class: "Kids BJJ NOGI Inter/Adv", level: "Ages 7-12" },
      { time: "6:30pm - 7:00pm", class: "Teen Boxing Basics", level: "Ages 13+" },
      { time: "7:00pm - 8:00pm", class: "Teen Boxing", level: "Ages 13+" },
      { time: "7:00pm - 8:00pm", class: "Teen Kickboxing", level: "Ages 13+" }
    ] 
  },
  { 
    day: "Friday", 
    classes: [
      { time: "6:00pm - 7:00pm", class: "Kids Wrestling", level: "Ages 7-12" },
      { time: "7:00pm - 8:30pm", class: "Teen Wrestling", level: "Ages 13+" }
    ] 
  },
  { 
    day: "Saturday", 
    classes: [
      { time: "9:00am - 10:00am", class: "Teen Boxing", level: "Ages 13+" },
      { time: "10:00am - 11:00am", class: "Little Lions", level: "Ages 4-6" },
      { time: "10:00am - 11:00am", class: "Kids BJJ NOGI", level: "Ages 7-12" },
      { time: "11:00am - 12:00pm", class: "Teen Kickboxing", level: "Ages 13+" },
      { time: "12:00pm - 1:30pm", class: "Teen BJJ (GI & NOGI )", level: "Ages 13+" }
    ] 
  },
  { 
    day: "Sunday", 
    classes: [
      { time: "1:30pm - 3:00pm", class: "Teen BJJ (GI & NOGI )", level: "Ages 13+" }
    ] 
  }
];

export const kidsPolicy = {
  title: "Kids Policy",
  items: [
    {
      label: "Team Uniform",
      text: "To maintain the professional environment of our academy, we train exclusively in official Mohler Brand gear. We take pride in a unified team appearance that reflects our 30-year lineage."
    },
    {
      label: "New Student Entry",
      text: "To ensure a world-class introduction, all new students are scheduled for Monday–Thursday or Saturday sessions only. Please arrive 15 minutes early for your orientation."
    }
  ]
};

export default function ScheduleKids() {
  return (
    <>
      <SEO 
        title="Kids & Teen Class Schedule | Team Mohler MMA Grapevine" 
        description="View our kids and teen martial arts class schedule in Grapevine, TX. We offer BJJ, Boxing, and Wrestling classes for Little Lions (4-6), Kids (7-12), and Teens (13+)." 
      />
      <SchedulePage 
        title="Kids & Teen" 
        titleAccent="Schedule" 
        subtitle="Training Times" 
        schedule={kidsSchedule} 
        image={`${import.meta.env.BASE_URL}KIDS_BJJ_CLASS_2.jpeg`}
        policy={kidsPolicy}
      />
      <CTASection image={`${import.meta.env.BASE_URL}KIDS_BJJ_CLASS_2.jpeg`} />
    </>
  );
}
