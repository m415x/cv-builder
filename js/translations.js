const $ = el => document.querySelector(el)
const $$ = el => document.querySelectorAll(el)

export const translations = {
    en: {
        personalInfo: "Personal Information",
        name: "Name",
        email: "Email",
        phone: "Phone",
        address: "Address",
        picture: "Profile picture",
        saveImage: "Save image",
        cancel: "Cancel",
        professionalSummary: "Professional Summary",
        summary: "Summary",
        experience: "Experience",
        jobTitle: "Job title",
        company: "Company",
        startDate: "Start date",//
        endDate: "End date",//
        currentJob: "Current job",//
        description: "Description",
        addExperience: "Add experience",
        experienceIncomplete: "Please complete the experience fields before adding a new one.",
        education: "Education",
        degree: "Degree",
        institution: "Institution",
        currentlyStudying: "Currently studying",//
        addEducation: "Add education",
        educationIncomplete: "Please complete the education fields before adding a new one.",
        customization: "Customization",
        chooseATheme: "Choose a theme",
        previewTitle: "CV Preview",
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec"
    },
    es: {
        personalInfo: "Información Personal",
        name: "Nombre",
        email: "Correo electrónico",
        phone: "Teléfono",
        address: "Dirección",
        picture: "Foto de perfil",
        saveImage: "Guardar imagen",
        cancel: "Cancelar",
        professionalSummary: "Resumen Profesional",
        summary: "Resumen",
        experience: "Experiencia",
        jobTitle: "Título del puesto",
        company: "Empresa",
        startDate: "Fecha de inicio",
        endDate: "Fecha de fin",
        currentJob: "Empleo actual",
        description: "Descripción",
        addExperience: "Agregar experiencia",
        experienceIncomplete: "Por favor completa los campos de experiencia antes de añadir una nueva.",
        education: "Educación",
        degree: "Título",
        institution: "Institución",
        currentlyStudying: "Actualmente estudiando",
        addEducation: "Agregar educación",
        educationIncomplete: "Por favor completa los campos de educación antes de añadir una nueva.",
        customization: "Personalización",
        chooseATheme: "Elige un tema",
        previewTitle: "Vista Previa del CV",
        1: "ene",
        2: "feb",
        3: "mar",
        4: "abr",
        5: "may",
        6: "jun",
        7: "jul",
        8: "ago",
        9: "sep",
        10: "oct",
        11: "nov",
        12: "dic"
    },
    fr: {
        personalInfo: "Informations Personnelles",
        name: "Nom",
        email: "Email",
        phone: "Téléphone",
        address: "Adresse",
        picture: "Photo de profil",
        saveImage: "Enregistrer l'image",
        cancel: "Annuler",
        professionalSummary: "Résumé Professionnel",
        summary: "Résumé",
        experience: "Expérience",
        jobTitle: "Intitulé du poste",
        company: "Entreprise",
        startDate: "Date de début",
        endDate: "Date de fin",
        currentJob: "Emploi actuel",
        description: "Description",
        addExperience: "Ajouter une expérience",
        experienceIncomplete: "Veuillez remplir les champs d’expérience avant d’en ajouter un nouveau.",
        education: "Éducation",
        degree: "Diplôme",
        institution: "Institution",
        currentlyStudying: "Étudiant actuellement",
        addEducation: "Ajouter une éducation",
        educationIncomplete: "Veuillez remplir les champs d’éducation avant d’en ajouter un nouveau.",
        customization: "Personnalisation",
        chooseATheme: "Choisissez un thème",
        previewTitle: "Aperçu du CV",
        1: "jan",
        2: "fév",
        3: "mar",
        4: "avr",
        5: "mai",
        6: "jun",
        7: "jul",
        8: "aoû",
        9: "sep",
        10: "oct",
        11: "nov",
        12: "déc"
    },
    pt: {
        personalInfo: "Informações Pessoais",
        name: "Nome",
        email: "E-mail",
        phone: "Telefone",
        address: "Endereço",
        picture: "Foto do perfil",
        saveImage: "Salvar imagem",
        cancel: "Cancelar",
        professionalSummary: "Resumo Profissional",
        summary: "Resumo",
        experience: "Experiência",
        jobTitle: "Título do trabalho",
        company: "Empresa",
        startDate: "Data de início",
        endDate: "Data de término",
        currentJob: "Emprego atual",
        description: "Descrição",
        addExperience: "Adicionar experiência",
        experienceIncomplete: "Preencha os campos de experiência antes de adicionar um novo.",
        education: "Educação",
        degree: "Diploma",
        institution: "Instituição",
        currentlyStudying: "Atualmente estudando",
        addEducation: "Adicionar educação",
        educationIncomplete: "Preencha os campos de educação antes de adicionar um novo.",
        customization: "Personalização",
        chooseATheme: "Escolha um tema",
        previewTitle: "Pré-visualização do CV",
        1: "jan",
        2: "fev",
        3: "mar",
        4: "abr",
        5: "mai",
        6: "jun",
        7: "jul",
        8: "ago",
        9: "set",
        10: "out",
        11: "nov",
        12: "dez"
    }
}

export function translatePage(selectedLang) {
    const lang = selectedLang || navigator.language

    const texts = translations[lang] || translations["en"] // Fallback al inglés si el idioma no está soportado

    // Personal Information
    $('h2.personalInformation-title').textContent = texts.personalInfo
    $('label[for="name"] span').textContent = texts.name
    $('label[for="email"] span').textContent = texts.email
    $('label[for="phone"] span').textContent = texts.phone
    $('label[for="address"] span').textContent = texts.address
    $('label[for="picture"] span').textContent = texts.picture
    $("#save-image").textContent = texts.saveImage
    $("#cancel-image").textContent = texts.cancel

    // Professional Summary
    $('h2.professionalSummary-title').textContent = texts.professionalSummary
    $('label[for="summary"] span').textContent = texts.summary

    // Experience
    $('h2.experience-title').textContent = texts.experience
    $$('label[for="job-title[]"] span').forEach(el => {
        el.textContent = texts.jobTitle
    })
    $$('label[for="company[]"] span').forEach(el => {
        el.textContent = texts.company
    })
    $$('label[for="job-start-date[]"] span').forEach(el => {
        el.textContent = texts.startDate
    })
    $$('label[for="job-end-date[]"] span').forEach(el => {
        el.textContent = texts.endDate
    })
    $$('label[for="current-job[]"] span').forEach(el => {
        el.textContent = texts.currentJob
    })
    $$('label[for="job-description[]"] span').forEach(el => {
        el.textContent = texts.description
    })
    $$('span.experience-subtitle').forEach(el => {
        el.textContent = texts.experience
    })
    $("#add-experience").textContent = texts.addExperience

    // Education
    $('h2.education-title').textContent = texts.education
    $$('label[for="degree[]"] span').forEach(el => {
        el.textContent = texts.degree
    })
    $$('label[for="institution[]"] span').forEach(el => {
        el.textContent = texts.institution
    })
    $$('label[for="edu-start-date[]"] span').forEach(el => {
        el.textContent = texts.startDate
    })
    $$('label[for="edu-end-date[]"] span').forEach(el => {
        el.textContent = texts.endDate
    })
    $$('label[for="current-study[]"] span').forEach(el => {
        el.textContent = texts.currentlyStudying
    })
    $$('label[for="edu-description[]"] span').forEach(el => {
        el.textContent = texts.description
    })
    $$('span.education-subtitle').forEach(el => {
        el.textContent = texts.education
    })
    $("#add-education").textContent = texts.addEducation

    // Customization
    $("h2.customizationTitle").textContent = texts.customization
    $('label[for="theme-choice"] span').textContent = texts.chooseATheme

    // Preview
    $("h2.previewTitle").textContent = texts.previewTitle

    const experienceTitle = $('h3.experience-preview')
    if (experienceTitle) {
        experienceTitle.textContent = texts.experience
    }

    const currentJobSpan = $('span.current-job')
    if (currentJobSpan) {
        currentJobSpan.textContent = texts.currentJob
    }

    const educationTitle = $('h3.education-preview')
    if (educationTitle) {
        educationTitle.textContent = texts.education
    }

    const currentStudySpan = $('span.current-study')
    if (currentStudySpan) {
        currentStudySpan.textContent = texts.currentlyStudying
    }
}

// Función para mostrar mensaje traducido
export function translateMessage(messageKey) {
    const currentLanguage = localStorage.getItem('selectedLanguage') || 'en'

    return translations[currentLanguage][messageKey]
}