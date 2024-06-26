let jsonData = [];

window.onload = () => {
  fetch('data.json')
    .then(response => response.json())
    .then(data => jsonData = data);
};

function filterData() {
  const dropdown1Value = document.getElementById('dropdown1').value;
  const dropdown2Value = document.getElementById('dropdown2').value;  
  const dropdown3Value = document.getElementById('dropdown3').value;

  const filteredData = jsonData.filter(item =>
    item.category === dropdown1Value && 
    item.type === dropdown2Value &&
    item.status === dropdown3Value); 

  const reviews = filteredData.map(item => item.review).join("<br>");
  document.getElementById('result').innerHTML = reviews;
}
