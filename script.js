let elemento = document.querySelector("canvas");

let lienzo = elemento.getContext("2d");

//cabeza parte negra
lienzo.beginPath();
lienzo.moveTo(130,210);

lienzo.quadraticCurveTo(120,180,150,140);
lienzo.quadraticCurveTo(200, 100, 250, 140);
lienzo.quadraticCurveTo(285, 170, 280, 210);

lienzo.fill();
lienzo.closePath();

//oreja izquierda
lienzo.beginPath();
lienzo.moveTo(150,150);

lienzo.bezierCurveTo(70, 170, 80, 90, 100, 70);
lienzo.bezierCurveTo(140, 30, 230, 80, 150, 150);

lienzo.fill();
lienzo.closePath();

//oreja derecha
lienzo.beginPath();
lienzo.moveTo(250,150);

lienzo.bezierCurveTo(200, 100, 250, 40, 300, 70);
lienzo.bezierCurveTo(325, 83, 340, 180, 250, 150);

lienzo.fill();
lienzo.closePath();

//cara piel
lienzo.beginPath();
lienzo.strokeStyle="black";
lienzo.fillStyle="#ffd399";
lienzo.lineWidth=5;
lienzo.moveTo(155, 200);

lienzo.bezierCurveTo(135, 160, 190, 100, 200, 145);
lienzo.bezierCurveTo(210, 100, 262, 150, 250, 200);
lienzo.bezierCurveTo(320, 190, 270, 280, 190, 265);
lienzo.bezierCurveTo(110, 260, 110, 190, 155, 200);

lienzo.stroke();
lienzo.fill();
lienzo.closePath()

//ojo izquierdo
lienzo.beginPath();
lienzo.lineWidth = 3;
lienzo.fillStyle="white";
lienzo.moveTo(185,196);

lienzo.bezierCurveTo(165, 145, 205, 145, 195, 195);

lienzo.stroke();
lienzo.fill();
lienzo.closePath();

//pupila izquierda
lienzo.beginPath();
lienzo.fillStyle="black";
lienzo.moveTo(188,195);

lienzo.bezierCurveTo(175, 170, 205, 170, 195, 194);

lienzo.fill();
lienzo.closePath();

//ojo derecho
lienzo.beginPath();
lienzo.lineWidth = 3;
lienzo.fillStyle="white";
lienzo.moveTo(205,194);

lienzo.bezierCurveTo(195, 145, 230, 145, 215, 196);

lienzo.stroke();
lienzo.fill();
lienzo.closePath();

///pupila izquierda
lienzo.beginPath();
lienzo.fillStyle="black";
lienzo.moveTo(205,194);

lienzo.bezierCurveTo(196, 170, 222, 170, 212, 196);

lienzo.fill();
lienzo.closePath();

//linea arriba de la nariz
lienzo.beginPath();
lienzo.lineWidth = 1.25;
lienzo.moveTo(180,200);

lienzo.bezierCurveTo(190, 192, 210, 192, 220, 200);

lienzo.stroke();
lienzo.closePath();

//nariz
lienzo.beginPath();
lienzo.fillStyle="black";
lienzo.lineJoin="round";
lienzo.moveTo(180,210);

lienzo.bezierCurveTo(180, 195, 220, 195, 220, 210);
lienzo.bezierCurveTo(220, 225, 180, 225, 180, 210);

lienzo.fill();
lienzo.closePath();

//pera
lienzo.beginPath();
lienzo.lineWidth = 3;
lienzo.fillStyle="#ffd399";
lienzo.moveTo(168, 257);

lienzo.quadraticCurveTo(200, 300, 232, 257);

lienzo.stroke();
lienzo.fill();
lienzo.closePath();

//boca
lienzo.beginPath()
lienzo.lineWidth = 3;
lienzo.fillStyle="#ba1e06";
lienzo.moveTo(168, 243);

lienzo.bezierCurveTo(185, 280, 215, 280, 232, 243.3);
lienzo.bezierCurveTo(225, 253, 175, 253, 168, 243);

lienzo.stroke();
lienzo.fill();
lienzo.closePath();

//lengua
lienzo.beginPath();
lienzo.lineWidth=2;
lienzo.fillStyle="#eda18e";

lienzo.moveTo(183, 265);
lienzo.quadraticCurveTo(195, 253, 205, 260);

lienzo.moveTo(198,263);
lienzo.quadraticCurveTo(210, 253, 220, 260);
lienzo.bezierCurveTo(210, 272, 195, 272, 183 ,265);

lienzo.stroke();
lienzo.fill();
lienzo.closePath();

lienzo.beginPath();
lienzo.fillStyle="#eda18e";
lienzo.moveTo(184, 264);

lienzo.bezierCurveTo(210, 255, 220, 270, 184, 265);

lienzo.fill();
lienzo.closePath();

//boca linea izquierda
lienzo.beginPath();
lienzo.strokeStyle="black";
lienzo.moveTo(138, 225);

lienzo.quadraticCurveTo(142, 214, 152, 215);

lienzo.stroke();
lienzo.closePath();

//boca linea derecha
lienzo.beginPath();
lienzo.moveTo(250, 215);

lienzo.quadraticCurveTo(260, 214, 266, 225);

lienzo.stroke();
lienzo.closePath();

//boca linea central
lienzo.beginPath();
lienzo.moveTo(143, 218);

lienzo.bezierCurveTo(157, 260, 243, 259, 259, 218);

lienzo.stroke();
lienzo.closePath();

