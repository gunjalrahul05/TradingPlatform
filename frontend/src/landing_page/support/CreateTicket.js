import CreateTicketSupport from "./CreateTicketSupport";

export default function CreateTicket() {
  return (
    <div className="container l-5">
      <div className="row p-3">
        <div className="col-8">
          <CreateTicketSupport
            list={[
              "Resident individual",
              "Minor",
              "Non Resident Indian (NRI)",
              "Company, Partnership, HUF and LLP",
              "Glossary",
            ]}
            icon={<i class="fa fa-plus-circle" aria-hidden="true"></i>}
            heading="Account Opening"
          />

          <CreateTicketSupport
            list={[
              "Your Profile",
              "Account modification",
              "Client Master Report (CMR) and Depository Participant (DP)",
              "Nomination",
              "Transfer and conversion of securities",
            ]}
            icon={<i class="fa fa-plus-circle" aria-hidden="true"></i>}
            heading="Your Zerodha Account"
          />

          <CreateTicketSupport
            list={[
              "IPO",
              "Trading FAQs",
              "Margin Trading Facility (MTF) and Margins",
              "Charts and orders",
              "Alerts and Nudges",
              "General",
            ]}
            icon={<i class="fa fa-key" aria-hidden="true"></i>}
            heading="kite"
          />

          <CreateTicketSupport
            list={[
              "Add money",
              "Withdraw money",
              "Add bank accounts",
              "eMandates",
            ]}
            icon={<i class="fa fa-inr" aria-hidden="true"></i>}
            heading="Funds"
          />

          <CreateTicketSupport
            list={[
              "Portfolio",
              "Corporate actions",
              "Funds statement",
              "Reports",
              "Profile",
              "Segments",
            ]}
            icon={<i class="fa fa-contao" aria-hidden="true"></i>}
            heading="Console"
          />

          <CreateTicketSupport
            list={[
              "Mutual funds",
              "National Pension Scheme (NPS)",
              "Fixed Deposit (FD)",
              "Features on Coin",
              "Payments and Orders",
              "General",
            ]}
            icon={<i class="fa fa-adjust" aria-hidden="true"></i>}
            heading="Coin"
          />

          <CreateTicketSupport
            list={[
              "Mutual funds",
              "National Pension Scheme (NPS)",
              "Fixed Deposit (FD)",
              "Features on Coin",
              "Payments and Orders",
              "General",
            ]}
            icon={<i class="fa fa-link" aria-hidden="true"></i>}
            heading="Quick"
          />
        </div>

        <div className="col-4 mt-5">
          <div
            style={{
              height: "170px",
              width: "400px",
              backgroundColor: "rgba(246, 197, 197, 0.22)",
            }}
            className="d-flex"
          >
            <div
              style={{
                height: "100%",
                width: "15px",
                backgroundColor: "#ff8800ff",
              }}
            ></div>
            <div className="pt-4 fs-5">
              <ul>
                <li>
                  <a href=" " className="">
                    Latest Intraday leverages and Square-off timings
                  </a>
                </li>
                <li>
                  <a href="">Surveillance measure on scrips - October 2025</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="mt-5"
            style={{
              width: "400px",
              backgroundColor: "white",
              height: "400px",
            }}
          >
            <table className="table table-bordered border ">
              <tr>
                <th scope="row">Quick links</th>
              </tr>
              <tr>
                <th scope="row">
                  <a href="">1. Track account opening</a>
                </th>
              </tr>
              <tr>
                <th scope="row">
                  <a href="">2. Track segment activation </a>{" "}
                </th>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <a href="">3. Intraday margins</a>
                </th>
              </tr>
              <tr>
                <th scope="row">
                  <a href="">4. Kite user manual</a>
                </th>
              </tr>
              <tr>
                <th scope="row">
                  <a href="">5. Learn how to create a ticket</a>
                </th>
              </tr>
             
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
