import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  // ✅ Define your project data here
  const projects = [
    {
      id: 1,
      title: "Nanded Explorer",
      description: "City Tourism Website",
      tools: "HTML, CSS, JavaScript",
      image: "/images/p1.png",
    },
    {
      id: 2,
      title: "Codesinc",
      description: "Virtual Interview",
      tools: "React, Express.js, MongoDB",
      image: "/images/p2.png",
    },
    {
      id: 3,
      title: "Imagify",
      description: "AI Image Generator",
      tools: "Next.js, Tailwind CSS, OpenAI API",
      image: "/images/p4.png",
    },
    {
      id: 4,
      title: "Prescripto",
      description: "Doctor Appointment Booking System",
      tools: "React, Express.js, MongoDB",
      image: "/images/p3.png",
    },

  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((work, index) => (
            <div className="work-box" key={work.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{work.title}</h4>
                    <p>{work.description}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{work.tools}</p>
              </div>
              <WorkImage image={work.image} alt={work.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
