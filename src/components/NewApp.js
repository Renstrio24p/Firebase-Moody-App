import './NewApp.scss'
const { default: app } = await import("./firebase/Firebase");

export default function NewApp(DOM) {

    DOM.innerHTML = (`
    <section id="logged-out-view">
        <div class="container">
            <h1 class="app-title">Moody</h1>
        
            <div class="provider-buttons">
                <button id="sign-in-with-google-btn" class="provider-btn">
                    <img src="images/providers/google.png" class="google-btn-logo">
                    Sign in with Google
                </button>
            </div>
        
            <div class="auth-fields-and-buttons">
                <input id="email-input" type="email" placeholder="Email">
                <input id="password-input" type="password" placeholder="Password">
            
                <button id="sign-in-btn" class="primary-btn">Sign in</button>
                <button id="create-account-btn" class="secondary-btn">Create Account</button>
            </div>
        </div>
    </section>

    <section id="logged-in-view">
        <div class="container">
            <img src="images/gifs/jerryandthebird.gif">
        </div>
    </section>
    `)

    /* === Firebase Setup === */

    /* === UI === */

    /* == UI - Elements == */

    const viewLoggedOut = document.getElementById("logged-out-view")
    const viewLoggedIn = document.getElementById("logged-in-view")

    const signInWithGoogleButtonEl = document.getElementById("sign-in-with-google-btn")

    const emailInputEl = document.getElementById("email-input")
    const passwordInputEl = document.getElementById("password-input")

    const signInButtonEl = document.getElementById("sign-in-btn")
    const createAccountButtonEl = document.getElementById("create-account-btn")

    /* == UI - Event Listeners == */

    signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle)

    signInButtonEl.addEventListener("click", authSignInWithEmail)
    createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail)

    /* === Main Code === */

    showLoggedOutView()

    /* === Functions === */

    /* = Functions - Firebase - Authentication = */

    function authSignInWithGoogle() {
        console.log("Sign in with Google")
    }

    function authSignInWithEmail() {
        console.log("Sign in with email and password")
    }

    function authCreateAccountWithEmail() {
        console.log("Sign up with email and password")
    }

    /* == Functions - UI Functions == */

    function showLoggedOutView() {
        hideElement(viewLoggedIn)
        showElement(viewLoggedOut)
    }

    function showLoggedInView() {
        hideElement(viewLoggedOut)
        showElement(viewLoggedIn)
    }

    function showElement(element) {
        element.style.display = "flex"
    }

    function hideElement(element) {
        element.style.display = "none"
    }

}