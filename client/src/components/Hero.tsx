import Rays from "../../src/assets/rays.png";
import { Button } from "./ui/button";

export default function Hero() {
    return (
        <div className="min-h-screen pt-24 bg-cream flex flex-col lg:flex-row  items-center justify-center">
            <div className="lg:basis-1/2 flex justify-center">
                <img
                    className=" mb-5 lg:mb-0 max-w-70 max-h-70 "
                    src={Rays}
                />  
            </div>
            <div className="text-content text-center w-5/6 mx-auto mt-5 lg:basis-1/2 ">
                <h1 className="fancy text-neutral font-bold text-3xl mb-2 ">
                    LightScape
                </h1>
                <h2 className="mb-6 text-xl font-semibold text-neutral/90">
                    {" "}
                    A Photonics Photography Event
                </h2>
                <p className="text-neutral/80 mb-2 text-left">
                    This unique photography challenge blends the art of visual
                    storytelling with the science of light. Participants are
                    invited to observe and document the behavior of light in
                    their surroundings—whether natural, artificial, or
                    unexpected—and interpret it through the lens of photonics.
                </p>
                <p className="text-left text-neutral/80 mb-6">
                    We believe there’s value in exploring how shimmering
                    reflections, bending beams, intricate interference patterns,
                    and optical illusions shape our everyday experiences. This
                    contest encourages students to creatively engage with how
                    light interacts with matter and how photonics shapes the
                    world around us.
                </p>
            </div>
            <Button className="fancy text-xl border border-e-neutral/70 rounded-full p-6">Join now</Button>
        </div>
    );
}
