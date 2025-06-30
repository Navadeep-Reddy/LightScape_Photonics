import getAllPhotoSubmissions from "@/database/fetchFunction";
import { entryType } from "@/types/entryType";
import { useEffect, useState } from "react";

export default function PicturesMobile() {
    const [studentData, setStudentData] = useState<entryType[]>([]);
    const [selectedStudent, setSelectedStudent] = useState<entryType>();

    useEffect(() => {
        const fetchData = async () => {
            const response = (await getAllPhotoSubmissions()) as entryType[];

            if (response) {
                setStudentData(response);
                console.log(response[0]);
                if (response.length > 0) {
                    setSelectedStudent(response[0]);
                }
            } else {
                setStudentData([]);
            }
        };
        fetchData();
    }, []);

    if (studentData.length === 0) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-cream text-neutral text-2xl p-4 text-center">
                Oops! There are no approved submissions yet
            </div>
        );
    }

    if (!selectedStudent) {
        return null; // or a loading spinner
    }

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
                    <div className="relative text-center">
                        <img
                            src={selectedStudent.imageLink}
                            alt={selectedStudent.name + "'s Entry"}
                            className="w-full h-64 object-cover"
                        />
                        {/* Enlarge Icon */}
                        <button
                            onClick={() =>
                                window.open(selectedStudent.imageLink, "_blank")
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
                    <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-neutral/20 scrollbar-track-transparent p-2">
                        {studentData.map((student) => (
                            <div
                                key={student.registerNo}
                                onClick={() => setSelectedStudent(student)}
                                className={`flex-shrink-0 cursor-pointer transition-all duration-200 ${
                                    selectedStudent.registerNo ===
                                    student.registerNo
                                        ? "ring-2 ring-neutral ring-offset-2 scale-105"
                                        : "hover:scale-102 hover:shadow-md"
                                }`}
                            >
                                <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
                                    <img
                                        src={student.imageLink}
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
                            key={student.registerNo}
                            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                selectedStudent.registerNo ===
                                student.registerNo
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
