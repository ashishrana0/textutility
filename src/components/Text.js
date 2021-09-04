import React, {useState} from 'react'

export default function Text(props) {
  const [text, setText] = useState('');
  
  const handleUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }
  const handleLo = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleSp = () => {
    let newText = text.replaceAll(" ", "");
    setText(newText);
    props.showAlert("All spaces are removed", "success");
  };
  const handleDe = () => {
    setText('');
        props.showAlert("All text cleared", "success");
  };
  const handleCopy = () => {
    let copyText = document.getElementById('myText');
    if (copyText.value !== "") {
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
      props.showAlert("Text Copied Successfully", "success");
    }else{
      props.showAlert("Please enter some text to copy", "warning");
    }
  };
  const handleRmspace = () => {
    let newText = text.split(/[' ']+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };
  
  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   fontWeight: "normal",
  // });
  // const handlebold = ()=>{
  //   if(myStyle.fontWeight === 'normal'){
  //     setmyStyle({
  //       fontWeight: 'bold'
  //     })
  //   }else{
  //     setmyStyle({
  //       fontWeight: "normal",
  //     });
  //   }
  // }
  const handleCap = ()=>{
       let copyText = document.getElementById('myText');
        copyText.style.textTransform = 'capitalize'; 
  }
     
  
  // const handleNewtab = () => {
  //   let copyText = document.getElementById("myText");
  //   let i;
  //   for(i=0; i= copyText.length; i++){
  //     window.open(copyText);
  //   }
  // };
  //   const [btnText, setbtnText] = useState("Dark mode");
  //   const handledark = () => {
  //     if(myStyle.color === "black"){
  //       setmyStyle({
  //         color: "white",
  //         backgroundColor: "rgb(6, 14, 61)"
  //       });
  //       setbtnText("Light mode");
  //     }else{
  //       setmyStyle({
  //         color: "black",
  //         backgroundColor: "white"
  //       });
  //             setbtnText("Dark mode");
  //   }
  // }
    return (
      <div
        className="container my-3"
        // style={props.mode}
      >
        <div className="form-group">
          <h2>Enter your text here </h2>
          <textarea
            className={`form-control bg-${props.mode}`}
            id="myText"
            rows="8"
            onChange={handleOnchange}
            value={text}
            style={{ color: props.mode === "light" ? "grey" : "white" }}
          ></textarea>
          <div className="my-3">
            <button className="btn btn-primary my-2 mx-1" onClick={handleUp}>
              Uppercase
            </button>
            <button className="btn btn-primary my-2 mx-1" onClick={handleLo}>
              Lowercase
            </button>
            <button className="btn btn-primary my-2 mx-1" onClick={handleCap}>
              Capitalize
            </button>

            <button className="btn btn-primary my-2 mx-1" onClick={handleSp}>
              Remove all Space
            </button>
            
            <button className="btn btn-primary my-2 mx-1" onClick={handleCopy}>
              Copy Text
            </button>
            <button
              className="btn btn-primary my-2 mx-1"
              onClick={handleRmspace}
            >
              Remove Extraspaces
            </button>
            <button className="btn btn-primary my-2 mx-1" onClick={handleDe}>
              Clear Text
            </button>
            {/* <button className="btn btn-primary mx-1" onClick={handleNewtab}>
              Open in new tab
            </button> */}
            {/* <button className="btn btn-primary mx-1" onClick={handledark}>
              {btnText}
            </button> */}
          </div>
        </div>
        <div className="my-3">
          <h2>Text summary</h2>
          <p>
            
            {text.split(" ").length}words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} minutes to read</p>
          <h3 className="my-2">Preview</h3>
          <p>{text === "" ? "Enter something to preview" : text}</p>
        </div>
      </div>
    );
  }
