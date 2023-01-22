# Stock Fetcher
<p align="center">
This simple project uses the IEX Cloud API to retrieve stock information, which connects with my internal API through Nodejs and Expressjs.
</p>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/bransometan/Stock-Fetcher">
    <img src="/images/stock_display.png" alt="Logo">
    <p align="center">
    Sample Stock Fetching 
    </p>
    <br />
    <br />
    <img src="/images/api_display.png" alt="Logo">
    <p align="center">
    Sample Stock API
    </p>
  </a>

<h1 align="center"> <strong>Additional Inputs<strong/> </h1>

  <p align="left">
    1) ExpressJS files located in Server
    <br /> 
    2) Uses port 5000 for ExpressJS
    <br /> 
    3) Frontend UI files located in Client
    <br /> 
    4) Uses default port 3000 for ReactJS
    <br /> 
    5) Sample stocks use are AAPL, NFLX, GOOG, AMZN, TSLA
    <br /> 
    6) The data retrieved from IEX Cloud API are : stock.symbol, stock.companyName, stock.latestPrice, stock.change, stock.changePercent
    <br /> 
    7) Created a convert2DP function to round the number retrieved to 2 decimal place
    <br /> 
    8) stock.changePercent is in decimal, hence *100 to get percentage
    <br /> 
    9) stock.companyName > certain length is trim out and added ...
    <br /> 
    10) One problem is GOOG image (from: `https://storage.googleapis.com/iex/api/logos/${symbol}.png`) is in rectangular shape (not in circular shape compared to other stocks image), have to input a seperate CSS styling to cater to this.
    <br /> 
    11) Uses fontawesome icon set for the down/up arrow (beside stock.change)
    <br /> 
    12) If stock.change > 0, uses up arrow icon, else uses down arrow icon.
    <br /> 
    13) For colors, uses default black for stock.companyName and stock.latestPrice, uses default red for stock.change, stock.changePercent and arrow icon, uses default lightgrey for stock logo icon and horizontal line (dividing each stock container).
    <br /> 
    14) For each stock container, uses flex display and flex-direction to divide each part. 
    <br /> 
    14) As of current, this web app not designed to be very responsive yet. Only design to display the appropriate stock information. 
    <br /> 
    15) Also realises that this web app not secure (API KEY is not hidden).
    <br /> 
    16) Realises that much improvement can be made to styling.
    <br /> 
    17) Thought of creating a toggle button for "dark mode" (better UI/UX experience).
    <br />
    18) Thought of trying out a box/card view for each stock container rather than using horizontal line.
  </p>
</div>
