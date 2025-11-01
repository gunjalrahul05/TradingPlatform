export default function Universe() {
  return (
    <div className="container text-muted fs-6 p-5">
      <h5 className="text-center">
        Want to know more about our technology stack? Check out the{" "}
        <a href="" style={{ textDecoration: "none" }}>
          {" "}
          Zerodha.tech
        </a>{" "}
        blog.
      </h5>

      <h3 className="text-center mt-5">The Zerodha Universe</h3>
      <p className="text-center mt-2">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row">
        <div className="col p-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "50%" }}
            className="mx-auto d-block"
          ></img>
          <p className="pt-4 text-center">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col p-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "90%" }}
            className="mx-auto d-block"
          ></img>
          <p className="pt-4 text-center">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col p-5">
          <img
            src="media/images/tijori.svg"
            style={{ width: "50%" }}
            className="mx-auto d-block"
          ></img>
          <p className="text-center pt-2">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col p-3">
          <img
            src="media/images/streakLogo.png"
            style={{ width: "50%" }}
            className="mx-auto d-block"
          ></img>
          <p className="pt-4 text-center">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col p-3">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "70%" }}
            className="mx-auto d-block"
          ></img>
          <p className="pt-4 text-center">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col p-3">
          <img
            src="media/images/dittoLogo.png"
            style={{ width: "50%" }}
            className="mx-auto d-block"
          ></img>
          <p className="text-center pt-4">
            Personalized advice on lif- and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <div className="row">
          <button
            type="button"
            className="btn btn-primary mx-auto d-grid"
            style={{ width: "20%" }}
          >
            SignUp Now
          </button>
        </div>
      </div>
    </div>
  );
}
