playlist = {
    'song_1': 'https://firebasestorage.googleapis.com/v0/b/wedding-15f22.appspot.com/o/songs%2F001.mp3?alt=media&token=488af319-3928-44ee-947a-b485649fca65',
    'song_2': 'https://firebasestorage.googleapis.com/v0/b/wedding-15f22.appspot.com/o/songs%2F002.mp3?alt=media&token=af92c6f5-ad93-42e4-8a18-23888e8f84b4',
    'song_3': 'https://firebasestorage.googleapis.com/v0/b/wedding-15f22.appspot.com/o/songs%2F003.mp3?alt=media&token=186f0a20-40b4-4b58-be2f-6566ee667d1f',
    'song_4': 'https://firebasestorage.googleapis.com/v0/b/wedding-15f22.appspot.com/o/songs%2F004.mp3?alt=media&token=0e9b618d-75a8-4d75-ba96-d0807a1be4d6',
}

window.onload = function () {
    play_audio('play');
}

window.onpause = function () {
    play_audio('stop');
}

window.onclose = function () {
    play_audio('stop');
}



var min = 0;
var max = 3;
var random =
    Math.floor(Math.random() * (+max + 1 - +min)) + +min;


function play_audio(task) {
    if (task == 'play') {
        $(".my_audio").trigger('play');
    }
    if (task == 'stop') {
        $(".my_audio").trigger('pause');
        $(".my_audio").prop("currentTime", 0);
    }
}

keys = Object.keys(playlist);
$('.my_audio').append("<source id='sound_src' src=" + playlist[keys[random]] + " type='audio/mpeg'>");


count = 0;
$('.my_audio').on('ended', function () {
    count++;
    $("#sound_src").attr("src", playlist[keys[count]])[0];
    $(".my_audio").trigger('load');
    play_audio('play');
});


$(document).ready(function () {
    $('.slick').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 100,
        fade: true,
        prevArrow: false,
        nextArrow: false,
        cssEase: 'linear'
    });
});

$(document).ready(function () {
    $('.slick2').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 100,
        fade: true,
        prevArrow: false,
        nextArrow: false,
        cssEase: 'linear'
    });
});