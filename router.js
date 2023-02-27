const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404 : '/pages/404.html',
    '/' : '/pages/home.html',
    '/about' : '/pages/about.html',
    '/design' : '/pages/design.html',
    '/coding' : '/pages/coding.html',
    '/contact' : '/pages/contact.html',
    '/coding-1' : '/pages/conding-projects/coding-project-1.html',
    '/coding-2' : '/pages/conding-projects/coding-project-2.html',
    '/design-1' : '/pages/design-projects/design-project-1.html',
    '/design-2' : '/pages/design-projects/design-project-1.html',
    '/design-3' : '/pages/design-projects/design-project-1.html',
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById('main-content').innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation(); 
