
import React from "react";
import {
  Row,
  Col,
  Progress,
  Table,
  Label,
  Input,
} from 'reactstrap';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Widget from '../../../../../components/Widget';

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import * as firebase from 'firebase';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";


import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";
import css from "./index.css"
import compass from "./compass.svg"
const libraries = ["places"];
const mapContainerStyle = {
  height: "75vh",
  width: "55vw",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: false,
};
const center = {
  lat: 33.946584,
  lng:  -118.384790,
};

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCStTMJl2QcIuEkTRGJyu-1TIO_46TcMaA",
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback((e) => {
    const mark = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      time: new Date()
    }
    firebase.firestore().collection("Markers").add({mark})
    setMarkers((current) => [
      ...current,
      mark,
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
    firebase.firestore().collection("Markers").get().then((snapshot) => {
      snapshot.forEach((ref) => {
        setMarkers((current) => [
          ...current,
          ref.data().mark,
        ]);
      })
    });
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(19);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <h1>
        Layout

      </h1>

      <Locate panTo={panTo} />
      <Search panTo={panTo} />
      <Row>
      <Col lg={10.5}>
<Widget>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={19}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={{

              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                POI
              </h2>

            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
      </Widget>
      </Col>
      </Row>
    </div>
  );
}

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
        <img src="compass.svg" alt="compass" />
    </button>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>

        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
