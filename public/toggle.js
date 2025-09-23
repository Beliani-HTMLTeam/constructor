const container = document.querySelector('.family-version-toggle');

const toggle = document.getElementById('fv-toggle');
const label = container.querySelector('.fv-switch');
const input = document.getElementById('familyVersion');

function updateFromState() {
  const isNew = toggle.checked;
  input.value = isNew ? 'NEW' : 'OLD';
  label.setAttribute('aria-checked', isNew ? 'true' : 'false');
}

if (!input.value) {
  toggle.checked = true;
  updateFromState();
} else {
  toggle.checked = input.value === 'NEW';
  updateFromState();
}

label.addEventListener('click', () => {
  toggle.checked = !toggle.checked;
  updateFromState();
});
toggle.addEventListener('change', updateFromState);
