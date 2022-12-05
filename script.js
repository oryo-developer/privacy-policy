function getParam(name) {
    name = name.replace(/[\[\]]/g, '\\$&')
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
    var url = location.search
    var results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

$(function () {
    var appName = getParam('app-name')
    $('title').html(`${appName} | プライバシーポリシー`)
    $('.appName').text(appName)
})