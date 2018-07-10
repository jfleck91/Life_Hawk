import React from "react";

const Banners = (props)=>{

    return(  
      <div className="col-md-6">
        <div className="panel panel-primary">
          <div className="panel-heading">{props.pageName}</div>
          <div className="panel-body"></div>
         
        </div>
      </div>
      )
    }


export default Banners;