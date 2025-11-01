export default function Support() {
  return (
    <div
      className="table-responsive text-muted"
      style={{ width: "75%", margin: "auto" }}
    >
      <h3>Demat AMC (Annual Maintenance Charge)</h3>
      <table className="table table-bordered table-sm text-muted mt-4">
        <thead>
          <tr>
            <th>Type of account</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Online account</td>
            <td>
              <span class="free-tag">free</span>
            </td>
          </tr>
          <tr>
            <td>Offline account</td>
            <td>
              <span class="free-tag">free</span>
            </td>
          </tr>
          <tr>
            <td>NRI account (offline only)</td>
            <td>₹ 500</td>
          </tr>
          <tr>
            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
            <td>₹ 500</td>
          </tr>
        </tbody>
      </table>

      <p className="">
        * Lower AMC is applicable only if the account qualifies as a Basic
        Services Demat Account (BSDA). BSDA account holders cannot hold more
        than one demat account. To learn more about BSDA, click here.
      </p>

      <h3 className="" style={{ marginTop: "100px" }}>
        Demat AMC (Annual Maintenance Charge)
      </h3>
      <table className="table table-bordered table-sm text-muted mt-4">
        <thead>
          <tr>
            <th>Service</th>
            <th>Billing Frquency</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tickertape</td>
            <td>Monthly / Annual</td>
            <td>Free: 0 | Pro: 249/2399</td>
          </tr>
          <tr>
            <td>Smallcase</td>
            <td>Per transaction</td>
            <td>Buy &amp; Invest More: 100 | SIP: 10</td>
          </tr>
          <tr>
            <td>Kite Connect</td>
            <td>Monthly</td>
            <td>Connect: 500 | Personal: Free</td>
          </tr>
        </tbody>
      </table>

      <div className="container p-5">
        <h4>Charges explained</h4>
        <div className="row">
          <div className="col">
            <p className="">Securities/Commodities transaction tax</p>
            <p>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.{" "}
              <br></br>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}
