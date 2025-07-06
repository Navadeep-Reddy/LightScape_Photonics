import getAllPhotoSubmissions from "@/database/fetchFunction";
import { entryType } from "@/types/entryType";
import { useEffect, useState } from "react";
export default function Display() {
    const [studentData, setStudentData] = useState<entryType[]>([]);
    const [selected, setSelected] = useState<entryType>();
    useEffect(() => {
        const fetchData = async () => {
            const response = (await getAllPhotoSubmissions()) as entryType[];

            if (response) setStudentData(response);
            else setStudentData([]);
        };
        fetchData();
    }, []);

    if (studentData.length === 0) {
        return (
            <div className="w-full h-screen flex items-center text-center px-4 justify-center bg-cream text-neutral md:text-xl lg:text-7xl">
                Oops! There are no approved submissions yet
            </div>
        );
    }

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
                            className="preview-image-container w-full p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors duration-200"
                            onClick={() => setSelected(student)}
                        >
                            <div className="w-full aspect-video overflow-hidden rounded-md">
                                <img
                                    src={student.imageLink}
                                    alt={student.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-sm mt-2 font-semibold">
                                {student.name}
                            </p>
                            <p className="text-xs text-gray-500">
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
                                src={selected.imageLink}
                                className="rounded-lg h-full w-full object-cover"
                                alt={selected.name}
                            />
                            <button
                                onClick={() =>
                                    window.open(selected.imageLink, "_blank")
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
                                <strong>Digital ID:</strong>{" "}
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
