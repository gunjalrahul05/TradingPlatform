export default function Hero() {
  return (
    <div className="container p-5 text-muted">
      <div className="row p-5">
        <h4 className="text-center">Charges</h4>
        <h5
          className="text-center
        "
        >
          List of all charges and taxes
        </h5>
      </div>

      <div className="row p-5">
        <div className="col p-3">
          <img
            src="media/images/pricing0.svg"
            style={{ width: "70%" }}
            className="mx-5"
          ></img>
          <h3 className="text-center">Free equity delivery</h3>
          <p className="text-center">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col p-3">
          <img
            src="media/images/other-trades.svg"
            style={{ width: "70%" }}
            className="mx-5"
          ></img>
          <h3 className="text-center">Intraday and F&O trades</h3>
          <p className="text-center">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col p-3">
          <img
            src="media/images/pricing0.svg"
            style={{ width: "70%" }}
            className="mx-5"
          ></img>
          <h3 className="text-center">Free direct MF</h3>
          <p className="text-center">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}
