export default function RollResultDisplayer({ resultArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], closeRRD, displayStatus }) {
    return (
        <div id="roll-result-displayer" style={{ display: displayStatus ? 'block' : 'none' }}>
            <button id="close-rrd" onClick={closeRRD}>×</button>
            <p>Roll Results</p>
            <div id="result-squares-container">
                {resultArray.map((res, index) => (
                    <ResultSquare 
                        result={res}
                        key={index}
                        style={{ gridArea: `rs${index}` }}
                    />
                ))}
            </div>
        </div>
    )
}

function ResultSquare({ result = 2 }) {
    return (
        <div className={
            result === 0
            ? 'result-square log-the-chosen-one'
            : result === 1
            ? 'result-square log-wildcard'
            : 'result-square log-not-chosen'
        }>

        </div>
    )
}