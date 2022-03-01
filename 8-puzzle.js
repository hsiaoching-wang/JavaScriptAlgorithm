var goalState = [1, 2, 3, 4, 5, 6, 7, 8,0];
var startTime,
  endTime,
  counter = 100,
  counted = 0,
  checked = 0,
  goalMap = {},
  size,
  result = [];

/* Fisher-Yates shuffle http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle*/
function shuffle(array) {
  var size = array.length;
  var rand;
  for (var i = 1; i < size; i += 1) {
    rand = Math.round(Math.random() * i);
    swap(array, rand, i);
  }
  return array;
}

/* This post on stackexchange explained the condition when a puzzle
   is unsolvable http://math.stackexchange.com/a/838818
*/
function checkSolvable(state) {
  var pos = state.indexOf(0);
  var _state = state.slice();
  _state.splice(pos, 1);
  var count = 0;
  for (var i = 0; i < _state.length; i++) {
    if (_state[i] === 0) {
      continue;
    }
    for (var j = i + 1; j < _state.length; j++) {
      if (_state[j] === 0) {
        continue;
      }
      if (_state[i] > _state[j]) {
        count++;
      }
    }
  }
  return count % 2 === 0;
}

function generatePuzzle(state) {
  var firstElement, secondElement;
  var _state = state.slice();
  shuffle(_state);
  if (!checkSolvable(_state)) {
    firstElement = _state[0] !== 0 ? 0 : 3;
    secondElement = _state[1] !== 0 ? 1 : 3;
    swap(_state, firstElement, secondElement);
  }
  // _state = [1, 0, 2, 3, 4, 5, 6, 7, 8];
  // _state = [0,7,4,8,2,1,5,3,6];
  // _state = [6,3,1,4,7,2,0,5,8];
  // _state = [8,0,1,3,4,7,2,6,5];
  // _state = [8, 6, 7, 2, 5, 4, 3, 0, 1];
  _state = [8, 6, 7, 2, 5, 4, 3, 0, 1]; //32 steps
  // _state = [0,8,7,6,3,5,1,4,2]; //29 steps
  console.log('Puzzle to solve: [' + _state + ']');
  return _state;
}

function move(state, pos, steps) {
  var newState = [];
  newState.push.apply(newState, state);
  swap(newState, pos, pos + steps);
  return newState;
}

function swap(state, from, to) {
  var _ = state[from];
  state[from] = state[to];
  state[to] = _;
}

function compare(arr1, arr2) {
  if (!arr1 || !arr2) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


function getSuccessors(state) {
  var newState;
  var successors = [];
  var pos = state.indexOf(0);
  var row = Math.floor(pos / size);
  var col = pos % size;
  if (row > 0 && state.direction !== 'd') {
    //move up
    newState = move(state, pos, -size);
    newState.direction = 'u';
    successors.push(newState);
  }
  if (col > 0 && state.direction !== 'r') {
    //move left
    newState = move(state, pos, -1);
    newState.direction = 'l';
    successors.push(newState);
  }
  if (row < size - 1 && state.direction !== 'u') {
    //move down
    newState = move(state, pos, size);
    newState.direction = 'd';
    successors.push(newState);
  }
  if (col < size - 1 && state.direction !== 'l') {
    //move right
    newState = move(state, pos, 1);
    newState.direction = 'r';
    successors.push(newState);
  }
  return successors;
}

function calcHeuristicCost(state) {
  var totalDist = 0;
  for (var i = 0; i < state.length - 1; i++) {
    var q = state[i];
    if (q !== 0) {
      var realPos = goalMap[q];
      var realCol = realPos % 3;
      var realRow = Math.floor(realPos / 3);
      var col = i % 3;
      var row = Math.floor(i / 3);
      totalDist += (Math.abs(realCol - col) + Math.abs(realRow - row));
    }
  }
  return totalDist;
}

function ida_star (root){
  var bound = calcHeuristicCost(root);
  while (true) {
    var t = search(root, 0, bound);
    if (t === 'FOUND') {
      return 'FOUND';
    }
    if (t === Infinity) {
      return 'Not FOUND';
    }
    bound = t;
  }
}

function search(node, g, bound) {
  var f = g + calcHeuristicCost(node);
  if (f > bound) {
    return f;
  }
  if (compare(goalState, node)) {
    return 'FOUND';
  }
  var min = Infinity;
  var successors = getSuccessors(node);
  var q = g +1;
  for (var i = 0; i < successors.length; i++) {
    checked++;
    var t = search(successors[i], q, bound);
    if (t === 'FOUND') {
      result.push(successors[i].splice(0, 9));
      return 'FOUND';
    }
    if (t < min) {
      min = t;
    }
  }
  return min;
}

function time() {
  var puzzle = generatePuzzle(goalState);
  for (var i = 0; i < goalState.length; i++) {
    goalMap[goalState[i]] = i;
  }
  size = Math.sqrt(goalState.length);
  startTime = new Date();
  ida_star(puzzle);
  console.log(result);
  endTime = new Date();
  console.log(checked);
  console.log('Operation took ' + (endTime.getTime() - startTime.getTime()) + ' msec');
}
time();