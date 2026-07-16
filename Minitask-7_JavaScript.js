function nilaiRata({mm, binggris, bindo, ipa}){
    // const totalNilai = hasilUjian.mm + hasilUjian.bindo + hasilUjian.binggris + hasilUjian.ipa;
    const totalNilai = mm + binggris + bindo + ipa;
    const rataRata = totalNilai / 4;    

    console.log(`Total Nilai: ${totalNilai} dan Nilai Rata ${rataRata}`);
}


const hasilUjian = {
    mm : 75,
    binggris: 90,
    bindo: 80,
    ipa: 100
}

nilaiRata(hasilUjian);

