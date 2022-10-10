export default function preLoader(){
    const preLoader = document.createElement('div');
    const circle = document.createElement('div')
    preLoader.classList.add('preloader');
    circle.classList.add('circle');
    preLoader.append(circle);
    return preLoader;
}