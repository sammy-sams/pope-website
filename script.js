document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const amount = parseFloat(document.getElementById('amount').value);
  
    if (amount < 4) {
      alert("Minimum amount is $4. Please enter a valid amount.");
      return;
    }
  
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=kingorisamuel79@gmail.com&item_name=Pope+Francis+Burial+Ticket&amount=${amount}&currency_code=USD&custom=${encodeURIComponent(fullName + '|' + email)}`;
    window.location.href = paypalUrl;
  });
  