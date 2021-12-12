ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([121.524348, 25.038053, 121.561266, 25.064297]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 0.754000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_1994_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "1994年美軍繪製台灣地圖",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1994_2.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [121.488231, 25.015061, 121.589412, 25.090035]
                            })
                        });
var format_04_3 = new ol.format.GeoJSON();
var features_04_3 = format_04_3.readFeatures(json_04_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_04_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_3.addFeatures(features_04_3);
var lyr_04_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_04_3, 
                style: style_04_3,
                interactive: true,
                title: '<img src="styles/legend/04_3.png" /> 04身心障礙專用(機車)'
            });
var format_03_4 = new ol.format.GeoJSON();
var features_03_4 = format_03_4.readFeatures(json_03_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_03_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03_4.addFeatures(features_03_4);
var lyr_03_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_03_4, 
                style: style_03_4,
                interactive: true,
                title: '<img src="styles/legend/03_4.png" /> 03身心障礙專用(汽車)'
            });
var format_02_5 = new ol.format.GeoJSON();
var features_02_5 = format_02_5.readFeatures(json_02_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_02_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02_5.addFeatures(features_02_5);
var lyr_02_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_02_5, 
                style: style_02_5,
                interactive: true,
                title: '<img src="styles/legend/02_5.png" /> 02機車'
            });
var format_01_6 = new ol.format.GeoJSON();
var features_01_6 = format_01_6.readFeatures(json_01_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_01_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01_6.addFeatures(features_01_6);
var lyr_01_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_01_6, 
                style: style_01_6,
                interactive: true,
                title: '<img src="styles/legend/01_6.png" /> 01小型車'
            });
var format_park07_7 = new ol.format.GeoJSON();
var features_park07_7 = format_park07_7.readFeatures(json_park07_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_park07_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_park07_7.addFeatures(features_park07_7);
var lyr_park07_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_park07_7, 
                style: style_park07_7,
                interactive: true,
                title: '<img src="styles/legend/park07_7.png" /> park07 機車灣停車格'
            });
var format_park09_8 = new ol.format.GeoJSON();
var features_park09_8 = format_park09_8.readFeatures(json_park09_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_park09_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_park09_8.addFeatures(features_park09_8);
var lyr_park09_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_park09_8, 
                style: style_park09_8,
                interactive: true,
                title: '<img src="styles/legend/park09_8.png" /> park09 自行車停車格'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_1994_2.setVisible(true);lyr_04_3.setVisible(true);lyr_03_4.setVisible(true);lyr_02_5.setVisible(true);lyr_01_6.setVisible(true);lyr_park07_7.setVisible(true);lyr_park09_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_1994_2,lyr_04_3,lyr_03_4,lyr_02_5,lyr_01_6,lyr_park07_7,lyr_park09_8];
lyr_04_3.set('fieldAliases', {'KEYID': 'KEYID', 'ROAD': 'ROAD', });
lyr_03_4.set('fieldAliases', {'KEYID': 'KEYID', 'ROAD': 'ROAD', });
lyr_02_5.set('fieldAliases', {'KEYID': 'KEYID', 'ROAD': 'ROAD', });
lyr_01_6.set('fieldAliases', {'KEYID': 'KEYID', 'ROAD': 'ROAD', });
lyr_park07_7.set('fieldAliases', {'KEYID': 'KEYID', 'ROAD': 'ROAD', });
lyr_park09_8.set('fieldAliases', {'ID': 'ID', 'Road': 'Road', });
lyr_04_3.set('fieldImages', {'KEYID': '', 'ROAD': '', });
lyr_03_4.set('fieldImages', {'KEYID': '', 'ROAD': '', });
lyr_02_5.set('fieldImages', {'KEYID': '', 'ROAD': '', });
lyr_01_6.set('fieldImages', {'KEYID': '', 'ROAD': '', });
lyr_park07_7.set('fieldImages', {'KEYID': 'TextEdit', 'ROAD': 'TextEdit', });
lyr_park09_8.set('fieldImages', {'ID': 'TextEdit', 'Road': 'TextEdit', });
lyr_04_3.set('fieldLabels', {'KEYID': 'header label', 'ROAD': 'header label', });
lyr_03_4.set('fieldLabels', {'KEYID': 'header label', 'ROAD': 'header label', });
lyr_02_5.set('fieldLabels', {'KEYID': 'header label', 'ROAD': 'header label', });
lyr_01_6.set('fieldLabels', {'KEYID': 'header label', 'ROAD': 'header label', });
lyr_park07_7.set('fieldLabels', {'KEYID': 'header label', 'ROAD': 'header label', });
lyr_park09_8.set('fieldLabels', {'ID': 'header label', 'Road': 'header label', });
lyr_park09_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});