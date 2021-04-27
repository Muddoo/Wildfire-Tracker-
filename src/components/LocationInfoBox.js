const LocationInfoBox = ({ info, setLocationInfo }) => {
    return (
        <div className="location-info">
            <h2>Event Location Info</h2>
            <ul>
    <li><strong>ID: </strong>{ info.id }</li>
    <li><strong>Location: </strong>{ info.title.replace("Wildfire -", "") }</li>
            </ul>
            <button onClick={() => setLocationInfo()}>Close</button>
        </div>
    )
}

export default LocationInfoBox
