// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// If you want to know more: http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
    let complement = { //initialize object to store complements
        'A' : 'T',
        'T' : 'A',
        'G' : 'C',
        'C' : 'G'
    };
    
    return dna.split('') 
                .map(letter => complement[letter]) 
                .join('')
}

//else if

function DNAStrand(dna) {
    let result = '' //init var to store complement letter

    for(let i = 0; i < dna.length; i++) {//iterate with conditions
        if (dna[i] == 'A') {
            result += 'T'
        } else if (dna[i] == 'T'){
            result += 'A'
        } else if (dna[i] == 'G'){
            result += 'C'
        } else if (dna[i] == 'C'){
            result += 'G'
        }
    }
    return result;
}