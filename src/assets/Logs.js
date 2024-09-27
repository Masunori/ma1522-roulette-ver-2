export default function Logs({ rollResults }) {
    return (
        <table id="logs-table">
            <thead>
                <tr>
                <th>Roll number</th>
                <th>Roll result</th>
                </tr>
            </thead>
            <tbody>
                {rollResults.map(([roll, result]) => (
                    <tr key={roll}>
                        <td>{roll}</td>
                        <td>{result}</td>
                    </tr>
                ))}
            </tbody>
        </table>
          
      );
};