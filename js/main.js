const hideAllContent = () => {    
    document.querySelectorAll('.section').forEach(item => {
        item.classList.remove('clicked');
        item.querySelector('span').style.display = 'none';
    });
    document.getElementById('indicator').querySelectorAll('li').forEach(item => {
        item.classList.remove('selected');
    });
}

const toggleSections = (e) => {
    const elem = document.getElementById(e.toElement.id);
    const acc = document.getElementById('accordion');
    if (elem.classList.contains('clicked')) {
        elem.classList.remove('clicked');
        acc.classList.remove('showAccordion');
        hideAllContent();
    } else {
        elem.classList.add('clicked');
        acc.classList.add('showAccordion');
    }
}

const toggleContent = (e) => {
    hideAllContent();
    const elem = document.getElementById(e.toElement.id);
    elem.querySelector('span').style.display = 'block';
    elem.classList.add('clicked');
    document.getElementById('i' + e.toElement.id).classList.add('selected');
}

window.onload = function() {
    document.getElementById('heading').addEventListener('click', toggleSections.bind(this));
    document.querySelectorAll('.section').forEach(item => {
        item.addEventListener('click', toggleContent.bind(this));
    });
}