import Link from 'next/link';

export default () => (
  <div className="about-us">
    <div className="logo-container">
      <Link
        href="http://www.traineffective.com"
        prefetch
        >
        <a target="_blank">
          <img
            src="http://blog.traineffective.com/wp-content/uploads/2017/02/logo-150x150.png"
            className="logo"
            />
        </a>
      </Link>
    </div>
    <div className="text-container">
      <h2 className="name">
        Train Effective
      </h2>
      <p>Effective empowers youth to achieve their full potential.</p>
      <p>We inspire our youth and their communities through the medium of sport, using the greats 
      of sport to educate them through the core principles of success and achievement.</p>
      <p>With expert content providers from teams in the English Premiership League & The Football Association, 
        our first of its kind e-learning community transforms youth from over 45 countries into believers of themselves 
        and trusters of “the process”, resulting in an unshakeable confidence to take on any challenge, forever.</p>
      <p>Through the intersection of sport, technology and a powerful community focused on achieving mastery of 
        their discipline and themselves, our mission is to impact 1 million individuals through the Effective platform by 2020.</p>
      <p>With our tailored online football academy, we are giving access to the resources of what was once available to a 
        select few, to the whole world.</p>
      <p>Join our mission to make the world a more empowered place than ever before.</p>
      <p className="section-name">Specialites:</p>
      <p>Sports, Football, Soccer, E-Learning, and Edutech</p>
      <div className="float-fix">
        <div className="one-third">
          <p className="section-name">Headquarters:</p>
          <p>Canberra</p>
          <p className="section-name">Website</p>
          <Link
            href="http://traineffective.com"
            prefetch
            >
            <a target="_blank"><p>https://traineffective.com</p></a>
          </Link>
          <p className="section-name">Founded:</p>
          <p>2015</p>
        </div>
        <div className="one-third">
          <p className="section-name">Company size:</p>
          <p>2-10 employees</p>
          <p className="section-name">Industry:</p>
          <p>E-Learning</p>
        </div>
      </div>
    </div>
    <div className="team-container">
      <h2 className="name">
        The Team
      </h2>
      <p>The Effective Team has been built from the ground up on a passion for the beautiful game, 
        a admiration for the greats of sport and a mission to improve education. Our team from all 
        over the world were either early subscribers that believed in the vision or stumbled across 
        Effective on various startup sites.</p>
      <div className="people-container">
        <div className="float-fix">
          <div className="one-third">
            <div className="person">
              <img src="http://blog.traineffective.com/wp-content/uploads/2017/02/Nick-150x150.jpg" alt="Nick Humphries"/>
              <h3>Nick Humphries</h3>
              <h4>Founder &amp; CEO</h4>
            </div>
            <div className="person">
              <img src="http://blog.traineffective.com/wp-content/uploads/2017/02/Polski-150x150.jpg" alt="Nick Humphries"/>
              <h3>Marcin Polski</h3>
              <h4>Junior Engineer</h4>
            </div>
            <div className="person">
              <img src="http://blog.traineffective.com/wp-content/uploads/2017/03/tom-cooper-150x150.png" alt="Nick Humphries"/>
              <h3>Tom Cooper</h3>
              <h4>Game Brain Coach &amp; England Analyst</h4>
            </div>
          </div>
          <div className="one-third">
            <div className="person">
              <img src="http://blog.traineffective.com/wp-content/uploads/2017/02/zdjecie-150x150.jpg" alt="Nick Humphries"/>
              <h3>Marcin Forysinski</h3>
              <h4>Head of Analytics &amp; Optimization</h4>
            </div>
            <div className="person">
              <img src="http://blog.traineffective.com/wp-content/uploads/2017/02/hashir.jpg" alt="Nick Humphries"/>
              <h3>Hashir Khan</h3>
              <h4>Intern</h4>
            </div>
            <div className="person">
              <img src="http://blog.traineffective.com/wp-content/uploads/2017/02/367e655-150x150.jpg" alt="Nick Humphries"/>
              <h3>Stephen Corns</h3>
              <h4>Game Brain Coach &amp; Stoke City 1st Team Analyst</h4>
            </div>
          </div>
          <div className="one-third">
            <div className="person">
              <img src="http://blog.traineffective.com/wp-content/uploads/2017/02/Paul-150x150.jpg" alt="Nick Humphries"/>
              <h3>Paul Hayes</h3>
              <h4>Senior Engineer</h4>
            </div>
            <div className="person">
              <img src="http://blog.traineffective.com/wp-content/uploads/2017/02/John-Moses-Liberia-150x150.jpg" alt="Nick Humphries"/>
              <h3>John Moses</h3>
              <h4>Drills Coach &amp; Creator</h4>
            </div>
            <div className="person">
              <img src="http://blog.traineffective.com/wp-content/uploads/2017/02/richard-150x150.jpg" alt="Nick Humphries"/>
              <h3>Richard Allen</h3>
              <h4>Game Brain Coach &amp; Nottingham Forrest Coach</h4>
            </div>
          </div>
        </div>
      </div>
      <p>We’re always open to people who are aligned in the vision of empowering our youth. 
        Send us a description of yourself and a CV.</p>
      <div
        className="button-container">
        <Link
          href="http://www.traineffective.com/contact"
          prefetch
          >
          <a target="_blank" className="button">
            Contact Us
          </a>
        </Link>
      </div>
      <p>If you're interested in becoming an affiliate, check out the 
        <Link
          href="http://blog.traineffective.com/affiliate"
          prefetch
          >
          <a className="link"> TrainEffective Athlete page.</a>
        </Link>
      </p>
    </div>
    <style jsx>{`
      .logo-container {
        width: 100%;
        margin-bottom: 35px;
      }

      .logo-container img {
        width: 150px;
        height: 150px;
        margin-left: calc(50% - 75px);
        cursor: pointer;
      }

      .name {
        font-size: 37px;
        line-height: 1.1;
        margin-bottom: 35px;
        font-family: Roboto;
        font-weight: 400;
        color: #313131;
      }

      .text-container {
        margin-bottom: 35px;
      }

      p {
        font-size: 14px;
        line-height: 1.8;
        font-weight: 400;
        margin-bottom: 20px;
        color: #494c4e;
      }

      .section-name {
        margin-bottom: 0;
        font-weight: bold;
      }

      .float-fix:after {
        content: "";
        clear: both;
        display: table;
      }

      .one-third {
        width: 33%;
        float: left;
      }

      .team-container {
        margin-bottom: 60px;
      }

      .team-container .name {
        margin-bottom: 10px;
      }

      .people-container {
        margin-top: 65px;
      }

      .person {
        padding: 0 15px;
        width: 100%;
        margin-bottom: 35px;
      }

      .person img {
        width: 150px;
        height: 150px;
        margin-left: calc(50% - 75px);
        border-radius: 100px;
      }

      .person h3 {
        font-family: Roboto;
        text-align: center;
        width: 100%;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 1.2;
        margin-bottom: 10px;
        color: #313131;
        margin-top: 20px;
      }

      .person h4 {
        font-family: Roboto;
        text-align: center;
        width: 100%;
        font-style: normal;
        font-weight: 500;
        color: #56595d;
        font-size: 14px;
        line-height: 1.3;
        margin-bottom: 4px;
      }

      .link {
        text-decoration: none;
        color: #0093d0;
      }

      .link:hover {
        color: #e84c3d;
      }

      .button-container {
        margin-bottom: 20px;
      }

      .button {
        padding: 9px 14px;
        font-size: 15px;
        border-radius: 2px;
        background: #ff675b;
        border: 1px solid rgba(0, 0, 0, 0.1);
        text-align: center;
        text-decoration: none;
        color: #fff;
        margin-bottom: 60px;
        cursor: pointer;
      }

      .button:hover {
        background: #ff4f42;
      }

      @media (max-width: 1200px) {
        .about-us {
          width: 920px;
          margin: auto;
        }
      }

      @media (max-width: 960px) {
        .about-us {
          width: 728px;
        }
      }

      @media (max-width: 767px) {
        .about-us {
          width: 380px;
        }

        .one-third {
          width: 100%;
        }
      }

      @media (max-width: 479px) {
        .about-us {
          width: 260px;
        }
      }

    `}</style>
  </div>
)
