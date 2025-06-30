import { entryType } from "@/types/entryType";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

// Function to fetch all photo submissions
export default async function getAllPhotoSubmissions(): Promise<entryType[]> {
    const entries: entryType[] = [];

    try {
        const querySnapshot = await getDocs(
            collection(db, "photo_submissions")
        );
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            entries.push({
                name: data.name,
                registerNo: data.registerNo,
                year: data.year,
                title: data.title,
                imageLink: data.imageLink,
                timestamp: data.timestamp,
            });
        });
    } catch (error) {
        console.error("Error fetching photo submissions:", error);
    }

    return entries;
}
