import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import { Code, Palette, Smartphone, Bot, Box, Cloud } from "lucide-react";

function Services() {
  const [hoveredService, setHoveredService] = useState<string>("");

  const services = [
    {
      title: "Full Stack Development",
      description: "End-to-end web application development using modern technologies. From database design to responsive frontend, we build scalable solutions that power your digital presence.",
      icon: <Code />,
      color: "#3b82f6"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and visually stunning user experiences. We combine aesthetic appeal with usability to design interfaces that delight and convert.",
      icon: <Palette />,
      color: "#ec4899"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. We build performant, user-friendly apps that work seamlessly across all devices.",
      icon: <Smartphone />,
      color: "#10b981"
    },
    {
      title: "Agentic AI",
      description: "Intelligent AI solutions that automate workflows and enhance decision-making. From chatbots to predictive analytics, we harness AI to transform your business.",
      icon: <Bot />,
      color: "#8b5cf6"
    },
    {
      title: "3D Web Development",
      description: "Immersive 3D experiences for the web using WebGL and Three.js. We create interactive visualizations, product showcases, and virtual tours that captivate your audience.",
      icon: <Box />,
      color: "#f59e0b"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions. We architect robust cloud systems using AWS, Azure, and Google Cloud to ensure your applications are performant, secure, and globally accessible.",
      icon: <Cloud />,
      color: "#06b6d4"
    }
  ];

  const containerSpring = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { mass: 1, tension: 200, friction: 30 }
  });

  const titleSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
    config: { mass: 1, tension: 200, friction: 30 }
  });

  const handleServiceHover = (serviceTitle: string) => {
    setHoveredService(serviceTitle);
  };

  const handleServiceLeave = () => {
    setHoveredService("");
  };

  return (
    <a.div className="flex h-screen w-screen flex-col justify-center px-4 py-28 pt-32 text-white lg:px-20 lg:pt-40">
      <a.div style={titleSpring} className="mb-12">
        <h1 className="text-4xl 2xl:text-6xl font-black mb-4">Our Services</h1>
        <p className="text-lg lg:text-xl font-light text-white/80 max-w-3xl">
          We offer comprehensive digital solutions tailored to elevate your business.
          From concept to deployment, our team combines creativity with cutting-edge technology.
        </p>
      </a.div>

      <a.div style={containerSpring} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {services.map((service, index) => (
          <a.div
            key={service.title}
            className="relative group"
            style={containerSpring}
            onMouseEnter={() => handleServiceHover(service.title)}
            onMouseLeave={handleServiceLeave}
          >
            <div
              className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20
                         transition-all duration-300 hover:bg-white/20 hover:border-white/40
                         hover:scale-105 cursor-pointer"
              style={{
                boxShadow: hoveredService === service.title
                  ? `0 20px 40px rgba(${parseInt(service.color.slice(1, 3), 16)}, ${parseInt(service.color.slice(3, 5), 16)}, ${parseInt(service.color.slice(5, 7), 16)}, 0.3)`
                  : '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Service Icon */}
              <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110"
                   style={{ color: hoveredService === service.title ? service.color : 'white' }}>
                <div className="w-12 h-12">
                  {React.cloneElement(service.icon as React.ReactElement, {
                    size: 48,
                    strokeWidth: 2
                  })}
                </div>
              </div>

              {/* Service Title */}
              <h3
                className="text-xl lg:text-2xl font-bold mb-3 transition-colors duration-300"
                style={{
                  color: hoveredService === service.title ? service.color : 'white'
                }}
              >
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-sm lg:text-base font-light text-white/80 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: service.color }}
              />
            </div>
          </a.div>
        ))}
      </a.div>

      {/* Call to Action */}
      <a.div
        className="mt-12 text-center"
        style={titleSpring}
      >
      </a.div>
    </a.div>
  );
}

export default Services;
