function randombg(){
    var random= Math.floor(Math.random() * 6) + 0;
    var bigSize = ["url('assets/img/coverpicture/hero-bg.jpg')",
                "url('assets/img/coverpicture/hero-two.jpg')", 
                "url('assets/img/coverpicture/hero-four.jpg')",
                "url('assets/img/coverpicture/hero-six.jpg')",
                "url('assets/img/coverpicture/hero-seven.jpg')",
                "url('assets/img/coverpicture/hero-nine.jpg')"
              ];
    document.getElementById("hero").style.backgroundImage=bigSize[random];
  };