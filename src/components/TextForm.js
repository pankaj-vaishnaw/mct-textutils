import React, { useState} from "react";

export default function TextForm(props) {
  // let ref1=useRef(); 
  
  // if (props.currentTheme === 'dark') {
    
  //   ref1.current.style.backgroundColor= "#fffff";
  // } else {
  //   ref1.current.style.backgroundColor= '#808080';
  // }

  const [text, setText] = useState("");

  const handleOnChange = (event) => {
   
      setText(event.target.value);
  }

  const handleUpChange = () =>{
    if( text !== '')
    {
      let newUppertext = text.toUpperCase();
      setText(newUppertext);
      props.showAlert("Converted to Uppercase","success");
    }
    else
    {
      props.showAlert("There's Nothing To UpperCase Into TextBox","warning");
    }
  }

  const handleLoChange = () => {
  
    if( text !== '')
    {
      let newLowertext = text.toLowerCase();
      setText(newLowertext);
      props.showAlert("Converted to Lowercase","success");
    }
    else
    {
      props.showAlert("There's Nothing To LowerCase Into TextBox","warning");
    }
    
  }

  const handleClear = () => {
    //   console.log("You have clicked on clear");
    if(text !== '')
    {
      let cleartext = "";
      setText(cleartext);
      props.showAlert("Cleared the whole text","danger");
    }
    else
    {
      props.showAlert("There's Nothing To Clear Into TextBox","warning");
    }
  }

 

  const handlecopyfunction = () => {
    if(text !== '')
    {
      var copyText = document.getElementById("text");
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
      props.showAlert("Copied the text : "+ copyText.value, "success");
    }
    else
    {
      props.showAlert("There's Nothing To Copy Into TextBox","warning");
    }
    
  }

  const handleExtraspaces = () => {
    if(text !== '')
    {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("All extra spaces are cleared","success")
    }
    else
    {
      props.showAlert("There's Nothing Remove Spaces Into TextBox","warning");
    }
  }


  let  styledark = {
    border:'none',
    color: '#ffff',
    backgroundColor:'#808080',
    fontWeight: '400',
    fontSize:'20px'
  }

  let stylelight = {
    color: '#0f374e',
    backgroundColor:'#ffff',
    fontWeight: '400',
    fontSize:'18px'
  }

  return (
    

    <div className="main">
     
    <div className="container-main">
        <h1 className="count-text">{props.heading}</h1>
      <div className="sub-part" >
        
        <textarea
          className="text-para"
          // ref={ref1}
          id="text"
          rows="8"
          cols="90"
          style={props.theme==='dark'?styledark:stylelight}
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button disabled={text.length===0}  className="uppercase-button btns count-text" onClick={handleUpChange}>Convert Uppercase</button>
      <button disabled={text.length===0}  className="lowercase-button btns" onClick={handleLoChange}>Convert LowerCase</button>
      <button disabled={text.length===0}  className="clearText-button btns" onClick={handleClear}>Clear Text</button>
      <button disabled={text.length===0}  className="copy-button btns" onClick={handlecopyfunction}>Copy To Clipboard</button>
      <button disabled={text.length===0}  className="space-button btns" onClick={handleExtraspaces}>Remove Extra Spaces</button>
     
    </div>
    <div className="footer-container " >
        <h1 className="count-text">{props.summaryHead}</h1>
        <p className="count-text"> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charecters </p>
        
        <p className="count-text"> {0.008 * (text.split(' ').filter((element)=>{return element.length!==0}).length)}Read</p>
        <h3 className="text-center count-text">Preview Document</h3>
        <div className="preview-form">
        <textarea
          className="form-control count-text"
          id="text"
          rows="3"
          value={text}
          style={props.theme==='dark'?styledark:stylelight}
          readOnly
        ></textarea>
        </div>
    </div>
    </div>
  );
}

