import {useEffect, useState} from "react";
import {ArrowUp} from "lucide-react";

export const ScrollUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 p-3 bg-black text-white rounded-full shadow-lg transition-opacity ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <ArrowUp size={24}/>
        </button>
    );
}
