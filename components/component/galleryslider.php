
<?php 
	$sectionName = 'community';
	$noGalItem = 12;
?>


<div class="comp-<?= $sectionName ?>-slider-container">
	<?php for ($x = 1; $x <= $noGalItem; $x++) { ?>
		<a href="#" class="item-<?= $sectionName ?> item-<?= $sectionName ?>-<?= $x ?>">
			<img src="https://placeimg.com/640/480/any" alt="">
		</a>
	<?php } ?>
</div>

<div class="slick-action-container">
	<button class="custom-slick-prev">Prev</button>
	<button class="custom-slick-next">Next</button>
</div>