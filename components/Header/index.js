// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function header(date, title, temp) {
    const pageHeader = document.createElement("div");
    const todaysDate = document.createElement("span");
    const LambdaTimesTitle = document.createElement("h1");
    const temperature = document.createElement("span");
    pageHeader.append(todaysDate);
    pageHeader.append(LambdaTimesTitle);
    pageHeader.append(temperature);
    pageHeader.classList.add("header");
    todaysDate.classList.add("date");
    temperature.classList.add("temp");
    todaysDate.textContent = date;
    LambdaTimesTitle.textContent = title;
    temperature.textContent = temp;
    return pageHeader;
    }
    const lambdaTimesHeader = document.querySelector(".header-container");
    lambdaTimesHeader.append(header(`JAN 17, 2020`, `Lambda Times`, `98 deg`));
