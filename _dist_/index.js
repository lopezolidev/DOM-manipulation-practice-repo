/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";

 //this is the web API where we'll extract our data

 //now it's time to the server and 
 //1.fetch the API → 2.parse it into JSON → 3.display our data

//  window.fetch(url)
//     //url fetched!

//     .then((response) => response.json())
//     //response (promise returned by fetch) parsed into JSON!
    
//     .then(responseJson => {
//         responseJson.data.forEach(item => {
//             console.log(item.name);
//         });
//     }); 

//Now it's time to implement it with async/await

async function fetchData() {
    const response = await fetch(`${baseUrl}/api/avo`);
    const responseJson = await response.json();
    const itemsContainer = document.querySelector('#app')
    const allItems = []; 
    //all elements created will be inside JS memory in this array
    responseJson.data.forEach((item) => {
        //create node with image
        const image = document.createElement('img');
        image.src = `${baseUrl}${item.image}`; //base url + item (object) attribute image which is an url from the image

        //create node with title
        const title = document.createElement('h2');
        title.textContent = item.name;
        title.className = 'text-xl'; //using a class available in tailwind

        //create node with price
        const price = document.createElement('div');
        price.textContent = item.price;

        const container = document.createElement('div');
        container.append(image, title, price);
        
        console.log(container);
        allItems.push(container);
    })

    itemsContainer.append(...allItems); //you render 1 element with appendChild, you can render multiple elements with append
    return responseJson;
}

fetchData();