const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
    highlightNav();
};

const routes = {
    404 : '/pages/404.html',
    '/' : '/pages/home.html',
    '/about' : '/pages/about.html',
    '/design' : '/pages/design.html',
    '/coding' : '/pages/coding.html',
    '/contact' : '/pages/contact.html',
    '/coding/coding-1' : '/pages/conding-projects/coding-project-1.html',
    '/coding/coding-2' : '/pages/conding-projects/coding-project-2.html',
    '/design/design-1' : '/pages/design-projects/design-project-1.html',
    '/design/design-2' : '/pages/design-projects/design-project-1.html',
    '/design/design-3' : '/pages/design-projects/design-project-1.html',
    '/contact/success' : '/pages/success.html'
}

const handleLocation = async () => {
    let path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById('main-content').innerHTML = html;
};

const highlightNav = () => {
    let path = window.location.pathname;
    const navLinks = document.querySelectorAll('#navLink');
    const orange = 'text-orange-500';
    
    navLinks.forEach(link => {
        link.href.includes(`${path}`) ? link.classList.add(orange) : link.classList.remove(orange);
    });
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation(); 