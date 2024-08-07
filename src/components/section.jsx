import React from "react";



const Section = (props)=>{
    return(
        <>

            <div className="section5">
                <div className="section5content" style={{display: "flex", flexDirection: props.direction}}>
                    <div className="section5img">
                        <img src={props.img} alt="" />
                    </div>
                    <div className="section5text">
                        <nav>
                            <h1>{props.h1}</h1>
                            <p>{props.p} <span>{props.span}</span></p>
                        </nav>    
                    </div>
                </div>
            </div>

        </>
    )
}




export default Section