import { useState } from "react";
export default function Brokarage() {
  const [activeTable, setActiveTable] = useState(0);

  const table = [
    {
      name: "Equity",
      content: (
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Equity delivery </th>
              <th>Equity intraday </th>
              <th>F&O - Futures </th>
              <th>F&O - Options </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Features</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td>Features</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td>Features</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td>Features</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td>Features</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td>Features</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      name: "Currency",
      content: (
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Equity delivery </th>
              <th>Equity intraday </th>
              <th>F&O - Futures </th>
              <th>F&O - Options </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Features22</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td>Features</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td>Features</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td>Features</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td>Features</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td>Features</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      name: "Commodity",
      content: (
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Equity delivery </th>
              <th>Equity intraday </th>
              <th>F&O - Futures </th>
              <th>F&O - Options </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Features33</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td>Features</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td>Features</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td>Features</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td>Features</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td>Features</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
          </tbody>
        </table>
      ),
    },
  ];
  return (
    <div className="container p-5">
      <div className=" d-md-block border-bottom mx-5">
        {["Equity", " Currency", "Commodity"].map((label, index) => (
          <button
            key={index}
            className={`btn m-3 ${
              activeTable === index ? "btn-primary" : "btn-outline-primary"
            }`}
            type="button"
            onClick={() => setActiveTable(index)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="container p-5">{table[activeTable].content}</div>
      <h4 className="text-center">
        <a href=" " style={{textDecoration:"none"}}>Calculate your costs upfront</a> using our brokerage
        calculator
      </h4>
    </div>
  );
}
