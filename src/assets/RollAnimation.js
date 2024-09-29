import ReactPlayer from 'react-player';

export default function RollAnimation({ isPlaying, handleEnded, outcome = -1 }) {    
    const videoToPlay = outcome === 1
                        ? process.env.PUBLIC_URL + '/videos/Outcome-1.mp4'
                        : outcome === 0
                        ? process.env.PUBLIC_URL + '/videos/Outcome-2.mp4'
                        : process.env.PUBLIC_URL + '/videos/Outcome-Nah.mp4';

    return (
        <ReactPlayer 
            url={videoToPlay}
            playing={isPlaying}
            onEnded={handleEnded}
            width='100%'
            height='100%'
            style={{ 
                display: isPlaying ? 'block' : 'none',
                position: 'fixed',
                top: '0',
                left: '0', 
            }} 
        />
    )
}