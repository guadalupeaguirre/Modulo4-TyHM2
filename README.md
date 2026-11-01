# Modulo4 - QGIS
## Descripción del proyecto
En este módulo trabajamos con datos geográficos y alfanuméricos usando Sistemas de Información Geográfica (SIG) en QGIS, integrados con consultas. Su objetivo es brindarle al ingeniero industrial herramientas de análisis espacial y manejo de datos para tomar decisiones territoriales y logísticas.
## Actividad 1: infraestructura industrial en Mendoza
Se evalúa cómo se distribuye espacialmente la infraestructura industrial de la provincia, considerando la superficie ocupada, los puestos de trabajo generados y los índices de impacto ambiental de los parques y zonas industriales.

**Análisis vectorial y raster:** se integran capas vectoriales (.shp) de puntos (ubicación de los parques) y de polígonos (límites departamentales y zonas industriales), junto con imágenes y datos raster.

**Edición y estructuración de atributos:** con la conmutación de edición se digitaliza, se corrige la geometría y se completa la tabla de atributos con superficie, empleo y contaminación.

**Análisis espacial avanzado:** se generan polígonos de Voronoi y una triangulación de Delaunay para estudiar la cobertura, la vecindad y la conectividad entre los nodos industriales.

**Exportación web interactiva:** con la extensión qgis2web se publica el proyecto en HTML/OpenLayers, con capas activables y visualización dinámica.

## Mapa web interactivo
Podés explorarlo en el siguiente enlace: 👉 Ver Mapa Interactivo de 

## Actividad 2: variación de la superficie nival
Esta segunda fase se enfocó en el monitoreo ambiental con imágenes satelitales raster. Se cuantificó y comparó la superficie cubierta por nieve en el Valle de las Lágrimas entre dos momentos: hace dos años y la imagen actual.
**Gestión de imágenes raster:** se importaron y superpusieron imágenes satelitales .tif (datos de Copernicus) de ambos períodos.

**Cambio de proyección:** se pasó el sistema de referencia del proyecto de grados (EPSG:4326) a un sistema métrico (EPSG:32719, WGS 84 / UTM zona 19S), necesario para medir superficies con exactitud y evitar distorsiones.

**Vectorización y digitalización:** se crearon shapefiles de polígonos para delimitar las masas de nieve de cada período, mediante digitalización manual con la conmutación de edición.

**Cálculo de superficies:** se separaron las geometrías en capas independientes y se usó la calculadora de campos con $area / 10000 para obtener el área en hectáreas (ha) y comparar ambos períodos.

## Mapa web interactivo
Podés explorarlo en el siguiente enlace: 👉 Ver Mapa Interactivo de 
