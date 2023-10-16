import { useInView } from "react-intersection-observer";
import Waypoints from "../dust/waypoints";
import TECHNOLOGIES from "../../constants/technologies";

export default function Skills() {
  const [stackRef, isStackInView] = useInView({ triggerOnce: true });

  return (
    <>
      <div className="px-6">
        <Waypoints target={"toprojects"}>
          <section id="projects" className="pt-28">
            <h1 className="text-2xl font-bold text-center" data-aos="fade-up">
              Skills
            </h1>
            <div className="flex justify-center">
              <span
                className="bg-[#6C63FF] w-[150px] h-[5px]"
                data-aos="fade-up"
                data-aos-delay="400"
              ></span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 mt-40 gap-4 ml-48 mr-48 mb-24">
              {!!TECHNOLOGIES.length && (
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
                  {TECHNOLOGIES.map((tech, index) => {
                    return (
                      <div
                        key={tech.category}
                        ref={stackRef}
                        className="flex flex-col gap-4 flex-1 md:flex-auto"
                        style={{
                          transform: isStackInView
                            ? "none"
                            : `${
                                index === 0
                                  ? "translateY(250px)"
                                  : `translateY(${200 / index}px)`
                              }`,
                          opacity: isStackInView ? 1 : 0,
                          transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                            index === 0 ? 0 : 0.5 * index
                          }s`,
                        }}
                      >
                        <h3 tabIndex="0" className="text-2xl font-bold">
                          {tech.category}
                        </h3>
                        <div className="flex items-center flex-wrap gap-x-5 gap-y-8">
                          {tech.items.map((item) => (
                            <div
                              key={item.name}
                              className="group relative flex"
                            >
                              <span tabIndex="0" role="img">
                                {item.icon}
                              </span>
                              <span
                                className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute left-1/2
    -translate-x-1/2 translate-y-full opacity-0 mt-3 mx-auto px-2 w-max"
                              >
                                {item.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        </Waypoints>
      </div>

      {/* Projects Ends */}
    </>
  );
}
