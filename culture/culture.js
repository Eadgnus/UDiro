function doOpenCheck(chk){
    var obj = document.getElementsByName("aaa");
    for(var i=0; i<obj.length; i++){
        if(obj[i] != chk){
            obj[i].checked = false;
        }
    }
} 
// 체크박스 하나만 선택될 수 있게 하기




window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.5400456, lng: 126.9921017 },
      zoom: 10
    });
  
    const malls = [
      { label: "C", name: "코엑스몰", lat: 37.5115557, lng: 127.0595261 },
      { label: "G", name: "고투몰", lat: 37.5062379, lng: 127.0050378 },
      { label: "D", name: "동대문시장", lat: 37.566596, lng: 127.007702 },
      { label: "I", name: "IFC몰", lat: 37.5251644, lng: 126.9255491 },
      { label: "L", name: "롯데월드타워몰", lat: 37.5125585, lng: 127.1025353 },
      { label: "M", name: "명동지하상가", lat: 37.563692, lng: 126.9822107 },
      { label: "T", name: "타임스퀘어", lat: 37.5173108, lng: 126.9033793 }
    ];
  
    const bounds = new google.maps.LatLngBounds();
    const infoWindow = new google.maps.InfoWindow();
  
    malls.forEach(({ label, name, lat, lng }) => {
      const marker = new google.maps.Marker({
        position: { lat, lng },
        label,
        map
      });
      bounds.extend(marker.position);
  
      marker.addListener("click", () => {
        map.panTo(marker.position);
        infoWindow.setContent(name);
        infoWindow.open({
          anchor: marker,
          map
        });
      });
    });
  
    map.fitBounds(bounds);
  };

  // 지도


  const likeButton = document.getElementById('like-button');
  let isLiked = false;

  likeButton.addEventListener('click', function() {
    if (isLiked) {
      // 이미 좋아요를 눌렀다면 좋아요 취소 로직을 구현합니다.
      // 취소 동작을 수행한 후 버튼의 텍스트를 변경합니다.
      likeButton.textContent = '❤ 0';
      isLiked = false;
    } else {
      // 좋아요를 누르지 않았다면 좋아요 로직을 구현합니다.
      // 좋아요 동작을 수행한 후 버튼의 텍스트를 변경합니다.
      likeButton.textContent = '❤ 1';
      isLiked = true;
    }
  });

  // 좋아요 로직



  const dibButton = document.getElementById('dib');
  let isdib = false;

  dibButton.addEventListener('click', function() {
    if (isdib) {
      // 찜하기를 눌렀다면 찜하기 취소 로직을 구현합니다.
      // 취소 동작을 수행한 후 버튼의 텍스트를 변경합니다.
      // 색상 변경이 취소됩니다.
      dibButton.textContent = '✔️ 찜하기';
      isdib = false;
      dibButton.style.color ="black";
      dibButton.style.background = "none";
    } else {
      // 찜하기를 누르지 않았다면 찜하기 로직을 구현합니다.
      // 찜하기 동작을 수행한 후 버튼의 텍스트를 변경합니다.
      // 색상도 변경됩니다.
      dibButton.textContent = '✔️ 찜 저장';
      isdib = true;
      dibButton.style.color ="white"
      dibButton.style.background = "skyblue";
    }
  });

  // 찜하기 로직
