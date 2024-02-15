// Day 6
// DNA to RNA



// function DNAtoRNA(dna) {
//     let rna = '';
//     for (let i = 0; i < dna.length; i++) {

//     rna += dna[i] === 'T' ? 'U' : dna[i]
// };

// return rna;

// }

//     if (dna[i] == 'T') {
    //         rna += "U";
    //     } else {
        //         rna += dna[i];
        //     }

        
        // Function Expression with Arrow Func
        
        // const DNAtoRNA = (dna) => 
        //     dna
        //     .split('')
        //     .map((el) => (el === 'T' ? 'U' : el))
        //     .join('')
        
        
        // RegEx
        // const DNAtoRNA = (dna) => dna.replace(/T/g, 'U');
        // const DNAtoRNA = (dna) => dna.replaceAll('T', 'U');

        // Clever Ways
        const DNAtoRNA = (dna) => dna.split('T').join('U')
        console.log(DNAtoRNA("CTAGT"));

        