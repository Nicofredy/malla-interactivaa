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
            },
            {
                numero: 4,
                ramos: [
                    { id: "admin", nombre: "Administración y Emprendimiento Veterinario", requisitos: [] },
                    { id: "microbiologia", nombre: "Microbiología General y Veterinaria", requisitos: ["bioquimica"] },
                    { id: "fisiologia", nombre: "Fisiología Animal", requisitos: ["bioquimica"] },
                    { id: "enferParasitarias", nombre: "Enfermedades Parasitarias", requisitos: ["microbiologia"] },
                    { id: "nutricion", nombre: "Nutrición y Alimentación Animal", requisitos: [] }
                ]
            }
        ]
    }
];

const contenedor = document.getElementById('malla');

malla.forEach(anio => {
    const fila = document.createElement('div');
    fila.className = 'fila-anio';

    anio.semestres.forEach(sem => {
        const columna = document.createElement('div');
        columna.className = 'columna-semestre';

        const titulo = document.createElement('h3');
        titulo.textContent = `${sem.numero}° Semestre`;
        columna.appendChild(titulo);

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

            columna.appendChild(btn);
        });

        fila.appendChild(columna);
    });

    contenedor.appendChild(fila);
});

// ✅ Lógica de desbloqueo
document.addEventListener('click', e => {
    if (!e.target.classList.contains('ramo')) return;

    const btn = e.target;
    if (btn.classList.contains('bloqueado')) return;

    btn.classList.toggle('aprobado');

    document.querySelectorAll('.ramo').forEach(ramo => {
        const requisitos = ramo.dataset.requiere?.split(',') || [];
        if (requisitos.length > 0 && ramo.classList.contains('bloqueado')) {
            const desbloquear = requisitos.every(id =>
                document.getElementById(id)?.classList.contains('aprobado')
            );
            if (desbloquear) {
                ramo.classList.remove('bloqueado');
                ramo.disabled = false;
            }
        }
    });
});

