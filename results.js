$( document ).ready(function() {
    console.log( "results loaded" );


    //document ready retrieve results

    results = sessionStorage.getItem('user_data');
    json_avail = JSON.parse(results)
    console.log('server said ', json_avail)

    $('.card-title-1').text(json_avail['0_label'])
    $('.card-title-2').text(json_avail['1_label'])
    $('.card-title-3').text(json_avail['2_label'])
    $('.card-title-4').text(json_avail['3_label'])

    console.log('setting to ur:' , json_avail['0_image'] )
    $('.1_img').attr('src' , json_avail['0_image'])
    $('.1_img').attr('height' , '200')
    $('.1_img').attr('width' , '235')

    console.log('setting to ur:' , json_avail['1_image'] )
    $('.2_img').attr('src' , json_avail['1_image'])
    $('.2_img').attr('height' , '200')
    $('.2_img').attr('width' , '235')

    console.log('setting to ur:' , json_avail['2_image'] )
    $('.3_img').attr('src' , json_avail['2_image'])
    $('.3_img').attr('height' , '200')
    $('.3_img').attr('width' , '235')

    console.log('setting to ur:' , json_avail['3_image'] )
    $('.4_img').attr('src' , json_avail['3_image'])
    $('.4_img').attr('height' , '200')
    $('.4_img').attr('width' , '235')


    $('#1_url').attr('href' , json_avail['0_url'])
    $('#2_url').attr('href' , json_avail['1_url'])
    $('#3_url').attr('href' , json_avail['2_url'])
    $('#4_url').attr('href' , json_avail['3_url'])
});
