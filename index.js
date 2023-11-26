/*-----------Nodejs ve npm kullanarak istenen siteye ulaşmamızı sağlayan qr code oluşturucu---------- 
inquirer modulünü kullanarak kullanıcıdan qr oluşturmak istediği sitenin url'ini aldım.
qr-image modulu ile kullanıcın gitmek isteği url'in qr code unu oluşturdum.
 fs.writeFile (Native Module) ile kullanıcıdan aldığım url'i txt uzantılı dosya haline getirdim.
 NOT:ESM'yi kullanmak için package.json da type'ı module olarak ayarladım.
 */

import inquirer from 'inquirer';
import { url } from 'inspector';
import qr from 'qr-image'
import fs from 'fs';



inquirer
    .prompt([
        {
            "message": "QR CODE OLUŞTURMAK İSTEDİĞİNİZ SİTENİN ADRESİNİ GİRİNİZ :",
            "name": "URL"
        }
    ])
    .then((answers) => {
        const site ="https://"+ answers.URL;

        var qr_png = qr.image(`${site}`);
        qr_png.pipe(fs.createWriteStream("olusan_qrCode.png"));
        fs.writeFile('qr_olusansite.txt', `${site}`, (err) => {
            if (err) throw err;
        });

    })
    .catch((error) => {
        if (error.isTtyError) {
        } else {
        }
    });