export default () => (
  <div>
    <h4>Login</h4>
    <p>username: <input /><br/>
    password: <input /></p>
    <button>login</button>
    <p><a href="#">Forgot your password?</a></p>
    <h4>Create Account</h4>
    <p>username: <input /><br/>
    password: <input /></p>
    <button>create account</button>

    <style jsx>{`
      p {
        line-height: 22px;
      }
    `}</style>
  </div>
)
