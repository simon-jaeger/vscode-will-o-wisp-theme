<?php
$msg = 'hi';
echo $msg;

function add($x, $y) {
  return $x + $y;
}
add(5, 2);
?>

<?php if ($msg === 'hi') { ?>
  true
<?php } ?>
