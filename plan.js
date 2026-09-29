const visitForm = document.querySelector('#visit-form');
const planResult = document.querySelector('#plan-result');
const planSummary = document.querySelector('#plan-summary');

visitForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = visitForm.elements['visitor-name'].value.trim();
  const destination = visitForm.elements.destination.value;
  const interest = visitForm.elements.interest.value;
  const note = visitForm.elements['visit-note'].value.trim();

  planSummary.textContent = `${name}, start with ${destination} and focus on ${interest.toLowerCase()}.${note ? ` Your note: ${note}` : ''}`;
  planResult.hidden = false;
});
