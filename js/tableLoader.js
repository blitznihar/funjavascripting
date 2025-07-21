const tableLoader = (function() {
    console.log('Table loader initialized');
    return {
        fetchCustomerDetails: function(table) {
            fetch('http://localhost:9080/customerbank')
                .then(response => response.json())
                .then(data => {
                    const tbody = table.querySelector('tbody');
                    tbody.innerHTML = '';
                    data.forEach(customer => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${customer.customerId}</td>
                            <td>${customer.firstName}</td>
                            <td>${customer.lastName}</td>
                            <td>${customer.city}</td>
                            <td>${customer.country}</td>
                            <td>${customer.bankRoutingNumber}</td>
                            <td>${customer.bankAccountNumber}</td>
                        `;
                        tbody.appendChild(row);
                    });
                });
        }
    }
})();