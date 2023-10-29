/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './assets/login-form.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="section">

        <div className='row'>

          <div className='col-1-2'>
            <img src={logo} id='login-logo' alt="logo" />
          </div>

          <div className='col-1-2'>
            <div id='login-form'>

              <p className='input-text'>Login ID</p>
              <div className='input-txt'>

                <input type='text' className='login-input' placeholder='Login ID' />
              </div>
              <p className='input-text'>Password</p>
              <div className='input-txt'>

                <input type='text' className='login-input' placeholder='Password' />
              </div>
              <div className='row login-checks'>
                <div className='col'>
                  <div className='row rem-me'>

                    <input type='checkbox' />
                    <p className='login-check-text'>Remember me</p>
                  </div>
                </div>
                <div className='col'>
                  <a href='#' id='change-psw' >
                    <p className='link-text'>Change Password</p>
                  </a>
                </div>
              </div>
              <div className='row agree-tc'>

                <input type='checkbox' />
                <p className='login-check-text'>Agree to <a href='#' id='agree' >Terms and Conditions</a></p>
              </div>

              <div className='btn-wrap'>

                <input type='button' id='login-btn' value={'Login'} />
              </div>
              <p className='login-check-text'>Don't have an account? <a href='#' id='reg' >Register here</a></p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
