const tf = import("tensorflowjs");
let model;

async function loadModel() {
    model = await tf.loadGraphModel('tensorflowjs/model.json');
    console.log("Model Loaded");
}

loadModel();


// async function loadClasses() {
//     const response = await fetch('/model/classes.json');
//     const classes = await response.json();
//     console.log(classes); // { "A": 0, "B": 1, "C": 2, "D": 3, "HEALTHY": 4 }
//     return classes;
//   }
  
//   loadClasses().then(classes => {
//     // Now you can use the `classes` map to interpret the predictions
//   });

//   function preprocessImage(image) {
//     const tensor = tf.browser.fromPixels(image);  // Convert image to tensor
//     const resized = tf.image.resizeBilinear(tensor, [224, 224]);  // Resize to the model's expected input size
//     const normalized = resized.div(tf.scalar(255));  // Normalize pixel values to [0, 1]
//     const batched = normalized.expandDims(0);  // Add batch dimension
//     return batched;
//   }

//   async function predictImage(image) {
//     const model = await loadModel();
//     const classes = await loadClasses();
  
//     // Preprocess the image
//     const preprocessedImage = preprocessImage(image);
  
//     // Make the prediction
//     const predictions = model.predict(preprocessedImage);
  
//     // Get the class index with the highest probability
//     const predictedClassIndex = predictions.argMax(-1).dataSync()[0];
//     const predictedClass = Object.keys(classes).find(key => classes[key] === predictedClassIndex);
//     console.log(`Predicted Class: ${predictedClass}`);
//   }

//   document.getElementById('uploadButton').addEventListener('click', async (event) => {
//     const file = event.target.files[0];
//     const img = new Image();
//     img.src = URL.createObjectURL(file);
    
//     img.onload = async () => {
//       await predictImage(img);
//     };
//   });
//     // Display the result in your app
//     document.getElementById('prediction-result').innerText = `Predicted Class: ${predictedClass}`;
