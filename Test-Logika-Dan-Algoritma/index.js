console.log("point 1");

function formatJudul(kalimat, usingStrip = false) {
  kalimat = kalimat.toString();
  kalimat = kalimat.toLowerCase();
  kalimat = kalimat.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  kalimat = kalimat.split(" ");
  let newKalimat = [];
  for (const index in kalimat) {
    if (usingStrip) {
      if (index == "0") {
        const kata = kalimat[index].split("");
        kata[0] = kata[0].toUpperCase();
        kalimat[index] = kata.join("");
        newKalimat.push(kalimat[index]);
      } else if (kalimat[index] != "") {
        newKalimat.push(kalimat[index]);
      }
    } else {
      if (kalimat[index] != "") {
        const kata = kalimat[index].split("");
        kata[0] = kata[0].toUpperCase();
        kalimat[index] = kata.join("");
        newKalimat.push(kalimat[index]);
      }
    }
  }
  if (usingStrip) {
    newKalimat = newKalimat.join("-");
  } else {
    newKalimat = newKalimat.join(" ");
  }
  return newKalimat;
}

function jumlahKata(kalimat) {
  kalimat = kalimat.split(" ");
  let jumlahKarakter = 0;
  for (const index in kalimat) {
    jumlahKarakter = jumlahKarakter + kalimat[index].length;
  }
  return jumlahKarakter;
}

function deretAngka(input) {
  let deretPertama = [];
  let deretKedua = [];
  for (let index = 0; index <= input; index++) {
    const valueDeretPertama = index * index;
    const valueDeretKedua = valueDeretPertama + 1;
    deretPertama.push(valueDeretPertama);
    deretKedua.push(valueDeretKedua);
  }
  console.log(deretPertama.join(" "));
  console.log(deretKedua.join(" "));
}

function hitungDeret(nilai) {
  let newNilai = [];
  nilai = nilai.split(" ");
  for (const index in nilai) {
    if (nilai[index].indexOf(",") != -1) {
      const arrNilai = nilai[index].split(",");
      for (const indexNilai in arrNilai) {
        newNilai.push(arrNilai[indexNilai]);
      }
    } else {
      newNilai.push(nilai[index]);
    }
  }

  const reg = new RegExp("^[0-9]+$");
  let number = [];
  for (const index in newNilai) {
    if (reg.test(newNilai[index])) {
      number.push(newNilai[index]);
    }
  }
  // hitung nilai total, nilai max, nilai min, nilai rata2
  total = 0;
  max = number[0];
  min = number[0];
  ave = 0;
  console.log(min)
  for (const index in number) {
	const angka = parseInt(number[index])
    total += angka;
	max = max > angka ? max : angka
	min = min > angka ? angka : min
  }
  ave = total / number.length
  
  console.log(total);
  console.log(max);
  console.log(min);
  console.log(ave)
}

const input = "test HalO DuNia !!!";
console.log(formatJudul(input));
console.log(formatJudul(input, true));

console.log("point 2");
const kata = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`;
const jumlah = jumlahKata(kata);
console.log(jumlah);

console.log("point 3");
const inputUser = 12;
deretAngka(inputUser);

console.log("point 4");
const nilai = "2,13,45,34 24 32 43d eee2";
hitungDeret(nilai);
