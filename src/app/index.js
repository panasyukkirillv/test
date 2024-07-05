// =require ../core/config/js/index.js
// =require ../core/lib/js/index.js
// =require ../core/lib/js/nouislider.min.js

document.addEventListener('DOMContentLoaded', () => {

    const activateRange = () => {

        const ranges = document.querySelectorAll('.js-range');
        if(!ranges) return;
    
        ranges.forEach((range) => {
    
            const rangeSlider = range.querySelector('.js-range__slider');
            if(!rangeSlider) return;
    
            const rangeInputs = range.querySelectorAll('.js-range__input');
            if(!rangeInputs) return;
    
            let inputs = rangeInputs.length > 1 ? [rangeInputs[0], rangeInputs[1]] : [rangeInputs[0]];
            let start = rangeInputs.length > 1 ? [inputs[0].min, inputs[0].max] : inputs[0].min;
    
            noUiSlider.create(rangeSlider, {
                start: start,
                connect: true,
                range: {
                    'min': +inputs[0].min,
                    'max': +inputs[0].max,
                }
            });
    
            rangeSlider.noUiSlider.on('update', (values, handle) => {
                inputs[handle].value = Math.round(values[handle]);
            });
        
            const setRangeSliderValue = (i, value) => {
                let arr = [null, null];
                arr[i] = value;
                rangeSlider.noUiSlider.set(arr);
            };
    
            inputs.forEach((input, index) => {
                input.addEventListener('change', (event) => {
                    setRangeSliderValue(index, event.currentTarget.value);
                });
            });
    
        });

    };

    activateRange();

});

document.addEventListener('DOMContentLoaded', () => {

    const activateFilter = () => {
        const filters = document.querySelectorAll('.js-filter');
        filters.forEach((filter) => {
            const filterBlocks = filter.querySelectorAll('.js-filter__block');
            filterBlocks.forEach((filterBlock) => {
                const filterHead = filterBlock.querySelector('.js-filter__head');
                const filterBody = filterBlock.querySelector('.js-filter__body');
                filterHead.addEventListener('click', () => {
                    filterHead.classList.toggle('filter__head--active');
                    filterBody.classList.toggle('filter__body--active');
                });
            });
        });
    };

    activateFilter();

});