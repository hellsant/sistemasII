import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FileUtil } from './file.util';
import { Constants } from './test.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-importar',
  templateUrl: './importar.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ImportarComponent {

  private _fileUtil: FileUtil;
  private csvRecords;
  constructor() {
    this._fileUtil = new FileUtil();
    this.csvRecords = [];
  }

  @ViewChild('fileImportInput')
  fileImportInput: any;
   
 fileChangeListener($event): void {

    var text = [];
    var target = $event.target || $event.srcElement;
    var files = target.files;

    if (Constants.validateHeaderAndRecordLengthFlag) {
      if (!this._fileUtil.isCSVFile(files[0])) {
        alert("insertar un archivo .csv valido.");
        this.fileReset();
      }
    }

    var input = $event.target;
    var reader = new FileReader();
    reader.readAsText(input.files[0]);

    reader.onload = (data) => {
      let csvData = reader.result;
      let csvRecordsArray = csvData.split(/\r\n|\n/);

      var headerLength = -1;
      if (Constants.isHeaderPresentFlag) {
        let headersRow = this._fileUtil.getHeaderArray(csvRecordsArray, Constants.tokenDelimeter);
        headerLength = headersRow.length;
      }

      this.csvRecords = this._fileUtil.getDataRecordsArrayFromCSVFile(csvRecordsArray,
        headerLength, Constants.validateHeaderAndRecordLengthFlag, Constants.tokenDelimeter);

      if (this.csvRecords == null) {
        //If control reached here it means csv file contains error, reset file.
        this.fileReset();
      }
    }

    reader.onerror = function () {
      alert('no se puede leer el archivo ' + input.files[0]);
    };
  };
  
  fileReset() {
    this.fileImportInput.nativeElement.value = "";
    this.csvRecords = [];
  }

}
