window.onload = function() {
  var dropdown = document.getElementById('quantity-range');
  

  for (var i = 1; i <= 200; i++) {
      var start = (i - 1) * 100 + 1;
      var end = i * 100; 
      var option = document.createElement('option');
      option.value = start + '-' + end;
      option.textContent = start + ' bis ' + end;
      dropdown.appendChild(option);
  }
};

document.getElementById('quantity-range').addEventListener('change', function() {
  var secondDropdownContainer = document.getElementById('second-dropdown-container');
  var exactQuantityDropdown = document.getElementById('exact-quantity');
  
  exactQuantityDropdown.innerHTML = '<option value="">Bitte wählen</option>';
  
  var selectedRange = this.value;
  
  if (selectedRange) {
      secondDropdownContainer.style.display = 'block'; 
      
      var start = parseInt(selectedRange.split('-')[0]);
      var end = parseInt(selectedRange.split('-')[1]);

      for (var i = start; i <= end; i++) {
          var option = document.createElement('option');
          option.value = i;
          option.textContent = i;
          exactQuantityDropdown.appendChild(option);
      }
  } else {
      secondDropdownContainer.style.display = 'none'; 
  }
});


