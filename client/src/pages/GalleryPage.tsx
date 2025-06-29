import PicturesMobile from "@/components/PicturesMobile";
import Pictures from "../components/Pictures";
export default function GalleryPage() {
    return (
        <div className="bg-cream pt-18 lg:pt-24 h-full w-full">
            <div className="hidden md:flex">
                <Pictures />
            </div>
            <div className="md:hidden">
                <PicturesMobile />
            </div>
        </div>
    );
}
