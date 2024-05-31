<?php
function generateRandomText() {
    $numberOfElements = 50;
    $positions = [];

    for ($i = 0; $i < $numberOfElements; $i++) {
        $randomTop = rand(0, 100);
        $randomLeft = rand(0, 100);

        while (isColliding($randomTop, $randomLeft, $positions)) {
            $randomTop = rand(0, 100);
            $randomLeft = rand(0, 100);
        }

        $positions[] = ['top' => $randomTop, 'left' => $randomLeft];
        echo "<div class='loader random-text vibrate-1' style='top: {$randomTop}vh; left: {$randomLeft}vw;'></div>";
    }
}

function isColliding($top, $left, $positions) {
    foreach ($positions as $pos) {
        if (abs($top - $pos['top']) < 10 && abs($left - $pos['left']) < 10) {
            return true;
        }
    }
    return false;
}

generateRandomText();
?>
