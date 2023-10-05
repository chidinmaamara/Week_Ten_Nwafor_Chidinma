import React,{ useState } from "react";

const Form =()=>{
    let [isSubmitted, setIsSubmitted] = useState(false)
    let [name, setName] =useState('')

    function handleSubmit(e) {
        e.preventDefault()
        setIsSubmitted(true)
    }

    

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="name">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name={name} onChange={(e)=>setName(e.target.value) }/>
                </div>
                <button>Submit</button>
                {isSubmitted && (
                    <div>Submitted successfully</div>
                )}
            </form>
        </>
    )
}

export default Form;