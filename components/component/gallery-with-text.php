<?php 
	$sectionName = 'gallery';
	$noGalItem = 6;
?>


<div class="comp-<?= $sectionName ?>-container">
	<?php for ($x = 1; $x <= $noGalItem; $x++) { ?>
		<a href="#" class="item-<?= $sectionName ?> item-<?= $sectionName ?>-<?= $x ?>">
			<img src="https://placeimg.com/640/480/any" alt="">
			<div class="primary-content">Sample text</div>
		
			<div class="secondary-content">Sample text</div>
		</a>
	<?php } ?>
</div>