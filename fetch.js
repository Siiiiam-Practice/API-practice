const card = document.getElementById('card');

document.getElementById('url').addEventListener('keyup', function(){
  const url = document.getElementById('url').value;

  if(url==""){
    document.getElementById('lottie').style.display = "block";
    card.style = "none";
  }else{
    document.getElementById('lottie').style.display = "none";
    card.style= "block";
  }

  const link = 'https://api.aladhan.com/v1/calendarByAddress/2023/'+url+'?address=Dhaka%20bangladesh&method=2'
  fetch(link)
  .then(data => data.json())
  .then(res => cardCalled(res.data));
  card.innerHTML = ``;   
})


function cardCalled(res) {
  const card = document.getElementById('card');
  for(let db of res){
      const newCard = document.createElement('div');
      // newCard.innerHTML = `
      // <div class="card-body m-2  card card-compact bg-slate-600 rounded-lg">
      // <h2 class="card-title">Date: <span id="date">${db.date.readable}</span></h2>
      // <ol>
      //     <li>Fajr: ${db.timings.Fajr}</li>
      //     <li>Dhuhr: ${db.timings.Dhuhr}</li>
      //     <li>Asr: ${db.timings.Asr}</li>
      //     <li>Maghrib: ${db.timings.Maghrib}</li>
      //     <li>Isha: ${db.timings.Isha}</li>

      // </ol>
      
      // </div>
      // `;

      newCard.innerHTML =`
      <div class="card card-compact bg-[#d9d9d9] text-[#000] m-4 shadow-xl">
      <figure><img src="https://img.freepik.com/free-photo/book-is-open-lamp-lit-lantern_1340-27882.jpg?t=st=1693100898~exp=1693104498~hmac=6f4782655aa898af5a48c7a837d9d6b57bfb51bf16a71122d0935cc3782de91b&w=900" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Date: <span id="date">${db.date.readable}</h2>
          <ol>
              <li>Fajr: ${db.timings.Fajr}</li>
              <li>Dhuhr: ${db.timings.Dhuhr}</li>
              <li>Asr: ${db.timings.Asr}</li>
              <li>Maghrib: ${db.timings.Maghrib}</li>
              <li>Isha: ${db.timings.Isha}</li>
  
          </ol>
      </div>
    </div>
      `;
      card.appendChild(newCard);
  }
}
