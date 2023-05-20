//$(document).redy(function() {
// const arr1 = ['С пополнением', 'Без пополнения'];
//const arr2 = [
// ['6 мес','1 год']
// ['1 год','2 года','3 года']
//]

$(document).ready(function () {
    const arr1 = ['Пополняемый', 'Срочный'];
    const variants = [
        ['6 мес', '1 год', '1,5 года', '2 года'],
        ['3 месяц', '6 месяц', '9 месяц', '1 год', '1,5 года', '2 года']
    ];
    const percents = [
        [20, 22, 15, 10],
        [20, 22, 23, 24, 18, 15]
    ];
    $('#button')
        .append('<button class="btn-styled" type="button">Рассчитать</button>')
        .click(function () {
            const choosen1 = $('#sel1').val()-1;
            const choosen2 = $('#sel2').val();
            result = parseInt($('#Sum').val()) + parseInt($('#Sum').val()) * percents[choosen1][choosen2] / 100 / 365 * 30;
            console.log(result);
            textResult = "Вклад " + arr1[choosen1] + " на срок " + variants[choosen1][choosen2] + " на сумму " + $('#Sum').val() + "руб." + 
            "\n В конце срока вы получите " + Math.round(result) + "руб.";
            $('#Result').val(textResult);
        });


    $('#sel1').on('change', function () {
        const choosen = $('#sel1').val()
        const list = variants[choosen - 1]
        console.log(choosen)
        console.log(list)
        $('#sel2 option').remove()
        for (let i = 0; i < list.length; i++) {
            $('#sel2').append('<option value = ' + i + '>' + list[i] + '</option>')
        }

    })
})
   /* arr1.forEach(function(el) {
let $option = $('<option>' + el + '</option>');
$('#sel1').append($option);
});
arr2[0].forEach(function(el) {
let $option = $('<option>' + el + '</option>');
$('#sel2').append($option);
});
$('#sel1').on('change', function(){
$('sel2 option').remove();
arr2[this.selectedIndex].forEach(function(el){
let $option = $('<option>' + el + '</option>');
$('#sel2').append($option);
});
});
//});*/