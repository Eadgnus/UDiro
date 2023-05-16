const modal = document.querySelector('.modal');
const btnOpenPopup = document.querySelector('.btn-open-popup');
const on = document.querySelector('.show')
const Close = document.querySelector('.close')

btnOpenPopup.addEventListener('click', () => {
    modal.classList.toggle('show')
});



Close.addEventListener('click', () => {
    modal.classList.toggle('show')
}
)


// // 모달 on
body.style.overflow = 'hidden';

// // 모달 off
body.style.overflow = 'auto';

// class를 이용한 모달 on/off
// modal.classList.toggle('show');