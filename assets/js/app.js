class FruitApp {
  constructor() {

  }

  static test() {
    console.log('I am the fruit app!')
  }

  makeCall(data) {

    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('POST', '/api/getFruit', true);

      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject("server Error");
        }
      };

      request.onerror = function () {
        reject("connection Error");
      };

      request.setRequestHeader('Content-Type', "application/json");
      request.send(JSON.stringify(data));
    });
  }
}

const app = new FruitApp();

FruitApp.test();

let fruitObject = {fruit: ['apple', 'pear', 'strawberry']};

app.makeCall(fruitObject)
  .then((data) => {
    console.log('fruit:');
    data.fruit.map((fruit) => {
      console.log('- ',fruit);
    });
  }, (error) => {
    console.log(error)
  });