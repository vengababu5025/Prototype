function toggleSelection(optionId) {
    const optionBoxes = document.querySelectorAll('.option-box');
    const sizeColorSelections = document.querySelectorAll('.size-color-selection');

    optionBoxes.forEach((box) => {
        box.classList.remove('selected');
        const radio = box.querySelector('input[type="radio"]');
        if (radio) {
            radio.checked = false;
        }
    });

    sizeColorSelections.forEach((selection) => {
        selection.classList.add('hidden');
    });

    const selectedBox = document.getElementById(optionId);
    const selectedSizeColorSelection = document.getElementById(`size-color-selection-${optionId}`);
    selectedBox.classList.add('selected');
    const selectedRadio = selectedBox.querySelector('input[type="radio"]');
    selectedRadio.checked = true;
    selectedSizeColorSelection.classList.remove('hidden');
}


window.onload = function () {
    toggleSelection('option2');
};