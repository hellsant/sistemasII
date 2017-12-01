import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FileUtil } from './files.util';
import { Constants } from './rev.constants';
import { Router } from '@angular/router';
import { NotasServiceService } from './notas-service.service';
import { Alumno } from '../alumno/alumno';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  encapsulation: ViewEncapsulation.None
})

export class NotasComponent implements OnInit {

  private _filesUtil: FileUtil;
  private csvRecords;
  constructor( ) {
    this._filesUtil = new FileUtil();
    this.csvRecords = [];
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  @ViewChild('fileImportInput')
  fileImportInput: any;

  fileChangeListener($event): void {

    const text = [];
    const target = $event.target || $event.srcElement;
    const files = target.files;

    if (Constants.validateHeaderAndRecordLengthFlag) {
      if (!this._filesUtil.isCSVFile(files[0])) {
        alert('insertar un archivo .csv valido.');
        this.fileReset();
      }
    }

    const input = $event.target;
    const reader = new FileReader();
    reader.readAsText(input.files[0]);

    reader.onload = (data) => {
      const csvData = reader.result;
      const csvRecordsArray = csvData.split(/\r\n|\n/);

      let headerLength = -1;
      if (Constants.isHeaderPresentFlag) {
        const headersRow = this._filesUtil.getHeaderArray(csvRecordsArray, Constants.tokenDelimeter);
        headerLength = headersRow.length;
      }

      this.csvRecords = this._filesUtil.getDataRecordsArrayFromCSVFile(csvRecordsArray,
        headerLength, Constants.validateHeaderAndRecordLengthFlag, Constants.tokenDelimeter);

      if (this.csvRecords == null) {
        this.fileReset();
      }
    };

    reader.onerror = function () {
      alert('no se puede leer el archivo ' + input.files[0]);
    };
  }

  fileReset() {
    this.fileImportInput.nativeElement.value = '';
    this.csvRecords = [];
  }

}