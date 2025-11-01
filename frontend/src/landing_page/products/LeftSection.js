export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryNow,
  learnMore,
  playStore,
  appStore,
}) {
  return (
    <div className="container p-5">
      <div className="row p-5 border-top">
        <div className="col p-5">
          <img src={imageURL}></img>
        </div>
        <div className="col p-5 fs-5 text-muted">
          <h3 className="mt-5 fs-2">{productName}</h3>

          <p>{productDescription}</p>
          <a href="tryNow" style={{ textDecoration: "none" }}>
            Try now <i class="fa fa-long-arrow-right" aria-hidden="true"></i>

          </a>
          <a
            href="learnMore"
            className="mx-5"
            style={{ textDecoration: "none" }}
          >
            Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>

          </a>

          <br></br>

          <a href="">
            <img src={playStore} className="mt-5"></img>
          </a>
          <a href="">
            <img src={appStore} className="mt-5 mx-5"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
