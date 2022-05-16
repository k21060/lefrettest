console.log("Hello,World!");


window.onload = (event) => {
    console.log("onload!!");

    // Leaflet
    let mymap = L.map("mapid").setView([35.432204836911204, 139.39947375369147], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicGVuZ2luMDMyNSIsImEiOiJjbDI0ajhrdmsyMDNnM2Nta2xob3plcm9oIn0.CRspz6NBRtLga-iCRkAxbg',
    }).addTo(mymap);

    // var elem = document.getElementById("json-data");
    // var data = JSON.parse(elem.textContent);x

    $.getJSON("test.json", (data) => {
        for (i = 0; i < data.csv.length; i++) {
            if (data.csv[0] == 1) {
                L.marker([35.432204836911204, 139.39947375369147]).addTo(mymap);
                // 海老名SA
            } else {
                return;
            }

            if (data.csv[1] == 1) {
                L.marker([35.432204836911204, 139.39947375369147]).addTo(mymap);
                // 海老名SA
            } else {
                return;
            }

            if (data.csv[2] == 1) {
                L.marker([35.432204836911204, 139.39947375369147]).addTo(mymap);
                // 海老名SA
            } else {
                return;
            }
        }
    });

    // if(data[1]==1){
    //     L.marker([35.432204836911204, 139.39947375369147]).addTo(mymap);
    // // 海老名SA
    // } else {
    //     return;
    // }


}