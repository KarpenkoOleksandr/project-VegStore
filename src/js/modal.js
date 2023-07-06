// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     openModalBtn: document.querySelector('[data-modal-open1]'),
//     openModalBtn: document.querySelector('[data-modal-open2]'),
//     openModalBtn: document.querySelector('[data-modal-open3]'),
//     penModalBtn: document.querySelector('[data-modal-open4]'),
//     penModalBtn: document.querySelector('[data-modal-open5]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//     document.body.classList.toggle('no-scroll');
//   }
// })();

document.addEventListener(
    "DOMContentLoaded",
    function () {
        // прописуємо дата атрибути, в залежності від кільності модальних вікон, задаємо на backdrop
        const modals = [
            "data-first-modal",
            // "data-second-modal",
            // "data-third-modal",
        ];


        modals.forEach((element) => {
            const openModalSelector = element + "-open";
            const closeModalSelector = element + "-close";

            const openModalBtns = document.querySelectorAll(`[${openModalSelector}]`);
            const closeModalBtns = document.querySelectorAll(
                `[${closeModalSelector}]`
            );
            const modal = document.querySelector(`[${element}]`);

            if (!modal) logModalError("Can`t find Modal with attribute " + modal);
            if (openModalBtns.length === 0)
                logModalError(
                    "Can`t find Open modal button with attribute " + openModalSelector
                );
            if (closeModalBtns.length === 0)
                logModalError(
                    "Can`t find Close modal button with attribute " + closeModalSelector
                );
            if (!modal || openModalBtns.length === 0 || closeModalBtns.length === 0)
                return;

            openModalBtns.forEach((openBtn) =>
                openBtn.addEventListener("click", toggleModal)
            );
            closeModalBtns.forEach((closeBtn) =>
                closeBtn.addEventListener("click", toggleModal)
            );

            function toggleModal() {
                document.body.classList.toggle("modal-open");
                modal.classList.toggle("is-hidden");
            }
        });
    },
    false
);

function logModalError(text) {
    const styles = "color: #bada55";
    console.log("%c" + text, styles);
}