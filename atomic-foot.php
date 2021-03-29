<!-- Place any footer info you would like shared between the styleguide and the root of your project. Eg. Links to js scripts etc.. -->

<script src="js/min/main.js"></script>

<script>
    document.querySelector('.modal-open-button').addEventListener('click', function(){
        let modal =  document.querySelector(this.dataset.target);
        modal.classList.add('active');
        
    });

    document.querySelector('.modal-close')
        .addEventListener('click', function() {
            this.closest('.site-modal').classList.remove('active');
        });
</script>