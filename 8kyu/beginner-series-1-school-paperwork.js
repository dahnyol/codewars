// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

//note: calculate blank pages needed, will get n classmates and m paperwork. if n or m < 0 return 0
//P will recieve 2 parameters, n and m
//R return 0 if < 0 or return number of pages needed
//E
function blankPages(n, m) {
//P //check if n or m < 0 , if so return 0
    //if not multiply n * m
    //return num of pages
}

function paperwork(n, m){
    if(n < 0 || m < 0)
    return 0;
    else
    return n * m;
}

const paperwork = (n, m) => n < 0 || m < 0 ? 0 : n * m;