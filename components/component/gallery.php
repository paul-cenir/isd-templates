<?php 
	$sectionName = 'community';
	$noGalItem = 7;
?>


<div class="comp-<?= $sectionName ?>-container">
	<?php for ($x = 1; $x <= $noGalItem; $x++) { ?>
		<div class="item-<?= $sectionName ?>-<?= $x ?>">
			<img src="https://placeimg.com/640/480/any" alt="">
		</div>
	<?php } ?>
</div>