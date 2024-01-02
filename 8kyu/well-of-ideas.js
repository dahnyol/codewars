// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
    let counter = 0;
    // iterate through array x
    x.forEach((word) => {
    // if there 'good', add counter + 1
      if(word === 'good')
        counter++
    }) 
    if(counter === 1 || counter === 2)
    // if there is one or two 'good', return 'Publish!'
      return 'Publish!'
    if(counter > 2) 
    // if there more than 2 'good', return 'I smell a series!'
      return 'I smell a series!'
    else 
      return 'Fail!'
    // if there are no elements in the x array with 'good', return 'Fail'
}

const well = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' : 
           good_count < 3 ? 'Publish!' : 'I smell a series!';
}

function well(x) {
    switch (x.filter(i => i === 'good').length) {
      case 0:
        return 'Fail!'
      case 1:
      case 2:
        return 'Publish!'
      default:
        return 'I smell a series!'
    }
}

function well(x) {
    let good = 0
    
    for (var i = 0; i < x.length; ++i)
      if (x[i] == 'good' && ++good > 2)
        return 'I smell a series!'
    
    return good ? 'Publish!' : 'Fail!'
}

function well(x) {
    const count = x.reduce((s, v) => s + (v == 'good'), 0);
    return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}

function well(x){
    let count = 0;
    for (let i = 0; i < x.length; i++) {
      if (x[i] === 'good') {
        count++;
        if (count == 3)
          break;
      }
    }
    return ['Fail!', 'Publish!', 'Publish!', 'I smell a series!'][count]
}