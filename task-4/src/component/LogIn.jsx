

function LogIn(props){

    const swap = props.swap

    return(
        <div>
            <h2 >LogIn Form</h2>
            <form >
                <input type="text" placeholder='enter name...'/><br />
                <input type="password" placeholder='enter password...' /><br />
                <button onClick={swap}>submit</button>
            </form>
        </div>
    )
}

export default LogIn;