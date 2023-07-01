// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.
// For example:
// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

//My solution
function DNAtoRNA(dna) {
    //convert string into array
    let strArray = dna.split('');
    //iterate over each element/letter to check for T
    for(let i = 0; i < strArray.length; i++){
        if(strArray[i] === 'T') {
            strArray[i] = 'U';
        }
    }
    //convert array back to string and return
    return strArray.join('');
}

//split and join method
function DNAtoRNA(dna){
    return dna.split('T').join('U');
}

//replaceAll method 
const DNAtoRNA = (dna) => dna.replaceAll('T', 'U');

//replaceAll with regex
function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
}
