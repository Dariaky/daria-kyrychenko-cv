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
                description: 'I have a solid understanding of HTML and how to make your website semantically enriched ' +
                    'for SEO purposes, making it more discoverable by search engines and more user-friendly for humans.',
            },
            {
                id: 'css',
                title: 'CSS',
                icon: '<i class="fab fa-css3-alt"></i>',
                description: 'Having a profound knowledge of CSS and all commonly used preprocessors (SASS, LESS, SCSS), ' +
                    'I would make sure your application doesn\'t suffer from multiple style recalculations and unexpected ' +
                    'breaks, the behaviour is consistent across platforms and that your style system is organized in a ' +
                    'reusable, durable way.'
            },
            {
                id: 'js',
                title: 'JavaScript',
                icon: '<i class="fab fa-js"></i>',
                description: 'Possessing strong knowledge of JavaScript, its advanced concepts and data structures makes ' +
                    'me feel comfortable while building functionality in pure JavaScript and applying my skills for ' +
                    'frameworks, TypeScript and Node.js.',
            },
            {
                id: 'angular',
                title: 'Angular',
                icon: '<i class="fab fa-angular"></i>',
                description: 'I have an opportunity to master Angular every day on a real-time enterprise project. ' +
                    'I possess advanced knowledge of this framework, its strong and weak places, and its optimization ' +
                    'techniques. All that helps me to find complex design and architecture solutions for Angular-based ' +
                    'applications. I love talking about Dependency Injection, Change Detection and Pipes.',
            },
            {
                id: 'react',
                title: 'React',
                icon: '<i class="fab fa-react"></i>',
                description: 'I am a framework-agnostic person. I possess knowledge in both Angular and React. ' +
                    'My skills with React and Redux are solid, although I acknowledge the lack of a practical aspect ' +
                    'due to my close work with Angular. I seek opportunities to work with React and gain more experience.',
            },
            {
                id: 'webpack',
                title: 'Webpack',
                icon: '<i class="fas fa-cube"></i>',
                description: 'Webpack is the heart of any web framework. I have experience building web applications ' +
                    'with its help and adjusting settings whenever needed. This knowledge helps me to understand ' +
                    'framework mechanisms more profoundly.',
            },
            {
                id: 'node',
                title: 'Node.js',
                icon: '<i class="fab fa-node"></i>',
                description: 'Knowledge of Node.js gives me a broader picture of how the web world operates. ' +
                    'I am glad to have an opportunity to practice Node.js, working with express servers, npm scripts, ' +
                    'API endpoints, authentication systems, and server-side rendering with Angular Universal.',
            },
            {
                id: 'git',
                title: 'Git',
                icon: '<i class="fab fa-git-alt"></i>',
                description: 'Git is my everyday companion, which ensures proper teamwork. It helps me deliver my work, ' +
                    'evaluate other developers\' code and investigate any issues. I deeply comprehend Git and can solve ' +
                    'any conflict like a real psychologist.',
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
}

