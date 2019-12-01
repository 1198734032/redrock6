const API = 'https://api.github.com/search/repositories?q=';
let input = document.getElementById('input');
document.getElementById('btn').addEventListener('click', search, false)
function search() {
  const keyword = input.value;
  const request = new XMLHttpRequest();
  request.open('GET', API + keyword, true)
  request.send()
  request.onreadystatechange = function () {
    if (request.readyState === 4) {

      if (request.status >= 200 && request.status < 300 || request.status === 304) {
        const json = JSON.parse(request.responseText)
        console.log(json)
        let sum = ''
        for (let i = 0; i <= 29; i++) {
          sum = sum + json.items[i].name + "</br>";
        }
        document.getElementById('result').innerHTML = sum
        console.log('请求成功')
      } else {
        console.log('请求错误')
      }

    }

  }

}


