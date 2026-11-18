var wms_layers = [];

var format_nieve_2025shpnieve_2025_bruto_0 = new ol.format.GeoJSON();
var features_nieve_2025shpnieve_2025_bruto_0 = format_nieve_2025shpnieve_2025_bruto_0.readFeatures(json_nieve_2025shpnieve_2025_bruto_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nieve_2025shpnieve_2025_bruto_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nieve_2025shpnieve_2025_bruto_0.addFeatures(features_nieve_2025shpnieve_2025_bruto_0);
var lyr_nieve_2025shpnieve_2025_bruto_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nieve_2025shpnieve_2025_bruto_0, 
                style: style_nieve_2025shpnieve_2025_bruto_0,
                popuplayertitle: 'nieve_2025.shp — nieve_2025_bruto',
                interactive: true,
                title: '<img src="styles/legend/nieve_2025shpnieve_2025_bruto_0.png" /> nieve_2025.shp — nieve_2025_bruto'
            });
var format_nieve_2026_1 = new ol.format.GeoJSON();
var features_nieve_2026_1 = format_nieve_2026_1.readFeatures(json_nieve_2026_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nieve_2026_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nieve_2026_1.addFeatures(features_nieve_2026_1);
var lyr_nieve_2026_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nieve_2026_1, 
                style: style_nieve_2026_1,
                popuplayertitle: 'nieve_2026',
                interactive: true,
                title: '<img src="styles/legend/nieve_2026_1.png" /> nieve_2026'
            });

lyr_nieve_2025shpnieve_2025_bruto_0.setVisible(true);lyr_nieve_2026_1.setVisible(true);
var layersList = [lyr_nieve_2025shpnieve_2025_bruto_0,lyr_nieve_2026_1];
lyr_nieve_2025shpnieve_2025_bruto_0.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'area_ha': 'area_ha', });
lyr_nieve_2026_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'area_ha': 'area_ha', });
lyr_nieve_2025shpnieve_2025_bruto_0.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'area_ha': 'TextEdit', });
lyr_nieve_2026_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_nieve_2025shpnieve_2025_bruto_0.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'area_ha': 'no label', });
lyr_nieve_2026_1.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'area_ha': 'no label', });
lyr_nieve_2026_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});