function sum(a, b) {
    return a * b;
}

document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = parseInt(document.getElementById('age').value);

    // ✅ Check if age is filled
    if (!age) {
        document.getElementById('output').innerHTML = "Please enter your age";
        return;
    }

    // ✅ Voting condition
    let voteMsg = "";
    if (age >= 18) {
        voteMsg = "You have the right to vote ✅";
    } else {
        voteMsg = "You are not eligible to vote ❌";
    }

    // ✅ Show output
    document.getElementById('output').innerHTML = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Age: ${age}</p>
        <p>${voteMsg}</p>
    `;

    // ✅ Clear button
    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear';

    clearBtn.addEventListener('click', () => {
        document.getElementById('output').innerHTML = '';
    });

    document.getElementById('output').appendChild(clearBtn);
});


// Calculator
document.getElementById('calcBtn').addEventListener('click', () => {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);

    if (!isNaN(a) && !isNaN(b)) {
        const result = sum(a, b);
        document.getElementById('sumOutput').innerHTML = `Product: ${result}`;
    } else {
        document.getElementById('sumOutput').innerHTML = 'Please enter valid numbers';
    }
});