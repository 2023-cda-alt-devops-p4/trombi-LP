import "./App.css";
import MapView from "./Component/MapView";
import Footer from "./Component/Footer";
import { StudientData } from "./Component/StudientData";

function App() {
  return (
    <div className="App">
      <MapView
        withHeight="100vh"
        zoom={8.5}
        center={[49.63297, 3.05858]}
        markers={StudientData}
        scrollWheelZoom={true}
      />
      <Footer />
    </div>
  );
}

export default App;
