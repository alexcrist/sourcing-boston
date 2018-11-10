import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class MapComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            zoom: 13,
            lat: 51,
            lng: 0,
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div className="map-container">
                <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </Map>
            </div>
        );
    }
}

export default MapComponent;