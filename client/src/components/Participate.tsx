import React from "react";
import Prism from "../../src/assets/prism.jpeg";

const ThemeSection = () => {
    return (
        <div className="min-h-screen pt-18 bg-cream flex flex-col lg:flex-row lg:max-w-5/6 lg:mx-auto items-center justify-center">
            <div className="text-content text-center w-5/6 mx-auto mt-5 lg:basis-1/2 flex flex-col lg:px-10">
                <div className="lg:text-left">
                    <h1 className="fancy text-neutral font-bold text-3xl lg:text-7xl mb-2 ">
                        Theme
                    </h1>
                    <h2 className="mb-6 lg:mb-10 text-xl lg:text-3xl font-semibold text-neutral/90 ">
                        {" "}
                        Photography Guidelines
                    </h2>
                </div>

                <p className="text-neutral/80 mb-2 lg:mb-6 text-left lg:text-2xl">
                    Participants are encouraged to capture and represent a
                    photonics-related concept through original photography.
                </p>

                <p className="text-neutral/80 mb-2 lg:mb-6 text-left lg:text-xl">
                    Possible themes include (but are not limited to):{" "}
                    <span className="font-medium">
                        Reflection, Refraction, Diffraction, Interference,
                        Dispersion, Laser Light, Fiber Optics, Scattering,
                        Natural Optics, Polarization, Total Internal Reflection,
                        Holography, Light and Shadow Patterns, Color through
                        Optics, Photonic Art in Nature, Everyday Photonics,
                        Structured Light, Spectral Effects, Optical Illusions,
                        Photonics in Technology.
                    </span>
                </p>

                <p className="text-left text-neutral/80 mb-10 lg:mb-10 lg:text-2xl">
                    Each photograph should aim to visualize a scientific
                    principle of light while demonstrating creativity,
                    observation, and conceptual clarity.
                </p>

                <div className="lg:basis-1/2 flex justify-center mb-5 lg:mb-0 lg:hidden">
                    <img
                        className="max-w-70 max-h-70 lg:max-w-[650px] lg:max-h-[650px] rounded-full object-cover"
                        src={Prism}
                        alt="Prism"
                    />
                </div>

                <div className="lg:text-left">
                    <a
                        href="https://forms.gle/your-form-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fancy text-xl border mb-5 border-neutral/70 rounded-full px-8 py-6 lg:px-20 lg:py-8 hover:bg-white duration-200 inline-block font-semibold"
                    >
                        SUBMIT YOUR ENTRY →
                    </a>
                </div>
            </div>

            <div className="lg:basis-1/2 lg:flex justify-center mb-5 lg:mb-0 hidden">
                <img
                    className="max-w-70 max-h-70 lg:max-w-[650px] lg:max-h-[650px] rounded-full object-cover"
                    src={Prism}
                    alt="Prism"
                />
            </div>
        </div>
    );
};

export default ThemeSection;
