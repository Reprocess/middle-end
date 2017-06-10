import Link from 'next/link';

export default () => (
  <div className="affiliate-container">
    <div className="headline">
      <h2>become a traineffective athlete</h2>
    </div>
    <div className="breadcrumbs-w">
      <h3>
        <Link
          href="/"
          prefetch
          >
          <a>home </a>
        </Link>
        » become a traineffective athlete</h3>
    </div>
    <div className="text">
      <h2 className="name">What Is The TrainEffective Athlete Program?</h2>
      <p>With an abundance of sports-related training pages all over Instagam, Facebook and Snapchat, there’s a lot of potential for monetisation. By becoming a TrainEffective athlete, you’ll be able to partner with a highly credible brand working with an extensive list of highly reputed organisations, from Premier League clubs to National Team Associations. TrainEffective athlete’s are individually selected based on reach, association to the product and most importantly quality/relevance of content.</p>
      <p className="section-name">Requirements:</p>
      <ul>
        <li>Account in good-standing</li>
        <li>Posts relevant content</li>
        <li>Has minimum following of 500.</li>
      </ul>
      <p className="section-name">Benefits:</p>
      <ul>
        <li>Generous commission scheme</li>
        <li>Brand/individual persona exposure</li>
        <li>Access to exposure group</li>
        <li>Free use of content and material</li>
        <li>Easy access to design assets</li>
      </ul>
      <p>2 featured affiliates appear below with pics and and description:</p>
      <div className="float-fix">
        <div className="half">
          <h4>@OneFootballer</h4>
          <img src="http://blog.traineffective.com/wp-content/uploads/2017/02/big-new-insta-post-150x150.jpg"/>
          <p>OneFootballer is a persona – a confidence you operate from. All have it, but few develop it. The brand shares the same values as TrainEffective and has created a successful partnership.</p>
        </div>
        <div className="half">
          <h4>@ElationFootball</h4>
          <img src="http://blog.traineffective.com/wp-content/uploads/2017/02/logoelation-150x150.png"/>
          <p>With over 130,000 followers, ElationFootball monetises their reach with theTrainEffective’s complementary content.</p>
        </div>
      </div>
    </div>
    <div
      className="button-container">
      <Link
        href="http://blog.traineffective.com/become-affiliate"
        prefetch
        >
        <a target="_blank" className="button">
          Become a TrainEffective Athlete
        </a>
      </Link>
    </div>
    <style jsx>{`
      .headline {
        width: 100%;
        padding: 14px 0;
        display: block;
        max-width: 1068px;
        margin: auto;
        border: 1px solid #e1e1e1;
        margin-top: -35px;
      }

      .headline h2 {
        font-size: 27px;
        line-height: 1.3;
        position: relative;
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: -1px;
        padding-left: 30px;
        color: #000;
      }

      .breadcrumbs-w {
        background: #f9f9f9;
        padding: 10px 30px 10px 30px;
        font-size: 11px;
        color: #5c646d;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: 400;
        max-width: 1068px;
        margin: auto;
        border: 1px solid #e1e1e1;
        border-top: none;
        margin-bottom: 35px;
      }

      .breadcrumbs-w h3 {
        color: #5c646d;
        font-weigth: 400;
        font-size: 100%;
      }

      a {
        text-decoration: none;
        color: #5c646d;
      }

      a:hover {
        text-decoration: underline;
      }

      .text {
        margin-bottom: 35px;
      }

      .name {
        text-align: center;
        font-family: Roboto;
        font-weight: 400;
        font-style: normal;
        font-size: 37px;
        line-height: 1.1;
        margin-bottom: 10px;
        color: #313131;
        margin-bottom: 10px;
      }

      p {
        margin: 0 0 20px 0;
        color: #494c4e;
        font-size: 14px;
        line-height: 1.8;
        font-weight: 400;
        text-align: center;
        margin-bottom: 20px;
      }

      .section-name {
        font-weight: bold;
      }
      
      ul {
        text-align: center;
        margin-bottom; 21px;
        list-style: inside;
      }

      li {
        font-size: 13px;
        line-height: 18px;
        margin-bottom: 14px;
        font-weight: 400;
        color: #525559;
      }

      .float-fix:after {
        content: "";
        clear: both;
        display: table;
      }

      .half {
        width: 50%;
        float: left;
        padding: 0 15px;
      }

      h4 {
        text-align: center;
        font-family: Abril Fatface;
        font-weight: 400;
        font-style: normal;
        font-size: 20px;
        line-height: 1.2;
        margin-bottom: 10px;
        color: #313131;
        margin-bottom: 10px;
      }

      img {
        width: 150px;
        height: 150px;
        margin-left: calc(50% - 75px);
      }

      .half p {
        text-align: left;
      }

      .button-container {
        margin-bottom: 35px;
        width: 100%;
        text-align: center;
      }

      .button {
        padding: 9px 14px;
        font-size: 18px;
        line-height: 1.33;
        border-radius: 2px;
        background: #ff675b;
        border: 1px solid rgba(0, 0, 0, 0.1);
        text-align: center;
        text-decoration: none;
        color: #fff;
        margin: 0 auto;
        cursor: pointer;
      }

      .button:hover {
        background: #ff4f42;
        text-decoration: none;
      }
    `}</style>
  </div>
);
