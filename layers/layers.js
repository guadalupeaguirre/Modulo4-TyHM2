var wms_layers = [];

var format_Nieve2026_0 = new ol.format.GeoJSON();
var features_Nieve2026_0 = format_Nieve2026_0.readFeatures(json_Nieve2026_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nieve2026_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nieve2026_0.addFeatures(features_Nieve2026_0);
var lyr_Nieve2026_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nieve2026_0, 
                style: style_Nieve2026_0,
                popuplayertitle: 'Nieve 2026',
                interactive: true,
                title: '<img src="styles/legend/Nieve2026_0.png" /> Nieve 2026'
            });
var format_Nieve2025_1 = new ol.format.GeoJSON();
var features_Nieve2025_1 = format_Nieve2025_1.readFeatures(json_Nieve2025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nieve2025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nieve2025_1.addFeatures(features_Nieve2025_1);
var lyr_Nieve2025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nieve2025_1, 
                style: style_Nieve2025_1,
                popuplayertitle: 'Nieve 2025',
                interactive: true,
                title: '<img src="styles/legend/Nieve2025_1.png" /> Nieve 2025'
            });

lyr_Nieve2026_0.setVisible(true);lyr_Nieve2025_1.setVisible(true);
var layersList = [lyr_Nieve2026_0,lyr_Nieve2025_1];
lyr_Nieve2026_0.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'area_ha': 'area_ha', });
lyr_Nieve2025_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'area_ha': 'area_ha', });
lyr_Nieve2026_0.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_Nieve2025_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'area_ha': 'TextEdit', });
lyr_Nieve2026_0.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'area_ha': 'no label', });
lyr_Nieve2025_1.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'area_ha': 'no label', });
lyr_Nieve2025_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});