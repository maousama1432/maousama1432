export default function Map() {
    return (
        <div id="map-container-google-1" className="z-depth-1-half map-container">
            <iframe
                id="gmap_canvas"
                src={"https://maps.google.com/maps?q=Nova%20Andradina%20+IFMS+&t=&z=13&ie=UTF8&iwloc=&output=embed"}
                frameBorder="0" scrolling="no"
                marginHeight="0"
                marginWidth="0">
            </iframe>
        </div>
    )
}