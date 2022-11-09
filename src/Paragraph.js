import { useState,useEffect,useRef ,useContext} from "react";
import {ThemeContext} from './ThemeContext'
function Paragraph() {

    const context = useContext(ThemeContext)

    return (
        <p className={context.theme}>Chuyển dark theme facebook</p>
    )
}

export default Paragraph