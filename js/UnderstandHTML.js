var tester = (function () {
  // Your code here
  return {
    test: function () {
      console.log('Table loader is initialized')
      const table = document.getElementById('dynamicCustomerTable')
      if (table) {
        console.log('Table found:', table)
      } else {
        console.error('Table with ID "dynamicCustomerTable" not found.')
      }
    },
    execute: function () {
        const showButton = document.getElementById('showTable')
        const hideButton = document.getElementById('hideTable')
        const table = document.getElementById('dynamicCustomerTable')

        showButton.addEventListener('click', function () {
            table.style.display = ''
        })

        hideButton.addEventListener('click', function () {
            table.style.display = 'none'
        })

        showButton.addEventListener('click', function () {
            //   table.style.display = ''
            tableLoader.fetchCustomerDetails(table)
            // fetchCustomerDetails(table)
        })
      },
    callApi: function () {
      console.log('API call initiated')
      fname = document.getElementById('fname').value
      lname = document.getElementById('lname').value
      console.log('First Name:', fname)
      url = `http://localhost:9080/hello?fname=${fname}&lname=${lname}`
      console.log('API URL:', url)
      xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function () {
          console.log('API state changed:', this.readyState)
        if (this.readyState == 4 && this.status == 200) {
            console.log('API Response:', this.responseText)
            document.getElementById('apiResponse').innerText = this.responseText;
          }
        }
        xhttp.open("GET", url);
        xhttp.send();

      // You can add your API call logic here
    },
    associateEvents: function () {
      console.log('Associating events')
      const callApi = document.getElementById('callAPI')
      if (callApi) {
        callApi.addEventListener('click', function () {
            tester.callApi()
        })
      } else {
        console.error('Element with ID "callApi" not found.')
      }
    },
    typedResponse: function () {
      console.log('Typed response initiated')
      const fname = document.getElementById('fname')
        fname.addEventListener('input', function () {
          document.getElementById('typeResponse').innerText = fname.value;
        })

    }

  }
})();

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log('Document is ready!')
    tester.test()
    tester.execute()
    tester.associateEvents()
    tester.typedResponse()

  })
})();

