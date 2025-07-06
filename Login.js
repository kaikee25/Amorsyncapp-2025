function openModal(id) {
  document.getElementById(id).classList.add('active');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}
document.addEventListener("DOMContentLoaded", function() {
  // Show Register
  document.getElementById('showRegister').onclick = function(e) {
    e.preventDefault();
    openModal('modalRegister');
  };
  // Show Forgot
  document.getElementById('showForgot').onclick = function(e) {
    e.preventDefault();
    openModal('modalForgot');
  };
  // Close modals
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.onclick = function() {
      const id = btn.getAttribute('data-close');
      closeModal(id);
    }
  });
  // Close modal on bg click
  document.querySelectorAll('.modal-bg').forEach(bg => {
    bg.onclick = function(e) {
      if (e.target === bg) bg.classList.remove('active');
    }
  });
  // Fake login
  document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    window.location.href = 'pages/dashboard.html';
  };
  // Fake register
  document.getElementById('registerForm').onsubmit = function(e) {
    e.preventDefault();
    const senha = document.getElementById('regSenha').value;
    const senha2 = document.getElementById('regSenha2').value;
    if (senha !== senha2) {
      alert('As senhas não conferem!');
      return;
    }
    alert('Cadastro realizado! Faça login.');
    closeModal('modalRegister');
  };
  // Fake forgot
  document.getElementById('forgotForm').onsubmit = function(e) {
    e.preventDefault();
    alert('Se este e-mail estiver cadastrado, enviaremos um link de recuperação.');
    closeModal('modalForgot');
  };
});
