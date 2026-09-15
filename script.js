// 以前写死在 HTML 里的三张 slide，现在挪到 JS 里当"数据"
const slides = [
  { title: '第一张', desc: '描述文字一' },
  { title: '第二张', desc: '描述文字二' },
  { title: '第三张', desc: '描述文字三' }
];

const track = document.getElementById('track');
const dotsBox = document.getElementById('dots');

let currentIndex = 0;

// 用 JS 把 slide 渲染出来（这才是组件思维）
slides.forEach((slide, i) => {
  const div = document.createElement('div');
  div.className = 'slide';
  div.innerHTML = `<h3>${slide.title}</h3><p>${slide.desc}</p>`;
  track.appendChild(div);

  const dot = document.createElement('span');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dotsBox.appendChild(dot);
});

// 切换逻辑（沿用你第 9 天的）
function goTo(index) {
  currentIndex = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
  dotsBox.children[currentIndex].classList.add('active');
}

document.getElementById('next').addEventListener('click', () => goTo(currentIndex + 1));
document.getElementById('prev').addEventListener('click', () => goTo(currentIndex - 1));
