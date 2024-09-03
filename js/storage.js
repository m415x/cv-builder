import { updatePreview } from './main.js'
import { captureFormData } from './formHandler.js'
import { translatePage } from './translations.js'

const $ = el => document.querySelector(el)
const $$ = el => document.querySelectorAll(el)

// Función para guardar los datos del formulario en localStorage
export function saveFormData() {
    const formData = new FormData($("#cv-form"))
    const data = {}

    if (key === 'picture') {
        // Guardar la URL de datos de la imagen en lugar del archivo
        const pictureInput = $('input[name="picture"]')
        if (pictureInput.files[0]) {
            const reader = new FileReader()
            reader.onload = function (e) {
                data[key] = e.target.result
                localStorage.setItem('cvFormData', JSON.stringify(data))
            }
            reader.readAsDataURL(pictureInput.files[0])
        }
        return
    }

    formData.forEach((value, key) => {
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
    if (!data['picture']) {
        localStorage.setItem('cvFormData', JSON.stringify(data))
    }
}

// Función para restaurar los datos del formulario desde localStorage
export function restoreFormData() {
    const savedData = localStorage.getItem('cvFormData')

    if (savedData) {
        const data = JSON.parse(savedData)

        Object.keys(data).forEach(key => {
            const elements = $$(`[name="${key}"]`)

            elements.forEach((element, index) => {
                if (element.type === 'file') {
                    // Restaurar la URL de datos de la imagen
                    if (key === 'picture') {
                        updatePicturePreview(data[key])
                    }
                    return
                }
                element.value = Array.isArray(data[key]) ? data[key][index] || '' : data[key]
            })
        })

        // Rellenar dinámicamente las secciones de experiencia y educación
        if (data['job-title[]']) {
            data['job-title[]'].forEach((jobTitle, index) => {
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
            data['degree[]'].forEach((degree, index) => {
                if (index > 0) {
                    $("#add-education").click()
                }
                $$('[name="degree[]"]')[index].value = degree
                $$('[name="institution[]"]')[index].value = data['institution[]'][index] || ''
                $$('[name="edu-dates[]"]')[index].value = data['edu-dates[]'][index] || ''
            })
        }
    }
    updatePreview(captureFormData())

    const languageSelect = $("#languageSelect")

    // Cargar el idioma seleccionado desde localStorage
    const savedLanguage = localStorage.getItem("selectedLanguage") || navigator.language || 'en'
    languageSelect.value = savedLanguage

    translatePage(savedLanguage)
}

function updatePicturePreview(dataUrl) {
    const picturePreview = $('img.profile-photo') // O la ubicación donde muestras la imagen
    if (picturePreview) {
        picturePreview.src = dataUrl
    }
}
