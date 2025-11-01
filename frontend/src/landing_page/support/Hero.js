export default function Hero() {
  return (
    <div
      className="container-fluid mt-5 text-muted"
      style={{ backgroundColor: "#e6e6e6ee" }}
    >
      <div className="container p-5">
        <div className="row p-2">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1> Support Portal</h1>
            <button
              type="button"
              class="btn btn-primary "
              style={{ width: "10%", height:"80%" }}
            >
              My tickets
            </button>
          </div>
          <div className="searchBox d-flex align-items-center">
            <i className="fa fx-4 fa-search  mx-2" aria-hidden="true"></i>
            <p className="mt-3 mx-2">
              Eg. How do i open my account, How do i active my F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
