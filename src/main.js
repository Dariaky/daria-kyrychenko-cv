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
                description: 'I have a solid understanding of HTML and how to make your website semantically-enriched for SEO purposes, ' +
                    'making it more discoverable by search engines and more user-friendly for humans.',
            },
            {
                id: 'css',
                title: 'CSS',
                icon: '<i class="fab fa-css3-alt"></i>',
                description: 'Having profound knowledge of CSS and all commonly used preprocessors (SASS, LESS, SCSS), ' +
                    'I would make sure your application doesn\'t suffer from multiple style recalculations and unexpected breaks, ' +
                    'the behavior is consistent across platforms and that your style system is organized in a reusable durable way.'
            },
            {
                id: 'js',
                title: 'JavaScript',
                icon: '<i class="fab fa-js"></i>',
                description: 'Possessing strong knowledge of JavaScript, its advanced concepts and data structures, ' +
                    'makes me feel comfortable not only while building functionality in pure JavaScript, but also ' +
                    'while applying my skills for frameworks, TypeScript and node.js world.',
            },
            {
                id: 'angular',
                title: 'Angular',
                icon: '<i class="fab fa-angular"></i>',
                description: 'I have an opportunity to master Angular every day on a real time enterprise project. ' +
                    'I possess advanced knowledge of this framework knowing its strong and weak spots, its optimization techniques ' +
                    'which helps me to find complex design and architecture solutions for Angular based application.' +
                    'Love talking about Dependency Injection, Change Detection and Pipes.',
            },
            {
                id: 'react',
                title: 'React',
                icon: '<i class="fab fa-react"></i>',
                description: 'React is definitely a good framework. I am glad that I had experience working with it, but if you\'d ask me which one I prefer, ' +
                    'I would choose Angular with no doubts',
            },
            {
                id: 'webpack',
                title: 'Webpack',
                icon: '<i class="fas fa-cube"></i>',
                description: 'Webpack is a heart of any web framework. I have an experience of building web applications ' +
                    'with its help and adjust setting whenever needed. This knowledge helps me to understand framework mechanisms in a more ' +
                    'profound way.',
            },
            {
                id: 'node',
                title: 'Node.js',
                icon: '<i class="fab fa-node"></i>',
                description: 'Knowledge of Node.js brings me a wider picture of how web world actually works. ' +
                    'I am glad I have a chance to practice Node.js creating express server, API endpoints, authentication system ' +
                    'as well as use it for server side rendering with such tools as Angular Universal.',
            },
            {
                id: 'git',
                title: 'Git',
                icon: '<i class="fab fa-git-alt"></i>',
                description: 'Git is my everyday companion which ensures proper team work. It helps me to deliver my work, evaluate other developers\' code ' +
                    'and investigate any issues occurred. I have a deep understanding of git and able to solve any conflict like a real psychologist.',
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

