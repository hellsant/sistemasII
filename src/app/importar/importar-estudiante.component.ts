import { Component, ViewEncapsulation, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { FileUtil } from "./file.util";
import { Constants } from "./test.constants";
import { Alumno } from "../alumno/alumno";
import { ImportarServiceService } from "./importar-service.service";

@Component({
  selector: 'app-importar-estudiante',
  templateUrl: './importar-estudiante.component.html',
  styleUrls: ['./importar-estudiante.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[ImportarServiceService]
})
export class ImportarEstudianteComponent implements OnInit {
  form: FormGroup;
  private _fileUtil: FileUtil;
  private csvRecords;

  /**
   *
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private servicio: ImportarServiceService
  ) {
    this._fileUtil = new FileUtil();
    this.csvRecords = [];
    this.createControles();
  }

  /**
   * 
   */
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) return;
    console.log(id);
  }
  
  /**
   * 
   */
  createControles() {
    this.form = this.fb.group({
      id: '',
      nombre: '',
      apellido: ''
    });
  }

  guardar() {
    this.servicio.addAlumno(this.form.value)
      .subscribe(
      rt => console.log(rt),
      er => console.log(er),
      () => console.log('terminado'));
  }

  @ViewChild('fileImportInput')
  fileImportInput: any;

  fileChangeListener($event): void {

    const text = [];
    const target = $event.target || $event.srcElement;
    const files = target.files;

    if (Constants.validateHeaderAndRecordLengthFlag) {
      if (!this._fileUtil.isCSVFile(files[0])) {
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
        const headersRow = this._fileUtil.getHeaderArray(csvRecordsArray, Constants.tokenDelimeter);
        headerLength = headersRow.length;
      }

      this.csvRecords = this._fileUtil.getDataRecordsArrayFromCSVFile(csvRecordsArray,
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
