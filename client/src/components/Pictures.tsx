import { entryType } from "@/types/entryType";
import { useState } from "react";
export default function Display() {
    const studentData = [
        {
            registerNo: "21341A05A1",
            name: "Arjun Sharma",
            title: "The Enigmatic Dance of Light and Shadow",
            imagelink:
                "https://lh3.googleusercontent.com/pw/AP1GczOpavVk_Ru11Q96OwNJqBVeg0Or5WcAeSO5dbOPnhrN7MYsw9s4QWNOvxU012ZE1UTYFBMN73AOzu5JvI-DwnVAb-VxiQoo3kOdv3KgG39Z6tNDwjop6zvEFaJAkxLJP8GNdHvk4dGpS5D0spVpzUwe5Q=w1379-h1034-s-no?authuser=0",
            year: "3",
        },
        {
            registerNo: "21341A05B2",
            name: "Priya Patel",
            title: "A Symphony of Colors in the Prism",
            imagelink:
                "https://github.com/Navadeep-Reddy/ProjectScreenshots/raw/main/IEEE_PES/Screenshot%20From%202025-06-29%2016-04-24.png?raw=true",
            year: "2",
        },
        {
            registerNo: "21341A05C3",
            name: "Vikram Singh",
            title: "Reflections of a World Unseen",
            imagelink:
                "https://github.com/Navadeep-Reddy/ProjectScreenshots/raw/main/IEEE_PES/Screenshot%20From%202025-06-29%2016-04-24.png?raw=true",
            year: "4",
        },
        {
            registerNo: "21341A05D4",
            name: "Sneha Reddy",
            title: "The Hidden Spectrum of Everyday Objects",
            imagelink:
                "https://github.com/Navadeep-Reddy/ProjectScreenshots/raw/main/IEEE_PES/Screenshot%20From%202025-06-29%2016-04-24.png?raw=true",
            year: "1",
        },
        {
            registerNo: "21341A05E5",
            name: "Rahul Kumar",
            title: "Chasing the Elusive Northern Lights",
            imagelink:
                "https://github.com/Navadeep-Reddy/ProjectScreenshots/raw/main/IEEE_PES/Screenshot%20From%202025-06-29%2016-04-24.png?raw=true",
            year: "3",
        },
        {
            registerNo: "21341A05F6",
            name: "Ananya Guptasas",
            title: "The Art of Capturing a Sunbeam",
            imagelink:
                "https://github.com/Navadeep-Reddy/ProjectScreenshots/raw/main/IEEE_PES/Screenshot%20From%202025-06-29%2016-04-24.png?raw=true",
            year: "2",
        },
        {
            registerNo: "21341A05G7",
            name: "Karthik Menon",
            title: "A Journey Through the Lens of a Microscope",
            imagelink:
                "https://github.com/Navadeep-Reddy/ProjectScreenshots/raw/main/IEEE_PES/Screenshot%20From%202025-06-29%2016-04-24.png?raw=true",
            year: "4",
        },
        {
            registerNo: "21341A05H8",
            name: "Deepika Nair",
            title: "The Poetry of a Single Raindrop",
            imagelink:
                "https://github.com/Navadeep-Reddy/ProjectScreenshots/raw/main/IEEE_PES/Screenshot%20From%202025-06-29%2016-04-24.png?raw=true",
            year: "1",
        },
    ];

    if (studentData.length === 0) {
        return (
            <div className="w-full h-screen flex items-center text-center px-4 justify-center bg-cream text-neutral md:text-xl lg:text-7xl">
                Oops! There are no approved submissions yet
            </div>
        );
    }

    const [selected, setSelected] = useState<entryType>();
    return (
        <div className="w-full h-screen flex overflow-hidden">
            <div className="photos-selection basis-1/4 h-full bg-cream border-r-2 lg:p-8 md:p-8 text-center flex flex-col items-center overflow-y-auto">
                <h1 className="text-4xl text-neutral mb-10 pt-4">
                    Choose Preview Image
                </h1>
                {studentData.map((student) => {
                    return (
                        <div
                            key={student.registerNo}
                            className="preview-image-container max-h-[300px] max-w-[300px] mb-5"
                            onClick={() => setSelected(student)}
                        >
                            <img
                                src={student.imagelink}
                                alt={student.name}
                                className="rounded-md"
                            />
                            <p className="text-sm mt-2">{student.name}</p>
                            <p className="text-xs text-gray-600">
                                {student.title}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className="w-3/4  p-4 bg-cream flex flex-col items-center justify-center text-neutral text-center">
                <h1 className="text-4xl my-10 font-bold">Gallery Preview</h1>
                {selected ? (
                    <div className="flex flex-col items-center">
                        <div className="relative h-[60vh] w-full">
                            <img
                                src={selected.imagelink}
                                className="rounded-lg h-full w-full object-cover"
                                alt={selected.name}
                            />
                            <button
                                onClick={() =>
                                    window.open(selected.imagelink, "_blank")
                                }
                                className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
                                title="View full image"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="details-box mt-4">
                            <h2 className="text-2xl font-bold mb-2">
                                {selected.name}
                            </h2>
                            <p className="text-lg mb-1">
                                <strong>Title:</strong> {selected.title}
                            </p>
                            <p className="text-lg mb-1">
                                <strong>Register No:</strong>{" "}
                                {selected.registerNo}
                            </p>
                            <p className="text-lg mb-1">
                                <strong>Year:</strong> {selected.year}
                            </p>
                        </div>
                    </div>
                ) : (
                    <h1 className="text-3xl md:text-5xl lg:text-7xl">
                        Select to view submission
                    </h1>
                )}
            </div>
        </div>
    );
}
