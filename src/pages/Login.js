function Login(){
    return(
        <>
            <header>
                {/* Save space for navbar */}
            </header>
            <main>
                <h1>Login</h1>
                <form>
                    <div>
                        <label for="username">Username</label>
                        <input id="username" type="text" name="username" placeholder="username"></input>
                    </div>
                    <div>
                        <label for="Password">Password</label>
                        <input id="password" type="password" name="password" placeholder="password"></input>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </main>
        </>
    )
}

export default Login