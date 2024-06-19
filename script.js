let wage = 0;
let earnings = 0;
let currencySymbol = '$';
let isRunning = false;
let intervalId;
let isHourly = true;

const selectFunctions = {
    'wage-type': updateWageType,
    'currency': updateCurrency
};

document.addEventListener('DOMContentLoaded', function () {
    const customSelects = document.querySelectorAll('.custom-select');
    
    customSelects.forEach(customSelect => {
      const wrapper = customSelect.closest('.custom-select-wrapper');
      const selectTrigger = customSelect.querySelector('.custom-select-trigger');
      const selectId = wrapper.getAttribute('data-select-id');
      const options = customSelect.querySelector('.custom-options');
      const allOptions = Array.from(customSelect.querySelectorAll('.custom-option'));
  
      function updateOptions() {
        const selectedValue = selectTrigger.textContent.trim();
        allOptions.forEach(option => {
          if (option.textContent.trim() === selectedValue) {
            option.style.display = 'none';
          } else {
            option.style.display = 'flex';
          }
        });
      }
  
      // Initialize the first selected option
      updateOptions();
  
      selectTrigger.addEventListener('click', function () {
        options.classList.toggle('show');
        customSelects.forEach(otherSelect => {
          if (otherSelect !== customSelect) {
            otherSelect.querySelector('.custom-options').classList.remove('show');
          }
        });
      });
  
      options.addEventListener('click', function (e) {
        if (e.target.classList.contains('custom-option')) {
          const selectedText = e.target.textContent;
          selectTrigger.textContent = selectedText;
          const selectedValue = e.target.getAttribute('data-value');
          options.classList.remove('show');
          updateOptions();
  
          if (selectFunctions[selectId]) {
            selectFunctions[selectId](selectedValue);
          }
        }
      });
  
      document.addEventListener('click', function (e) {
        customSelects.forEach(customSelect => {
          if (!customSelect.contains(e.target)) {
            customSelect.querySelector('.custom-options').classList.remove('show');
          }
        });
      });
    });
});

function updateWageType(wageType) {
    isHourly = wageType === 'hourly';
    earnings = 0; // Reset earnings when wage type is updated
    updateEarningsDisplay();
}

function updateWage() {
    const wageInput = document.getElementById('wage');
    wage = parseFloat(wageInput.value) || 0;
    earnings = 0; // Reset earnings when wage is updated
    updateEarningsDisplay();
}

function updateEarnings() {
    const wagePerTenthSecond = isHourly ? wage / (3600 * 10) : (wage / 160 / (3600 * 10)); // Convert monthly wage to seconds counting 160 hours per month
    earnings += wagePerTenthSecond;
    updateEarningsDisplay();
}

function updateCurrency(selectedCurrency) {
    
    switch (selectedCurrency) {
        case 'USD':
            currencySymbol = '$';
            break;
        case 'SEK':
            currencySymbol = 'kr';
            break;
        case 'GBP':
            currencySymbol = '£';
            break;
        case 'EUR':
            currencySymbol = '€';
            break;
    }
    
    document.getElementById('currency-symbol').textContent = currencySymbol;
    earnings = 0; // Reset earnings when currency is updated
    updateEarningsDisplay();
}

function updateEarningsDisplay() {
    const wholePart = Math.floor(earnings).toString().padStart(3, '0');
    const decimalPart = earnings.toFixed(3).split('.')[1];
    document.getElementById('whole-part').textContent = wholePart;
    document.getElementById('decimal-part').textContent = decimalPart;
}

function toggleClock() {
    document.getElementById('restart-button').hidden = false;
    if (isRunning) {
        clearInterval(intervalId);
        document.getElementById('toggle-button').textContent = 'Start';
    } else {
        intervalId = setInterval(updateEarnings, 100);
        document.getElementById('toggle-button').textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function restartClock() {
    earnings = 0;
    updateEarningsDisplay();
    if (isRunning) {
        toggleClock();
    }
    document.getElementById('restart-button').hidden = true;
}
