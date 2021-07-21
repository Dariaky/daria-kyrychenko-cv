import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/js/fontawesome'
import './styles/styles.scss';


document.addEventListener('DOMContentLoaded', ready);

function ready() {
    // Programming skills tabs:
    (function() {

        const tabsContent = [
            {
                id: 'html',
                title: 'HTML',
                icon: '<i class="fab fa-html5"></i>',
                description: 'I have a solid understanding of HTML and how to make your website semantically-friendly for SEO optimization, ' +
                    'browser search engines as well as accessible for all people.',
            },
            {
                id: 'css',
                title: 'CSS',
                icon: '<i class="fab fa-css3-alt"></i>',
                description: 'Without knowledge of CSS it would be impossible to create UX/UI friendly and readable applications. I have a solid knowledge of ' +
                    'CSS, its selectors, responsiveness and styling techniques most popular of which are flexbox and grid.',
            },
            {
                id: 'js',
                title: 'JavaScript',
                icon: '<i class="fab fa-js"></i>',
                description: 'I have a strong knowledge of JavaScript basics as well as more advanced concepts: OOP, ' +
                    'context, Prototypes, Event Loop, HTTP, DOM, TDD. Frameworks are great, but alongside with them ' +
                    'I am able to build functionality in pure JavaScript in case of need.',
            },
            {
                id: 'angular',
                title: 'Angular',
                icon: '<i class="fab fa-angular"></i>',
                description: 'Due to my job I am able to practice and master Angular every day on a real time commercial project. ' +
                    'I have a strong knowledge of Angular concepts and optimization techniques to make the best of Angular framework. Love talking ' +
                    'about Dependency Injection, Change Detection and TypeScript:)',
            },
            {
                id: 'react',
                title: 'React',
                icon: '<i class="fab fa-react"></i>',
                description: 'React is definitely a good framework. I am glad that I had experience working with it, but if you ask me which one I prefer, ' +
                    'I would choose Angular with no doubts',
            },
            {
                id: 'webpack',
                title: 'Webpack',
                icon: '<i class="fas fa-cube"></i>',
                description: 'Like a heart of a human-being, Webpack is a heart of a web framework. Both React and Angular use them ' +
                    'under the hood and it is a must to understand at least the basics to it. I have an experience of building web applications ' +
                    'with the help of the webpack and its development server. This knowledge helps me to understand Angular mechanisms in a more ' +
                    'profound way.',
            },
            {
                id: 'node',
                title: 'Node.js',
                icon: '<i class="fab fa-node"></i>',
                description: 'Node.js knowledge is a must for every good web developer as knowing front part only does not bring you ' +
                    'a wide picture of how Web really works. I am happy that I had a chance to practice with Node.js, creating my own ' +
                    'express server, adding API endpoints as well as developing basic authentication system with the help of JWT tokens.',
            },
            {
                id: 'git',
                title: 'Git',
                icon: '<i class="fab fa-git-alt"></i>',
                description: 'Git is my everyday companion who informs me about the work of my team. It helps me to deliver my work and keep my code ' +
                    'nice and clean. I have a good understanding of how git works and able to use it both in my IDE and simply via a console.',
            },
        ]

        const tabItem = document.querySelectorAll('.skills-list-item');

        const descriptionTitle = document.querySelector('.skills__description-header');
        const descriptionIcon = document.querySelector('.skills__description-icon');
        const descriptionText = document.querySelector('.skills__description-text');

        descriptionTitle.innerText = tabsContent[0].title;
        descriptionText.innerText = tabsContent[0].description;
        descriptionIcon.innerHTML = tabsContent[0].icon;
        tabItem[0].classList.add('active');

        [...tabItem].forEach(tab => {
            tab.addEventListener('click', (event) => {
                let id = event.target.getAttribute('id');
                let tabContentChosen = tabsContent.find(content => content.id === id);

                descriptionTitle.innerText = tabContentChosen.title;
                descriptionText.innerText = tabContentChosen.description;
                descriptionIcon.innerHTML = tabContentChosen.icon;

                [...tabItem].forEach(tab => {
                    tab.classList.remove('active');
                })
                tab.classList.add('active');

            })
        })

    })();

    // Language skills:
    (function() {

        const tooltipContent = [
            {
                id: 'ua',
                text: 'Привіт, I\'m Native!'
            },
            {
                id: 'en',
                text: 'Hi, I\'m Advanced!'
            },
            {
                id: 'de',
                text: 'Hallo, I\'m Intermediate!'
            },
            {
                id: 'it',
                text: 'Ciao, I\'m Newbie Here!'
            },
        ];

        const tooltip = document.createElement('span');

        const languageItems = document.querySelectorAll('.languages-list-item');
        [...languageItems].forEach(item => {
            item.addEventListener('mouseenter', (event) => {

                let id = event.target.getAttribute('id');
                let tooltipText = tooltipContent.find(content => content.id === id);

                tooltip.innerText = tooltipText.text;
                tooltip.classList.add('tooltip');

                if (tooltipText.id === 'it') {
                    tooltip.classList.add('different');
                }
                item.appendChild(tooltip);
            });
            item.addEventListener('mouseleave', () => {
                tooltip.innerText = '';
                tooltip.classList.remove('tooltip');
                if (tooltip.classList.contains('different')) {
                    tooltip.classList.remove('different');
                }
                item.removeChild(tooltip);
            });
        })

    })();

    // Button Scroll to TOP
    (function() {
        const btnTop = document.querySelector('.btn-top');
        btnTop.style.display = 'none';

        window.addEventListener('scroll', function () {

            if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
                btnTop.style.display = 'block';
            } else {
                btnTop.style.display = 'none';
            }
        });

        btnTop.addEventListener('click', function () {
            scrollToTop(1000);
        });


        function scrollToTop(scrollDuration) {

            const scrollStep = -window.scrollY / (scrollDuration / 15),
                scrollInterval = setInterval(function(){

                    if ( window.scrollY !== 0 ) {
                        window.scrollBy( 0, scrollStep );
                    }
                    else clearInterval(scrollInterval);
                },15);
        }
    })();

    // Hamburger Button
    // (function() {
    //     const hamburgerButton = document.querySelector('.hamburger-button');
    //     const hamburgerBtnIcon = document.querySelector('.hamburger-button__icon');
    //     const hamburgerNavBar = document.querySelector('.header__header-navbar');
    //     const hamburgerRegistration = document.querySelector('.header__registration');
    //
    //     hamburgerButton.addEventListener('click', function() {
    //         if (hamburgerBtnIcon.classList.contains('fa-bars')) {
    //             hamburgerBtnIcon.classList.replace('fa-bars', 'fa-times');
    //         } else {
    //             hamburgerBtnIcon.classList.replace('fa-times', 'fa-bars');
    //         }
    //
    //         hamburgerNavBar.classList.toggle('js-hamburger');
    //         hamburgerRegistration.classList.toggle('js-hamburger');
    //     });
    //
    //     window.addEventListener('hashchange', function() {
    //         hamburgerNavBar.classList.toggle('js-hamburger');
    //         hamburgerRegistration.classList.toggle('js-hamburger');
    //         hamburgerBtnIcon.classList.replace('fa-times', 'fa-bars');
    //     });
    //
    // })();
}

