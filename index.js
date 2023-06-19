














    const options = {method: 'GET', headers: {accept: 'application/json'}};
  
    fetch("https://api.coingecko.com/api/v3/coins/solana", options)
      .then(response => response.json())
      .then(function(res) {
        let trendSymbol = ""

        if (res.market_data.price_change_percentage_24h.toFixed(2) < 0) {
            trendSymbol = `<i class="fa-solid fa-angle-down"></i>`
        } else {
            trendSymbol = `<i class="fa-solid fa-angle-up"></i>`
        }

       
        let priceBar = ""
        console.log(res.market_data.current_price.usd)
        console.log(res.market_data.price_change_percentage_24h)

     
        priceBar = `
        <div class="heading">
            <p>The</p> <img src="img/solLogo.png" alt="solana logo"> <p>24hr Price Tracker</p>
        </div>
 

        <div class="priceBar">

            <p class="currentPrice"><i class="fa-solid fa-caret-right"></i> $${res.market_data.current_price.usd}</p>

            <div class="trendBar">
              <p>${trendSymbol} ${res.market_data.price_change_percentage_24h.toFixed(2)}%</p>
            </div>
    
        </div>`

        
        document.querySelector('.innerWrapper').innerHTML = priceBar
        setBarColor(res.market_data.price_change_percentage_24h.toFixed(2))

      }).catch(err => console.error(err));




function setBarColor(num) {

    if (num < 0) {
        document.querySelector('.priceBar').style.backgroundColor = "#E66565"
        document.querySelector('.trendBar').style.backgroundColor = "#AF4E4E"
    } else {
        document.querySelector('.priceBar').style.backgroundColor = "#00BF63"
        document.querySelector('.trendBar').style.backgroundColor = "#307951"
    }

}