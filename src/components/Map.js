import {GeoJSON, MapContainer, TileLayer} from "react-leaflet";
import geoJson from "../resources/geojsonV2.json";
import {Component, useContext, useEffect, useRef, useState} from "react";
import {ThemeContext} from "../theme/theme_context";
import {Stack, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import "leaflet/dist/leaflet.css"

const POSITION_CLASSES = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
}

const Metric = {
    NoPBO: 0,
    PrevalencePBO: 1,
    NoUnmetPBO: 2,
    UnmetPBOPercentage: 3,
}

const global_data = {
    Region: "Global",
    pop_thousands: 7349485,
    no_presbyopia_thousands: 1827170,
    prevalence_presbyopia: 0.25,
    no_unmet_presbyopia: 826157,
    unmet_proportion:0.452
}

class InfoControl extends Component {
    constructor(props) {
        super(props);
        this.state = {properties: global_data}
        this.info_style = {
            padding: "6px 8px",
            font: "14px/16px Arial, Helvetica, sans-serif",
            background: "rgba(255,255,255,0.8)",
            boxShadow: "0 0 15px rgba(0,0,0,0.2)",
            borderRadius: "5px",
            lineHeight: "80%",
        }
        this.info_h4_style = {
            margin: "0 0 5px",
            color: "#777",
        }
    }

    changeProperties = (new_properties) => {
        this.setState({properties: new_properties})
    }

    render () {
        return (
            <div className={POSITION_CLASSES[this.props.position]}>
                <div style={this.info_style} className="leaflet-control">
                    <h4 style={this.info_h4_style}>{this.state.properties.Region}</h4>
                    <p><b>Population (000s): </b>{(this.state.properties.pop_thousands).toLocaleString()}</p>
                    <p><b>Presbyopia (000s): </b>{(this.state.properties.no_presbyopia_thousands).toLocaleString()}</p>
                    <p><b>Presbyopia Prevalence: </b>{(this.state.properties.prevalence_presbyopia).toLocaleString("en-US", { style: 'percent' })}</p>
                    <p><b>Uncorrected Presbyopia (000s): </b>{(this.state.properties.no_unmet_presbyopia).toLocaleString()}</p>
                    <p><b>Proportion of Uncorrected Presbyopia: </b>{(this.state.properties.unmet_proportion).toLocaleString("en-US", { style: 'percent' })}</p>
                </div>
            </div>
        )
    }
}

function LegendControl({position, metric}) {
    const legend_style = {
        padding: "6px 8px",
        font: "14px/16px Arial, Helvetica, sans-serif",
        background: "rgba(255,255,255,0.8)",
        boxShadow: "0 0 15px rgba(0,0,0,0.2)",
        borderRadius: "5px",
        lineHeight: "18px",
        color: "#555"
    }
    const legend_i_style = {
        width: "18px",
        height: "18px",
        float: "left",
        marginRight: "8px",
        opacity: "0.7",
    }
    const legend_h4_style = {
        margin: "0 0 5px",
        color: "#777",
    }

    const [colors, setColors] = useState([])
    const [labels, setLabels] = useState([])

    useEffect(() => {
        switch (metric) {
            case Metric.NoPBO:
                setColors(['#800026', '#FC4E2A', '#FEB24C', '#FED976'])
                setLabels([">= 100,000", ">= 20,000", ">= 10,000", "< 10,000"])
                break
            case Metric.NoUnmetPBO:
                setColors(['#800026', '#E31A1C', '#FED976', '#FFEDA0'])
                setLabels([">= 100,000", ">= 10,000", ">= 5,000", "< 5,000"])
                break
            case Metric.PrevalencePBO:
                setColors(['#FD8D3C', '#FEB24C', '#FEB24C'])
                setLabels([">= 30%", ">= 20%", "< 20%"])
                break
            case Metric.UnmetPBOPercentage:
                setColors(['#800026', '#E31A1C', '#FED976', '#FFEDA0'])
                setLabels([">= 66.66%", ">= 33.33%", ">= 5%", "< 5%"])
                break
        }
    }, [metric])

    return (
        <div className={POSITION_CLASSES[position]}>
            <div style={legend_style} className="leaflet-control">
                <h4 style={legend_h4_style}>Legend</h4>
                {colors.map((color, index) => (
                    <div key={metric + index}><i style={{...legend_i_style, background: color}}/> {labels[index]} <br/></div>
                ))}
            </div>
        </div>
    )
}

export function Map(props) {
    const theme = useContext(ThemeContext);
    const [metric,setMetric] = useState(Metric.NoUnmetPBO)
    const InfoRef = useRef()

    function getColor(properties) {
        let v;
        switch (metric) {
            case Metric.NoPBO:
                v = properties.no_presbyopia_thousands
                return v >= 100000 ? '#800026' :
                        v >= 20000  ? '#FC4E2A' :
                        v >= 10000 ? '#FEB24C' :
                            '#FED976'
            case Metric.PrevalencePBO:
                v = properties.prevalence_presbyopia
                return v >= 0.3 ? '#FD8D3C' :
                        v >= 0.2  ? '#FEB24C' :
                            '#FEB24C'
            case Metric.NoUnmetPBO:
                v = properties.no_unmet_presbyopia
                return v >= 100000 ? '#800026' :
                        v >= 10000  ? '#E31A1C' :
                        v >= 5000 ? '#FED976' :
                            '#FFEDA0'
            case Metric.UnmetPBOPercentage:
                v = properties.unmet_proportion
                return v >= 0.66 ? '#800026' :
                        v >= 0.33  ? '#E31A1C' :
                        v >= 0.05 ? '#FED976' :
                            '#FFEDA0'
        }
    }
    function area_style(feature) {
        return {
            fillColor: getColor(feature.properties),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }
    const handleChange = (event, newMetric) => {
        if (newMetric != null) {
            setMetric(newMetric)
        }
    }
    function highlightFeature(e) {
        const layer = e.target;
        layer.setStyle({
            weight: 3,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });
        layer.bringToFront();
        InfoRef.current.changeProperties(layer.feature.properties)
    }
    function resetHighlight(e) {
        const layer = e.target;
        layer.setStyle({
            weight: 2,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        });
        layer.bringToBack();
        InfoRef.current.changeProperties(global_data)
    }
    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight
        });
    }

    return (
        <Stack spacing={2}>
            <MapContainer center={[25, 0]} zoom={2} scrollWheelZoom={false} style={{
                height: "500px",
                border: "3px solid",
                borderColor: theme.primary_dark
            }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
                />
                <GeoJSON data={geoJson} style={area_style} onEachFeature={onEachFeature}/>
                <InfoControl position="bottomleft" ref={InfoRef}/>
                <LegendControl position="topright" metric={metric}/>
            </MapContainer>
            <ToggleButtonGroup
                color="primary"
                value={metric}
                exclusive
                onChange={handleChange}
                aria-label="Metrics"
                size="small"
            >
                <ToggleButton value={Metric.NoPBO}>Presbyopia Cases (Thousands)</ToggleButton>
                <ToggleButton value={Metric.PrevalencePBO}>Prevalence of Presbyopia (%)</ToggleButton>
                <ToggleButton value={Metric.NoUnmetPBO}>Uncorrected Presbyopia Cases (Thousands)</ToggleButton>
                <ToggleButton value={Metric.UnmetPBOPercentage}>Proportion of Uncorrected Presbyopia (%)</ToggleButton>
            </ToggleButtonGroup>
            <Typography variant="caption">
                This map adapted data from <em>Global Prevalence of Presbyopia and Vision Impairment from
                Uncorrected Presbyopia: Systematic Review, Meta-analysis, and Modelling (Fricke et al, 2018)</em>
            </Typography>
        </Stack>
    )
}
