import Legra from "https://unpkg.com/legra?module";

const ctx = document.querySelector("canvas").getContext("2d");
const legra = new Legra(ctx);

const LEGO_CANVAS_SIZE = {
  WIDTH: 19,
  HEIGHT: 20
};

const LINE_SIZE = {
  MIN: 1,
  MAX: 8
};

const RECT_SIZE = {
  MIN: 1,
  MAX: 6
};

const COLOR_BASE = randomColor();
const COLOR_CIRCLE = randomColor();
const COLOR_STAR = randomColor();

function drawBase() {
  legra.rectangle(0, 0, LEGO_CANVAS_SIZE.WIDTH, LEGO_CANVAS_SIZE.HEIGHT, {
    filled: true,
    color: COLOR_BASE
  });
}

function drawCircle() {
  // arc(xc, yc, a, b, start, stop, closed [, options])
  legra.arc(9, 10, 5, 5, 0, Math.PI * 1.5, false, {
    color: COLOR_CIRCLE
  });
}

function drawStar() {
  // line(x1, y1, x2, y2 [, options])
  legra.line(12, 6, 12, 8, { color: COLOR_STAR });
  legra.line(11, 7, 13, 7, { color: COLOR_STAR });
}

const draw = () => {
  ctx.clearRect(0, 0, 480, 480);

  drawBase();
  drawCircle();
  drawStar();
};

draw();
