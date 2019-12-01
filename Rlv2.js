let button = document.getElementById("btn");
let input = document.getElementById('input');
const keyword = input.value;
const API = 'https://api.github.com/search/repositories?q=';
button.addEventListener('click', () => {
    getJSON(API).then(function (json) {
        console.log(json)
    }, function (error) {
        console.error('error', error)
    })
})

const getJSON = function (url) {
    const promise = new Promise(function (resolve, reject) {
        const handler = function () {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status >= 200 && this.status < 300 || this.status === 304) {
                const json1 = JSON.parse(client.responseText)
                console.log(json1)
                let sum = ''
                for (let i = 0; i <= 29; i++) {
                    sum = sum + json1.items[i].name + "</br>";
                }
                document.getElementById('result').innerHTML = sum
                resolve(this.response);
            } else {
                reject(new Error(this.statusText))
            }
        }
        const client = new XMLHttpRequest()
        client.open("GET", url + keyword, true)
        client.onreadystatechange = handler
        //client.setRequestHeader("Accept", "application/json")
        client.send()
    })
    return promise;
}


