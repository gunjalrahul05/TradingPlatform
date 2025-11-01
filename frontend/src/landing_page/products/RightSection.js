export default function RightSection({
  imageURL,
  productName,
  productDescription,
  tryNow,
}) {
  return (
    <div className="container p-5">
      <div className="row p-5 border-top">
        <div className="col p-5 fs-5 text-muted">
          <h3 className="mt-5 fs-2">{productName}</h3>

          <p>{productDescription}</p>
          <a href={tryNow} style={{ textDecoration: "none" }}>
            Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col p-5">
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}
