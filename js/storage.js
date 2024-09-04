import { updatePreview } from './main.js'
import { captureFormData } from './formHandler.js'
import { translatePage } from './translations.js'

const $ = el => document.querySelector(el)
const $$ = el => document.querySelectorAll(el)

// Función para guardar los datos del formulario en localStorage
export function saveFormData() {
    const formData = new FormData($("#cv-form"))
    const data = {}

    // Iterar sobre los datos del formulario
    formData.forEach((value, key) => {
        if (key === 'picture') return

        // Almacenar otros datos del formulario
        if (data[key]) {
            if (!Array.isArray(data[key])) {
                data[key] = [data[key]]
            }
            data[key].push(value)
        } else {
            data[key] = value
        }
    })

    // Guardar en localStorage
    localStorage.setItem('cvFormData', JSON.stringify(data))
}

// Función para restaurar los datos del formulario desde localStorage
export function restoreFormData() {
    const savedData = localStorage.getItem('cvFormData')

    if (savedData) {
        const data = JSON.parse(savedData)

        Object.keys(data).forEach(key => {
            const elements = $$(`[name="${key}"]`)

            elements.forEach((element, index) => {
                element.value = Array.isArray(data[key]) ? data[key][index] || '' : data[key]
            })
        })

        // Rellenar dinámicamente las secciones de experiencia y educación
        if (data['job-title[]']) {
            const jobTitle = Array.isArray(data['job-title[]']) ? data['job-title[]'] : [data['job-title[]']]

            jobTitle.forEach((jobTitle, index) => {
                if (index > 0) {
                    $("#add-experience").click()
                }
                $$('[name="job-title[]"]')[index].value = jobTitle
                $$('[name="company[]"]')[index].value = data['company[]'][index] || ''
                $$('[name="job-dates[]"]')[index].value = data['job-dates[]'][index] || ''
                $$('[name="job-description[]"]')[index].value = data['job-description[]'][index] || ''
            })
        }

        if (data['degree[]']) {
            // Asegúrate de que siempre sea un array
            const degrees = Array.isArray(data['degree[]']) ? data['degree[]'] : [data['degree[]']]

            degrees.forEach((degree, index) => {
                if (index > 0) {
                    $("#add-education").click()
                }
                $$('[name="degree[]"]')[index].value = degree
                $$('[name="institution[]"]')[index].value = data['institution[]'][index] || ''
                $$('[name="edu-dates[]"]')[index].value = data['edu-dates[]'][index] || ''
            })
        }
    }
    updatePreview(captureFormData(), localStorage.getItem('profileImage'))

    const languageSelect = $("#languageSelect")

    // Cargar el idioma seleccionado desde localStorage
    const savedLanguage = localStorage.getItem("selectedLanguage") || navigator.language || 'en'
    languageSelect.value = savedLanguage

    translatePage(savedLanguage)
}
