
  function disp_box(e) {
      let promptName=e.getAttribute('title')
      if (promptName) {
        if (promptName=='cyborgops') {
            alert('CyborgOps is a great Company!');
        } else alert(`I got this ${promptName}`);
        } else alert(`I did not get any name`);
  }