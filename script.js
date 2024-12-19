    const cursor = document.querySelector("#cursor");
    const cursorPos = { x: 0, y: 0 };

    document.addEventListener("mousemove", (e) => {
    cursorPos.x = e.clientX;
    cursorPos.y = e.clientY;

    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });



    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.navbar');


    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active'); // Animate icon
        navMenu.classList.toggle('active');   // Show/hide menu
    });


    function killCopy(e){
        return false
        }
        function reEnable(){
        return true
        }
        document.onselectstart=new Function ("return false")
        if (window.sidebar){
        document.onmousedown=killCopy
        document.onclick=reEnable
    }

    document.addEventListener("copy", disable);
    document.addEventListener("cut", disable);
    document.addEventListener("drag", disable);
    document.addEventListener("dragstart", disable);
    document.addEventListener("dragover", disable);
    document.addEventListener("dragend", disable);
    document.addEventListener("drop", disable);
  
  function disable(e) {
    if (e) e.preventDefault();
    return false;
  }

  document.onkeydown = (e) => {
    if (e.key == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }

};

$(document).bind("contextmenu",function(e) {
    e.preventDefault();
  });
  $(document).keydown(function(e){
    if(e.which === 123){
      return false;
  }
});


document.addEventListener('keydown', function(event) {
    
    if (event.keyCode == 123) {
        event.preventDefault();
    }
    
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        event.preventDefault();
    }
    
    else if (event.ctrlKey && event.keyCode == 85) {
        event.preventDefault();
    }
    
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 85) {
        event.preventDefault();
    }
});
