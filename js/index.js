const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click', (e)=> {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);
    p_btn.forEach((curElement) =>
        curElement.classList.remove("p-btn-active")
    );

    p_btn_clicked.classList.add('p-btn-active');

    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    p_img_elem.forEach((curElement) => curElement.classList.add("p-img-not-active"));
    img_active.forEach((curElement) => curElement.classList.remove("p-img-not-active"));

})

