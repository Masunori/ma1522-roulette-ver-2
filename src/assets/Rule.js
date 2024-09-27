import Logs from "./Logs";

const changeBgCol = (button, color) => document.getElementById(button).style.backgroundColor = color;

const rulesButtons = [["details", "view-details", () => changeBgCol('view-details', '#242b1a'), () => changeBgCol('view-details', '#384920')], 
                      ["drop-rates", 'view-drop-rates', () => changeBgCol('view-drop-rates', '#242b1a'), () => changeBgCol('view-drop-rates', '#384920')],
                      ["logs", "view-logs", () => changeBgCol('view-logs', '#242b1a'), () => changeBgCol('view-logs', '#384920')]];

export function focusOn(id) {
    rulesButtons.forEach(([block, button, f1, f2]) => {
        if (block === id) {
            document.getElementById(block).style.display = "block";
            const buttonElement = document.getElementById(button);
            buttonElement.style.backgroundColor = "#384920";

            buttonElement.removeEventListener("mouseover", f2);
            buttonElement.removeEventListener("mouseout", f1);
        } else {
            document.getElementById(block).style.display = "none";
            const buttonElement = document.getElementById(button);
            buttonElement.style.backgroundColor = "#242b1a";

            buttonElement.addEventListener("mouseover", f2);
            buttonElement.addEventListener("mouseout", f1);
        }
    });
};

export default function Rule({ rollResults }) {
    return (
      <div id="rule">
        <div id="rule-navbar">
            <button onClick={() => focusOn('details')} id="view-details">View details</button>
            <button onClick={() => focusOn('drop-rates')} id="view-drop-rates">View drop rates</button>
            <button onClick={() => focusOn('logs')} id="view-logs">View logs</button>
        </div>
        <div id="details">
          <h1>MA1522 Tutorial 5 Banner Details</h1>
          <ul>
            <li>Somebody is guaranteed to be chosen at the 300th roll.</li>
            <li>You can roll 1 or 10 times.</li>
            <li>Wild Cards will either help or sabotage you.</li>
            <li>After being chosen, you can choose not to use Wild Cards, or pick 1 out of the number of Wild Card chances obtained.</li>
          </ul>
        </div>
        <div id="drop-rates">
            <h1>MA1522 Tutorial 5 Banner Drop Rates</h1>
            <table id="drop-rates-table">
                <tr>
                    <th>Item</th>
                    <th>Drop Rate</th>
                </tr>
                <tr>
                    <td>The Chosen One</td>
                    <td>1%</td>
                </tr>
                <tr>
                    <td>Wild Card</td>
                    <td>5.22%</td>
                </tr>
                <tr>
                    <td>Not Chosen</td>
                    <td>93.78%</td>
                </tr>
            </table>
        </div>
        <div id="logs">
            <h1>Display all Wild Cards and The Chosen One rolls</h1>
            <div id="table-container">
                <Logs rollResults={rollResults} />  
            </div>
        </div>
        <div>
          <button id="toggle-rules" onClick={() => toggle("dummy")}>I understand</button>
        </div>
      </div>
    )
};

export function toggle(id) {
    const rule = document.getElementById("rule");
    const app = document.getElementById("app");

    if (rule.style.opacity !== '0') {
        rule.style.opacity = '0';
        rule.style.pointerEvents = 'none';
        app.style.pointerEvents = 'auto';
    } else {
        rule.style.opacity = '1';
        rule.style.pointerEvents = 'auto';
        app.style.pointerEvents = 'none';
        focusOn(id);
    }
}