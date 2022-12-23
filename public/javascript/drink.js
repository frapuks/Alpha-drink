const drink = {
    // ELEMENTS
    btnAddReview : document.querySelector('.btnAdd'),
    modal : document.querySelector('.modal'),
    btnClose : document.querySelector('.btnClose'),
    // btnSubmit : document.querySelector('.btnSubmit'),

    // INIT
    init: () => {
        drink.handleListener();
    },

    // METHODS
    handleListener: () => {
        drink.btnAddReview.addEventListener('click', drink.displayModal);
        drink.btnClose.addEventListener('click', drink.closeModal);
        // drink.btnSubmit.addEventListener('click', drink.addReview);
    },

    displayModal : () => {
        drink.modal.classList.remove('hidden');
    },
    
    closeModal : (event) => {
        event.preventDefault();
        drink.modal.classList.add('hidden');
    },

    // addReview : () => {
    //     console.log('click');
    // },


}

document.addEventListener("DOMContentLoaded", drink.init);