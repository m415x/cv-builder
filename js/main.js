import { initializeFormHandlers, captureFormData } from './formHandler.js'
import { translatePage } from './translations.js'

const $ = el => document.querySelector(el)
const $$ = el => document.querySelectorAll(el)

document.addEventListener("DOMContentLoaded", () => {
    // Traducir contenido según idioma del navegador
    translatePage()

    // Inicializa los manejadores de eventos del formulario
    initializeFormHandlers()

    // Actualizar los datos del formulario cuando el usuario interactúa con el formulario
    $("#cv-form").addEventListener("input", () => {
        const data = captureFormData()
        updatePreview(data)
    })
})

export function updatePreview(data) {
    // Aquí se utilizarán los datos capturados para actualizar la vista previa del CV
    const preview = $("#cv-preview")
    const previewExperience = $("#preview-experience")
    const previewEducation = $("#preview-education")

    // Generar la vista previa del CV incluyendo la imagen si está disponible
    preview.innerHTML = `
        ${data.picture ? `<img src="${data.picture}" alt="Profile Photo" class="profile-photo">` : ''}
        <h3>${data.name || "Name"}</h3>
        <p>${data.email || "email@example.com"}</p>
        <p>${data.phone || "(000) 000-0000"}</p>
        <p>${data.address || "Address"}</p>
        <p>${data.summary || ""}</p>
    `

    // Limpiar el contenido previo de la experiencia y la educación
    previewExperience.innerHTML = ''
    previewEducation.innerHTML = ''

    // Verificar si hay experiencia para mostrar
    if (data.experience.length > 0 && data.experience.some(exp => exp.jobTitle || exp.company || exp.dates || exp.description)) {
        previewExperience.innerHTML = "<h3>Experience</h3>"

        const experienceList = document.createElement("ul")
        experienceList.classList.add("experience-list")

        data.experience.forEach(experience => {
            if (experience.jobTitle || experience.company || experience.dates || experience.description) {
                const experienceItem = document.createElement("li")
                experienceItem.classList.add("experience-list-item")

                // Crear la estructura de cada experiencia en la lista
                experienceItem.innerHTML = `
                    <h4>${experience.jobTitle || ''}</h4>
                    <p><strong>${experience.company || ''}</strong> ${experience.dates ? '-' : ''} ${experience.dates || ''}</p>
                    <p>${experience.description || ''}</p>
                `

                experienceList.appendChild(experienceItem)
            }
        })

        // Añadir la lista de experiencias al contenedor de experiencia
        previewExperience.appendChild(experienceList)
    }

    // Verificar si hay educación para mostrar
    if (data.education.length > 0 && data.education.some(edu => edu.degree || edu.institution || edu.dates)) {
        previewEducation.innerHTML = "<h3>Education</h3>"

        const educationList = document.createElement("ul")
        educationList.classList.add("education-list")

        data.education.forEach(education => {
            if (education.degree || education.institution || education.dates) {
                const educationItem = document.createElement("li")
                educationItem.classList.add("education-list-item")

                // Crear la estructura de cada educación en la lista
                educationItem.innerHTML = `
                    <h4>${education.degree || ''}</h4>
                    <p><strong>${education.institution || ''}</strong> ${education.dates ? '-' : ''} ${education.dates || ''}</p>
                `

                educationList.appendChild(educationItem)
            }
        })

        // Añadir la lista de educación al contenedor de educación
        previewEducation.appendChild(educationList)
    }
}


/*
document.addEventListener("DOMContentLoaded", () => {

    // Manejar eventos del formulario y la personalización
    $("#theme").addEventListener("change", applyTheme);
    $("#export-pdf").addEventListener("click", exportToPDF);
});

function applyTheme() {
    // Aplica el tema seleccionado
}

function exportToPDF() {
    // Llamar a la función de exportación a PDF
    pdfExporter.export($("#cv-preview"));
}
*/