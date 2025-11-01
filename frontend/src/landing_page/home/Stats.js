import React from 'react'

export default function Stats(){
    return(
        <div className="container p-5">
                <div className="row p-5">
                    <div className="col-6 p-5">
                        <h1 className='pb-3 fs-2 '>Trust with confidence</h1>
                        <h2 className='fs-4'>Customer-first always</h2>                        
                        <p className='text-muted'>
                            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
                        </p>
                        <h2 className='fs-4'>No spam or gimmicks</h2>
                        <p className='text-muted'>
                            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                        <h2 className='fs-4'>The Zerodha universe</h2>
                        <p className='text-muted'>

                            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        <h2 className='fs-4'>Do better wiht money</h2>
                        <p className='text-muted'>
                            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
 

                    </div>
                    <div className="col-6 align-item-center">
                        <img src = "media/images/ecosystem.png" style={{width:"95%"}}></img>
                        <div className="mt-3 text-center">
                            <a href="" style={{textDecoration:"none"}}>Explore our products</a>
                            <a href = "" className='mx-5' style={{textDecoration:"none"}}>Try Kite demo</a>
                        </div>
                    </div>
                </div>
                <div className="row text-center" style={{margin:"0,auto"}}>
                    <img src="media/images/pressLogos.png" style={{width:"60%",margin:"0 auto"}}></img>
                </div>
            </div>
    );
}