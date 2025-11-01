export default function Team() {
  return (
    <div className="container p-5">
      <h3 className="text-center mb-5 text-muted">People</h3>

      <div className="row p-5">
        <div className="col-4">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "70%" }}
          ></img>
          <h4 className="mx-5">Rahul Gunjal</h4>
          <p className="mx-5">&nbsp;&nbsp;&nbsp;Founter & CEO</p>
        </div>

        <div className="col-8 fs-5" style={{ paddingRight: "300px" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry. He
            is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}
