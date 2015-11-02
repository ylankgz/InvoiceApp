$(document).ready(function(){

	$('input').click(function(){
		$(this).select();
	});

	$('.datepicker').datepicker({
		format: 'yyyy-mm-dd'
	});

	$('.input-daterange').datepicker({
		format: 'yyyy-mm-dd'
	});

	$('#invoice_date').datepicker().on('changeDate', function(){
		var date = $('#invoice_date').val();
		$('.invoice_header_date').empty();
		$('.invoice_header_date').append(date);
	});


	$('#9').blur(update_balance);

	$('#addrow').click(function(){
		$('.item-row:last').after('<tr class="item-row"><td><input class="form-control item_name" placeholder="Item name" /></td><td><input class="form-control item_desc" placeholder="Item description" /></td><td><input class="form-control cost" value="0.00" /></td><td><input class="form-control qty" value="0" /></td><td class="price_td"><span class="price">0.00</span><span class="subtotal_currency"></span></td><td class="delete_td"><a class="delete" href="javascript:;" title="Remove row"><span class="ti-close"></span></a></td></tr>');
		if ($('.delete').length > 0) $('.delete').show();
		bind1();
	});
	bind1();

	$('body').on('click', '.delete', function(){
		$(this).parents('.item-row').remove();
		update_subtotal();
		if ($('.delete').length < 2) $('.delete').hide();
	});

	$('body').on('keyup', '#invoice_currency', function(){
		var c = $(this).val();
		$('.subtotal_currency').empty();
		$('.subtotal_currency').append(" " + c);
	});

	$('body').on('click', '#submit_invoice', function(){
		var e = $('#invoice_total').text();
		$('#invoice_total1').empty();
		$('#invoice_total1').val(Number(e));
	});

	$('body').on('click', '#invoice_button', function(){
		for (var i =1; i < 11; i++){
			var id = i.toString();
			bind($('#' + id), $("#modal_" + id));
		}

		bind2($('#subtotal'), $("#modal_subtotal"));
		bind2($('#invoice_number'), $("#modal_invoice_number"));

		var rows = $('.item-row');
		$("#modal_tbody").empty();

		for (i = 0; i < rows.length; i++){
			var row = rows[i];
			var name = $(row).find(".item_name").val();
			$('#modal_tbody').append('<tr class="modal-item-row"></tr>');
			$('.modal-item-row:last').append('<td>' + name + '</td>');

			var desc = $(row).find(".item_desc").val();
			$('.modal-item-row:last').append('<td>' + desc + '</td>');

			var cost = $(row).find(".cost").val();
			$('.modal-item-row:last').append('<td>' + cost + '</td>');

			var qty = $(row).find(".qty").val();
			$('.modal-item-row:last').append('<td>' + qty + '</td>');

			var price = $(row).find(".price").text();
			var curr = $('#invoice_currency').val();
			$('.modal-item-row:last').append('<td>' + price + ' ' + '<span>' + curr + '</span></td>');
		}

	});
});