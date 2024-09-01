import { updatePreview } from './main.js'
import { translatePage } from './translations.js'

const $ = el => document.querySelector(el)
const $$ = el => document.querySelectorAll(el)

// Inicializar un objeto para almacenar los datos del formulario
let formData = {}

// Capturar los datos de los inputs y actualizar el objeto formData
export function captureFormData() {

    const form = $("#cv-form")
    const inputs = form.querySelectorAll("input, textarea, select")

    inputs.forEach(input => {
        // Omitir los campos que pertenecen a la experiencia o educación
        if (
            input.name.includes("job-title[]") ||
            input.name.includes("company[]") ||
            input.name.includes("job-dates[]") ||
            input.name.includes("job-description[]") ||
            input.name.includes("degree[]") ||
            input.name.includes("institution[]") ||
            input.name.includes("edu-dates[]")
        ) {
            return // Saltar estos campos
        }

        if (input.type === "file" && input.files.length > 0) {
            // Si es un input de tipo "file", almacenar el archivo como un objeto URL
            const file = input.files[0]
            const reader = new FileReader()

            reader.onload = function (event) {
                formData[input.name] = event.target.result // Almacenar la URL de la imagen
                updatePreview(formData) // Actualizar la vista previa con la imagen cargada
            }

            reader.readAsDataURL(file) // Leer el archivo como una URL de datos
        } else {
            formData[input.name] = input.value
        }
    })

    // Capturar datos de experiencia
    formData.experience = []
    const experienceItems = $$("#experience-section .experience-item")
    experienceItems.forEach(item => {
        const experience = {
            jobTitle: item.querySelector('input[name="job-title[]"]').value,
            company: item.querySelector('input[name="company[]"]').value,
            dates: item.querySelector('input[name="job-dates[]"]').value,
            description: item.querySelector('textarea[name="job-description[]"]').value
        }
        formData.experience.push(experience)
    })

    // Capturar datos de educación
    formData.education = []
    const educationItems = $$("#education-section .education-item")
    educationItems.forEach(item => {
        const education = {
            degree: item.querySelector('input[name="degree[]"]').value,
            institution: item.querySelector('input[name="institution[]"]').value,
            dates: item.querySelector('input[name="edu-dates[]"]').value
        }
        formData.education.push(education)
    })

    console.log(formData) // Para verificar en la consola
    return formData
}

// Verificar si los campos de experiencia están completos
function areExperienceFieldsComplete() {
    const experienceItems = $$("#experience-section .experience-item")
    return Array.from(experienceItems).every(item => {
        return item.querySelector('input[name="job-title[]"]').value &&
            item.querySelector('input[name="company[]"]').value &&
            item.querySelector('input[name="job-dates[]"]').value &&
            item.querySelector('textarea[name="job-description[]"]').value
    })
}

// Función para agregar nuevos campos de experiencia
export function addExperienceField() {
    if (!areExperienceFieldsComplete()) {
        alert("Please complete all fields of experience before adding a new one.")
        return
    }

    const experienceSection = $("#experience-section")
    const experienceCount = $$("#experience-section .experience-item").length + 1 // Contar las experiencias actuales
    const newExperience = document.createElement('div')
    newExperience.classList.add("experience-item")
    newExperience.innerHTML = `
        <h3>Experience ${experienceCount}</h3>
        <label for="job-title[]"><span>Job Title</span>:
            <input type="text" name="job-title[]" required>
        </label>

        <label for="company[]"><span>Company</span>:
            <input type="text" name="company[]" required>
        </label>

        <label for="job-dates[]"><span>Dates</span>:
            <input type="text" name="job-dates[]" required>
        </label>

        <label for="job-description[]"><span>Description</span>:
            <textarea name="job-description[]" rows="2"></textarea>
        </label>
    `
    experienceSection.appendChild(newExperience)

    //TODO Traducir contenido
    //translatePage() //! No funciona
}

// Verificar si los campos de educación están completos
function areEducationFieldsComplete() {
    const educationItems = $$("#education-section .education-item")
    return Array.from(educationItems).every(item => {
        return item.querySelector('input[name="degree[]"]').value &&
            item.querySelector('input[name="institution[]"]').value &&
            item.querySelector('input[name="edu-dates[]"]').value
    })
}

// Función para agregar nuevos campos de educación
export function addEducationField() {
    if (!areEducationFieldsComplete()) {
        alert("Please complete all education fields before adding a new one.")
        return
    }

    const educationSection = $("#education-section")
    const educationCount = $$("#education-section .education-item").length + 1 // Contar las educaciones actuales
    const newEducation = document.createElement('div')
    newEducation.classList.add("education-item")
    newEducation.innerHTML = `
        <h3>Education ${educationCount}</h3>
        <label for="degree[]"><span>Degree</span>:
            <input type="text" name="degree[]" required>
        </label>

        <label for="institution[]"><span>Institution</span>:
            <input type="text" name="institution[]" required>
        </label>

        <label for="edu-dates[]"><span>Dates</span>:
            <input type="text" name="edu-dates[]" required>
        </label>
    `
    educationSection.appendChild(newEducation)
}

// Evento para capturar clic en los botones y agregar los campos dinámicos
export function initializeFormHandlers() {
    const addExperienceBtn = $("#add-experience")
    const addEducationBtn = $("#add-education")

    // Agregar nuevo campo de experiencia al hacer clic en el botón
    addExperienceBtn.addEventListener("click", addExperienceField)

    // Agregar nuevo campo de educación al hacer clic en el botón
    addEducationBtn.addEventListener("click", addEducationField)
}
