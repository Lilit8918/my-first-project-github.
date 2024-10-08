
const style = document.createElement('style');
style.textContent = `
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color:#FFFFE0;
    }
    header {
        height: 100px;
        position: absolute;
        top: 0;
        width: 100%;
        background-color: #F0E68C;
        padding: 10px;
        text-align: right;
    }
    header a {
        // color: #337ab7;
        // text-size:40px;
        text-decoration: none;
        color: blue;
        padding: 20px;
    }
    .login-box {
        background-color: white;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    .login-box input[type="text"],
    .login-box input[type="password"] {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }
    .login-box button {
        padding: 10px 20px;
        background-color: #F0E68C;
        color: white;
        border: none;
        cursor: pointer;
        width: 100%;
    }
    .login-box button:hover {
        background-color: #0056b3;
    }
`;
document.head.appendChild(style);


document.body.innerHTML = `
    <header>
        <a href="index.html">Home</a>
    </header>
    <div class="login-box">
        <form action="login">
            <label for="username">User name</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Log In</button>
        </form>
    </div>
`;
