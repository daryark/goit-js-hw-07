//task Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. Подивися демо відео роботи галереї.

//f.e Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.

// f.e Реалізація делегування на div.gallery і отримання url великого зображення.

// f.e Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.

// f.e Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.

// f.e Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
galleryContainer.insertAdjacentHTML("beforeend", makeGallery(galleryItems));
galleryContainer.addEventListener("click", OnGalleryItemClick);

function makeGallery(gallery) {
	return gallery
		.map(
			({ preview, original, description }) =>
				`<div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
						</div>`
		)
		.join("");
}

function OnGalleryItemClick(e) {
	e.preventDefault();

	if (!e.target.classList.contains("gallery__image")) {
		return;
	}

	const img = e.target;
	const imgInstance = basicLightbox.create(
		`<img src="${img.dataset.source}" width = "800" height = "600">`
	);
	imgInstance.show();

	window.addEventListener("keydown", (e) => {
		if (e.code === "Escape") {
			imgInstance.close();
		}
	});
}

console.log(galleryItems);
