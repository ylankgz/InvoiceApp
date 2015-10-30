function update_subtotal() {
	var subtotal = 0;
	$('.price').each(function(i){
		var price = $(this).html();
		if (!isNaN(price)) subtotal += Number(price);
	});

	subtotal = subtotal.toFixed(2);
	$('#subtotal').html(subtotal);

	update_balance();
}

function update_balance() {
	var total = Number($('#subtotal').html()) + Number($('#9').val());
	total = total.toFixed(2);

	$('.due').html(total);
}

function update_price() {
	var row = $(this).parents('.item-row');
	var price = row.find('.cost').val() * row.find('.qty').val();
	price = price.toFixed(2);
	isNaN(price) ? row.find('.price').html('NaN') : row.find('.price').html(price);
	update_subtotal();
}
function bind1() {
	$('.cost').blur(update_price);
	$('.qty').blur(update_price);
}

function bind(main, modal) {
	var n = main.val();
	modal.empty();
	modal.append(n);
}

function bind2(main, modal) {
	var n = main.text();
	modal.empty();
	modal.append(" " + n);
}