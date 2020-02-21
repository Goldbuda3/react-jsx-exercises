let TextInput = () => {
    return <div>Make this component render a styled text input tag<input/></div>
}

let YesNoRadio = () => {
    return <form>Make this component render two styled radio button side by side labelled "yes" and "no"<label><input type="radio"/>Yes</label><label><input type="radio"/>No</label></form>
}

let SubmitButton = () => {
    return <div>Make this component render a styled button of type "submit" <button type="submit">SUBMIT</button></div>
}

let Form = () => {
    return (<div>Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button
    <TextInput/>
    <YesNoRadio/>
    <SubmitButton/>
    </div>
    )
}


ReactDOM.render(<Form />, document.getElementById('root'))