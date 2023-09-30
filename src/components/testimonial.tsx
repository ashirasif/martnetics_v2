import { useSpring, a, config } from "@react-spring/web";
import { useEffect, useState } from "react";


function Testimonial() {
  const [testNumber, setTestNumber] = useState(1);
  const [spring, api] = useSpring(() => ({
    from: {
        left: "0vw"
    },
    config: config.gentle
  }))   

  useEffect(() => {
    api.start({to: {left: `${testNumber * -75}vw`}})
    console.log(testNumber)
  }, [testNumber])

  const testimonials = {
    'nazim': {
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi asperiores nemo voluptatum? Blanditiis aperiam earum corporis incidunt temporibus? Similique modi veritatis eius quae exercitationem officia et quis excepturi itaque alias!',
        name: 'Muhammad Nazim',
        image: '/nazim.png',
        occupation: 'CEO, SA Builders'
    },
    'waqas': {
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi asperiores nemo voluptatum? Blanditiis aperiam earum corporis incidunt temporibus? Similique modi veritatis eius quae exercitationem officia et quis excepturi itaque alias!',
        name: 'Waqas Qureshi',
        image: '/nazim.png',
        occupation: 'CEO, knock social'
    },
  }

  return (
    <div className="relative">
      <div className="flex flex-row items-center justify-around">
        <div onClick={() => setTestNumber(testNumber - 1)} className="rounded-full bg-white p-4 relative z-50 text-2xl transition-all duration-300 hover:bg-black hover:text-white">
          &lt;
        </div>
        <div></div>
        <div onClick={() => setTestNumber(testNumber + 1)} className="rounded-full bg-white p-4 text-2xl relative z-50 transition-all duration-300 hover:bg-black hover:text-white">
          &gt;
        </div>
      </div>

      <a.div className="absolute text-white -top-8 w-screen flex flex-row justify-center" style={spring as any}>

        {Object.keys(testimonials).map((e, i) => (
            <div className={"absolute top-0 w-[50vw]" + " left-["+String(i*100)+"vw]"}>
                <div className="px-4 text-white">
                    {testimonials[e as keyof typeof testimonials].text}
                </div>
                <div className="flex flex-row justify-center gap-4 mt-4">
                    <div className="overflow-hidden rounded-full">
                        <img src={testimonials[e as keyof typeof testimonials].image} alt="test" className="w-12" />
                    </div>
                    <div>
                        <div className="text-xl">{testimonials[e as keyof typeof testimonials].name}</div>
                        <div className="text-white/60">{testimonials[e as keyof typeof testimonials].occupation}</div>
                    </div>
                </div>
            </div>
        ))}
      </a.div>        
    </div>
  );
}

export default Testimonial;
