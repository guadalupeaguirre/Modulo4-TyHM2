# Módulo 4: Qgis
# Análisis Espacio-Temporal de Cobertura Nival en la Cordillera de los Andes (2025–2026)

## Descripción General del Proyecto
Estudio teledetectivo y análisis espacial mediante Sistemas de Información Geográfica (QGIS) orientado a evaluar la dinámica interanual de la superficie cubierta por nieve en la alta montaña mendocina, tomando como área de referencia el **Valle de las Lágrimas** y la cabecera de la cuenca del río Atuel. El trabajo contrasta dos escenas correspondientes al período primaveral (**noviembre de 2025** frente a **noviembre de 2026**) para cuantificar la disponibilidad hídrica nival almacenada.

## Flujo de Trabajo y Metodología Aplicada
1. **Teledetección y Procesamiento Espectral:** Selección y descarga de escenas multiespectrales de la constelación **Sentinel-2 (Nivel L2A)** desde el portal *Copernicus Data Space Ecosystem*, filtrando fechas con nubosidad mínima (< 5 %) en ventanas estacionales equivalentes (12/11/2025 y 05/11/2026). Se utilizó el producto **NDSI** (*Normalized Difference Snow Index*) para discriminar con precisión el manto nival respecto de los afloramientos rocosos.
2. **Normalización Cartográfica y Proyección Métrica:** Configuración del entorno de trabajo y reproyección de las capas al Sistema de Referencia de Coordenadas plano **WGS 84 / UTM Zona 19S (EPSG:32719)**, eliminando deformaciones angulares para asegurar exactitud planimétrica en el cómputo de áreas.
3. **Álgebra de Mapas y Vectorización:** Generación de máscaras binarias mediante la *Calculadora Ráster* para aislar los píxeles correspondientes a nieve, seguida de su conversión a entidades vectoriales de tipo polígono y depuración de las superficies rocosas descubiertas desde la tabla de atributos.
4. **Cálculo de Superficies y Balance Interanual:** Evaluación geométrica en la tabla de atributos empleando la expresión espacial `$area / 10000` para expresar la cobertura efectiva de cada período en hectáreas ($\text{ha}$) y obtener el balance comparativo.

## Resultados Cuantitativos (Noviembre 2025 vs. Noviembre 2026)

| Indicador Espacial | 12 de Noviembre de 2025 | 05 de Noviembre de 2026 | Variación Interanual |
| :--- | :---: | :---: | :---: |
| **Superficie nival medida ($\text{ha}$)** | 217.492 ha | 243.570 ha | **+26.078 ha** |
| **Superficie nival equivalente ($\text{km}^2$)** | 2.174,92 $\text{km}^2$ | 2.435,70 $\text{km}^2$ | **+260,78 $\text{km}^2$** |
| **Porcentaje de cobertura del recuadro** | 68,64 % | 76,88 % | **+8,24 p.p.** |
| **Variación porcentual relativa** | — | — | **+11,99 %** |

**Interpretación Hidrológica y Territorial:**  
La comparativa interanual refleja un incremento neto de **26.078 hectáreas** (**+11,99 %**) en la superficie nival remanente hacia principios de noviembre de 2026 respecto del mismo período de 2025. Esta mayor retención de nieve en altura constituye un indicador favorable para la recarga estival de los escurrimientos superficiales, aportando mayor previsibilidad para la planificación hídrica, el abastecimiento energético y la distribución del riego en los oasis productivos de Mendoza.

## Visor Cartográfico Interactivo
El proyecto fue exportado mediante la extensión **qgis2web** (motor *OpenLayers*) para permitir la inspección dinámica de ambos períodos y la consulta individual de polígonos:

👉 **[Explorar Mapa Interactivo de Cobertura Nival en GitHub Pages](https://julianzoia.github.io/Modulo_4-Qgis/)**
