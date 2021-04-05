<?php 
	$sectionName = 'grid';
	$noGalItem = 5;
?>


<div class="comp-<?= $sectionName ?>-container">
	<?php for ($x = 1; $x <= $noGalItem; $x++) { ?>
		<a href="#" class="item-<?= $sectionName ?>-<?= $x ?>" >
			<img src="https://placeimg.com/640/480/any" alt="">
		</a>
	<?php } ?>
</div>