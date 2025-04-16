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
                        <label for="username">username</label>
                        <inpu id="username" type="text" name="username" placeholder="username"></inpu>
                    </div>
                    <div>
                        <label for="Password">Password</label>
                        <inpu id="password" type="password" name="password" placeholder="password"></inpu>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </main>
        </>
    )
}

export default Login