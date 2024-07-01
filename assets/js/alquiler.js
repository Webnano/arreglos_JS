const propiedades_alquiler = [
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    costo:  2000,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Apartamento luminoso con vista al mar',
    src: './assets/img/depa2.jpg',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 3,
    costo:  2500,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Condominio clasico en zona residencial',
    src: './assets/img/cond1.jpg',
    descripcion: 'Este elegante condominio clasico está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    costo:  2800,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Departamento Moderno ',
    src: './assets/img/depa1.jpg',
    descripcion: 'Este elegante departamento moderno está ubicado en una tranquila zona centro de la cuidad',
    ubicacion: '23 One Street, Los Angeles, CA 91234',
    habitaciones: 2,
    costo:  3200,
    smoke: false,
    pets: true
    },
    ]
const elemento = document.querySelector('.row');
let html='';
    for(let propiedad of propiedades_alquiler) {
        html+=
        `<div class="col-md-3 mb-3">
            <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="foto de departamento con jardin"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedad.habitaciones} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${new Intl.NumberFormat('es-CL').format(propiedad.costo)}</p>
                <p class="${(propiedad.smoke) ? 'text-success' : 'text-danger'}">
                  <i class="${(propiedad.smoke) ? 'fas fa-smoking':'fas fa-smoking-ban'}"></i> ${(propiedad.smoke) ? 'Permitido fumar':'No se permite fumar'}
                </p>
                <p class="${(propiedad.pets) ? 'text-success':'text-danger'}">
                  <i class="${(propiedad.pets) ? 'fas fa-paw':'fa-solid fa-ban'}"></i> ${(propiedad.pets) ? 'Mascotas Permitidas':'No se permiten mascotas'}
                </p>
              </div>
            </div>
          </div>`
    }
    elemento.innerHTML=html;