// /////////////////
// 宣告
// /////////////////
function getRGB_byString() {
  // create String "rgb(0, 0, 0, "
  let rgb = 'rgb('
  $('[type="range"]').each((i, input) => {
    rgb += `${input.value}, `
  })

  // rebuild to "rgb(0, 0, 0)"
  rgb = rgb.slice(0, -2) + ')'

  return rgb
}

function rgbToHex(rgb) {
  // 從 "rgb(1, 11, 111)" 取出 [1, 11, 111]
  const rgbArray = rgb.match(/[0-9]{1,3}/g)

  let hex = '#'
  rgbArray.forEach(val => {
    // 轉16進位    
    const value = (+val).toString(16)

    // 如果是個位數, 前方要加 0
    hex += (value.length < 2) ? ('0' + value) : value
  })

  return hex
}

// /////////////////
// 執行序
// /////////////////

// 監聽 input
$('[type="range"]').on('input', e => {
  $(e.target).next().text(e.target.value)

  const rgbString = getRGB_byString()
  $('#bg-color').css('backgroundColor', rgbString)

  $('#hex-code').text(rgbToHex(rgbString) )
})

