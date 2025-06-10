ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-18411522.021909, 1876493.310776, -7114436.316078, 7516012.932297]);
var wms_layers = [];


        var lyr_cartolite_0 = new ol.layer.Tile({
            'title': 'carto lite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_top67uscities_1 = new ol.format.GeoJSON();
var features_top67uscities_1 = format_top67uscities_1.readFeatures(json_top67uscities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_top67uscities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_top67uscities_1.addFeatures(features_top67uscities_1);
var lyr_top67uscities_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_top67uscities_1, 
                style: style_top67uscities_1,
                popuplayertitle: 'top 67 us cities',
                interactive: false,
                title: '<img src="styles/legend/top67uscities_1.png" /> top 67 us cities'
            });
var format_DowntownAreas_2 = new ol.format.GeoJSON();
var features_DowntownAreas_2 = format_DowntownAreas_2.readFeatures(json_DowntownAreas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DowntownAreas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DowntownAreas_2.addFeatures(features_DowntownAreas_2);
var lyr_DowntownAreas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DowntownAreas_2,
maxResolution:70.0111653806549,
 
                style: style_DowntownAreas_2,
                popuplayertitle: 'Downtown Areas',
                interactive: false,
                title: '<img src="styles/legend/DowntownAreas_2.png" /> Downtown Areas'
            });
var format_DowntownInstitutions_3 = new ol.format.GeoJSON();
var features_DowntownInstitutions_3 = format_DowntownInstitutions_3.readFeatures(json_DowntownInstitutions_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DowntownInstitutions_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DowntownInstitutions_3.addFeatures(features_DowntownInstitutions_3);
var lyr_DowntownInstitutions_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DowntownInstitutions_3, 
                style: style_DowntownInstitutions_3,
                popuplayertitle: 'Downtown Institutions ',
                interactive: true,
                title: '<img src="styles/legend/DowntownInstitutions_3.png" /> Downtown Institutions '
            });

lyr_cartolite_0.setVisible(true);lyr_top67uscities_1.setVisible(true);lyr_DowntownAreas_2.setVisible(true);lyr_DowntownInstitutions_3.setVisible(true);
var layersList = [lyr_cartolite_0,lyr_top67uscities_1,lyr_DowntownAreas_2,lyr_DowntownInstitutions_3];
lyr_top67uscities_1.set('fieldAliases', {'City': 'City', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_DowntownAreas_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'city_name': 'city_name', 'downtown': 'downtown', 'notes': 'notes', });
lyr_DowntownInstitutions_3.set('fieldAliases', {'name': 'name', 'address': 'address', 'website': 'website', 'pt_enroll': 'PT enrollment', 'ft_enroll': 'FT enrollment', 'tot_enroll': 'Total Enrollment', 'tot_emp': 'Employment', });
lyr_top67uscities_1.set('fieldImages', {'City': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_DowntownAreas_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'city_name': 'TextEdit', 'downtown': 'TextEdit', 'notes': 'TextEdit', });
lyr_DowntownInstitutions_3.set('fieldImages', {'name': 'TextEdit', 'address': 'TextEdit', 'website': 'TextEdit', 'pt_enroll': 'TextEdit', 'ft_enroll': 'TextEdit', 'tot_enroll': 'TextEdit', 'tot_emp': 'TextEdit', });
lyr_top67uscities_1.set('fieldLabels', {'City': 'inline label - always visible', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_DowntownAreas_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'city_name': 'no label', 'downtown': 'no label', 'notes': 'no label', });
lyr_DowntownInstitutions_3.set('fieldLabels', {'name': 'inline label - visible with data', 'address': 'inline label - visible with data', 'website': 'inline label - visible with data', 'pt_enroll': 'inline label - visible with data', 'ft_enroll': 'inline label - visible with data', 'tot_enroll': 'inline label - visible with data', 'tot_emp': 'inline label - visible with data', });
lyr_DowntownInstitutions_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});