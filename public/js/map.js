window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.5400456, lng: 126.9921017 },
        zoom: 12
    });
    map.fitBounds();
};

/* map 에서 search 버튼 */
const searchButton = document.querySelector('#search-button');
const searchBar = document.querySelector('#search-bar');

searchButton.addEventListener('click', () => {
    searchBar.classList.toggle('active');
});

/* map 에서 see 버튼 */
// 체크박스를 생성하는 함수
const seeButton = document.querySelector('.see-button');
const seecheckbox = document.querySelectorAll('.seecheckbox');

seeButton.addEventListener('click', () => {
    seecheckbox.forEach(checkBox => {
        checkBox.classList.toggle('active');
    });
});                                                                                                       