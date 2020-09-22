import React, { useState, useEffect } from 'react';

export default function MainPage() {

    let [num, setNum] = useState(0)

    
    // function handleVisibilityChange() {
    //     if (document.hidden == false) {
    //         setNum(num+=1)
    //     }
    // }
    
    var stopVideo = function ( element ) {
        var iframe = element.querySelector( 'iframe');
        var video = element.querySelector( 'video' );
        if ( iframe ) {
            var iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }
        if ( video ) {
            video.pause();
        }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange, false);

   
    return (
        <div>
            <button onClick={stopVideo}>Stop The Video</button>
            <h1>How many times have I navigated away?</h1>
            <iframe id="videoElement" width="560" height="315" src="https://www.youtube.com/embed/UX1WHwFztzY?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}






