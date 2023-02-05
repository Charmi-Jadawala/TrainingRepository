import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CategoryService } from 'src/app/Services/category.service';
import { CourseService } from 'src/app/Services/course.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import { storage } from "../../../../Firebaseconfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  courseForm: FormGroup;
  newCourse: any;

  file: any;
  uploadedURL: any;

  categories: Array<any> = [];
  subCategories: Array<any> = [];
  durations: Array<any> = [];
  levels: Array<any> = [];
  languages: Array<any> = [];

  constructor(private fb: FormBuilder, private courseService: CourseService, private categoryService: CategoryService) {
    this.courseForm = fb.group({
      courseName: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(110)])],
      about: [''],
      offerredBy: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(190)])],
      offerredByAbout: [''],
      categoryId: ['', Validators.required],
      subCategoryId: ['', Validators.required],
      durationId: ['', Validators.required],
      languageId: ['', Validators.required],
      levelId: ['', Validators.required],
      courseImage: [''],
      coverImage: [''],
      price: [0.00],
      stars: [0.00],
      ratings: [0.00],
      alreadyEnrolled: [0.00],
      modules: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.getCategory();
    this.getSubCategory();
    this.getDuration();
    this.getLevel();
    this.getLanguage();
  }

  getModules(): FormArray {
    return this.courseForm.get("modules") as FormArray;
  }

  newModule(): FormGroup {
    return this.fb.group({
      weekNo: ['', Validators.compose([Validators.required, Validators.min(1)])],
      moduleName: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(290)])],
      topics: this.fb.array([])
    });
  }

  addModule() {
    this.getModules().push(this.newModule());
  }

  getTopics(mindex: number): FormArray {
    return this.getModules().at(mindex).get("topics") as FormArray;
  }

  newTopic(): FormGroup {
    return this.fb.group({
      topicTitle: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(290)])],
      type: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      duration: ['', Validators.compose([Validators.required, Validators.min(1)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }

  addTopic(mindex: number) {
    this.getTopics(mindex).push(this.newTopic());
  }

  private getCategory() {
    this.categoryService.getCategoriesActive().subscribe((i: any[]) => {
      this.categories = i;
    });
  }

  private getSubCategory() {
    this.categoryService.getSubCategoriesActive().subscribe((i: any[]) => {
      this.subCategories = i;
    });
  }

  private getDuration() {
    this.courseService.getDurations().subscribe((i: any[]) => {
      this.durations = i;
    });
  }

  private getLevel() {
    this.courseService.getLevels().subscribe((i: any[]) => {
      this.levels = i;
    });
  }

  private getLanguage() {
    this.courseService.getLanguagess().subscribe((i: any[]) => {
      this.languages = i;
    });
  }

  onCourseSubmit() {
    this.courseForm.controls['coverImage'].setValue(this.uploadedURL);
    this.newCourse = this.courseForm.value;

    this.courseService.postCourses(this.newCourse).subscribe((i: any) => {
      this.newCourse = i;
    });

    alert("Course added successfully...")
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

  insertImage(val: any) {
    // Create the file metadata
    this.file = val.target.files[0];

    /** @type {any} */
    const metadata = {
      contentType: this.file.type
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'images/' + this.file.name);
    const uploadTask = uploadBytesResumable(storageRef, this.file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
          // ...
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          alert("File uploaded successfully...");
          this.uploadedURL = downloadURL;
        });
      }
    );
  }
}
