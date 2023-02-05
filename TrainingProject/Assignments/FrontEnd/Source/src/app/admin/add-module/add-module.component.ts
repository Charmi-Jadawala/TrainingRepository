import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { CourseService } from 'src/app/Services/course.service';
import { ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {

  courseId!: number;

  moduleForm: FormGroup;
  newModule: any;


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private courseService: CourseService) {
    this.moduleForm = fb.group({
      moduleName: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(290)])],
      weekNo: ['', Validators.compose([Validators.required, Validators.min(1)])],
      courseId: [''],
      topics: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['id'];
  }

  getTopics(): FormArray {
    return this.moduleForm.get("topics") as FormArray;
  }

  newTopic(): FormGroup {
    return this.fb.group({
      topicTitle: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(290)])],
      type: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      duration: ['', Validators.compose([Validators.required, Validators.min(1)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });
  }

  addTopic() {
    this.getTopics().push(this.newTopic());
  }

  onModuleSubmit() {
    this.moduleForm.controls['courseId'].setValue(this.courseId);
    this.newModule = this.moduleForm.value;

    this.courseService.postModules(this.newModule).subscribe((i: any) => {
      this.newModule = i;
    });

    alert("Module added successfully...")
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
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

}
