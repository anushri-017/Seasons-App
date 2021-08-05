import React from 'react';

const seasonConfig = {
    summer:{
        text : "lets hit the beach!",
        iconName : 'sun'
    },
    winter:{
        text:"Burp! its Chilly",
        iconName: 'snowflake'
    }
}

const getSeason = (lat,month) =>{
 if (month > 2 && month < 9){
     return lat > 0 ? 'summer' : 'winter';
 }
 else{
     return lat > 0 ? 'winter' : 'summer';
 }
}

const SeasonDisplay = props =>{
    const season = getSeason(props.latitude, new Date().getMonth());
    const {text,iconName} = seasonConfig[season]; //destructuring
    return (
        <div>
            <i className= {`${iconName} icon`}/>
          <h1>{text}</h1>
            <i className= {`${iconName} icon`}/>
        </div>
    )
}
export default SeasonDisplay;