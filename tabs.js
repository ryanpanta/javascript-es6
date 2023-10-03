function initTabNav(){

    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add('ativo');


        function activeTab(index) {
            tabContent.forEach((item) => item.classList.remove('ativo'));
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((item, index) => {
            item.addEventListener("click", () => activeTab(index))
        });
    }
}


function initAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt');

    if(accordionList.length){
        accordionList[0].classList.add('ativo');
        accordionList[0].nextElementSibling.classList.add('ativo');


        function activeAccordion(){
            this.classList.toggle('ativo');
            this.nextElementSibling.classList.toggle('ativo');
        }

        accordionList.forEach((item) => {
            item.addEventListener("click", activeAccordion);
        });
    }
}


function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    linksInternos.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const href = e.currentTarget.getAttribute("href");
            const section = document.querySelector(href);
            
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        })
    });
}


function animationScroll(){
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length){
        sections[0].classList.add("ativo");

        window.addEventListener("scroll", () => {
            sections.forEach((item) => {
                const sectionTop = item.getBoundingClientRect().top;
                if(sectionTop < window.innerHeight * 0.65)
                    item.classList.add("ativo");
            })
        });
    }
}

animationScroll();
initTabNav();
initAccordion();
initScrollSuave();