const $ = el => document.querySelector(el)
const $$ = el => document.querySelectorAll(el)

const translations = {
    en: {
        title: "CV Builder",
        personalInfo: "Personal Information",
        name: "Name",
        email: "Email",
        phone: "Phone",
        address: "Address",
        picture: "Profile Picture",
        professionalSummary: "Professional Summary",
        summary: "Summary",
        experience: "Experience",
        jobTitle: "Job Title",
        company: "Company",
        dates: "Dates",
        description: "Description",
        addExperience: "Add Experience",
        education: "Education",
        degree: "Degree",
        institution: "Institution",
        addEducation: "Add Education",
        customization: "Customization",
        chooseATheme: "Choose a theme",
        previewTitle: "CV Preview",
    },
    es: {
        title: "Creador de CV",
        personalInfo: "Información Personal",
        name: "Nombre",
        email: "Correo Electrónico",
        phone: "Teléfono",
        address: "Dirección",
        picture: "Foto de Perfil",
        professionalSummary: "Resumen Profesional",
        summary: "Resumen",
        experience: "Experiencia",
        jobTitle: "Título del Puesto",
        company: "Empresa",
        dates: "Fechas",
        description: "Descripción",
        addExperience: "Agregar Experiencia",
        education: "Educación",
        degree: "Título",
        institution: "Institución",
        addEducation: "Agregar Educación",
        customization: "Personalización",
        chooseATheme: "Elige un tema",
        previewTitle: "Vista Previa del CV",
    },
    pt: {
        title: "Criador de CV",
        personalInfo: "Informações Pessoais",
        name: "Nome",
        email: "E-mail",
        phone: "Telefone",
        address: "Endereço",
        picture: "Foto do perfil",
        professionalSummary: "Resumo Profissional",
        summary: "Resumo",
        experience: "Experiência",
        jobTitle: "Título do Trabalho",
        company: "Empresa",
        dates: "Datas",
        description: "Descrição",
        addExperience: "Adicionar Experiência",
        education: "Educação",
        degree: "Diploma",
        institution: "Instituição",
        addEducation: "Adicionar Educação",
        customization: "Personalização",
        chooseATheme: "Escolha um tema",
        previewTitle: "Pré-visualização do CV",
    }
}

function getBrowserLanguage() {
    const language = navigator.language || navigator.userLanguage

    // Devuelve solo las dos primeras letras del código de idioma, por ejemplo, "en" o "es"
    return language.split('-')[0]
}

export function translatePage() {
    const language = getBrowserLanguage()

    //    const texts = translations[language] || translations["en"] // Fallback al inglés si el idioma no está soportado
    const texts = translations['pt'] || translations["en"] // Fallback al inglés si el idioma no está soportado

    $("h1").textContent = texts.title
    $('h2.personalInformation-title').textContent = texts.personalInfo
    $('label[for="name"] span').textContent = texts.name
    $('label[for="email"] span').textContent = texts.email
    $('label[for="phone"] span').textContent = texts.phone
    $('label[for="address"] span').textContent = texts.address
    $('label[for="picture"] span').textContent = texts.picture
    $('h2.professionalSummary-title').textContent = texts.professionalSummary
    $('label[for="summary"] span').textContent = texts.summary
    $('h2.experience-title').textContent = texts.experience
    $('label[for="job-title[]"] span').textContent = texts.jobTitle
    $('label[for="company[]"] span').textContent = texts.company
    $('label[for="job-dates[]"] span').textContent = texts.dates
    $('label[for="job-description[]"] span').textContent = texts.description
    $("#add-experience").textContent = texts.addExperience
    $('h2.education-title').textContent = texts.education
    $('label[for="degree[]"] span').textContent = texts.degree
    $('label[for="institution[]"] span').textContent = texts.institution
    $('label[for="edu-dates[]"] span').textContent = texts.dates
    $("#add-education").textContent = texts.addEducation
    $("h2.customizationTitle").textContent = texts.customization
    $('label[for="theme-choice"] span').textContent = texts.chooseATheme
    $("h2.previewTitle").textContent = texts.previewTitle
}
