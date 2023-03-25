import { Button } from "react-bootstrap";
import { ClimbingBoxLoader } from "react-spinners";
import "./NoItemsComponent.css"

function NoItemsComponent({ isLoaded, handleSearch }) {
  return (
    <div className="parent">
      {isLoaded ? (
        <div>
          <h4 color="#2E3840">Looks like there's nothing as such.</h4>
          <Button variant="dark" onClick={() => handleSearch("")}>Reset Search</Button>
        </div>
      ) : (
        <div >
          <ClimbingBoxLoader color="#2E3840"className="component"/>
          <h4>Loading, please be patient our backend is very slow...</h4>
        </div>
      )}
    </div>
  );
}

export default NoItemsComponent;
