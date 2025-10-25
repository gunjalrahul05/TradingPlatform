import React from 'react'

export default function Stats(){
    return(
        <div className="container p-5">
                <div className="row">
                    <div className="col-5">
                        <h1>Trust with confidence</h1>
                        <h2>Customer-first always</h2>                        <p>
                            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
                        </p>
                        <h2>No spam or gimmicks</h2>
                        <p>
                            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                        <h2>The Zerodha universe</h2>
                        <p>

                            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        <h2>Do better wiht money</h2>
                        <p>
                            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
 

                    </div>
                    <div className="col-7 align-item-center">
                        <img src = "media/images/ecosystem.png" style={{height:623,width:612}}></img>
                    </div>
                </div>
                <div className="row">
                    <img src="media/images/pressLogos.png" style={{width:"60%",margin:"0 auto"}}></img>
                </div>
            </div>
    );
}