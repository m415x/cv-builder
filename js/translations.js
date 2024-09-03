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
    fr: {
        title: "Créateur de CV",
        personalInfo: "Informations Personnelles",
        name: "Nom",
        email: "Email",
        phone: "Téléphone",
        address: "Adresse",
        picture: "Photo de Profil",
        professionalSummary: "Résumé Professionnel",
        summary: "Résumé",
        experience: "Expérience",
        jobTitle: "Intitulé du Poste",
        company: "Entreprise",
        dates: "Dates",
        description: "Description",
        addExperience: "Ajouter une Expérience",
        education: "Éducation",
        degree: "Diplôme",
        institution: "Institution",
        addEducation: "Ajouter une Éducation",
        customization: "Personnalisation",
        chooseATheme: "Choisissez un thème",
        previewTitle: "Aperçu du CV"
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

export function translatePage(selectedLang) {
    const lang = selectedLang || navigator.language

    const texts = translations[lang] || translations["en"] // Fallback al inglés si el idioma no está soportado

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
    $$('label[for="job-title[]"] span').forEach(el => {
        el.textContent = texts.jobTitle
    })
    $$('label[for="company[]"] span').forEach(el => {
        el.textContent = texts.company
    })
    $$('label[for="job-dates[]"] span').forEach(el => {
        el.textContent = texts.dates
    })
    $$('label[for="job-description[]"] span').forEach(el => {
        el.textContent = texts.description
    })
    $$('span.experience-subtitle').forEach(el => {
        el.textContent = texts.experience
    })
    $("#add-experience").textContent = texts.addExperience
    $('h2.education-title').textContent = texts.education
    $$('label[for="degree[]"] span').forEach(el => {
        el.textContent = texts.degree
    })
    $$('label[for="institution[]"] span').forEach(el => {
        el.textContent = texts.institution
    })
    $$('label[for="edu-dates[]"] span').forEach(el => {
        el.textContent = texts.dates
    })
    $$('span.education-subtitle').forEach(el => {
        el.textContent = texts.education
    })
    $("#add-education").textContent = texts.addEducation
    $("h2.customizationTitle").textContent = texts.customization
    $('label[for="theme-choice"] span').textContent = texts.chooseATheme
    $("h2.previewTitle").textContent = texts.previewTitle
    $('h3.experience-preview').textContent = texts.experience
    $('h3.education-preview').textContent = texts.education
}
