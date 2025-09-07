// filepath: c:\Users\Sodiq Abdullah\Documents\KULIAH\Semester 6\Kuliah Kerja Mahasiswa\My\Coding\UMKM\src\components\ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;