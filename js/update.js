function change_style_1() {
  // Set IDs for the default style (1-15)
  for (let i = 1; i <= 15; i++) {
      document.getElementById(`details-${i + 3}`).id = `details-${i}`;
  }
}

function change_style_2() {
  // Set IDs for the alternative style (4-18)
  for (let i = 1; i <= 15; i++) {
      document.getElementById(`details-${i}`).id = `details-${i + 3}`;
  }
}

function change_style_3() {
  // Set IDs for the default style (tl-btn-1 to tl-btn-15)
  for (let i = 1; i <= 15; i++) {
      document.getElementById(`tl-btn-${i + 3}`).id = `tl-btn-${i}`;
  }
}

function change_style_4() {
  // Set IDs for the alternative style (tl-btn-4 to tl-btn-18)
  for (let i = 1; i <= 15; i++) {
      document.getElementById(`tl-btn-${i}`).id = `tl-btn-${i + 3}`;
  }
}
