 function switchTab(el) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
  }
 
  // Like/dislike toggle
  document.querySelectorAll('.act').forEach(btn => {
    btn.addEventListener('click', function() {
      if (this.textContent === '🔖') {
        this.style.color = this.style.color === 'rgb(26, 137, 23)' ? '' : '#1a8917';
      }
    });
  });