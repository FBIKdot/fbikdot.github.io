document.querySelector('body').hidden=false

function setLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.hidden = el.dataset.lang !== lang;
    });
}

const browserLang = navigator.language.split('-')[0]; 
setLanguage(browserLang === 'zh' ? 'zh' : 'en'); 