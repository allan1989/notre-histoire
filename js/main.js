$(document).ready(function(e){

 
  /**
   * SMOOTH SCROLL EFFECT
   */

  $(".menuLink").on('click', function(event) {

    var the_id = $(this).attr("href");
    var marginTop = 0;

    if (the_id === '#') {
      return;
    }

    if(the_id === '#mission'){
      // on ajoute au scroll le même espace pris par le margin-top du bloc
      marginTop = 165;
    }

    $('html, body').animate({
      scrollTop:$(the_id).offset().top - marginTop
    }, 'slow');
    return false;

  })



  /**
   * COUNTER EFFECT
   */

  $('.count-num').rCounter();


  /**
   * MAIN NAVIGATION
   */

  $('.js-menuIcon').on('click', function(){
    $('.menu').toggleClass('active')
  }) 


  /**
   * MAP
   */

  /* supprime la tooltip active au clic sur la croix */
  $(document).on('click', function(e){
    if($(e.target).hasClass('toolTipClose')){
      $(e.target).parent().remove();
    }
  })

  const mapData = {
    'in' : { 'country': 'Inde', 'projet': 'Projet Inde', 'content': 'Lorem ipsum dolor sit amet, consectetur elit.' , 'link': '#' },
    'it' : { 'country': 'Italie', 'projet': 'Projet Italie', 'content': 'Lorem ipsum dolor sit amet, consectetur elit.' , 'link': '#' },
    'pe' : { 'country': 'Peru', 'projet': 'Projet Peru', 'content': 'Lorem ipsum dolor sit amet, consectetur elit.' , 'link': '#' },
    'es' : { 'country': 'Espagne', 'projet': 'Projet Espagne', 'content': 'Lorem ipsum dolor sit amet, consectetur elit.' , 'link': '#' },
    'sd' : { 'country': 'Sudan', 'projet': 'Projet Sudan', 'content': 'Lorem ipsum dolor sit amet, consectetur elit.' , 'link': '#' },
    'td' : { 'country': 'Chad', 'projet': 'Projet Chad', 'content': 'Lorem ipsum dolor sit amet, consectetur elit.' , 'link': '#' },
    'bf' : { 'country': 'Burkina Faso', 'projet': 'Projet Acadia', 'content': 'Lorem ipsum dolor sit amet, consectetur elit.' , 'link': '#' },
  }

  function displayTooltip(selection, id){

    // supprimer toutes les tooltip
    $('.jqvmap-pin').find('.toolTip').remove();

    // ajouter la nouvelle tooltip
    var newToolTip = "<div class='toolTip'><span class='toolTipClose'></span><div class='toolTipCountry'>" 
                      + selection.country +  "</div><div class='toolTipProjectName'>"
                      + selection.projet + "</div><div class='toolTipText'>"
                      + selection.content + "</div>"
                      + "<a class='toolTipLink' href=" 
                      + selection.link + "><img class='toolTipIcon' src='./assets/icons/ic-arrow.svg' alt='icon' "
                      + "/>En savoir plus</a></div>"

    $('#'+id).append(newToolTip)
  
  }

  $('#mapVector').vectorMap({
    map: 'world_en',
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    color: '#dce2e9',
    hoverColor: null,
    selectedColor: '#238a70',
    selectedRegions: ['IT', 'PE', 'ES', 'IN', 'SD', 'TD', 'BF'],
    pins: { 
      "in" : "\u003cimg src=\"./assets/icons/marker.png\" alt=\"india\" /\u003e",
      "it" : "\u003cimg src=\"./assets/icons/marker.png\" alt=\"italy\" /\u003e",
      "pe" : "\u003cimg src=\"./assets/icons/marker.png\" alt=\"peru\" /\u003e",
      "es" : "\u003cimg src=\"./assets/icons/marker.png\" alt=\"espagne\" /\u003e",
      "sd" : "\u003cimg src=\"./assets/icons/marker.png\" alt=\"sudan\" /\u003e",
      "td" : "\u003cimg src=\"./assets/icons/marker.png\" alt=\"chad\" /\u003e",
      "bf" : "\u003cimg src=\"./assets/icons/marker.png\" alt=\"burkina faso\" /\u003e",      
    },
    pinMode: 'content',
    onRegionSelect: function(event){
      event.preventDefault();
    },
    onRegionClick: function(event, code, region){
      event.preventDefault();
      var pinId = jQuery('#mapVector').vectorMap('getPinId', code);
      displayTooltip(mapData[code], pinId)
    }
  })
})