import Swiper from "swiper";
import 'swiper/css';

const parseJSON = async (url) => {
    const response = await fetch(url)
    return response.json()
}

const swiperComponent = (data, component) => {
    return `   
        <div class="swiper">
            <div class="swiper-wrapper">
                ${data.map(img => component(img)).join("")}
            </div>
  
        </div>
    `
}

//betesszuk a kepek nevet es cimet
const swiperSlideComponent = ({filename, title}) => {
    return `
        <div class="swiper-slide">
            <h2>${title}</h2>
            <img src="/public/img/${filename}">
        </div>
    `
} 


const loadEvent = async () => {

    const rootElement = document.getElementById("root")
    const result = await parseJSON("/image-list")

    rootElement.insertAdjacentHTML("beforeend", swiperComponent(result, swiperSlideComponent)) //nincs mogotte a zarjojel h lefusson

    const swiper = new Swiper(".swiper", {
        loop: true
    })

    console.log(swiper);

}

window.addEventListener("load", loadEvent);