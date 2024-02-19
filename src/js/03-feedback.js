// Import lodash throttle library
import throttle from 'lodash.throttle';

// Function to save form state to local storage
const saveState = throttle(() => {
  const formData = {
    email: document.querySelector('input[name="email"]').value,
    message: document.querySelector('textarea[name="message"]').value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

// Function to load form state from local storage
const loadState = () => {
  const savedState = localStorage.getItem('feedback-form-state');
  if (savedState) {
    const formData = JSON.parse(savedState);
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  }
};

// Function to handle form submission
const handleSubmit = event => {
  event.preventDefault();
  const formData = {
    email: document.querySelector('input[name="email"]').value,
    message: document.querySelector('textarea[name="message"]').value,
  };
  console.log('Form Data:', formData);
  localStorage.removeItem('feedback-form-state');
  document.querySelector('input[name="email"]').value = '';
  document.querySelector('textarea[name="message"]').value = '';
};

// Attach event listeners
document.querySelector('.feedback-form').addEventListener('input', saveState);
document
  .querySelector('.feedback-form')
  .addEventListener('submit', handleSubmit);

// Load form state when page loads
window.addEventListener('load', loadState);
