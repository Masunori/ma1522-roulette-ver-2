import Descriptor from "./Descriptor";
import Illustrator from "./Illustrator";

export default function Banner({ setRollResults, playAnimation }) {
    return (
      <div id="banner">
        <Descriptor />
        <Illustrator setRollResults={setRollResults} playAnimation={playAnimation} />
      </div>
    )
}