  //this is for infura
  const ipfs = window.IpfsHttpClient("https://ipfs.infura.io:5001");
  function log(logstr) {
      document.getElementById('log').innerHTML += logstr + "\n";
  }
  //upload the file
  async function upload() {
      const reader = new FileReader();
      reader.onloadend = async function () {
          log("creating...");
          const buf = buffer.Buffer(reader.result) // Convert data into buffer
          const result = await ipfs.add(buf).catch(log);
          log(`${result.path}`);
      }
      
      const photo = document.getElementById("photo");
      reader.readAsArrayBuffer(photo.files[0]);
  }

  async function setImage() {
      input = document.getElementById('fileinput').value;
      const result = await ipfs.add(input).catch(log);
  }
  async function getImage() {
      var ui8arr = [];
      var hash = document.getElementById('hashImageId').value;
      for await (const result of ipfs.cat(hash))
          ui8arr.push(result) // get all parts of the image
      var blob = new Blob(ui8arr, { type: "image/jpeg" }); // convert to blob
      var url = URL.createObjectURL(blob);
      document.getElementById("myimage").src = url;
  }