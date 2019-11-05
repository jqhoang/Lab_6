var artistCount = localStorage.length == 0 ? 0 : parseInt(localStorage.getItem("lastKey"));

function loadArtistTable ()
{
  //Read from file to populate instead of local storage
  var artistTable = document.getElementById("artistTable");
  Object.keys(localStorage).forEach(function(key)
  {
    if(key != "lastKey") {
    var jsonArtist = JSON.parse(localStorage.getItem(key));
 
    var artistName = jsonArtist[0];
    var aboutArtist = jsonArtist[1];
    var artistImageURL = jsonArtist[2];
    var artistID = jsonArtist[3];
    var row = artistTable.insertRow(0);
    row.setAttribute("id", "artistTableRow");

    var artistImageCell = row.insertCell(0);
    var artistImage = document.createElement('img');
    if (artistImageURL)
    {
        artistImage.src = artistImageURL;
    } else {
        artistImage.src = "https://randomuser.me/api/portraits/med/men/1.jpg"
    }
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
    deleteArtistButton.setAttribute("id", String(artistID));
    deleteArtistButton.setAttribute("class", "deleteArtistButton");
    deleteArtistButton.setAttribute("onclick", "deleteArtist(this)");
    deleteArtistButton.innerText = "Delete";
    aboutArtistNameAndDescriptionCell.appendChild(deleteArtistButton);
    }
  });
}

function saveLastKey (key)
{
  localStorage.setItem("lastKey", key);
}

function searchArtists() {
  var artistTable = document.getElementById("artistTable");
  while(artistTable.rows.length > 0) {
    artistTable.deleteRow(0);
  }
  Object.keys(localStorage).forEach(function(key)
    {
      if(key != "lastKey") {
      var jsonArtist = JSON.parse(localStorage.getItem(key));
  
      var artistName = jsonArtist[0];
      var userSearch = document.getElementById("searchField").value;
      if(artistName.includes(userSearch))
      {
        var aboutArtist = jsonArtist[1];
        var artistImageURL = jsonArtist[2];
        var artistID = jsonArtist[3];
        var row = artistTable.insertRow(0);
        row.setAttribute("id", "artistTableRow");

        var artistImageCell = row.insertCell(0);
        var artistImage = document.createElement('img');
        if (artistImageURL)
        {
            artistImage.src = artistImageURL;
        } else {
            artistImage.src = "https://randomuser.me/api/portraits/med/men/1.jpg"
        }
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
        deleteArtistButton.setAttribute("id", String(artistID));
        deleteArtistButton.setAttribute("class", "deleteArtistButton");
        deleteArtistButton.setAttribute("onclick", "deleteArtist(this)");
        deleteArtistButton.innerText = "Delete";
        aboutArtistNameAndDescriptionCell.appendChild(deleteArtistButton);
      }
    }
  });
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

function deleteArtist(deleteArtistButton) {
    deleteArtistButton.parentNode.parentNode.parentNode.removeChild(deleteArtistButton.parentNode.parentNode);
    localStorage.removeItem(String(deleteArtistButton.id));
}

function addArtist() {
    var artistTable = document.getElementById("artistTable");
    /*
    var artistName = document.getElementById("artistName").value;
    var aboutArtist = document.getElementById("aboutArtist").value;
    var artistImageURL = document.getElementById("imageURL").value;*/

    
    fetch('https://jqhoang.github.io/About-Me/').then((data) =>
    {
        var artistName = data.artistName.innerText;
        var aboutArtist = data.aboutArtist.innerText;
        var artistImageURL = data.artistImageURL.innerText;
        console.log(artistName);
        console.log(aboutArtist);
        console.log(artistImageURL);
    })
    if (artistImageURL == "")
    {
        artistImageURL = "https://randomuser.me/api/portraits/med/men/1.jpg";
    }

    artistCount++;
    var artistID = artistCount;
    saveLastKey(artistCount);
    var newArtist = [artistName, aboutArtist, artistImageURL, String(artistID)];
    window.localStorage.setItem(String(artistCount), JSON.stringify(newArtist));



    var row = artistTable.insertRow(0);
    row.setAttribute("id", "artistTableRow");

    var artistImageCell = row.insertCell(0);
    var artistImage = document.createElement('img');
    artistImage.src = artistImageURL;
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
    deleteArtistButton.setAttribute("id", String(artistID));
    deleteArtistButton.setAttribute("class", "deleteArtistButton");
    deleteArtistButton.setAttribute("onclick", "deleteArtist(this)");
    deleteArtistButton.innerText = "Delete";
    aboutArtistNameAndDescriptionCell.appendChild(deleteArtistButton);

    /*
    fetch('https://jqhoang.github.io/About-Me/').  // obtain data as json
    then( (data) => {
        alert(data);         
        artistName = document.getElementById('artistName').textContent = data.number;
        aboutArtist = document.getElementById('aboutArtist').textContent = data.text;
        artistImageURL = document.getElementById('imageURL').textContent = data.type;
        console.log(artistName, aboutArtist, artistImageURL);
    }).
    catch((err) => console.log(err));
    
    let request = new Request('http://localhost:3000/add', {
    headers: new Headers({
        'Content-Type': 'text/json' 
    }),
    method: 'GET'
    });

    fetch(request).then((response) => {
        console.log(response);
    });
    
    */
}