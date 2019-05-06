import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  options: BarcodeScannerOptions;
  encodeText: string = '';
  encodedData: any={};
  scannedData: any={};

  constructor(private scanner: BarcodeScanner, private alertController: AlertController) { }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Capturado',
      message: message ,
      buttons: ['OK']
    });

    await alert.present();
  }

  scan(){
    this.options={
      prompt:"Scan your barcode"
    }
    this.scanner.scan().then(data => {
      this.scannedData = data;
      this.presentAlert(data.text);
     }).catch(err => {
         console.log('Error', err);
     });
  }

  encode(){
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodeText).then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
