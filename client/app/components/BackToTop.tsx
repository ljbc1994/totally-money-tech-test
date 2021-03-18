import React from "react";

export const BackToTop = (): null => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return null;
};
