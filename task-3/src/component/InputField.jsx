import {useRef} from "react"

function InputField (){
    const inputRef = useRef(null)
    
    const focusInput = ()=>{
        inputRef.current.focus()
    }

    return(
        <div>
            <input ref={inputRef} type="text" placeHolder="enter name.."/>
            <button onClick={focusInput}>send</button>
        </div>
    )
}
export default InputField;


