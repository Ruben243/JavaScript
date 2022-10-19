<?php
$html = '';
if (isset($_POST)) {
    # code..
    $html .= '<p class="fs-3" >' . $_POST['nombre'] . '</p>';
    $html .= '<p class="fs-3">' . $_POST['pass'] . '</p>';
} else {
    $html .= '<p class="fs-3">Sin resultados</p>';
}

echo json_encode($html, JSON_UNESCAPED_UNICODE);