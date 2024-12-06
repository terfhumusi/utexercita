// Define the function
function DotBin(params) {
    console.log('Received parameters:', params);
    if (params.option === 'value') {
        console.log('Option is set to "value".');
    } else {
        console.log('Option is set to something else.');
    }
}

// Call the function with different parameters
DotBin({ option: 'value' });
DotBin({ option: 'other' });
