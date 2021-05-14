import "./Ad-designer.css";
import {useState} from "react"

function AdDesigner() {
    const [flavor, setFlavor] = useState("");
    const [theme, setTheme] = useState("light");
    const [fontSize, setFontSize] = useState(16)

    function fontUp() {
        setFontSize(prev => prev + 1)
    }

    function fontDown() {
        setFontSize(prev => prev - 1)
    }
    
    let addClass="";
    if (theme==="light"){
        addClass=""
    } else if (theme==="dark"){
        addClass=" dark"
    }

    const sizeStyle = {fontSize: fontSize + "px"}
    
    return (
       <div className="AdContainer">
           <h3 className="DesignHeading">Ad Designer</h3>
            <div className={"CreateAd"+ addClass}>
                <h5>Vote For</h5>
                <p className="Flavor" style={sizeStyle}>{flavor}</p>
            </div>
            <div className="ButtonContainer">
            <h3>What to Support</h3>
            <button disabled={flavor==="Chocolate"} onClick={() => setFlavor("Chocolate")}>Chocolate</button>
            <button disabled={flavor==="Strawberry"} onClick={() => setFlavor("Strawberry")}>Strawberry</button>
            <button disabled={flavor==="Cookie Dough"} onClick={() => setFlavor("Cookie Dough")}>Chocolate</button>
            </div>
            <div className="ThemeContainer">
                <h3>Color Theme</h3>
                <button disabled={theme==="light"} onClick={() => setTheme("light")}>Light</button>
                <button disabled={theme==="dark"} onClick={() => setTheme("dark")}>Dark</button>
            </div>
            <div className="FontContainer">
                <h3>Font Size</h3>
                <button disabled={fontSize < 17} onClick={fontDown} >Down</button>
                {fontSize}
                <button onClick={fontUp} >Up</button>
            </div>
       </div> 
    )
}

export default AdDesigner;