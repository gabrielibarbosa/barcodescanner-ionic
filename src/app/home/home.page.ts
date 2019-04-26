import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

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

  constructor(private scanner: BarcodeScanner) { }

  scan(){
    this.options={
      prompt:"Scan your barcode"
    }
    this.scanner.scan().then(data => {
      this.scannedData = data;
       alert(data);
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
