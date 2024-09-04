import { initializeFormHandlers, captureFormData } from './formHandler.js'
import { translatePage } from './translations.js'
import { saveFormData, restoreFormData } from './storage.js'
import { initializeImageCropper } from './imageHandler.js'

const $ = el => document.querySelector(el)

document.addEventListener("DOMContentLoaded", () => {
    // Inicializa los manejadores de eventos del formulario
    initializeFormHandlers()

    // Inicializa el cropper cuando se cargue la página
    initializeImageCropper()

    // Restaurar los datos cuando la página se carga
    window.addEventListener('load', restoreFormData)
    // restoreFormData()

    const languageSelect = $("#languageSelect")
    // Escuchar cambios en el select de idioma
    languageSelect.addEventListener("change", () => {
        const selectedLanguage = languageSelect.value

        // Guardar el idioma seleccionado en localStorage
        localStorage.setItem("selectedLanguage", selectedLanguage)

        // Traducir la página
        translatePage(selectedLanguage)
    })

    // Actualizar los datos del formulario cuando el usuario interactúa con el formulario
    $("#cv-form").addEventListener("input", () => {
        const data = captureFormData()
        updatePreview(data, localStorage.getItem('profileImage'))
        saveFormData()
    })
})

export function updatePreview(data, dataURL) {
    // Aquí se utilizarán los datos capturados para actualizar la vista previa del CV
    const preview = $("#cv-preview")
    const previewExperience = $("#preview-experience")
    const previewEducation = $("#preview-education")

    // Generar la vista previa del CV incluyendo la imagen si está disponible
    preview.innerHTML = `
    <div class="profile-container">
        ${dataURL ? `<img src="${dataURL}" alt="Profile Photo" class="profile-photo">` : ''}
        <div class="profile-info">
            <h3>${data.name || ""}</h3>
            <p>${data.email || ""}</p>
            <p>${data.phone || ""}</p>
            <p>${data.address || ""}</p>
        </div>
    </div>
    <div class="summary-container">
        <p>${data.summary || ""}</p>
    </div>
    `

    // Limpiar el contenido previo de la experiencia y la educación
    previewExperience.innerHTML = ''
    previewEducation.innerHTML = ''

    // Verificar si hay experiencia para mostrar
    if (data.experience.length > 0 && data.experience.some(exp => exp.jobTitle || exp.company || exp.dates || exp.description)) {
        previewExperience.innerHTML = "<h3 class='experience-preview'>Experience</h3>"

        const experienceList = document.createElement("ul")
        experienceList.classList.add("experience-list")

        data.experience.forEach(experience => {
            if (experience.jobTitle || experience.company || experience.dates || experience.description) {
                const experienceItem = document.createElement("li")
                experienceItem.classList.add("experience-list-item")

                // Crear la estructura de cada experiencia en la lista
                experienceItem.innerHTML = `
                    <h4>${experience.jobTitle || ''}</h4>
                    <p>${experience.dates || ''} ${experience.dates ? '|' : ''} <strong>${experience.company || ''}</strong></p>
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
        previewEducation.innerHTML = "<h3 class='education-preview'>Education</h3>"

        const educationList = document.createElement("ul")
        educationList.classList.add("education-list")

        data.education.forEach(education => {
            if (education.degree || education.institution || education.dates) {
                const educationItem = document.createElement("li")
                educationItem.classList.add("education-list-item")

                // Crear la estructura de cada educación en la lista
                educationItem.innerHTML = `
                    <h4>${education.degree || ''}</h4>
                    <p>${education.dates || ''} ${education.dates ? '|' : ''} <strong>${education.institution || ''}</strong></p>
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