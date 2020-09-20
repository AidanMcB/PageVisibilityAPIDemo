import React, { useState, useEffect } from 'react';

import VideoContainer from './VideoContainer'

export default function MainPage() {

    const [visible, setVisible] = useState(undefined)
    const [num, setNum] = useState(0)

    // useEffect( () => {
    //     setTimeout(function(){ console.log("here", document.visibiltyState; }, 3000);
    // })
    // setInterval(function(){ console.log("This", document.visibilityState) }, 3000);

    // console.log("dm", document.onvisibilitychange)

    function handleVisibilityChange() {
        if (document.hidden) {
          console.log("hidden here");
          setNum(num+1)
        } else  {
           console.log("showing here");
        }
      }
      
      document.addEventListener("visibilitychange", handleVisibilityChange, false);

    return (
        <div>Main Page
            <VideoContainer />
            {num}
            <button onClick={() => console.log("ok")}>Button </button>
        </div>
    )
}