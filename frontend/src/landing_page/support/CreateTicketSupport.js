import { useState } from "react";

export default function CreateTicketSupport({ list, icon, heading }) {
  const [button, setButton] = useState(false);

  return (
    <div className="container mt-5">
      <div
        className="create-ticket-layout text-muted d-flex align-items-center"
        onClick={() => setButton(!button)}
      >
        <div
          style={{
            height: "49px",
            width: "49px",
            backgroundColor: "#56dfcf82",
            borderRadius: "10px 0px 0px 10px",
          }}
          className="d-flex align-items-center justify-content-center "
        >
          {icon}
        </div>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: "85%", marginLeft: "20px", height: "100%" }}
        >
          <p className="mt-3">{heading}</p>
          <div>
            {button ? (
              <i class="fa fs-3 fa-angle-down" aria-hidden="true"></i>
            ) : (
              <i class="fa fs-3 fa-angle-up" aria-hidden="true"></i>
            )}
          </div>
        </div>
      </div>
      {button && (
        <div className="ticketListDiv p-5">
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <a href="" style={{ textDecoration: "none" }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
