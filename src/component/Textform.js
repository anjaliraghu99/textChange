import React ,{useState} from 'react'
export default function Textform(props){
        const handleUpclick=()=>{
            console.log(text);
            let newText=text.toUpperCase();
            setText(newText)
            props.showAlert("converted to upper case","success")
        }
        const handleLoclick=()=>{
                console.log(text);
                let newText=text.toLowerCase();
                setText(newText)
                props.showAlert("converted to lower case","success")
            }
        const handleClearclick=()=>{
                console.log(text);
                let newText="";
                setText(newText)
                props.showAlert("clear","success")
            }
        const handleOnchange=(event)=>{
            console.log("clicked123");
            setText(event.target.value)
        }
        const handleCopy=()=>{
            var text=document.getElementById("Mybox");
            text.select();
            text.setSelectionRange(0,999);
            navigator.clipboard.writeText(text.value);
            props.showAlert("copy the text","success")

        }
    
        const[text,setText]=useState('');
        return(
        <>
        < div className="container"style={{color:props.mode==='dark'? 'white':'#042743'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
            
            <textarea className="form-control"  value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'? '#13466e':'white',color:props.mode==='dark'? 'white':'#042743'}} id="Mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>convert to upper case</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>convert to lower case</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearclick}>Clear</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
        
        </div>
        <div className="container my-3"style={{color:props.mode==='dark'? 'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
            <p>{0.008* text.split("").filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h3>preview</h3>
            <p>{text}</p>


        </div>
        </>

        
    )
}
