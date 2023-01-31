import React from 'react'

function Alerts(props) {
    // const capitalize =(word)=>{
    //     let lower = word.tolowercase();
    //     return lower.chartAt(0).touppercase() + lower.slice(1);
    // }
  return (
    
    <div style={{height:'50px'}}>
    {/* // now for success greeen warning you have to pass a template literal for that as type  */}
          {props.alert&& <div class={`alert alert-${props.alert.type} alert-dismissible fade show` } role="alert">
                  <strong>{props.alert.type}</strong>:{props.alert.msg}
                    
          </div>}
    </div>
 
   
  )
}

export default Alerts
