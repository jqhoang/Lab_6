<<<<<<< HEAD
async function deleteRow(deleteButton) {
  var index = deleteButton.parentNode.parentNode.rowIndex;
  const intermediary={
    body:index,
    method:"POST"
  }
  response = await fetch('deleteArtist/', intermediary);
  document.getElementById("artistTable").deleteRow(index);
}

function showArtistForm() {
  var x = document.getElementById("addArtistForm");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("imageURL").value = "";

    artistName = document.getElementById("artistName");
    artistName.setAttribute("maxlength", "40");
    artistName.value = "";
    
    aboutArtist = document.getElementById("aboutArtist");
    aboutArtist.setAttribute("maxlength", "40");
    aboutArtist.value = "";
  } else {
    x.style.display = "none";
  }
}

function searchArtist() {
  var artistName = document.getElementById("searchField").value;
  var artistTable = document.getElementById("artistTable");
  while(artistTable.rows.length > 0) {
    artistTable.deleteRow(0);
  }
  fetch('searchArtist/?artistName=' + artistName).
    then((res) =>res.json()).
    then((data) => {
      for(var i = data.length-1; i >= 0; i--) {
        showArtist(data[i].artistName, data[i].aboutArtist, data[i].imageURL);
      }
    })  
}

function loadArtistTable() {
  fs.readFile('artistList.json', (err, data) => {
    artistArrary = JSON.parse(data);
    for(i = 0; i < artistArray.length; i++)
    {
      var artist = artistArray[i];
      showArtist(artist.artistName, artist.aboutArtist, artist.imageURL);
    }
  });
}

function showArtist(artistName, aboutArtist, imageURL) {
  var artistTable = document.getElementById("artistTable");
  if (imageURL == "")
  {
      imageURL = "https://randomuser.me/api/portraits/med/men/1.jpg";
  }

  var row = artistTable.insertRow(0);
  row.setAttribute("id", "artistTableRow");
  var artistImageCell = row.insertCell(0);
  var artistImage = document.createElement('img');
  artistImage.src = imageURL;
  artistImage.setAttribute("id", "artistImage");
  artistImageCell.appendChild(artistImage);

  var aboutArtistNameAndDescriptionCell = row.insertCell(1);
  aboutArtistNameAndDescriptionCell.setAttribute("id", "artistInfo");
  var artistNameP = document.createElement('p');
  var aboutArtistP = document.createElement('p');
  aboutArtistP.class = "artistDescription";
  var artistNamePText = document.createTextNode(artistName);
  var aboutArtistPText = document.createTextNode(aboutArtist);
  artistNameP.appendChild(artistNamePText);
  aboutArtistP.appendChild(aboutArtistPText);
  artistNameP.setAttribute("id", "artistNameP" );
  aboutArtistNameAndDescriptionCell.appendChild(artistNameP);
  aboutArtistNameAndDescriptionCell.appendChild(aboutArtistP);

  var deleteArtistButton = document.createElement('button');
  deleteArtistButton.setAttribute("class", "deleteArtistButton");
  deleteArtistButton.setAttribute("onclick", "deleteRow(this)");
  deleteArtistButton.innerText = "Delete";
  aboutArtistNameAndDescriptionCell.appendChild(deleteArtistButton);
=======
async function deleteRow(deleteButton) {
  var index = deleteButton.parentNode.parentNode.rowIndex;
  const intermediary={
    body:index,
    method:"POST"
  }
  response = await fetch('deleteArtist/', intermediary);
  document.getElementById("artistTable").deleteRow(index);
}

function showArtistForm() {
  var x = document.getElementById("addArtistForm");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("imageURL").value = "";

    artistName = document.getElementById("artistName");
    artistName.setAttribute("maxlength", "40");
    artistName.value = "";
    
    aboutArtist = document.getElementById("aboutArtist");
    aboutArtist.setAttribute("maxlength", "40");
    aboutArtist.value = "";
  } else {
    x.style.display = "none";
  }
}

function searchArtist() {
  var artistName = document.getElementById("searchField").value;
  var artistTable = document.getElementById("artistTable");
  while(artistTable.rows.length > 0) {
    artistTable.deleteRow(0);
  }
  fetch('searchArtist/?artistName=' + artistName).
    then((res) =>res.json()).
    then((data) => {
      for(var i = data.length-1; i >= 0; i--) {
        showArtist(data[i].artistName, data[i].aboutArtist, data[i].imageURL);
      }
    })  
}

function loadArtistTable() {
  fs.readFile('artistList.json', (err, data) => {
    artistArrary = JSON.parse(data);
    for(i = 0; i < artistArray.length; i++)
    {
      var artist = artistArray[i];
      showArtist(artist.artistName, artist.aboutArtist, artist.imageURL);
    }
  });
}

function showArtist(artistName, aboutArtist, imageURL) {
  var artistTable = document.getElementById("artistTable");
  if (imageURL == "")
  {
      imageURL = "https://randomuser.me/api/portraits/med/men/1.jpg";
  }

  var row = artistTable.insertRow(0);
  row.setAttribute("id", "artistTableRow");
  var artistImageCell = row.insertCell(0);
  var artistImage = document.createElement('img');
  artistImage.src = imageURL;
  artistImage.setAttribute("id", "artistImage");
  artistImageCell.appendChild(artistImage);

  var aboutArtistNameAndDescriptionCell = row.insertCell(1);
  aboutArtistNameAndDescriptionCell.setAttribute("id", "artistInfo");
  var artistNameP = document.createElement('p');
  var aboutArtistP = document.createElement('p');
  aboutArtistP.class = "artistDescription";
  var artistNamePText = document.createTextNode(artistName);
  var aboutArtistPText = document.createTextNode(aboutArtist);
  artistNameP.appendChild(artistNamePText);
  aboutArtistP.appendChild(aboutArtistPText);
  artistNameP.setAttribute("id", "artistNameP" );
  aboutArtistNameAndDescriptionCell.appendChild(artistNameP);
  aboutArtistNameAndDescriptionCell.appendChild(aboutArtistP);

  var deleteArtistButton = document.createElement('button');
  deleteArtistButton.setAttribute("class", "deleteArtistButton");
  deleteArtistButton.setAttribute("onclick", "deleteRow(this)");
  deleteArtistButton.innerText = "Delete";
  aboutArtistNameAndDescriptionCell.appendChild(deleteArtistButton);
>>>>>>> f7f3015292fef7845dfbe618f7b05d496ca5681a
}