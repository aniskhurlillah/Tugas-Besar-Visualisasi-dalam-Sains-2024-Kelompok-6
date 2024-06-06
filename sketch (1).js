let latar;
let logoitera;
let logomtkitera;
let TimesNewRoman;
let TimesNewRomanBold;
let TimesNewRomanBoldItalic;
let TimesNewRomanItalic;
var x; // posisi awal meteor pada sumbu x
var y; // posisi awal meteor pada sumbu y
var v_x; // kecepatan awal meteor pada sumbu x
var v_y; // kecepatan awal meteor pada sumbu y
var a; // percepatan meteor pada sumbu y
var meteorImg; // gambar meteor
var slider_vx, slider_vy, slider_a, slider_x, slider_y; // sliders
var isStarted = false; // Menambahkan variabel untuk melacak apakah simulasi sudah dimulai

function preload() {
  meteorImg = loadImage('meteor.png'); 
  latar = loadImage('meteor.jpeg'); 
  logoitera = loadImage('logo_itera.png');
  logomtkitera = loadImage('logomtkitera.png');
  TimesNewRomanBold = loadFont('times new roman bold.ttf');
  TimesNewRoman = loadFont('times new roman.ttf');
  TimesNewRomanBoldItalic = loadFont('times new roman bold italic.ttf');
  TimesNewRomanItalic = loadFont('times new roman italic.ttf');
}

function setup() {
  createCanvas(1390, 550);
  strokeWeight(800);

  // Membuat slider untuk kecepatan, percepatan, dan posisi awal meteor
  slider_vx = createSlider(-20, 20, 10); // sekarang slider vx bisa negatif
  slider_vx.position(1150, 225);
  slider_vy = createSlider(0, 20, 10);
  slider_vy.position(1150, 285);
  slider_a = createSlider(0, 0.01, 0.002, 0.0001);
  slider_a.position(1150, 330);
  slider_x = createSlider(0, 200, 100);
  slider_x.position(1150, 380);
  slider_y = createSlider(0, 100, 10);
  slider_y.position(1150, 425);

  // Membuat tombol untuk memulai simulasi
  var startButton = createButton('Start');
  startButton.position(1220, 450);
  startButton.mousePressed(function() {
    // Mengambil nilai slider dan mengatur variabel sesuai dengan inputan
    v_x = slider_vx.value();
    v_y = slider_vy.value();
    a = slider_a.value();
    x = slider_x.value();
    y = slider_y.value();
    isStarted = true; // Menandai bahwa simulasi sudah dimulai
  });
}

function draw() {
  // Latar
  image(latar, 0, 0, 1390, 550);
  
  // Logo ITERA
  image(logoitera, 20, 10, 75, 75);
  
  // Logo Matematika ITERA
  image(logomtkitera, 1290, 10, 75, 75);
  
  textSize(15);
  textFont('TimesNewRomanBold');
  textAlign(LEFT);
  fill("white");
  noStroke();
  text("kecepatan sumbu x", 1175, 195);
  text("kecepatan sumbu y", 1175, 265);
  text("nilai percepatan", 1180, 315);
  text("nilai posisi awal x", 1175, 365);
  text("nilai posisi awal y", 1175, 410);
  
  textSize(28);
  textFont('TimesNewRomanBold');
  textAlign(LEFT);
  fill("white");
  noStroke();
  text("Simulasi Gerak Jatuh Meteor", 460, 43);
  
  textSize(20);
  textFont('TimesNewRomanBold');
  textAlign(LEFT);
  fill("white");
  noStroke();
  text(" Visualisasi Dalam Sains", 520, 70);
  text("Program Studi Matematika ITERA", 480, 95);
  
  textSize(16);
  textFont('TimesNewRoman');
  textAlign(LEFT);
  fill("white");
  noStroke();
  
  text("Aprilia Maharani", 120, 520);
  text("121160004", 120, 540);
  text("Anis Khurlillah", 280, 520);
  text("121160005", 280, 540);
  text("Ester Marysa", 430, 520);
  text("121160010", 430, 540);
  text("Syatibi Abdurrohman", 580, 520);
  text("121160074", 580, 540);
  text("Shela Azzura", 780, 520);
  text("121160077", 780, 540);
  text("Rifadika Olivia Kempa", 925, 520);
  text("121160095", 925, 540);

  // Menampilkan nilai slider
  text("vx: " + slider_vx.value(), 1200, 215);
  text("vy: " + slider_vy.value(), 1200, 280);
  text("a: " + slider_a.value(), 1200, 330);
  text("x: " + slider_x.value(), 1200, 380);
  text("y: " + slider_y.value(), 1200, 425);

  // Menggambar gambar meteor pada posisi yang dihitung
  if (isStarted) {
    // Perbarui posisi meteor berdasarkan kecepatan dan percepatan
    x += v_x;
    v_y += a;
    y += v_y;

    // Memastikan posisi meteor tetap berada dalam batas layar
    if (y >= height) {
      x = -50; // mengatur ulang posisi meteor pada sumbu x menjadi di luar layar
      y = -50; // mengatur ulang posisi meteor pada sumbu y menjadi di atas layar
      v_x = 5; // mengatur ulang kecepatan meteor pada sumbu x
      v_y = 5; // mengatur ulang kecepatan meteor pada sumbu y
    }
  }

  push(); // push the current transformation state
  translate(x + 50, y + 50); // translate to the center of the image
  if (v_x < 0) {
    scale(-1, 1); // flip the image horizontally if vx is negative
  }
  image(meteorImg, -50, -50, 100, 100); // draw the image
  pop(); // restore the original transformation state

  text("(" + str(v_x) + ", " + str(round(v_y, 8)) + ")", x, y, 100, 100);
}
