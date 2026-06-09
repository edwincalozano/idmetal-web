# PROMPT PARA CLAUDE CODE — SITIO WEB IDMETAL

---

## CONTEXTO DEL PROYECTO

Crea el sitio web corporativo completo de **IDMETAL**, empresa peruana especializada en metalmecánica industrial, construcción civil y topografía especializada. El sitio debe ser profesional, moderno, con fuerte identidad de marca y orientado a la captación de clientes B2B (empresas, constructoras, minería, gobierno).

---

## STACK TÉCNICO

- **Framework:** Astro 4.x
- **Estilos:** Tailwind CSS v3
- **Lenguaje adicional:** TypeScript donde sea relevante
- **Despliegue target:** Vercel
- **Formularios:** Formspree (placeholder de form ID por ahora: `xyzabc12`)
- **Fuentes:** Google Fonts — `Rajdhani` (headings, display) + `Inter` (body)
- **Íconos:** Lucide Icons o Heroicons (SVG inline)
- **Imágenes:** Usar imágenes de Unsplash (URL directas) o SVG ilustrativos generados inline para ilustrar cada servicio

---

## PALETA DE COLORES OFICIAL (extraída del logo IDMETAL)

```css
:root {
  /* Marca */
  --idm-red:       #E8473F;   /* Rojo/coral del logo — CTA, acentos primarios */
  --idm-yellow:    #F5A623;   /* Dorado/ámbar — acentos secundarios, highlights */
  --idm-dark:      #2C2C2C;   /* Gris carbón — textos, headers */
  --idm-gray:      #4A4A4A;   /* Gris medio — subtextos, íconos */

  /* Superficies */
  --idm-bg:        #0F0F0F;   /* Negro profundo — hero, secciones dark */
  --idm-surface:   #1A1A1A;   /* Superficie dark — cards oscuras */
  --idm-light-bg:  #F8F7F5;   /* Fondo claro cálido — secciones light */
  --idm-white:     #FFFFFF;

  /* Texto sobre fondos oscuros */
  --idm-text-light: #E8E6E1;
  --idm-text-muted: #9A9490;
}
```

**Reglas de combinación cromática:**
- Fondos dark (`#0F0F0F`, `#1A1A1A`) + texto blanco/crema + acentos en rojo `#E8473F`
- Fondos light (`#F8F7F5`, `#FFFFFF`) + texto `#2C2C2C` + acentos en amarillo `#F5A623` o rojo
- **Nunca** usar rojo y amarillo juntos como protagonistas en la misma sección (solo el logo los combina, el resto del diseño los alterna)
- Bordes y separadores: `rgba(232, 71, 63, 0.2)` sobre dark, `rgba(0,0,0,0.08)` sobre light
- Hover states: rojo se oscurece 15% → `#C93B34`; amarillo se oscurece 10% → `#D9901F`

---

## LOGO

El logo está en `/public/logo-idmetal.png` (imagen adjunta al proyecto).
- Usar en header: versión original (sobre fondo blanco/claro) O versión con fondo oscuro si se crea
- En footer: usar siempre con fondo oscuro, el logo tiene colores rojo + amarillo + gris
- Ancho máximo del logo en header: `160px`
- Incluir el slogan debajo si hay espacio: **"LO HACEMOS MEJOR"** en `Rajdhani`, espaciado de letras amplio, color `#9A9490`

---

## ARQUITECTURA DEL SITIO

### Páginas a generar:

```
/                   → Landing principal (one-page o multi-section)
/servicios          → Página hub de servicios (opcional, puede ser sección)
/nosotros           → Quiénes somos
/proyectos          → Galería / portafolio de trabajos
/contacto           → Formulario + mapa + datos
```

**Alternativa one-page:** Toda la web como landing con anclas (`#servicios`, `#nosotros`, `#contacto`). **RECOMENDADO para primera versión.**

---

## ESTRUCTURA DE SECCIONES (orden en la landing)

### 1. NAVBAR
- Logo IDMETAL a la izquierda
- Links de navegación: Inicio · Servicios · Nosotros · Proyectos · Contacto
- CTA button: **"Solicitar Cotización"** → color `#E8473F`, texto blanco
- Sticky con blur backdrop en scroll
- Mobile: hamburger menu con overlay
- Fondo: transparente sobre hero, blanco/dark sólido en scroll

---

### 2. HERO SECTION
- **Fondo:** Imagen oscura de una estructura metálica o nave industrial (Unsplash URL) con overlay `rgba(0,0,0,0.65)`
- **Badge flotante:** pequeño chip con `#E8473F` → texto: `"Cajamarca, Perú · Desde 2015"`
- **Headline principal:**
  ```
  CONSTRUIMOS
  LO QUE OTROS
  NO SE ATREVEN
  ```
  Tipografía: `Rajdhani`, bold, ~80-90px desktop, blanco
- **Subheadline:** `"Metalmecánica industrial, construcción civil y topografía especializada. Calidad garantizada en cada proyecto."`
- **CTAs:**
  - Primario: `"Ver Nuestros Servicios"` → rojo
  - Secundario: `"Contactar Ahora"` → outline blanco
- **Stats row** (debajo de los CTAs):
  ```
  +500 Proyectos   |   +8 Años de Experiencia   |   100% Calidad Garantizada   |   3 Especialidades
  ```
- **Decoración:** línea diagonal roja `#E8473F` cortando la esquina inferior del hero

---

### 3. PROPUESTA DE VALOR ("Por qué elegirnos")
- Fondo: `#F8F7F5` (claro cálido)
- **Título:** `"Ingeniería que habla por sí sola"`
- 4 pilares en grid de tarjetas, ícono + título + descripción:

  | Ícono | Título | Descripción |
  |-------|--------|-------------|
  | Escuadra/regla | Diseño Técnico Certificado | Cada estructura metálica es calculada y diseñada por ingenieros certificados bajo normativas vigentes. |
  | Escudo/check | Material de Primera Calidad | Trabajamos exclusivamente con acero estructural y materiales certificados, sin comprometer resistencia ni durabilidad. |
  | Reloj/check | Cumplimiento de Plazos | Procesos optimizados y equipo comprometido que garantizan entregas en el tiempo acordado. |
  | Estrella | Excelencia en Acabados | Procesos de soldadura, pintura y acabado que cumplen los más altos estándares de la industria. |

- Tarjetas con borde izquierdo `#E8473F` (4px), fondo blanco, sombra suave

---

### 4. SERVICIOS

**Estructura:** Tabs o secciones con scroll suave entre las 3 especialidades.

#### 4A. METALMECÁNICA INDUSTRIAL

**Imagen de sección:** Nave industrial, taller metalmecánico (Unsplash)

Organizar los servicios en **4 grupos visuales** (no listar todo plano):

**Grupo 1 — Estructuras Ligeras**
- Rejas y portones
- Puertas metálicas
- Ventanas de fierro
- Barandas
- Escaleras simples

**Grupo 2 — Coberturas & Techos**
- Techos livianos
- Coberturas industriales
- Galpones metálicos

**Grupo 3 — Estructuras Industriales & Almacenamiento**
- Cerchas metálicas
- Estructuras para almacenes
- Mezanines
- Mesas y estanterías
- Soportes metálicos
- Andamios artesanales
- Cercos perimétricos

**Grupo 4 — Soluciones Especializadas**
- Torres metálicas
- Escaleras industriales
- Tanques simples
- Estructuras para paneles solares
- Puentes peatonales livianos
- Remolques pequeños
- Tolvas simples
- Parrillas metálicas

**Diseño de cada grupo:**
- Card con título del grupo, ícono representativo, lista de ítems con checkmark rojo, y una imagen Unsplash representativa
- Efecto hover: elevar card + borde rojo

---

#### 4B. CONSTRUCCIÓN CIVIL

**Imagen de sección:** Obra civil, puente, edificio en construcción (Unsplash)

Agrupar en **3 grupos**:

**Grupo 1 — Obras de Saneamiento e Infraestructura Básica**
- Sistemas de saneamiento
- Alcantarillados
- Cunetas y canales

**Grupo 2 — Obras Viales & Urbanismo**
- Pistas y veredas
- Carreteras

**Grupo 3 — Obras Civiles Mayores**
- Puentes
- Construcción de edificios y estructuras

**Copy para la sección:**
> "Ejecutamos obras civiles con rigor técnico y materiales de primera calidad. Desde infraestructura sanitaria básica hasta edificios y puentes, nuestro equipo garantiza estructuras duraderas que cumplen con todas las normativas peruanas."

---

#### 4C. TOPOGRAFÍA ESPECIALIZADA

**Imagen de sección:** Levantamiento con drone, nube de puntos 3D (Unsplash o ilustración SVG)

**Servicios:**

**Levantamiento & Escaneo**
- Levantamiento topográfico con LIDAR
- Fotogrametría con drones
- Escaneo 3D de estructuras existentes
- Elaboración de planos topográficos

**Modelamiento & Procesamiento**
- Modelamiento BIM en Revit desde nube de puntos
- Procesamiento de nubes de puntos (Recap, CloudCompare)
- Modelos digitales de terreno (MDT/MDE)
- Ortofotomapas georreferenciados

**Copy:**
> "Utilizamos tecnología de punta — drones DJI con sensores LIDAR, estaciones totales robóticas y software BIM — para entregar levantamientos de precisión milimétrica. Nuestros modelos digitales son la base perfecta para cualquier proyecto de ingeniería o construcción."

**Elemento visual especial:** Mostrar un diagrama/infografía del flujo: `Terreno → Vuelo Drone → Nube de Puntos → Modelo 3D → Planos BIM`

---

### 5. SECCIÓN "NUESTRO PROCESO"

Fondo dark (`#0F0F0F`) con acentos rojos
Timeline horizontal (desktop) / vertical (mobile) con 5 pasos:

```
1. Consulta Inicial    →   2. Ingeniería & Diseño   →   3. Fabricación / Ejecución
        ↓
5. Entrega y Garantía  ←   4. Control de Calidad
```

Cada paso: número en rojo, título bold, descripción corta.

---

### 6. PROYECTOS / PORTAFOLIO

- Grid masonry o grid uniforme de 6 tarjetas (2 por rubro)
- Cada tarjeta: imagen Unsplash + overlay con nombre del proyecto al hover + badge de rubro (rojo = metalmecánica, amarillo = construcción, gris = topografía)
- Proyectos de ejemplo a generar con nombres ficticios verosímiles:
  - "Nave industrial — Empresa Minera Cajamarca" (metalmecánica)
  - "Galpón agroindustrial 800m² — Valle Jequetepeque" (metalmecánica)
  - "Puente peatonal metálico — Municipalidad de Chota" (metalmecánica)
  - "Pistas y veredas — Urb. San Luis, Cajamarca" (construcción)
  - "Edificio de 4 pisos — Jr. Los Pinos" (construcción)
  - "Levantamiento LIDAR — Proyecto Minero La Zanja" (topografía)
- CTA: `"Ver todos los proyectos"` → placeholder a `/proyectos`

---

### 7. TESTIMONIOS / CONFIANZA

- Fondo claro `#F8F7F5`
- 3 testimonios ficticios pero verosímiles de clientes del sector
- Nombre, empresa, cargo, texto corto (2-3 líneas)
- Estrellas (5/5) en amarillo `#F5A623`
- Logos de certificaciones o entidades (placeholder SVG): "RNP Certificado", "OSCE Habilitado", "ISO 9001", "Colegio de Ingenieros del Perú"

---

### 8. SECCIÓN CONTACTO

Fondo dark con grid dos columnas:

**Columna izquierda — Información:**
- Título: `"¿Listo para tu próximo proyecto?"`
- Subtítulo: `"Contáctanos y recibe una cotización sin costo en menos de 24 horas."`
- Email: `info@idmetal.com` (con nota: "Próximamente activo")
- WhatsApp: `+51 XXX XXX XXX` (placeholder)
- Ubicación: `"Cajamarca, Perú"`
- Horario: `"Lun – Vie: 8:00 am – 6:00 pm"`
- Íconos Lucide para cada dato

**Columna derecha — Formulario (Formspree):**
```
Nombre completo  [input]
Empresa          [input]
Teléfono         [input]
Tipo de servicio [select: Metalmecánica / Construcción / Topografía / Otro]
Descripción del proyecto [textarea]
                 [Botón: "Enviar Solicitud →"] → rojo
```
- `action="https://formspree.io/f/xyzabc12"` (placeholder)
- Validación básica HTML5
- Mensaje de éxito tras envío

---

### 9. FOOTER

- Fondo `#0A0A0A`
- Logo IDMETAL + slogan
- Links rápidos: Inicio, Servicios, Nosotros, Proyectos, Contacto
- Columna de servicios: lista de las 3 especialidades
- Redes sociales (placeholders): Facebook, Instagram, LinkedIn, YouTube (íconos)
- Copyright: `"© 2025 IDMETAL. Todos los derechos reservados."`
- Línea de crédito fina: `"Diseñado con precisión. Construido con calidad."`

---

## IMÁGENES — URLs DE UNSPLASH SUGERIDAS

Usar estas URLs directas (o similares, búscalas si estas dan error):

```
Hero (estructura metálica):
https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80

Metalmecánica (taller):
https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=80

Construcción (obra civil):
https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80

Topografía (drone/levantamiento):
https://images.unsplash.com/photo-1508614999368-9260051292e5?w=1200&q=80

Galpón industrial:
https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80

Puente metálico:
https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80

Edificio construcción:
https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80

Nube de puntos / tecnología:
https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80
```

---

## MICROANIMACIONES & UX

- **Scroll reveal:** fade-in + translateY al entrar al viewport (IntersectionObserver)
- **Navbar:** cambio de fondo al hacer scroll (transparente → sólido con blur)
- **Cards de servicios:** scale(1.02) + sombra en hover
- **CTA buttons:** efecto ripple o scale suave en hover
- **Stats counter:** animación numérica al llegar a la sección
- **Tab de servicios:** transición suave entre pestañas

---

## SEO & META

```html
<title>IDMETAL | Metalmecánica, Construcción y Topografía — Cajamarca, Perú</title>
<meta name="description" content="Empresa especializada en estructuras metálicas industriales, construcción civil y topografía con LIDAR y fotogrametría. Calidad garantizada en cada proyecto. Cajamarca, Perú.">
<meta property="og:title" content="IDMETAL — Lo Hacemos Mejor">
<meta property="og:description" content="Metalmecánica industrial, construcción y topografía especializada en Cajamarca, Perú.">
<meta property="og:image" content="/og-image.jpg">
```

Keywords objetivo: `estructuras metálicas cajamarca`, `topografía lidar peru`, `construcción civil cajamarca`, `galpones metálicos`, `metalmecánica industrial peru`

---

## ARCHIVOS A GENERAR

```
idmetal-web/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── public/
│   ├── logo-idmetal.png        ← copiar desde assets
│   └── favicon.ico
└── src/
    ├── layouts/
    │   └── Layout.astro         ← base HTML, meta tags, fuentes
    ├── components/
    │   ├── Navbar.astro
    │   ├── Hero.astro
    │   ├── ValorPropuesta.astro
    │   ├── Servicios.astro
    │   │   ├── Metalmecanica.astro
    │   │   ├── Construccion.astro
    │   │   └── Topografia.astro
    │   ├── Proceso.astro
    │   ├── Proyectos.astro
    │   ├── Testimonios.astro
    │   ├── Contacto.astro
    │   └── Footer.astro
    └── pages/
        └── index.astro          ← ensambla todos los componentes
```

---

## INSTRUCCIONES ADICIONALES PARA CLAUDE CODE

1. **Genera el proyecto completo funcional**, no solo estructura de archivos.
2. **Cada componente debe ser autónomo** con sus propios estilos Tailwind.
3. **El sitio debe ser 100% responsivo** — mobile first.
4. **No uses imágenes de placeholder genérico** (`via.placeholder.com`); usa las URLs de Unsplash indicadas.
5. **El formulario de contacto debe funcionar** con Formspree (el form ID es placeholder, el cliente lo reemplazará).
6. **Los colores DEBEN respetar exactamente** la paleta definida arriba — no usar azules ni verdes.
7. **Performance:** imágenes con `loading="lazy"`, fuentes con `display=swap`.
8. **Accesibilidad:** `alt` en todas las imágenes, `aria-label` en botones de ícono, contraste AA mínimo.
9. Usa `@apply` de Tailwind para clases repetidas o crea utilidades en `tailwind.config.mjs`.
10. El slogan **"LO HACEMOS MEJOR"** debe aparecer en al menos 3 lugares estratégicos del sitio.

---

## TONO & VOZ DE MARCA

- **Profesional pero directo.** No corporativo frío.
- **Confianza técnica:** hablar de procesos, materiales, normativas.
- **Orgullo regional:** somos de Cajamarca, conocemos el terreno.
- **Copy de acción:** verbos fuertes (Construimos, Fabricamos, Calculamos, Garantizamos).
- Evitar: jerga excesiva, promesas vagas, lenguaje de startup tech.

---

*Fin del prompt. Ante cualquier duda de implementación, priorizar: funcionalidad > diseño > optimización.*
