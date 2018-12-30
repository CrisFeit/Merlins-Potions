var $thumbs = $('.thumbnails');
var $lbImg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose = $('.btn-close');
var $prod = $('#nameProd');
var $efect = $('#efectProd')
var $ingred = $('#ingr');
var $preco = $('#preco');
var $btnMenu = $('#menuSide');
var $nav = $('#navMenu');

$thumbs.on('click', 'a',function(e){
	e.preventDefault();
	var big = $(this).attr('href');
	$lbImg.attr('src',big);
	$lb.attr('data-state','visible');
    var indice = $(this).attr('data-title');
	$.ajax({
        url:'js/potions.json',
        dataType:'json',
        type:'get',
        cache:false,
        success:function(data){
            for(var prop in data.potions){
                if(prop == indice){
            $prod.html(data.potions[prop].name);
            $efect.html(data.potions[prop].effect);
            $ingred.html(data.potions[prop].ingredients);
            $preco.html(data.potions[prop].price);
                }
            }
        }
    })
});

$btnClose.on('click',function(){
	$lb.attr('data-state','hidden');
});

$btnMenu.on('click',function(){
    $nav.toggle();
})

