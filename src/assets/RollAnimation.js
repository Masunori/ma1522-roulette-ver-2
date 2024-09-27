import { useEffect, useRef } from "react";

export default function RollAnimation({ setPlayFunction }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (setPlayFunction) {
            setPlayFunction(() => {
                if (videoRef.current) {
                    videoRef.current.play();
                }
            });
        }
    }, [setPlayFunction]);

    return (
        <div id="roll-animation">
            <video ref={videoRef} width="100vw" height="100vh">
                <source src="./../photos/Outcome-2.mp4" type="video/mp4" />
            </video>
        </div>
    )
}