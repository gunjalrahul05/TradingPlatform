export default function Pricing(){
    return(
        <div className="container p-5 text-muted">
            <div className="row p-5 align-item-end">
                <div className="col-6 p-5">
                    <h3 className="mb-4">Unbetable Price</h3>
                    <div className="row">
                    </div>
                    <div className="row">
                        <p>
                            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                        </p>
                        <a href = "" className='' style={{textDecoration:"none"}}>Try Kite demo</a>

                    </div>
                </div>
                <div className="col-2 mt-5 p-3" >
                    <img src="media/images/pricing0.svg"></img>
                    <p style={{fontSize:"12px",margin:"-15px"}} className="mx-5"> Free account opening</p>
                </div>
                <div className="col-2 mt-5 p-3">
                    <img src="media/images/pricing0.svg"></img>
                    <p style={{fontSize:"12px",margin:"-15px"}} className="mx-4"> Free equity delivery and direct mutual funds </p>
                </div>
                <div className="col-2 mt-5 p-3">
                    <div className="row">
                        <img src="media/images/pricing0.svg"></img>
                        <p style={{fontSize:"12px",margin:"-15px"}} className="mx-4"> Intraday and F&O</p>
                    </div>
                </div>
            </div>
            <div className="row">

            </div>
        </div>
    );
}