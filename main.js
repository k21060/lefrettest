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


    $.getJSON("test.json", (data) => {
        for (i = 0; i < data.csv.length; i++) {
            if (data.csv[0] == 1) {
                L.marker([35.53555704142074, 139.53332974572305]).addTo(mymap);
                // 港北ＰＡ下り
            } else {
                return;
            }

            if (data.csv[1] == 1) {
                L.marker([35.53289415085004, 139.5269139018005]).addTo(mymap);
                // 港北ＰＡ上り
            } else {
                return;
            }

            if (data.csv[2] == 1) {
                L.marker([35.43219572486074, 139.39942013137994]).addTo(mymap);
                // 海老名上り
            } else {
                return;
            }

            if (data.csv[3] == 1) {
                L.marker([35.43106801462662, 139.40144788132517]).addTo(mymap);
                // 海老名下り
            } else {
                return;
            }

            if (data.csv[4] == 1) {
                L.marker([35.341776915770765, 139.1990086978828]).addTo(mymap);
                // 中井上り
            } else {
                return;
            }

            if (data.csv[5] == 1) {
                L.marker([35.34312520441186, 139.20352664598278]).addTo(mymap);
                // 中井下り
            } else {
                return;
            }

            if (data.csv[6] == 1) {
                L.marker([35.36243143193735, 139.02212629851493]).addTo(mymap);
                // 鮎沢ＰＡ下り
            } else {
                return;
            }

            if (data.csv[7] == 1) {
                L.marker([35.35637673544914, 139.015778080105]).addTo(mymap);
                // 鮎沢ＰＡ上り
            } else {
                return;
            }

            if (data.csv[8] == 1) {
                L.marker([35.25319573434324, 138.90933539712387]).addTo(mymap);
                // 駒門ＰＡ上り
            } else {
                return;
            }

            if (data.csv[9] == 1) {
                L.marker([35.2388712290444, 138.90899488316725]).addTo(mymap);
                // 駒門ＰＡ下り
            } else {
                return;
            }

            if (data.csv[10] == 1) {
                L.marker([35.160475646390715, 138.6180040421412]).addTo(mymap);
                // 富士川ＳＡ上り
            } else {
                return;
            }

            if (data.csv[11] == 1) {
                L.marker([35.08835116272313, 138.54933454269428]).addTo(mymap);
                // 由比ＰＡ下り
            } else {
                return;
            }

            if (data.csv[12] == 1) {
                L.marker([35.07808648256645, 138.54646865759585]).addTo(mymap);
                // 由比ＰＡ上り
            } else {
                return;
            }

            if (data.csv[13] == 1) {
                L.marker([34.9835559384981, 138.43352637945742]).addTo(mymap);
                // 日本平ＰＡ上り
            } else {
                return;
            }

            if (data.csv[14] == 1) {
                L.marker([34.98531398235594, 138.43548975641858]).addTo(mymap);
                // 日本平ＰＡ下り
            } else {
                return;
            }

            if (data.csv[15] == 1) {
                L.marker([34.88970061184776, 138.3189888995843]).addTo(mymap);
                // 日本坂ＰＡ上り
            } else {
                return;
            }

            if (data.csv[16] == 1) {
                L.marker([34.88911098439637, 138.3201905291815]).addTo(mymap);
                // 日本坂ＰＡ下
            } else {
                return;
            }

            if (data.csv[17] == 1) {
                L.marker([34.761391861865334, 138.15604918014546]).addTo(mymap);
                // 牧之原ＳＡ上
            } else {
                return;
            }

            if (data.csv[18] == 1) {
                L.marker([34.761129565198296, 137.99696889849082]).addTo(mymap);
                // 小笠ＰＡ上り
            } else {
                return;
            }

            if (data.csv[19] == 1) {
                L.marker([34.760698561011154, 138.00344913304633]).addTo(mymap);
                // 小笠ＰＡ下り
            } else {
                return;
            }

            if (data.csv[20] == 1) {
                L.marker([34.75744924564527, 137.73823713736303]).addTo(mymap);
                // 三方原ＰＡ上り
            } else {
                return;
            }

            if (data.csv[21] == 1) {
                L.marker([34.75738639327688, 137.7374622762928]).addTo(mymap);
                // 三方原ＰＡ下り
            } else {
                return;
            }

            if (data.csv[22] == 1) {
                L.marker([34.84364410695155, 137.49871778315136]).addTo(mymap);
                // 新城ＰＡ上り
            } else {
                return;
            }

            if (data.csv[23] == 1) {
                L.marker([34.84284257500481, 137.49823364819318]).addTo(mymap);
                // 新城ＰＡ下り
            } else {
                return;
            }

            if (data.csv[24] == 1) {
                L.marker([34.84348897507361, 137.44861361198704]).addTo(mymap);
                // 豊橋ＰＡ下り
            } else {
                return;
            }

            if (data.csv[25] == 1) {
                L.marker([34.85089460760868, 137.36154975246615]).addTo(mymap);
                // 赤塚ＰＡ上り
            } else {
                return;
            }

            if (data.csv[26] == 1) {
                L.marker([34.8507086486625, 137.3666326298379]).addTo(mymap);
                // 赤塚ＰＡ下り
            } else {
                return;
            }

            if (data.csv[27] == 1) {
                L.marker([34.92042426582103, 137.2349143273328]).addTo(mymap);
                // 美合ＰＡ下り
            } else {
                return;
            }

            if (data.csv[28] == 1) {
                L.marker([34.92654229479117, 137.22433577311236]).addTo(mymap);
                // 美合ＰＡ上り
            } else {
                return;
            }

            if (data.csv[29] == 1) {
                L.marker([35.03264345516058, 137.1355600966519]).addTo(mymap);
                // 豊田上郷ＳＡ上り
            } else {
                return;
            }

            if (data.csv[30] == 1) {
                L.marker([35.031185125451806, 137.13500219719606]).addTo(mymap);
                // 豊田上郷ＳＡ下り
            } else {
                return;
            }

            if (data.csv[31] == 1) {
                L.marker([35.131061456985606, 137.0844094371346]).addTo(mymap);
                // 東郷ＰＡ上り
            } else {
                return;
            }

            if (data.csv[32] == 1) {
                L.marker([35.13009626195369, 137.0845167254915]).addTo(mymap);
                // 東郷ＰＡ下り
            } else {
                return;
            }

        }
    });

}