const dashboard = {
    // ELEMENTS
    allBtnUpdate : document.querySelectorAll('.btnSubmit'),
    allBtnDelete : document.querySelectorAll('.btnClose'),
    allCheckbox : document.querySelectorAll('.isAvailable'),
    btnAddDrink : document.querySelector('.btnAdd'),
    modal : document.querySelector('.modal'),
    btnClose : document.querySelector('.btnClose'),

    // INIT
    init: () => {
        dashboard.handleListener();
    },

    // METHODS
    handleListener: () => {
        dashboard.btnAddDrink.addEventListener('click', dashboard.displayModal);
        dashboard.btnClose.addEventListener('click', dashboard.closeModal)
        dashboard.allBtnUpdate.forEach(btn => {
            btn.addEventListener('click', dashboard.handleBtnUpdate);
        });
        dashboard.allBtnDelete.forEach(btn => {
            btn.addEventListener('click', dashboard.handleBtnDelete);
        });
        dashboard.allCheckbox.forEach(btn => {
            btn.addEventListener('click', dashboard.handleCheckbox);
        });
    },

    handleBtnUpdate : (event) => {
        const drinkId = event.currentTarget.closest('article').dataset.id;
        location.href = `/admin/drinks/${drinkId}`;
    },

    handleBtnDelete : (event) => {
        const drinkId = event.currentTarget.closest('article').dataset.id;
        const confirmation = confirm('Voulez vous supprimer cette boisson ?');
        if (confirmation) {
            location.href = `/admin/drinks/${drinkId}/delete`;
        }
    },

    handleCheckbox : (event) => {
        const drinkId = event.currentTarget.closest('article').dataset.id;
        console.log(event.currentTarget.checked);
        if (event.currentTarget.checked) {
            location.href = `/admin/drinks/${drinkId}/available`;
        } else {
            location.href = `/admin/drinks/${drinkId}/unavailable`;            
        }
    },

    displayModal : () => {
        dashboard.modal.classList.remove('hidden');
    },
    
    closeModal : (event) => {
        event.preventDefault();
        dashboard.modal.classList.add('hidden');
    }

    
    


}

document.addEventListener("DOMContentLoaded", dashboard.init);