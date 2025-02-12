import { toggle } from "./Rule";

export default function Descriptor() {
    return (
      <div id="descriptor">
        <div id="descriptor-highlight">
          Event Banner
        </div>
        <div id="separator"></div>
          <h2>MA1522 Tutorial 7 Banner</h2>
          <p>Ends at 10am, Monday, 14th October 2024</p>
          <p>No, this banner does not drop Dr Jonathon Teo, I just have no design ideas.</p>

          <div id="buttons"> 
            <button onClick={() => toggle('details')}>View details</button>
            <button onClick={() => toggle('drop-rates')}>View drop rates</button>
            <button onClick={() => toggle('logs')}>View logs</button>
          </div>
      </div>
    )
};