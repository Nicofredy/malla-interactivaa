const malla = [
    {
        anio: 1,
        semestres: [
            {
                numero: 1,
                ramos: [
                    { id: "comunicacion", nombre: "Taller de Comunicación Oral y Escrita", requisitos: [] },
                    { id: "matematica", nombre: "Matemática General", requisitos: [] },
                    { id: "introMed", nombre: "Introducción a la Medicina Veterinaria", requisitos: [] },
                    { id: "biocel", nombre: "Biología Celular", requisitos: [] },
                    { id: "quimica", nombre: "Química", requisitos: [] }
                ]
            },
            {
                numero: 2,
                ramos: [
                    { id: "ingles1", nombre: "Inglés I", requisitos: [] },
                    { id: "bioestadistica", nombre: "Bioestadística", requisitos: [] },
                    { id: "anatomiaCan", nombre: "Anatomía del Canino", requisitos: ["biocel"] },
                    { id: "histoemb", nombre: "Histoembriología", requisitos: ["biocel"] },
                    { id: "bioquimica", nombre: "Bioquímica", requisitos: ["quimica"] }
                ]
            }
        ]
    },
    {
        anio: 2,
        semestres: [
            {
                numero: 3,
                ramos: [
                    { id: "ingles2", nombre: "Inglés II", requisitos: ["ingles1"] },
                    { id: "medioambiente", nombre: "Medio Ambiente y Gestión Ambiental", requisitos: [] },
                    { id: "anatomiaComp", nombre: "Anatomía Comparada", requisitos: ["anatomiaCan"] },
                    { id: "zoologia", nombre: "Zoología", requisitos: [] },
                    { id: "genetica", nombre: "Genética", requisitos: [] }
                ]
            }
        ]
    }
];
