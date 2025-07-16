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

const contenedor = document.getElementById('malla');

malla.forEach(anio => {
    const divAnio = document.createElement('div');
    divAnio.className = 'anio';

    const h2 = document.createElement('h2');
    h2.textContent = `Año ${anio.anio}`;
    divAnio.appendChild(h2);

    anio.semestres.forEach(sem => {
        const divSemestre = document.createElement('div');
        divSemestre.className = 'semestre';

        const h3 = document.createElement('h3');
        h3.textContent = `Semestre ${sem.numero}`;
        divSemestre.appendChild(h3);

        const divRamos = document.createElement('div');
        divRamos.className = 'ramos';

        sem.ramos.forEach(ramo => {
            const btn = document.createElement('button');
            btn.className = 'ramo';
            btn.id = ramo.id;
            btn.textContent = ramo.nombre;

            if (ramo.requisitos.length > 0) {
                btn.classList.add('bloqueado');
                btn.disabled = true;
                btn.dataset.requiere = ramo.requisitos.join(',');
            }

            divRamos.appendChild(btn);
        });

        divSemestre.appendChild(divRamos);
        divAnio.appendChild(divSemestre);
    });

    contenedor.appendChild(divAnio);
});

// Lógica de desbloqueo
document.addEventListener('click', e => {
    if (!e.target.classList.contains('ramo')) return;

    const btn = e.target;
    if (btn.classList.contains('bloqueado')) return;

    btn.classList.toggle('aprobado');

    document.querySelectorAll('.ramo').forE

