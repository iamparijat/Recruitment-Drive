const scriptURL = 'https://script.google.com/macros/s/AKfycbxrId8Gm5U7h7iNjp30ZVprs3D34ZWqg1xaKSFVumze6qJbEQA9ZY453px8Z-QP6shtiQ/exec'
        const form = document.forms['database']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'post', body: new FormData(form)})
            .then(response => alert("Congratulations! Your registration is complete!"))
            .catch(error => console.error('Error!', error.message))
        })