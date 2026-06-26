let hargaNasiGoreng = 25000;
let hargaMieGoreng = 22000;
let hargaCapcay = 32000;
let totalPrice = hargaNasiGoreng + hargaMieGoreng + hargaCapcay;

let diskon = totalPrice * 0.1;
let totalAkhir = totalPrice - diskon;
let pembayaran = 100000;
let kembalian = pembayaran - totalAkhir;

console.log(`Harga Nasi Goreng: Rp ${hargaNasiGoreng}`);
console.log(`Harga Mie Goreng: Rp ${hargaMieGoreng}`);
console.log(`Harga Capcay: Rp ${hargaCapcay}`);
console.log(`Total Harga: Rp ${totalPrice}`);
console.log(`Diskon 10%: Rp ${diskon}`);
console.log(`Harga Setelah Diskon: Rp ${totalAkhir}`);
console.log(`Pembayaran: Rp ${pembayaran}`);
console.log(`Kembalian: Rp ${kembalian}`);