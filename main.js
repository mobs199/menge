window.onload = function() {
  let dropdown = document.getElementById('quantity-range');
  

  for (let i = 1; i <= 200; i++) {
      let start = (i - 1) * 100 + 1;
      let end = i * 100; 
      let option = document.createElement('option');
      option.value = start + '-' + end;
      option.textContent = start + ' bis ' + end;
      dropdown.appendChild(option);
  }
};

document.getElementById('quantity-range').addEventListener('change', function() {
  let secondDropdownContainer = document.getElementById('second-dropdown-container');
  let exactQuantityDropdown = document.getElementById('exact-quantity');
  
  exactQuantityDropdown.innerHTML = '<option value="">Bitte wählen</option>';
  
  let selectedRange = this.value;
  
  if (selectedRange) {
      secondDropdownContainer.style.display = 'block'; 
      
      let start = parseInt(selectedRange.split('-')[0]);
      let end = parseInt(selectedRange.split('-')[1]);

      for (let i = start; i <= end; i++) {
          let option = document.createElement('option');
          option.value = i;
          option.textContent = i;
          exactQuantityDropdown.appendChild(option);
      }
  } else {
      secondDropdownContainer.style.display = 'none'; 
  }
});


