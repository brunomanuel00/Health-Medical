import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Opción 1: Usando window.scrollTo con behavior: 'smooth'
export const SmoothScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    return null;
};

// // Opción 2: Usando una animación más personalizada
// export const AnimatedScrollToTop = () => {
//     const { pathname } = useLocation();

//     useEffect(() => {
//         const scrollToTop = () => {
//             const currentPosition = window.pageYOffset;
//             if (currentPosition > 0) {
//                 window.requestAnimationFrame(scrollToTop);
//                 window.scrollTo(0, currentPosition - currentPosition / 8);
//             }
//         };

//         scrollToTop();
//     }, [pathname]);

//     return null;
// };