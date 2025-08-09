import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a
                href="https://saas-app-eta-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/ss2.png" alt="Ryde App Interface" />
              </a>
            </div>
            <div className="text-content">
              <h2>
                AI-Powered SaaS Learning Platform with Voice Interaction &
                Secure Payment
              </h2>
              <p className="text-white-50 md:text-xl">
                integrated voice interaction. Utilizes VAPI AI for personalized
                and dynamic learning experiences. The platform features seamless
                backend integration, secure user authentication, and payment
                processing through Clerk, enabling smooth subscription
                management. Designed for high engagement and accessibility with
                real-time voice conversations and AI-powered knowledge delivery
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a
                  href="https://quiz-app-ochre-psi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/quiz2.png"
                    alt="React Quiz Application"
                  />
                </a>
              </div>
              <h2>React Quiz Application with Dynamic Assessment.</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a
                  href="https://tic-tac-toe-orcin-zeta-53.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/tic2.png" alt="Tic-Tac-Toe Game" />
                </a>
              </div>
              <h2>Funny Tic-Tac-Toe Game for enjoyment</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
