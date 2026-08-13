

function Form() {
    return (
        <>
            <form>
                <label>Username</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="email"></input>
                <label>Password</label>
                <input type="password"></input>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default function Account() {
    return (
        <div>
            <h1>Account settings</h1>
            <Form />
        </div>
    );
}