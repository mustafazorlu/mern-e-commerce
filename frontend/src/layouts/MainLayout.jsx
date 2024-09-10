import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Search from "../components/Modals/Search/Search";
import Dialog from "../components/Modals/Dialog/Dialog";

const MainLayout = ({ children }) => {
    const [isSearchShow, setIsSearchShow] = useState(false);
    const [isDialogShow, setIsDialogShow] = useState(false);

    useEffect(() => {
        const dialogStatus = localStorage.getItem("dialog")
            ? JSON.parse(localStorage.getItem("dialog"))
            : localStorage.setItem("dialog", JSON.stringify(true));
        const timer = setTimeout(() => {
            setIsDialogShow(dialogStatus);
        }, 2000);

        // clearTimeout(timer);
    }, []);

    return (
        <>
            <Header setIsSearchShow={setIsSearchShow} />
            <Search
                isSearchShow={isSearchShow}
                setIsSearchShow={setIsSearchShow}
            />
            <Dialog
                isDialogShow={isDialogShow}
                setIsDialogShow={setIsDialogShow}
            />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
