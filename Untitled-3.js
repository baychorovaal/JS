const vidget = document.createElement("div");
vidget.style.height = '400px';
vidget.style.width = '600px';
vidget.style.background = 'white';
vidget.style.display = 'flex';
vidget.style.justifyContent = 'space-around';
vidget.style.alignItems = 'flex-end';
document.body.appendChild(vidget);

function createPole() {
  const pole = document.createElement('div');
  pole.style.width = '30px';
  pole.style.height = '50vh';
  pole.style.background = 'brown';
  pole.style.display = 'flex';
  pole.style.flexDirection = 'column';
  pole.style.justifyContent = 'flex-end';
  pole.style.alignItems = 'center';
  return pole;
}

const f1 = createPole();
const f2 = createPole();
const f3 = createPole();
vidget.appendChild(f1);
vidget.appendChild(f2);
vidget.appendChild(f3);

const towerDivs = [f1, f2, f3];



function hanoi(n, from, to, aux, steps) {
  if (n > 0) {
    hanoi(n - 1, from, aux, to, steps);
    steps.push([from, to]);
    hanoi(n - 1, aux, to, from, steps);
  }
}


let towers = [
  [4, 3, 2, 1], 
  [],          
  []           
];


function renderTowers(towers) {
  towerDivs.forEach(t => t.innerHTML = '');

  towers.forEach((tower, i) => {
   
    tower.slice().reverse().forEach(disk => {
      const diskEl = document.createElement('div');
      diskEl.style.height = '30px';
      diskEl.style.background = 'green';
      diskEl.style.width = (40 + disk * 20) + 'px';
      diskEl.style.margin = '2px';
      diskEl.style.borderRadius = '5px';
      towerDivs[i].appendChild(diskEl);
    });
  });
}


function animate(steps, towers) {
  let i = 0;
  const interval = setInterval(() => {
    if (i >= steps.length) {
      clearInterval(interval);
      return;
    }

    const [from, to] = steps[i];
    const disk = towers[from].pop();
    towers[to].push(disk);
    renderTowers(towers);
    i++;
  }, 1000);
}


const steps = [];
hanoi(4, 0, 2, 1, steps);
renderTowers(towers);
animate(steps, towers);