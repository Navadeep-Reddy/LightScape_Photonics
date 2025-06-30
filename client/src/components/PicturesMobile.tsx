import { useState } from "react";
import { entryType } from "@/types/entryType";

export default function PicturesMobile() {
    const studentData: entryType[] = [
        {
            id: 1,
            registerNo: "21341A05A1",
            name: "Arjun Sharma",
            title: "The Enigmatic Dance of Light and Shadow",
            imagelink:
                "https://lh3.googleusercontent.com/pw/AP1GczOpavVk_Ru11Q96OwNJqBVeg0Or5WcAeSO5dbOPnhrN7MYsw9s4QWNOvxU012ZE1UTYFBMN73AOzu5JvI-DwnVAb-VxiQoo3kOdv3KgG39Z6tNDwjop6zvEFaJAkxLJP8GNdHvk4dGpS5D0spVpzUwe5Q=w1379-h1034-s-no?authuser=0",
            year: 3,
        },
        {
            id: 2,
            registerNo: "21341A05B2",
            name: "Priya Patel",
            title: "A Symphony of Colors in the Prism",
            imagelink:
                "https://github.com/Navadeep-Reddy/ProjectScreenshots/raw/main/IEEE_PES/Screenshot%20From%202025-06-29%2016-04-24.png?raw=true",
            year: 2,
        },
        {
            id: 3,
            registerNo: "21341A05C3",
            name: "Vikram Singh",
            title: "Reflections of a World Unseen",
            imagelink:
                "https://github.com/Navadeep-Reddy/ProjectScreenshots/raw/main/IEEE_PES/Screenshot%20From%202025-06-29%2016-04-24.png?raw=true",
            year: 4,
        },
        {
            id: 4,
            registerNo: "21341A05D4",
            name: "Sneha Reddy",
            title: "The Hidden Spectrum of Everyday Objects",
            imagelink:
                "https://github.com/Navadeep-Reddy/ProjectScreenshots/raw/main/IEEE_PES/Screenshot%20From%202025-06-29%2016-04-24.png?raw=true",
            year: 1,
        },
        {
            id: 5,
            registerNo: "21341A05E5",
            name: "Rahul Kumar",
            title: "Chasing the Elusive Northern Lights",
            imagelink:
                "https://github.com/Navadeep-Reddy/ProjectScreenshots/raw/main/IEEE_PES/Screenshot%20From%202025-06-29%2016-04-24.png?raw=true",
            year: 3,
        },
        {
            id: 6,
            registerNo: "21341A05F6",
            name: "Ananya Guptasas",
            title: "The Art of Capturing a Sunbeam",
            imagelink:
                "https://github.com/Navadeep-Reddy/ProjectScreenshots/raw/main/IEEE_PES/Screenshot%20From%202025-06-29%2016-04-24.png?raw=true",
            year: 2,
        },
        {
            id: 7,
            registerNo: "21341A05G7",
            name: "Karthik Menon",
            title: "A Journey Through the Lens of a Microscope",
            imagelink:
                "https://github.com/Navadeep-Reddy/ProjectScreenshots/raw/main/IEEE_PES/Screenshot%20From%202025-06-29%2016-04-24.png?raw=true",
            year: 4,
        },
        {
            id: 8,
            registerNo: "21341A05H8",
            name: "Deepika Nair",
            title: "The Poetry of a Single Raindrop",
            imagelink:
                "https://github.com/Navadeep-Reddy/ProjectScreenshots/raw/main/IEEE_PES/Screenshot%20From%202025-06-29%2016-04-24.png?raw=true",
            year: 1,
        },
    ];

    const [selectedStudent, setSelectedStudent] = useState<entryType>(
        studentData[0]
    );

    return (
        <div className="w-full h-screen flex flex-col bg-cream">
            {/* Header */}
            <div className="flex-shrink-0 text-center py-4 px-4">
                <h1 className="text-2xl text-neutral font-bold">
                    Gallery Preview
                </h1>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center px-4 pb-4">
                <div className="w-full max-w-sm  rounded-lg shadow-lg overflow-hidden">
                    <div className="relative">
                        <img
                            src={selectedStudent.imagelink}
                            alt={selectedStudent.name}
                            className="w-full h-64 object-cover"
                        />
                        {/* Enlarge Icon */}
                        <button
                            onClick={() =>
                                window.open(selectedStudent.imagelink, "_blank")
                            }
                            className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                            title="View full image"
                        >
                            <svg
                                className="w-4 h-4"
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
                    <div className="p-4">
                        <h2 className="text-xl font-bold text-neutral mb-2">
                            {selectedStudent.name}
                        </h2>
                        <p className="text-sm text-neutral/70 mb-1">
                            {selectedStudent.title}
                        </p>
                        <p className="text-sm text-neutral/70 mb-1">
                            Register No: {selectedStudent.registerNo}
                        </p>
                        <p className="text-sm text-neutral/70">
                            Year: {selectedStudent.year}
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Preview Carousel - Horizontal Scrollable */}
            <div className="flex-shrink-0 bg-darkCream  border-t-2 border-neutral/30 rounded-xl">
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-neutral mb-3 text-center">
                        Choose Image
                    </h3>
                    <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-neutral/20 scrollbar-track-transparent pb-2">
                        {studentData.map((student) => (
                            <div
                                key={student.id}
                                onClick={() => setSelectedStudent(student)}
                                className={`flex-shrink-0 cursor-pointer transition-all duration-200 ${
                                    selectedStudent.id === student.id
                                        ? "ring-2 ring-neutral ring-offset-2 scale-105"
                                        : "hover:scale-102 hover:shadow-md"
                                }`}
                            >
                                <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
                                    <img
                                        src={student.imagelink}
                                        alt={student.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="mt-1 text-center">
                                    <p className="text-xs text-neutral font-medium truncate w-20">
                                        {student.name.split(" ")[0]}
                                    </p>
                                    <p className="text-xs text-neutral/60 truncate w-20">
                                        {student.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex-shrink-0 flex justify-center py-2 bg-darkCream">
                <div className="flex gap-2">
                    {studentData.map((student) => (
                        <div
                            key={student.id}
                            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                selectedStudent.id === student.id
                                    ? "bg-neutral"
                                    : "bg-neutral/30"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
