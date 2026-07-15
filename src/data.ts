export interface Fortaleza {
  impact: string;
  req: string;
  ev: string;
  level: string;
}

export interface Riesgo {
  impact: 'Alto' | 'Medio' | 'Bajo';
  risk: string;
  mitigation: string;
}

export interface FitItem {
  label: string;
  score: string;
  desc: string;
}

export interface SubItem {
  name: string;
  status: string;
  ob: string;
}

export interface ScorecardItem {
  r: string;
  req: string;
  ob: string;
  subItems?: SubItem[];
}

export interface StarInterview {
  q: string;
  competencia: string;
  pregunta: string;
  s: string;
  t: string;
  a: string;
  r: string;
}

export interface Candidate {
  id: string;
  theme: 'gold' | 'emerald' | 'amber' | 'danger' | 'rose';
  badge: string;
  status: string;
  avatar: string;
  name: string;
  title: string;
  school: string;
  sub: string;
  cv: string;
  gaps: string;
  fortalezas: Fortaleza[];
  riesgos?: Riesgo[];
  fit: FitItem[];
  scorecard: ScorecardItem[];
  star?: StarInterview[];
}

export const candidates: Candidate[] = [
  {
    id: "carlos-garcia",
    theme: "emerald",
    badge: "IDEAL",
    status: "VIABLE",
    avatar: "/caga.jpg",
    name: "Carlos Alberto García Fernández",
    title: "Ingeniero de Puerto",
    school: "Instituto Tecnológico Regional De Veracruz",
    sub: "El nivel de acoplamiento técnico y cultural del candidato frente a la Misión del Puesto es sobresaliente. Su perfil evoluciona de ser un ejecutor técnico a un estratega de mantenimiento integral con más de 20 años de experiencia. Filosofía preventiva clara y capacidad de ejecución inmediata con nula dependencia de capacitación operativa.",
    cv: "/cv-caga.pdf",
    gaps: "Brechas Documentales Subsanables: Título y Cédula Profesional pendientes (en proceso de titulación). Faltan certificados de cursos de Inglés, Office, básicos de Universidad Protexa. Libreta de Mar no vigente.",
    
    // 1. FORTALEZAS MATCH
    fortalezas: [
      {
        impact: "CRÍTICO POSITIVO",
        req: "Diseño, planeación y seguimiento de programas de mantenimiento a embarcaciones.",
        ev: "Llevó a dique seco el Remolcador COBA sin presentar desviación presupuestal. Demuestra planeación estratégica al elegir astilleros en Tampico sobre Veracruz para evitar retrasos aduanales (API).",
        level: "Alto"
      },
      {
        impact: "CRÍTICO POSITIVO",
        req: "Amplio conocimiento de equipos mecánicos, sistemas neumáticos e hidráulicos.",
        ev: "Resolvió la obstrucción neumática de silos de cemento en un abastecedor para Pemex (desmontando válvulas check apelmazadas). Domina diagnóstico de electroválvulas de azimutales y bombas FIFI.",
        level: "Alto"
      },
      {
        impact: "ALTO",
        req: "Asegurar el seguimiento oportuno al suministro de refaccionamiento, materiales y servicios externos.",
        ev: "Aplica pensamiento lateral y gestión de crisis al tomar prestadas refacciones entre 'barcos gemelos' para evitar la pérdida del contrato mientras compras gestiona el suministro final.",
        level: "Alto"
      },
      {
        impact: "ALTO",
        req: "Cumplir con los requerimientos establecidos en el SGI.",
        ev: "Tras recibir una condición de clase por una fenda (grieta), ejecutó reparaciones con inserto e implementó una acción correctiva sistémica: enviar memorándum a la flota estableciendo reporte obligatorio de vías de agua.",
        level: "Alto"
      }
    ],
    
    // RIESGOS TÉCNICOS Y MITIGACIONES
    riesgos: [
      {
        impact: "Medio",
        risk: "Evaluación de Riesgos y Estricto Apego Normativo Inicial: En el pasado desestimó un reporte de fenda priorizando calendarios comerciales sobre rigor normativo inmediato.",
        mitigation: "El Subgerente de Mantenimiento Naval deberá dejar claras las políticas de cero tolerancia ante compromisos de integridad estructural durante su proceso de Onboarding."
      },
      {
        impact: "Medio",
        risk: "Falta de Título y Cédula (En proceso de titulación): Puede representar un impedimento administrativo o normativo para la firma de requerimientos oficiales, trámites ante Capitanía de Puerto o auditorías que exijan la cédula del responsable técnico.",
        mitigation: "Condicionar la contratación a la entrega de una carta pasante o comprobante oficial del trámite. Establecer un esquema temporal de validación o firma con el Superintendente o Gerente Técnico mientras obtiene el documento final."
      },
      {
        impact: "Bajo",
        risk: "Ausencia de certificados formativos oficiales y Libreta de Mar no vigente.",
        mitigation: "Completar cursos de Onboarding (Universidad Protexa) y solicitar renovación de Libreta de Mar urgente previo al inicio de operaciones a bordo."
      }
    ],
    
    // 2. FIT TÉCNICO (Viabilidad Operativa)
    fit: [
      {
        label: "Estratega de Mantenimiento Integral",
        score: "Excede",
        desc: "El nivel de acoplamiento técnico y cultural del candidato frente a la Misión del Puesto es sobresaliente. Su perfil evoluciona de ser un ejecutor técnico a un estratega de mantenimiento integral. Cuenta con más de 20 años de experiencia comprobable en posiciones de liderazgo naval, superando holgadamente los 5 años exigidos. Su mayor valor radica en su comprensión del ciclo de vida del barco y su impacto comercial, integrando el mantenimiento como pieza clave de la rentabilidad."
      },
      {
        label: "Filosofía y Ejecución",
        score: "Excede",
        desc: "Demuestra una filosofía de trabajo alineada exactamente a la misión de la empresa: 'el mantenimiento preventivo siempre es mejor que el mantenimiento correctivo'. Su capacidad de ejecución es inmediata y resuelve fallas críticas a nivel componente. Además, entiende la logística aduanal (API) que impacta directamente en los tiempos de reparación."
      },
      {
        label: "Madurez e Independencia Operativa",
        score: "Excede",
        desc: "Posee un alto nivel de madurez profesional para admitir y corregir errores normativos, evidenciado al solventar y documentar no conformidades mayores. Su dependencia de capacitación operativa es nula, limitándose únicamente a la inducción corporativa."
      }
    ],
    
    // 3. TABLA DE CUMPLIMIENTO DE PERFIL (Scorecard)
    scorecard: [
      {
        r: "Escolaridad",
        req: "Licenciatura",
        ob: "Cumple Parcialmente",
        subItems: [
          {
            name: "Licenciatura en Ingeniería Industrial",
            status: "Instituto Tecnológico Regional De Veracruz (En proceso de titulación)",
            ob: "Pendiente"
          }
        ]
      },
      {
        r: "Especialidad",
        req: "Ing. Mecánico Naval / Electromecánico / Carrera afín",
        ob: "Cumple Parcialmente",
        subItems: [
          {
            name: "Afinidad de Carrera (Ing. Industrial)",
            status: "Evaluada afinidad técnica sólida (7/10 pts)",
            ob: "Cumple Parcialmente"
          }
        ]
      },
      {
        r: "Experiencia",
        req: "5 años",
        ob: "Excede",
        subItems: [
          {
            name: "Experiencia en el sector naviero y energético",
            status: "Más de 20 años ininterrumpidos como Ing. de Puerto (27 pts)",
            ob: "Superado"
          }
        ]
      },
      {
        r: "Documentos",
        req: "TÍTULO, CÉDULA y LIBRETA DE MAR",
        ob: "No Cumple",
        subItems: [
          {
            name: "Título y Cédula Profesional",
            status: "Faltante (En proceso de titulación)",
            ob: "Pendiente"
          },
          {
            name: "Libreta de Mar",
            status: "No vigente",
            ob: "No Cumple"
          }
        ]
      },
      {
        r: "Cursos",
        req: "Inglés técnico, Office, Básicos Protexa",
        ob: "No Cumple",
        subItems: [
          {
            name: "Certificados de Inglés y Office",
            status: "Ausentes en CV por estricta regla de auditoría (0 pts)",
            ob: "Pendiente"
          }
        ]
      },
      {
        r: "Competencias Técnicas",
        req: "Sistemas mecánicos, neumáticos e hidráulicos; Mantenimiento",
        ob: "Excede",
        subItems: [
          {
            name: "Conocimiento de equipos e hidráulica",
            status: "Comprobado plenamente en entrevista (10 pts)",
            ob: "Cumple"
          },
          {
            name: "Planeación de programas de mantenimiento",
            status: "Comprobado en CV y entrevista (10 pts)",
            ob: "Cumple"
          }
        ]
      }
    ],
    
    // 4. ENTREVISTA METODOLOGÍA STAR
    star: [
      {
        q: "1. Sistemas Neumáticos e Hidráulicos",
        competencia: "Amplio conocimiento de equipos mecánicos, sistemas neumáticos e hidráulicos.",
        pregunta: "En su CV menciona haber atendido las necesidades del Departamento de Máquinas de varias embarcaciones, pero no especifica el trabajo directo con hidráulica o neumática. Reláteme una Situación en la que un sistema neumático o hidráulico falló críticamente a bordo. ¿Cuál era su Tarea exacta en esa emergencia, ¿qué Acción técnica tomó para diagnosticar la falla junto con la tripulación, y cuál fue el Resultado operativo?",
        s: "Buen día, en Relación a la pregunta #1, informo que no he experimentado alguna Falla Hidráulica o Neumática relevante, sin embargo, se han presentado fallas en las electroválvulas de los sistemas de inversión de giro o Rotación de los motores de gyro de los azimutales, los cuales se quedan pegados y no actúan hacia un sentido, (al detectar esa falla, lo más recomendable es sustituirlos, aunque hay quienes los abren y limpian para destrabarlos.) Y en el caso de una falla Neumática, tuve una experiencia en un inicio de contrato con PEMEX, de que a un abastecedor los cargaron con Cemento y no podían bombear a plataforma, me reportó la tripulación que los los compresores si trabajaban bien y cargaban el tanque colector, pero no se presurizaba el silo, retrasando la operación.",
        t: "En mi calidad de Ingeniero de Puerto, y receptor de la queja del Cliente Pemex del atraso, la instrucción que giré fue que se regresaran e hicieran un análisis inverso del sistema de bombeo de Carga seca, lo cual arrojó que, si no se presurizaba el silo, era porque las válvulas que alimentan los silos estuvieran obstruidas.",
        a: "Revisaron y encontraron que las válvulas check (o antirretorno) que llegaban a los silos estaban obstruidas con Cemento. Previo al inicio de contrato se probaron todos los equipos sin embargo estaban calzadas esas válvulas y al llenarse con cemento se apelmazaron y se obstruyeron, solución: desmontaje de válvulas para desatascarlas y al volver a instalarlas se pudo presurizar y poder bombear a plataforma.",
        r: "Este retraso, nos sacó de contrato, (a pesar de que si se pudo Bombear) y se tuvo que hacer un check list de entrada a contrato, especifico, solo para demostrar como sucedió y se hacer pruebas de que el sistema ya funcionaba sin falla alguna (nos hicieron encender compresores y que pararan automáticamente a la presión de trabajo, así como presionar los silos y checar que no perdieran la presión)."
      },
      {
        q: "2. Herramientas de Gestión y Ofimática",
        competencia: "Control estricto de los mantenimientos.",
        pregunta: "Para este puesto se requiere un control estricto de los mantenimientos. Hábleme de una Situación en la que tuvo que elaborar y controlar un presupuesto complejo para una reparación mayor o un dique seco. ¿Cuál era su Tarea, cómo utilizó herramientas como Excel (tablas, cruces de bases de datos, macros) en su Acción diaria para no exceder los costos, y qué Resultado de desviación presupuestal obtuvo?",
        s: "Al llevar a Dique seco, es importante tener en mente los Objetivos a cubrir: Acreditar inspecciones para renovar certificado de Clase y estatutarios; Actualizar equipamiento o corregir Fallas que previo a un Dique eran difíciles de atender.",
        t: "Teniendo esos objetivos se recopila información abordo con los diferentes departamentos para cubrir las necesidades e ir elaborando requisiciones y programas de actividades que la tripulación debe hacer, así como actividades a supervisar en el astillero. Estas pasan a compras para cotizaciones y órdenes, dando un monto que se aprueba por gerencia.",
        a: "En Protexa me dieron la oportunidad de llevar a Dique seco un Remolcador (COBA) el cual, llevando ya un presupuesto autorizado, se apega a ello. Para los costos se va vigilando que no existan actividades fuera de las ya contenidas en el presupuesto, de ahí la importancia previa de detectar todas las necesidades y dejarlas asentadas.",
        r: "No tuve desviación al presupuesto. Eso si, resultan imprevistos no considerados y se toman decisiones para solventarlas, se recomienda llevar una provisión del 10%. Nota, por lo regular se trabaja con Excel y se cruza la información con lo reportado oficialmente por el astillero."
      },
      {
        q: "3. Suministro de Refacciones y Servicios Críticos",
        competencia: "Asegurar seguimiento al suministro de refaccionamiento y materiales.",
        pregunta: "El perfil exige alta capacidad de respuesta ante proveedores. Descríbame una Situación en la que la falta de una refacción crítica amenazaba con detener las operaciones de un buque en contrato (ej. con Pemex). ¿Cuál era su Tarea logística, qué Acción tomó para agilizar la cadena de suministro y conseguir el material urgente, y cuál fue el Resultado en los tiempos del proyecto?",
        s: "Cuando una refacción crítica es requerida, y peligra detener la operación, considero prudente evaluar lo que se perdería en contrato por no conseguirla a tiempo (en eso debe estar en la frecuencia el encargado de mantenimiento, jefes y compras).",
        t: "Para mi suerte, las embarcaciones en la que estuve trabajando muchas de ellas eran barcos gemelos, y se tomaban “prestados” en lo que llegaban las Refacciones.",
        a: "De no ser el caso, en definitiva, es estar en contacto con departamento de compras, jefes y Proveedor para que apoye en solventar esa necesidad. “El mantenimiento preventivo siempre es mejor que el mantenimiento correctivo”, y desgraciadamente no todos captan o digieren los costos que ello representa.",
        r: "Cuando se estuvo en contrato, se procuraba que los mantenimientos no se retrasaran para que aumentara el grado de confiabilidad de los equipos y disminuía la incertidumbre de que hubiera una Falla."
      },
      {
        q: "4. Planeación y Ejecución en Dique Seco",
        competencia: "Diseño, planeación y seguimiento de programas de mantenimiento.",
        pregunta: "Destaca en su CV haber sido responsable de integrar presupuestos y llevar a Dique Seco embarcaciones como el NN CHORT y NN ALGEIBA. Hábleme de la Situación más crítica o imprevisto más grave que enfrentó durante uno de estos diques. ¿Cuál era su Tarea para mitigar el retraso, qué Acción tomó con los astilleros o contratistas, y cuál fue el Resultado en la renovación del certificado de clase?",
        s: "Para estos diques, no recuerdo que hubiera habido una situación Crítica, las embarcaciones eran seminuevas y se contaba con el financiamiento del dueño atendiendo lo que por requerimiento se tenía que cubrir (moto generadores, propulsión, ánodos, software DP, válvulas de fondo).",
        t: "Algeiba se atendió en Veracruz (TNG) y la parte más crítica fue no contar con las facilidades para el ingreso de Refacciones de importación, en el cuál si nos retrasaba mucho en tiempo de ingresar las refacciones.",
        a: "Por esa razón principalmente se optó por llevar al “NN CHORT” a Tampico, astillero que facilitaba enormemente el ingreso de Refacciones al no tener que pasar por API.",
        r: "Se renovaron Certificados. Las Válvulas de Fondo se decidió renovarlas, y fue una buena decisión, ya que el costo de su mantenimiento era casi igual que las nuevas, y eso dio confianza al surveyor."
      },
      {
        q: "5. Renovación Estructural y Proyectos Mayores",
        competencia: "Asegurar y supervisar las actividades de mantenimiento preventivo y correctivo.",
        pregunta: "Usted tiene experiencia coordinando trabajos pesados como la renovación de acero (ej. B/A Olímpico, B/G Mexica). Reláteme una Situación donde la evaluación del acero a renovar resultó mucho mayor a la planeada. ¿Cuál fue su Tarea de ingeniería y control, qué Acción tomó respecto a la medición de espesores y el manejo de materiales, y qué Resultado obtuvo con el inspector de la casa clasificadora?",
        s: "Los primeros años de mi vida profesional, estuve en trabajos de renovación de acero en embarcaciones de Protexa (Olmeca – Huasteco y Mexica). Para ese entonces se contaba con apoyo interno del departamento de Buceo que nos ayudaba a Calibrar internamente.",
        t: "Previo a las calibraciones oficiales ya se tenía una cantidad de acero a renovar casi en un 95 % de confiabilidad. Para un caso de que salga acero no considerado, esto se debe de analizar con el inspector de Clase y solicitar nos permita efectuar reparaciones acordes a las condiciones de contrato.",
        a: "No es mi lema, pero creo que la organización debe de considerar y tener presente que el mantenimiento es un “gasto necesario”, y eso ayuda a dar mas confianza en la operación de una embarcación.",
        r: "Me queda muy claro que la función de todo trabajador es contribuir a que la empresa gane dinero y sea rentable, pero no debe hacer a un lado la labor de Mantenimiento. No recuerdo haber tenido deficiencias al respecto."
      },
      {
        q: "6. Auditorías e Inspecciones Normativas (SGI / ISM)",
        competencia: "Cumplir con los requerimientos establecidos en el SGI.",
        pregunta: "Menciona haber atendido inspecciones de clase (ABS, GL) y auditorías ISM. Describa una Situación en la que una de sus embarcaciones recibió una no conformidad mayor durante una de estas auditorías. ¿Cuál era su Tarea correctiva, qué Acción implementó en los procedimientos de la gerencia para solucionarlo de raíz, y cuál fue el Resultado a largo plazo en su flota?",
        s: "Fueron muy pocas las no conformidades mayores, pero recuerdo una en especial: la de no haber tomado acción inmediata a un reporte de una fenda en la parte superior de un tanque que había desoldado la cubierta principal con la placa de costado de un Tanque de lastre.",
        t: "Había desestimado lo reportado por el capitán ya que faltaban pocos meses para la entrada a Dique. Lo que no consideré fue que el inspector vio el reporte “no atendido” y se tuvo que detener la embarcación (afortunadamente estaba saliendo de un fletamento) y hacerle una condición de clase.",
        a: "Me obligaba a repararla provisionalmente con un 'doble' y hacer el inserto en el Dique. Se reparó provisionalmente, quedando parchado.",
        r: "La solución fue hacer la reparación Final y enviar memorándum a las embarcaciones de la flota que toda vía de agua por muy pequeña que sea se debe de reportar y asegurarse que sea atendida."
      }
    ]
  },
  {
    id: "luis-malpica",
    theme: "amber",
    badge: "VIABLE",
    status: "ENTREVISTAR CON CONDICIÓN",
    avatar: "/lumal.jpg",
    name: "Luis Ignacio Malpica Carballo",
    title: "Ingeniero de Puerto",
    school: "Universidad Veracruzana",
    sub: "El nivel de acoplamiento del candidato frente a las exigencias operativas del puesto es sobresaliente. Su principal diferenciador es ser un perfil de 'campo/tierra' altamente resolutivo (hands-on) con un profundo entendimiento de los sistemas de abordo.",
    cv: "/cv-lumal.pdf",
    gaps: "Brechas Críticas (Documentales): El Perfil exige Libreta de Mar. El candidato no tiene Libreta de Mar vigente (Impedimento legal). Brechas Subsanables (Formativas): Conoce la herramienta (Excel) para el control presupuestal, pero no acredita el curso documentalmente. Requiere inducción en 'Básicos de Universidad Protexa'.",
    
    // 1. FORTALEZAS MATCH
    fortalezas: [
      {
        impact: "CRÍTICO POSITIVO",
        req: "Amplio conocimiento de equipos mecánicos, sistemas neumáticos e hidráulicos.",
        ev: "Durante un Blackout diagnosticó a distancia que la 'seguridad de alta temperatura [estaba] enclavada' erróneamente. Instruyó ignorar la alarma para forzar el arranque, logrando presurizar los 'compresores de aire' y recuperar el gobierno.",
        level: "Experto"
      },
      {
        impact: "CRÍTICO POSITIVO",
        req: "Asegurar el suministro de refaccionamiento, materiales y servicios externos.",
        ev: "Ante la falla de un propulsor de proa (DP2), gestionó que un proveedor acudiera en 'lancha' para realizar 'análisis de vibraciones y termico', además de estar facultado para el 'cambio de rodamientos abordo'.",
        level: "Alto"
      },
      {
        impact: "ALTO",
        req: "Cumplir con los requerimientos establecidos en el SGI.",
        ev: "Durante una inspección donde el generador falló, mitigó mostrando 'registros de prueba semales' y 'videos'. Encontró un relevador dañado y lo 'tomo prestado de otro equipo' para acreditar la inspección.",
        level: "Alto"
      },
      {
        impact: "ALTO",
        req: "Diseño, planeación y seguimiento de programas de mantenimiento a embarcaciones.",
        ev: "Administró un Dique Seco en Progreso ('no habiendo casi talleres haya disponibles'), fungiendo como 'coordinador de trabajos, comprador y representante del armador', reportando un 'control de avance y costos diarios'.",
        level: "Alto"
      }
    ],
    
    // RIESGOS TÉCNICOS Y MITIGACIONES
    riesgos: [
      {
        impact: "Medio",
        risk: "Dependencia de la Canibalización de Componentes: Aunque salvar una auditoría usando un relevador 'prestado' es una solución táctica, esta práctica repetida es un riesgo para el SGI.",
        mitigation: "Auditar que su gestión técnica incluya el registro estricto del 'Management of Change' (Administración del Cambio) cuando altera equipos."
      },
      {
        impact: "Medio",
        risk: "Dependencia Operativa Remota: Durante la emergencia del Blackout, el éxito dependió enteramente de que la tripulación a bordo pudiera seguir instrucciones complejas a distancia.",
        mitigation: "Asegurar que estandarice capacitaciones a bordo para que la tripulación resuelva estas fallas sin necesidad de una llamada a tierra."
      }
    ],
    
    // 2. FIT TÉCNICO (Viabilidad Operativa)
    fit: [
      {
        label: "Perfil Campo/Tierra Altamente Resolutivo",
        score: "Excede",
        desc: "El nivel de acoplamiento del candidato frente a las exigencias operativas del puesto es sobresaliente. Su principal diferenciador es ser un perfil 'hands-on' con un profundo entendimiento de los sistemas de abordo."
      },
      {
        label: "Liderazgo y Diagnóstico Remoto",
        score: "Excede",
        desc: "Demuestra capacidad para liderar a las tripulaciones de forma remota durante crisis severas (como un Blackout), lo que indica que no depende de terceros para interpretar fallas."
      },
      {
        label: "Diplomacia Técnica y Rudeza Operativa",
        score: "Excede",
        desc: "Combina la rudeza operativa de resolver problemas en puertos sin infraestructura naval con la diplomacia técnica necesaria para salvar auditorías estatutarias internacionales (ISM)."
      }
    ],
    
    // 3. TABLA DE CUMPLIMIENTO DE PERFIL (Scorecard)
    scorecard: [
      {
        r: "Escolaridad",
        req: "Licenciatura",
        ob: "Excede",
        subItems: [
          {
            name: "Ingeniería Naval",
            status: "Universidad Veracruzana (15 pts + 2 bono)",
            ob: "Superado"
          }
        ]
      },
      {
        r: "Especialidad",
        req: "Ing. Mecánico Naval / Electromecánico / Carrera afín",
        ob: "Cumple",
        subItems: [
          {
            name: "Afinidad de Carrera (Ing. Naval)",
            status: "Match exacto a la industria (10/10 pts)",
            ob: "Cumple"
          }
        ]
      },
      {
        r: "Experiencia",
        req: "5 años",
        ob: "Excede",
        subItems: [
          {
            name: "Experiencia en el sector naviero",
            status: "Más de 17 años ininterrumpidos como Ing. de Puerto (27 pts)",
            ob: "Superado"
          }
        ]
      },
      {
        r: "Documentos",
        req: "TÍTULO, CÉDULA y LIBRETA DE MAR",
        ob: "Cumple Parcialmente",
        subItems: [
          {
            name: "Título y Cédula Profesional",
            status: "Acreditado",
            ob: "Cumple"
          },
          {
            name: "Libreta de Mar",
            status: "No vigente",
            ob: "No Cumple"
          }
        ]
      },
      {
        r: "Cursos",
        req: "Inglés técnico, Office, Básicos Protexa",
        ob: "No Cumple",
        subItems: [
          {
            name: "Certificados de Inglés y Office",
            status: "Conoce las herramientas pero no acredita cursos formalmente (0 pts)",
            ob: "Pendiente"
          }
        ]
      },
      {
        r: "Competencias Técnicas",
        req: "Sistemas mecánicos, neumáticos e hidráulicos; Mantenimiento",
        ob: "Excede",
        subItems: [
          {
            name: "Conocimiento de equipos mecánicos y neumáticos",
            status: "Comprobado en diagnóstico a bordo en controles de gobierno (10 pts)",
            ob: "Cumple"
          },
          {
            name: "Planeación de programas de mantenimiento",
            status: "Comprobado en la estructuración de control presupuestal complejo (10 pts)",
            ob: "Cumple"
          }
        ]
      }
    ],
    
    // 4. ENTREVISTA METODOLOGÍA STAR
    star: [
      {
        q: "1. Sistemas Neumáticos e Hidráulicos",
        competencia: "Amplio conocimiento de equipos mecánicos, sistemas neumáticos e hidráulicos.",
        pregunta: "Cuéntame de una Situación en la que un sistema neumático o hidráulico crítico falló a bordo. ¿Cuál era tu Tarea exacta, qué Acción técnica tomaste para diagnosticar y coordinar, y cuál fue el Resultado?",
        s: "Compresor de aire de arranque no entra en servicio. Recibo la notificacion por parte del personal de abordo.",
        t: "Diagnosticar la falla; si la embarcacion esta en puerto acudo al sitio, si la embarcacion se encuentra costa fuera, pido al jefe mas detalles.",
        a: "Se realizan las pruebas mas comunes, revisar que llegue energia, y la revision del interruptor de presion automatico. En caso de no tener respuesta satisfactoria, reviso los manuales e inicio a aislar la falla, revisando el stock abordo.",
        r: "Si se cuenta con la refaccion se remplaza; de no contar con ella, realizo la solicitud y me encargo de las gestiones pertinentes para surtir a la brevedad, volver a poner el equipo en operacion y realizar pruebas satisfactorias."
      },
      {
        q: "2. Gestión de Refaccionamiento Crítico y Servicios Externos",
        competencia: "Asegurar el suministro de refaccionamiento, materiales y servicios externos para mantenimiento.",
        pregunta: "Descríbeme una Situación en la que una embarcación a tu cargo requirió una refacción crítica internacional o un servicio externo especializado muy urgente. ¿Cuál era tu Tarea, qué Acción tomaste y cuál fue el Resultado?",
        s: "Embarcacion DIPI 2, uno de los propulsores de proa muestra vibraciones anormales y calentamiento de rodamientos. Jefe pensaba que era falta de lubricacion, pero el incremento de vibraciones indicaba otra falla.",
        t: "Se instruye no usar el equipo salvo necesidad muy critica y estar en observacion durante la descarga de lodo, informando al gerente de mantenimiento.",
        a: "Se requiere mandar un taller para analisis de vibraciones y analisis termico, facultado para realizar cambio de rodamientos abordo. Se envia taller en lancha y detectan que el problema esta en el balero inferior.",
        r: "Se procedio al cambio de baleros, alineacion, analisis de vibraciones y analisis termico, quedando el equipo nuevamente en operacion."
      },
      {
        q: "3. Herramientas de Gestión de Mantenimiento",
        competencia: "Manejo de paquetería Office y planeación.",
        pregunta: "Háblame de una Situación en la que hayas tenido que estructurar un control presupuestal complejo o un programa de mantenimiento preventivo desde cero.",
        s: "La adaptacion de una embarcacion para el trasporte de chatarra desde las plataformas a puerto.",
        t: "Solicitar al departamento correspondiente los requerimientos del contrato, listar lo que tenemos y no tenemos, e iniciar a generar las cotizaciones necesarias.",
        a: "Procedo a realizar una ruta critica para poder medir los tiempos y realizar los ajustes necesarios para cumplir con la fecha compromiso. Este programa me sirve para ir controlando los avances y posibles desviaciones durante la marcha.",
        r: "El resultado a los que he llegado es cumplir en tiempo y costos con los proyectos que se me han confiado."
      },
      {
        q: "4. Planeación de Mantenimiento y Diques Secos",
        competencia: "Diseño, planeación y seguimiento de programas de mantenimiento.",
        pregunta: "Relátame la Situación del ingreso a dique seco más retador que hayas administrado. ¿Cuál fue la Tarea y el presupuesto, qué Acción tomaste para controlar costos y asegurar el cronograma?",
        s: "La subida a Dique de la embarcacion Don Felipe en Progreso Yucatan, ya que en ese puerto no se encuentra como tal un centro de reparaciones navales.",
        t: "Como representante del armador, la tarea fue acreditar la puesta en seco, realizar los mantenimientos requeridos para volver a servicio con PEMEX y acreditar el CHECK LIST de reingreso.",
        a: "El reto es la logistica para el seguimiento no habiendo casi talleres disponibles. Realice funcion de coordinador, comprador y representante, localizando talleres, cotizando y pasando costos diarios a la alta direccion.",
        r: "Se realizo la solicitud de fondos con tiempo. El resultado fue finalizar con solo 2 dias de retraso derivado de condiciones meteorologicas que atrasaron la pintura."
      },
      {
        q: "5. Auditorías y Cumplimiento Normativo SGI",
        competencia: "Cumplir con los requerimientos establecidos en el SGI.",
        pregunta: "Describe una Situación crítica en la que una de tus embarcaciones estuvo en alto riesgo de no aprobar una auditoría estatutaria. ¿Cuál era tu Tarea, qué Acción correctiva implementaste y cuál fue el Resultado?",
        s: "Generador de emergencia no arranca en el momento de la inspeccion.",
        t: "Demostrar al inspector con registros y videos que el equipo operaba normalmente y que el fallo era puntual.",
        a: "Pedi al inspector que me permitiera verificar el equipo. Me dedique junto con el personal de abordo a revisar si arrancaba de forma local inicialmente. Al comprobarlo, la atencion se dirigio a la señal de arranque remoto, encontrando un relevador dañado.",
        r: "El relevador dañado se tomo prestado de otro equipo para poder acreditar la inspeccion en ese momento. Posterior se realizo el requerimiento para surtirse a la brevedad."
      },
      {
        q: "6. Operaciones Offshore y Resolución de Emergencias",
        competencia: "Asegurar y supervisar las actividades de mantenimiento.",
        pregunta: "Relátame una Situación donde haya ocurrido una falla imprevista durante una operación offshore, amenazando con detener las actividades del cliente.",
        s: "Embarcacion sin gobierno y sin generacion electrica cerca de la costa. Capitan informa 30 min en Black Out; en los multiples intentos de arrancar los MGs se quedaron sin aire de arranque y se bajaron las baterias.",
        t: "Tranquilizar al personal, activar gobierno de emergencia y alejar la embarcacion de la costa por viento y corriente.",
        a: "Pido a la tripulacion tomar video del tablero; noto que la seguridad de alta temperatura estaba enclavada cuando ese motor no estaba trabajando. Pedi que desconectaran el actuador de los paros, ya que el motor debia arrancar.",
        r: "Se logro poner en servicio los compresores de aire y retomar navegacion. Se argumento al cliente que se revento una manguera del sistema de gobierno, la remplazamos, purgamos, y solo quedo en una llamada de atencion."
      }
    ]
  },
  {
    id: "nestor-castillo",
    theme: "amber",
    badge: "VIABLE",
    status: "ENTREVISTAR CON CONDICIÓN",
    avatar: "/neca.jpg",
    name: "Néstor Leobardo Castillo Lizárraga",
    title: "Auditor y Consultor Técnico",
    school: "Instituto de Ciencias y Estudios Superiores de Tamaulipas (ICEST)",
    sub: "Base técnica e ingenieril sólida, con fuerte orientación a la logística de crisis, recuperación de embarcaciones y auditoría normativa (Check-lists PEP, ABL LOC). Perfil sumamente ágil para la administración de activos.",
    cv: "/cv-neca.pdf",
    gaps: "Brechas Documentales: Conoce Excel pero no acredita el curso documentalmente. Falta evidencia de curso de Inglés conversacional y re-inducción de Universidad Protexa. Libreta de Mar no vigente.",
    
    // 1. FORTALEZAS MATCH
    fortalezas: [
      {
        impact: "CRÍTICO POSITIVO",
        req: "Diseño, planeación y seguimiento de programas de mantenimiento a embarcaciones.",
        ev: "Ante un remolcador con rezago grave, generó un 'reporte de todos estos incumplimientos, verificar el índice de prioridad... organizar y planear' logrando aprobar el Check-list de PEP.",
        level: "Alto"
      },
      {
        impact: "POSITIVO",
        req: "Amplio conocimiento de equipos mecánicos, sistemas neumáticos e hidráulicos.",
        ev: "Diagnosticó que un winche de maniobras sin fuerza presentaba 'exceso de lubricante lo cual no permitía que la bomba de recirlulación trabajara de manera adecuada' mediante análisis visual cruzado.",
        level: "Medio-Alto"
      },
      {
        impact: "CRÍTICO POSITIVO",
        req: "Asegurar seguimiento al suministro de refaccionamiento, materiales y servicios.",
        ev: "Durante una contingencia de huracán en Tuxpan, coordinó la 'logística y el envío de cabos, estrobos para el correcto amarre... coordinando con la SEMAR' salvaguardando la Barcaza Fénix.",
        level: "Alto"
      }
    ],
    
    // RIESGOS TÉCNICOS Y MITIGACIONES
    riesgos: [
      {
        impact: "Medio",
        risk: "Resolución Correctiva de Daños: Tendencia a resolver contingencias operativamente (ej. distribuir lastre para pasar inspección) en lugar de detallar la ejecución de correcciones mecánicas duras.",
        mitigation: "El liderazgo debe apoyarse fuertemente en su Jefe de Máquinas para la ejecución correctiva directa de los componentes electromecánicos."
      },
      {
        impact: "Medio",
        risk: "Conciliación Normativa: Tendencia a gestionar excepciones ('waivers') y conciliar con auditores en lugar de ejecutar mantenimientos correctivos inmediatos.",
        mitigation: "Alinear su gestión técnica con el área de operaciones para asegurar que la negociación no reemplace la corrección de fallas críticas."
      }
    ],
    
    // 2. FIT TÉCNICO (Viabilidad Operativa)
    fit: [
      {
        label: "Orientación a la Logística de Crisis",
        score: "Excede",
        desc: "Extraordinaria capacidad de reacción logística ante crisis meteorológicas y protección del patrimonio naviero coordinando con autoridades."
      },
      {
        label: "Auditoría Normativa y Negociación",
        score: "Excede",
        desc: "Alto poder de convencimiento y negociación con auditores internacionales (ABL LOC) y clientes, aportando enorme valor a la Dirección de Energía."
      },
      {
        label: "Asset Integrity",
        score: "Cumple",
        desc: "Gran capacidad analítica para estructurar cronogramas de recuperación y Asset Integrity. Perfil más consultivo y logístico que 100% de ejecución mecánica pesada."
      }
    ],
    
    // 3. TABLA DE CUMPLIMIENTO DE PERFIL (Scorecard)
    scorecard: [
      {
        r: "Escolaridad",
        req: "Licenciatura",
        ob: "Excede",
        subItems: [
          {
            name: "Lic. en Ingeniería Mecatrónica",
            status: "Instituto de Ciencias y Estudios Superiores de Tamaulipas (15 pts + 2 bono)",
            ob: "Superado"
          }
        ]
      },
      {
        r: "Especialidad",
        req: "Ing. Mecánico Naval / Electromecánico / Carrera afín",
        ob: "Cumple",
        subItems: [
          {
            name: "Afinidad de Carrera (Mecatrónica)",
            status: "Afinidad directa a la industria electromecánica (10/10 pts)",
            ob: "Cumple"
          }
        ]
      },
      {
        r: "Experiencia",
        req: "5 años",
        ob: "Excede",
        subItems: [
          {
            name: "Experiencia en el sector naviero/offshore",
            status: "Más de 6 años ininterrumpidos desde 08/2019 (27 pts)",
            ob: "Superado"
          }
        ]
      },
      {
        r: "Documentos",
        req: "TÍTULO, CÉDULA y LIBRETA DE MAR",
        ob: "Cumple Parcialmente",
        subItems: [
          {
            name: "Título y Cédula Profesional",
            status: "Acreditado",
            ob: "Cumple"
          },
          {
            name: "Libreta de Mar",
            status: "No vigente",
            ob: "No Cumple"
          }
        ]
      },
      {
        r: "Cursos",
        req: "Inglés técnico, Office, Básicos Protexa",
        ob: "No Cumple",
        subItems: [
          {
            name: "Certificados de Inglés y Office",
            status: "Conoce Excel pero carece de un diploma que lo acredite documentalmente (0 pts)",
            ob: "Pendiente"
          }
        ]
      },
      {
        r: "Competencias Técnicas",
        req: "Sistemas mecánicos, neumáticos e hidráulicos; Mantenimiento",
        ob: "Excede",
        subItems: [
          {
            name: "Conocimiento de equipos mecánicos/hidráulicos",
            status: "Validado al resolver fallas en winche de maniobras (10 pts)",
            ob: "Cumple"
          },
          {
            name: "Diseño y planeación de mantenimiento",
            status: "Validado en estructuración de atención cronológica de rezagos (10 pts)",
            ob: "Cumple"
          }
        ]
      }
    ],
    
    // 4. ENTREVISTA METODOLOGÍA STAR
    star: [
      {
        q: "1. Sistemas Neumáticos e Hidráulicos",
        competencia: "Amplio conocimiento de equipos mecánicos, sistemas neumáticos e hidráulicos.",
        pregunta: "Reláteme una SITUACIÓN a bordo donde un sistema neumático o hidráulico crítico haya presentado una falla severa.",
        s: "Se tenia un remolcador fuera de servicio porque el winche de maniobras no giraba con velocidad, no tenia fuerza y al mismo tiempo estaba tirando aceite por uno de los sellos del carter.",
        t: "Inspeccionar junto con el personal del departamento de maquinas que estaba causando esta situacion.",
        a: "Realizar un flushin para ver si alguna linea estaba obstruida... se reviso la mirilla del nivel de lubricante la cual hacia parecer que todo estaba normal mas sin embargo las fallas indicaban que el lubricante no estaba fluyendo de manera correcta, dí la instrucción de destapar la parte superior del winche.",
        r: "La falla fue resuelta ya que el winche presentaba exceso de lubricante lo cual no permitía que la bomba de recirlulación trabajara de manera adecuada."
      },
      {
        q: "2. Ejecución y Control de Mantenimiento Correctivo",
        competencia: "Asegurar el seguimiento oportuno a los programas de mantenimiento preventivo y correctivo.",
        pregunta: "Reláteme una SITUACIÓN reciente donde una embarcación en proyecto sufrió una avería estructural o mecánica que detuvo la operación.",
        s: "Un chalán cargado con una plataforma, presentó una filtración de agua entre sus tanques del lastre, ya que se encontraba listo para zarpe, esto retrasaba de manera importante la instalación de dicha plataforma.",
        t: "Encontrar la raíz de la filtración, una vez detectada, proponer el mejor método para poder subsanar esta falla, sin necesidad de afectar los seguros marinos.",
        a: "Verificar mediante un detector libre de gases que se pudiera entrar a espacios confinados, de manera segura. Una vez dentro de los tanques del lastre, empezar a distribuir de manera uniforme el lastre.",
        r: "Una vez resuelta esta situación y ejecutado estos trabajos, se verificó que los calados de navegación correspondieran al manual de transportación, y asimismo se checó con la aseguradora o garantía Marina para poder obtener un certificado de zarpe."
      },
      {
        q: "3. Herramientas de Gestión y Presupuestos",
        competencia: "Manejo de paquetería Office.",
        pregunta: "Descríbame la SITUACIÓN más compleja en la que tuvo que estructurar un control de gastos operativos o conciliación de daños.",
        s: "Durante la entrega de los chalanes de mi representada hacia el armador, eran necesario e indispensable entregarlos en las mismas condiciones en las que se recibieron.",
        t: "Realizar el levantamiento de todos los daños ocasionados durante el proyecto, verificar de manera correcta que todos formen parte del proyecto.",
        a: "Generar el alcance de todos los daños, así como los posibles costos de reparación y tiempos que se tomará para subsanar dichas reparaciones haciendo tablas, comparativas para buscar en cuestión de tiempo, la opción más viable.",
        r: "Los chalanes se repararon en tiempo y forma gracias a la pronta respuesta y a la correcta planeación de todos los alcances de la obra."
      },
      {
        q: "4. Planeación Estratégica y Asset Integrity",
        competencia: "Diseño, planeación y seguimiento de programas de mantenimiento a embarcaciones.",
        pregunta: "Hábleme de una SITUACIÓN en la que haya recibido una embarcación con un rezago grave de mantenimiento.",
        s: "Se recibió un remolcador en condiciones de rezago de mantenimiento consistente en el nulo funcionamiento de los pines de remolque. Los aspersores contra incendios, no funcionaban.",
        t: "Generar un reporte de todos estos incumplimientos, verificar el índice de prioridad, de acuerdo a la operatividad de la embarcación para poder atender en tiempo y forma.",
        a: "Organizar y planear cada una de las atenciones a los componentes antes mencionados, de manera que logísticamente, pudiéramos tener una buena cronología, sin necesidad de parar los trabajos y poder recibir refacciones.",
        r: "En el periodo estimado de tiempo, se resolvió de manera oportuna cada una de estas necesidades pudiendo aprobar el Check-list por parte de PEP de manera satisfactoria."
      },
      {
        q: "5. Cumplimiento SGI y Auditorías Estatutarias",
        competencia: "Cumplir con los requerimientos establecidos en el SGI.",
        pregunta: "Reláteme la SITUACIÓN de la auditoría más rigurosa a la que se haya enfrentado, donde estuvieron a punto de recibir una no conformidad mayor.",
        s: "Durante la inspección por parte de la garantía Marina, a la Barcaza fénix , los radios de comunicación de banda aérea no estaban funcionando de manera correcta.",
        t: "Conciliar con el representante de la garantía Marina en sitio para que nos permitiera aún en esta situación, poder instalar la plataforma Marina, contando con su certificación.",
        a: "Conciliar con el representante de la garantía Marina en sitio... comprometiéndonos a lo antes posible, subsanar este hallazgo.",
        r: "El inspector de garantía Marina, en sitio, nos emitió el certificado de instalación de la plataforma, ya que en este momento no representaba un riesgo, no contar con dichos radios en óptimas condiciones."
      },
      {
        q: "6. Logística Crítica y Servicios Externos",
        competencia: "Asegurar seguimiento al suministro de refaccionamiento, materiales y servicios.",
        pregunta: "Descríbame otra SITUACIÓN logística altamente crítica donde faltaba un servicio externo, material o refacción urgente en altamar.",
        s: "Barcaza Fénix a la deriva en el puerto de Tuxpan,Veracruz posterior a un evento de huracán.",
        t: "Coordinar de manera inmediata la logística y el envío de cabos, estrobos para el correcto amarre de las embarcaciones así también coordinar la recuperación de el chalán cargado con una plataforma.",
        a: "Una correcta ejecución de todo lo pertinente, para no causar daños a las embarcaciones de nuestra representada coordinando con la SEMAR que no incumpliéramos ningún lineamiento.",
        r: "Las embarcaciones fueron resguardadas nuevamente en puerto de forma segura."
      }
    ]
  }
];
