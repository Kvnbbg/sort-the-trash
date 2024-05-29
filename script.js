document.getElementById('trashForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    let recyclable = document.getElementById('recyclable').checked;
    let organic = document.getElementById('organic').checked;
    let nonRecyclable = document.getElementById('non-recyclable').checked;

    let binType = document.getElementById('bin-type').value;

    let output = `
	<h2>Form Submission Details</h2>
	<p><strong>User Name:</strong> ${username}</p>
	<p><strong>Email:</strong> ${email}</p>
	<p><strong>Phone:</strong> ${phone}</p>
	<h3>Sorting Preferences</h3>
	<ul>
	    <li>Recyclable: ${recyclable ? 'Yes' : 'No'}</li>
	    <li>Organic Waste: ${organic ? 'Yes' : 'No'}</li>
	    <li>Non-Recyclable: ${nonRecyclable ? 'Yes' : 'No'}</li>
	</ul>
	<p><strong>Selected Bin Type:</strong> ${binType}</p>
    `;

    document.getElementById('output').innerHTML = output;
});