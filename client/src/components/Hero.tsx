import Rays from "../../src/assets/rays.png";
import { Button } from "./ui/button";

export default function Hero() {
    return (
        <div className="min-h-screen pt-24  flex flex-col lg:flex-row  items-center justify-center">
            <div className="lg:basis-1/2 flex justify-center">
                <img
                    className=" mb-5 lg:mb-0 max-w-70 max-h-70 md:max lg:max-w-[650px] lg:max-h-[650px]"
                    src={Rays}
                />
            </div>
            <div className="text-content text-center w-5/6 mx-auto mt-5 lg:basis-1/2 flex flex-col lg:px-10">
                <div className="lg:text-left">
                    <h1 className="fancy text-neutral font-bold text-3xl lg:text-7xl mb-2 ">
                        LightScape
                    </h1>
                    <h2 className="mb-6 lg:mb-10 text-xl lg:text-3xl font-semibold text-neutral/90 ">
                        {" "}
                        A Photonics Photography Event
                    </h2>
                </div>

                <p className="text-neutral/80 mb-2 lg:mb-6 text-left lg:text-2xl">
                    This unique photography challenge blends the art of visual
                    storytelling with the science of light. Participants are
                    invited to observe and document the behavior of light in
                    their surroundings—whether natural, artificial, or
                    unexpected—and interpret it through the lens of photonics.
                </p>
                <p className="text-left text-neutral/80 mb-10 lg:mb-10 lg:text-2xl">
                    We believe there’s value in exploring how shimmering
                    reflections, bending beams, intricate interference patterns,
                    and optical illusions shape our everyday experiences. This
                    contest encourages students to creatively engage with how
                    light interacts with matter and how photonics shapes the
                    world around us.
                </p>
                <div className="lg:text-left">
                    <Button className="fancy text-xl border font-semibold  border-e-neutral/70 rounded-full px-8 py-6 lg:px-20 lg:py-8 hover:bg-white duration-200">
                        JOIN NOW ↓
                    </Button>
                </div>
            </div>
        </div>
    );
}
