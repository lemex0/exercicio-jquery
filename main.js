$(document).ready(function() {
  $('#pergunta-Form').submit(function(e) {
    e.preventDefault();
    const taskNome = $('#pergunta-Nome').val();
    if (taskNome) {
      $('#pergunta-Lista').append(`<li>${taskNome}</li>`);
      $('#pergunta-Nome').val('');
    }
  });

  $('#pergunta-Lista').on('click', 'li', function() {
    $(this).toggleClass('completed');
  });
});