async function deleteRow(deleteButton) {
  let index = deleteButton.parentNode.parentNode.rowIndex;
  let id = deleteButton.parentNode.parentNode.getAttribute("id");
  const intermediary={
    body: id,
    method:"POST"
  }
  response = await fetch('deleteArtist/', intermediary);
  document.getElementById("artistTable").deleteRow(index);
}

async function addArtist () {
  let name = document.getElementById("artistName");
  let about = document.getElementById("aboutArtist");
  let link = document.getElementById("imageURL");
  const intermediary = {
    body: {
      name: name,
      about: about,
      link: link
    },
    method: "POST"
  }
  await fetch('/addArtist', intermediary).then((data)=>{
    let artistTable = document.getElementById("artistTable");
    showArtist(artistTable, data[0].id, name, about, link);
  })
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

async function searchArtist() {
  let artistName = document.getElementById("searchField").value;
  const intermediary = {
    body: {
      name: artistName,
      about: about
    },
    method: "POST"
  }
  response = await fetch('searchArtists/', intermediary).then((data) => {
    let artistTable = document.getElementById("artistTable");
    let Data = data[0];
    //Delete current artists
    while(artistTable.rows.length > 0) {
      artistTable.deleteRow(0);
    }
    //Make artists from response
    for(let i = 0; i < Data.length; i++)
    {
      showArtist(artistTable, data[i].id, data[i].name, data[i].about, data[i].link);
    }
  });
}

async function loadArtistTable() {
  await fetch('createArtistsTable/');
  await fetch('getAllArtists/').then((data) => {
    let artistTable = document.getElementById("artistTable");
    let Data = data[0];
    for(let i = 0; i < Data.length; i++)
    {
      showArtist(artistTable, data[i].id, data[i].name, data[i].about, data[i].link);
    }
  })
}

function showArtist(artistTable, artistID,  artistName, aboutArtist, imageURL) {
  if (imageURL == "")
  {
      imageURL = "https://randomuser.me/api/portraits/med/men/1.jpg";
  }

  var row = artistTable.insertRow(0);
  row.setAttribute("id", artistID);
  row.setAttribute("class", "artistTableRow");
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
}