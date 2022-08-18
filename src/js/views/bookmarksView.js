import { elements } from "./base";

export const toggleBookmarkBtn = (isBookmarked) => {
  const iconString = isBookmarked ? "solid" : "regular";
  document
    .querySelector(`.result-bookmark i`)
    .setAttribute("class", `fa-${iconString} fa-bookmark`);
};

export const toggleBookmarkedMenu = (numLikes) => {
  elements.bookmarksMenu.style.visibility = numLikes > 0 ? "visible" : "hidden";
};

export const renderBookmark = (bookmark) => {
  const markup = `
        <div class="bookmark-box-content">
            <a href="#${bookmark.id}" class="bookmark-link">
                <div class="bookmark-pic-preview">
                <img
                    src="${bookmark.image}"
                />
                <div class="bookmark-pic-gradient"></div>
                </div>
                <div class="bookmark-sub-box">
                    <h2>${bookmark.title}</h2>
                    <h3><i class="fa-solid fa-user"></i>${bookmark.authors}</h3>
                    <h4><i class="fa-solid fa-quote-left"></i>${bookmark.subtitle}</h4>
                    <div class="bookmark-sub-con">
                        <div class="bookmark-sub-content">
                            <h1>${bookmark.year}</h1>
                            <h3><i class="fa-solid fa-calendar"></i>Year</h3>
                        </div>
                        <div class="bookmark-sub-content">
                            <h1>${bookmark.pages}</h1>
                            <h3><i class="fa-solid fa-book"></i>Pages</h3>
                        </div>
                        <div class="bookmark-sub-content">
                            <h1>${bookmark.rating}</h1>
                            <h3><i class="fa-solid fa-chart-line"></i>Rating</h3>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `;
  elements.bookmarksList.insertAdjacentHTML("beforeend", markup);
};

export const deleteBookmark = (id) => {
  const el = document.querySelector(
    `.bookmark-link[href*="${id}"]`
  ).parentElement;
  if (el) el.parentElement.removeChild(el);
};
