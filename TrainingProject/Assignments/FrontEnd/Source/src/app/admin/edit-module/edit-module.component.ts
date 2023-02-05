import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseService } from 'src/app/Services/course.service';
import { ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.css']
})
export class EditModuleComponent implements OnInit {

  currentId!: number;
  currentRecord!: any;

  updatedModule!: any;

  moduleForm!: FormGroup;

  constructor(private courseService: CourseService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.moduleForm =  fb.group({
      courseId: ['', Validators.required],
      moduleId: ['', Validators.required],
      moduleName: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(290)])],
      weekNo: ['', Validators.compose([Validators.required, Validators.min(1)])]
    });
  }

  ngOnInit(): void {
    this.currentId = Number(this.route.snapshot.params["id"]);

    this.getDetails(this.currentId);
  }

  getDetails(id: number) {
    this.courseService.getModuleByModuleId(id).subscribe((i: any) => {
      this.currentRecord = i;
      this.moduleForm.setValue(this.currentRecord);
    });
  }

  onModuleSubmit(){    
    this.updatedModule = this.moduleForm.value;
    this.courseService.putModules(this.updatedModule).subscribe((i: any) => {
      this.updatedModule = i;
    });
    alert("Module updated successfully...");
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '100',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    //   uploadUrl: 'v1/image',
    //   upload: (file: File) => { }
    // uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

}
