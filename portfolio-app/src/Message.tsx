// Message

function Message(){
    const name = "Owen";
    if (name.trim() === ""){
        return <h1>Hello World</h1>
    }
    return <h1>Hello {name}</h1>

}

export default Message;