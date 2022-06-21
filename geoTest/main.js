console.log("Hello,World!");

{
    "type"; "FeatureCollection",
    "features"; [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [139.766667, 35.681111],
            },
            "properties": {
                "name": "東京駅",
                "operator": ["JR東日本", "JR東海"]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [135.494972, 34.701889],
            },
            "properties": {
                "name": "大阪駅",
                "operator": ["JR西日本"]
            }
        }
    ]
}

let clicktimestep=0;

function plottimestep (mymap,data){
    var keys = Object.keys(data);
    
    if (data[(keys[clicktimestep])][0] == 1) {
        L.marker([35.53555704142074, 139.53332974572305]).addTo(mymap);
        // 港北ＰＡ下り
    }
    if (data[(keys[clicktimestep])][1] == 1) {
        L.marker([35.53289415085004, 139.5269139018005]).addTo(mymap);
        // 港北ＰＡ上り
    }

    if (data[(keys[clicktimestep])][2] == 1) {
        L.marker([35.43219572486074, 139.39942013137994]).addTo(mymap);
        // 海老名上り
    } 

    if (data[(keys[clicktimestep])][3] == 1) {
        L.marker([35.43106801462662, 139.40144788132517]).addTo(mymap);
        // 海老名下り
    } 

    if (data[(keys[clicktimestep])][4] == 1) {
        L.marker([35.341776915770765, 139.1990086978828]).addTo(mymap);
        // 中井上り
    } 

    if (data[(keys[clicktimestep])][5] == 1) {
        L.marker([35.34312520441186, 139.20352664598278]).addTo(mymap);
        // 中井下り
    } 

    if (data[(keys[clicktimestep])][6] == 1) {
        L.marker([35.36243143193735, 139.02212629851493]).addTo(mymap);
        // 鮎沢ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][7] == 1) {
        L.marker([35.35637673544914, 139.015778080105]).addTo(mymap);
        // 鮎沢ＰＡ上り
    } 

    if (data[(keys[clicktimestep])][8] == 1) {
        L.marker([35.25319573434324, 138.90933539712387]).addTo(mymap);
        // 駒門ＰＡ上り
    } 
    if (data[(keys[clicktimestep])][9] == 1) {
        L.marker([35.2388712290444, 138.90899488316725]).addTo(mymap);
        // 駒門ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][10] == 1) {
        L.marker([35.160475646390715, 138.6180040421412]).addTo(mymap);
        // 富士川ＳＡ上り
    } 
    if (data[(keys[clicktimestep])][11] == 1) {
        L.marker([35.08835116272313, 138.54933454269428]).addTo(mymap);
        // 由比ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][12] == 1) {
        L.marker([35.07808648256645, 138.54646865759585]).addTo(mymap);
        // 由比ＰＡ上り
    } 

    if (data[(keys[clicktimestep])][13] == 1) {
        L.marker([34.9835559384981, 138.43352637945742]).addTo(mymap);
        // 日本平ＰＡ上り
    } 

    if (data[(keys[clicktimestep])][14] == 1) {
        L.marker([34.98531398235594, 138.43548975641858]).addTo(mymap);
        // 日本平ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][15] == 1) {
        L.marker([34.88970061184776, 138.3189888995843]).addTo(mymap);
        // 日本坂ＰＡ上り
    } 
    if (data[(keys[clicktimestep])][16] == 1) {
        L.marker([34.88911098439637, 138.3201905291815]).addTo(mymap);
        // 日本坂ＰＡ下
    } 

    if (data[(keys[clicktimestep])][17] == 1) {
        L.marker([34.761391861865334, 138.15604918014546]).addTo(mymap);
        // 牧之原ＳＡ上
    } 

    if (data[(keys[clicktimestep])][18] == 1) {
        L.marker([34.761129565198296, 137.99696889849082]).addTo(mymap);
        // 小笠ＰＡ上り
    } 

    if (data[(keys[clicktimestep])][19] == 1) {
        L.marker([34.760698561011154, 138.00344913304633]).addTo(mymap);
        // 小笠ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][20] == 1) {
        L.marker([34.75744924564527, 137.73823713736303]).addTo(mymap);
        // 三方原ＰＡ上り
    } 

    if (data[(keys[clicktimestep])][21] == 1) {
        L.marker([34.75738639327688, 137.7374622762928]).addTo(mymap);
        // 三方原ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][22] == 1) {
        L.marker([34.84364410695155, 137.49871778315136]).addTo(mymap);
        // 新城ＰＡ上り
    } 

    if (data[(keys[clicktimestep])][23] == 1) {
        L.marker([34.84284257500481, 137.49823364819318]).addTo(mymap);
        // 新城ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][24] == 1) {
        L.marker([34.84348897507361, 137.44861361198704]).addTo(mymap);
        // 豊橋ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][25] == 1) {
        L.marker([34.85089460760868, 137.36154975246615]).addTo(mymap);
        // 赤塚ＰＡ上り
    } 

    if (data[(keys[clicktimestep])][26] == 1) {
        L.marker([34.8507086486625, 137.3666326298379]).addTo(mymap);
        // 赤塚ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][27] == 1) {
        L.marker([34.92042426582103, 137.2349143273328]).addTo(mymap);
        // 美合ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][28] == 1) {
        L.marker([34.92654229479117, 137.22433577311236]).addTo(mymap);
        // 美合ＰＡ上り
    } 

    if (data[(keys[clicktimestep])][29] == 1) {
        L.marker([35.03264345516058, 137.1355600966519]).addTo(mymap);
        // 豊田上郷ＳＡ上り
    } 

    if (data[(keys[clicktimestep])][30] == 1) {
        L.marker([35.031185125451806, 137.13500219719606]).addTo(mymap);
        // 豊田上郷ＳＡ下り
    } 

    if (data[(keys[clicktimestep])][31] == 1) {
        L.marker([35.131061456985606, 137.0844094371346]).addTo(mymap);
        // 東郷ＰＡ上り
    } 

    if (data[(keys[clicktimestep])][32] == 1) {
        L.marker([35.13009626195369, 137.0845167254915]).addTo(mymap);
        // 東郷ＰＡ下り
    } 
}



function removePin (mymap,data){
    var keys = Object.keys(data);
    
    if (data[(keys[clicktimestep])][0] == 1) {
        map.removeLayer(L.marker([35.53555704142074, 139.53332974572305]).addTo(mymap));
        // 港北ＰＡ下り
    }
    if (data[(keys[clicktimestep])][1] == 1) {
        map.removeLayer(L.marker([35.53289415085004, 139.5269139018005]).addTo(mymap));
        // 港北ＰＡ上り
    }

    if (data[(keys[clicktimestep])][2] == 1) {
        map.removeLayer(L.marker([35.43219572486074, 139.39942013137994]).addTo(mymap));
        // 海老名上り
    } 

    if (data[(keys[clicktimestep])][3] == 1) {
        map.removeLayer(L.marker([35.43106801462662, 139.40144788132517]).addTo(mymap));
        // 海老名下り
    } 

    if (data[(keys[clicktimestep])][4] == 1) {
        map.removeLayer(L.marker([35.341776915770765, 139.1990086978828]).addTo(mymap));
        // 中井上り
    } 

    if (data[(keys[clicktimestep])][5] == 1) {
        map.removeLayer(L.marker([35.34312520441186, 139.20352664598278]).addTo(mymap));
        // 中井下り
    } 

    if (data[(keys[clicktimestep])][6] == 1) {
        map.removeLayer(L.marker([35.36243143193735, 139.02212629851493]).addTo(mymap));
        // 鮎沢ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][7] == 1) {
        map.removeLayer(L.marker([35.35637673544914, 139.015778080105]).addTo(mymap));
        // 鮎沢ＰＡ上り
    } 

    if (data[(keys[clicktimestep])][8] == 1) {
        map.removeLayer(L.marker([35.25319573434324, 138.90933539712387]).addTo(mymap));
        // 駒門ＰＡ上り
    } 
    if (data[(keys[clicktimestep])][9] == 1) {
        map.removeLayer(L.marker([35.2388712290444, 138.90899488316725]).addTo(mymap));
        // 駒門ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][10] == 1) {
        map.removeLayer(L.marker([35.160475646390715, 138.6180040421412]).addTo(mymap));
        // 富士川ＳＡ上り
    } 
    if (data[(keys[clicktimestep])][11] == 1) {
        map.removeLayer(L.marker([35.08835116272313, 138.54933454269428]).addTo(mymap));
        // 由比ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][12] == 1) {
        map.removeLayer(L.marker([35.07808648256645, 138.54646865759585]).addTo(mymap));
        // 由比ＰＡ上り
    } 

    if (data[(keys[clicktimestep])][13] == 1) {
        map.removeLayer(L.marker([34.9835559384981, 138.43352637945742]).addTo(mymap));
        // 日本平ＰＡ上り
    } 

    if (data[(keys[clicktimestep])][14] == 1) {
        map.removeLayer(L.marker([34.98531398235594, 138.43548975641858]).addTo(mymap));
        // 日本平ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][15] == 1) {
        map.removeLayer(L.marker([34.88970061184776, 138.3189888995843]).addTo(mymap));
        // 日本坂ＰＡ上り
    } 
    if (data[(keys[clicktimestep])][16] == 1) {
        map.removeLayer(L.marker([34.88911098439637, 138.3201905291815]).addTo(mymap));
        // 日本坂ＰＡ下
    } 

    if (data[(keys[clicktimestep])][17] == 1) {
        map.removeLayer(L.marker([34.761391861865334, 138.15604918014546]).addTo(mymap));
        // 牧之原ＳＡ上
    } 

    if (data[(keys[clicktimestep])][18] == 1) {
        map.removeLayer(L.marker([34.761129565198296, 137.99696889849082]).addTo(mymap));
        // 小笠ＰＡ上り
    } 

    if (data[(keys[clicktimestep])][19] == 1) {
        map.removeLayer(L.marker([34.760698561011154, 138.00344913304633]).addTo(mymap));
        // 小笠ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][20] == 1) {
        map.removeLayer(L.marker([34.75744924564527, 137.73823713736303]).addTo(mymap));
        // 三方原ＰＡ上り
    } 

    if (data[(keys[clicktimestep])][21] == 1) {
        map.removeLayer(L.marker([34.75738639327688, 137.7374622762928]).addTo(mymap));
        // 三方原ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][22] == 1) {
        map.removeLayer(L.marker([34.84364410695155, 137.49871778315136]).addTo(mymap));
        // 新城ＰＡ上り
    } 

    if (data[(keys[clicktimestep])][23] == 1) {
        map.removeLayer(L.marker([34.84284257500481, 137.49823364819318]).addTo(mymap));
        // 新城ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][24] == 1) {
        map.removeLayer(L.marker([34.84348897507361, 137.44861361198704]).addTo(mymap));
        // 豊橋ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][25] == 1) {
        map.removeLayer(L.marker([34.85089460760868, 137.36154975246615]).addTo(mymap));
        // 赤塚ＰＡ上り
    } 

    if (data[(keys[clicktimestep])][26] == 1) {
        map.removeLayer(L.marker([34.8507086486625, 137.3666326298379]).addTo(mymap));
        // 赤塚ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][27] == 1) {
        map.removeLayer(L.marker([34.92042426582103, 137.2349143273328]).addTo(mymap));
        // 美合ＰＡ下り
    } 

    if (data[(keys[clicktimestep])][28] == 1) {
        map.removeLayer(L.marker([34.92654229479117, 137.22433577311236]).addTo(mymap));
        // 美合ＰＡ上り
    } 

    if (data[(keys[clicktimestep])][29] == 1) {
        map.removeLayer(L.marker([35.03264345516058, 137.1355600966519]).addTo(mymap));
        // 豊田上郷ＳＡ上り
    } 

    if (data[(keys[clicktimestep])][30] == 1) {
        map.removeLayer(L.marker([35.031185125451806, 137.13500219719606]).addTo(mymap));
        // 豊田上郷ＳＡ下り
    } 

    if (data[(keys[clicktimestep])][31] == 1) {
        map.removeLayer(L.marker([35.131061456985606, 137.0844094371346]).addTo(mymap));
        // 東郷ＰＡ上り
    } 

    if (data[(keys[clicktimestep])][32] == 1) {
        map.removeLayer(L.marker([35.13009626195369, 137.0845167254915]).addTo(mymap));
        // 東郷ＰＡ下り
    } 
}




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
        
        //iに入れる値を外で覚えておくor引数

        plottimestep(mymap,data);

        console.log(clicktimestep);

        var lb = document.getElementById('left-button');
        lb.addEventListener("click", function (e) {
            removePin(mymap,data);
            console.log("left");
            if(clicktimestep > 0) {
                clicktimestep = clicktimestep - 1;
                plottimestep(mymap,data);
            }
            console.log(clicktimestep);
            
        })


        var lb = document.getElementById('right-button');
        lb.addEventListener("click", function (e) {
            removePin(mymap,data);
            console.log("right");
            if(clicktimestep < Object.keys(data).length - 1) {
                clicktimestep = clicktimestep + 1;
                plottimestep(mymap,data);
            }
            console.log(clicktimestep);
        })

        //ピンが増え続けるので削除
        //console.logで途中で見る

    });

}